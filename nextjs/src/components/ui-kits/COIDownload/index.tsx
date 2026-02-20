import React, { useRef, useState } from 'react'
import { CloseButton, ModalBackdrop, ModalContent, FormWrapper } from './styled'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Button from 'src/misc/Button'
import {
    OTPVerification,
    DownloadCOI,
} from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useReCaptcha } from 'next-recaptcha-v3'
import { validatePhoneNumber } from 'src/utils/validateUtils'
import OtpModal from './OtpModal'
import ConfirmMobileModal from './ConfirmMobileModal'
import CoinHandIconfrom from '../Icon/assets/CoinHandIcon'
import DownloadTrailingIcon from '../Icon/assets/DownloadTrailingIcon'
import ArrowRight from '../Icon/assets/ArrowRight'

type Label = { type: string; text?: string }
type Title = { text?: string; tag?: string }
type Props = {
    navigationId?: string
    title?: Title | null
    labelPack?: Label[]
}

type Flow = 'MOBILE_ONLY' | 'LOAN_ONLY' | 'BOTH' | null
type LoanItem = { account: string }

const downloadBase64Pdf = (b64: string, filename = 'COI.pdf') => {
    const bin = atob(b64)
    const bytes = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
    const blob = new Blob([bytes], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

const openBase64PdfInNewTab = (b64?: string) => {
    if (!b64) return

    const bin = atob(b64)
    const bytes = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
    const blob = new Blob([bytes], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank', 'noopener,noreferrer')
    setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

const COIDownload: React.FC<Props> = (props) => {
    const { navigationId, title, labelPack = [] } = props
    const tagType = (title?.tag as keyof JSX.IntrinsicElements) || 'h2'

    const getLabel = (type: string, fallback = '') => {
        const label = labelPack.find((item) => item.type === type)
        return (label?.text ?? '').trim() || fallback
    }

    const { executeRecaptcha } = useReCaptcha()
    const recaptchaAction =
        appConfig?.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME || 'submit'

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const maxDate = yesterday.toISOString().split('T')[0]
    const countryCode = '+91'

    const [dob, setDob] = useState('')
    const [mobile, setMobile] = useState('')
    const [loanAccount, setLoanAccount] = useState('')

    const [flow, setFlow] = useState<Flow>(null)
    const [mode, setMode] = useState<'FORM' | 'RESULT'>('FORM')

    const [formDataMobile, setFormDataMobile] = useState('')

    const [isGenerating, setIsGenerating] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false)

    const [otpOpen, setOtpOpen] = useState(false)
    const [otpMobile, setOtpMobile] = useState('')

    const [confirmMobileModalOpen, setConfirmMobileModalOpen] = useState(false)

    const [errors, setErrors] = useState({ dob: '', mobile: '', loan: '' })
    const [modal, setModal] = useState<{ open: boolean; message: string }>({
        open: false,
        message: '',
    })

    const [toast, setToast] = useState<{ open: boolean; message: string }>({
        open: false,
        message: '',
    })
    const showToast = (message: string, ms = 2500) => {
        setToast({ open: true, message })
        window.setTimeout(() => setToast({ open: false, message: '' }), ms)
    }

    const [resultLoans, setResultLoans] = useState<LoanItem[]>([])

    const [loadingViewAcc, setLoadingViewAcc] = useState<string | null>(null)
    const [loadingDownloadAcc, setLoadingDownloadAcc] = useState<string | null>(
        null
    )

    const mobileInputRef = useRef<HTMLInputElement | null>(null)

    const validateBase = () => {
        const e = { dob: '', mobile: '', loan: '' }
        if (!dob) e.dob = 'Date of birth is required.'
        if (!mobile.trim() && !loanAccount.trim()) {
            e.mobile = 'Enter contact number or loan account number.'
            e.loan = 'Enter contact number or loan account number.'
        }
        if (mobile.trim() && !validatePhoneNumber(mobile.trim())) {
            e.mobile = 'Invalid mobile number.'
        }
        setErrors(e)
        return Object.values(e).every((v) => v === '')
    }

    const validateMsisdn = (msisdn: string) => {
        if (!dob) {
            setErrors((p) => ({ ...p, dob: 'Date of birth is required.' }))
            return false
        }
        if (!msisdn || !validatePhoneNumber(msisdn)) {
            setErrors((p) => ({ ...p, mobile: 'Invalid mobile number.' }))
            return false
        }
        return true
    }

    const callDownloadCOI = async (args: {
        dob: string
        mobile?: string
        loan?: string
    }) => {
        setIsDownloading(true)
        try {
            const response: any = await DownloadCOI(
                args.dob.trim(),
                args.mobile || '',
                args.loan || ''
            )
            return response
        } catch {
            return null
        } finally {
            setIsDownloading(false)
        }
    }

    const handleSendOtp = async (msisdn: string): Promise<boolean> => {
        if (!validateMsisdn(msisdn)) return false
        setIsGenerating(true)
        const type = 'download_certificate'
        try {
            const token = await executeRecaptcha(recaptchaAction)
            const res = await OTPVerification(msisdn, type, token)
            if (res && res.otp) {
                setFormDataMobile(msisdn)
                setOtpMobile(msisdn)
                setOtpOpen(true)
                if (typeof window !== 'undefined') {
                    ;(window as any).dataLayer = (window as any).dataLayer || []
                    ;(window as any).dataLayer.push({ event: 'otpVerified' })
                }
                return true
            }
            setModal({
                open: true,
                message: 'OTP generation failed, please try again.',
            })
            return false
        } catch {
            setModal({
                open: true,
                message: 'OTP generation failed, please try again.',
            })
            return false
        } finally {
            setIsGenerating(false)
        }
    }

    const onProceed = async () => {
        if (!validateBase()) return
        const hasMobile = !!mobile.trim()
        const hasLoan = !!loanAccount.trim()
        const dobApi = dob.trim()

        if (hasMobile) {
            const msisdn = mobile.trim()
            setFlow(hasLoan ? 'BOTH' : 'MOBILE_ONLY')
            await handleSendOtp(msisdn)
            return
        }

        if (!hasMobile && hasLoan) {
            setFlow('LOAN_ONLY')
            const response = await callDownloadCOI({
                dob: dobApi,
                loan: loanAccount.trim(),
            })
            if (response?.success) {
                const apiMobile = response?.data?.mobile || ''
                setConfirmMobileModalOpen(true)
                setFormDataMobile(apiMobile)
            } else {
                setModal({
                    open: true,
                    message:
                        'We could not find your details. Please check and try again.',
                })
            }
        }
    }

    const handleConfirmMobileContinue = async (msisdn: string) => {
        setConfirmMobileModalOpen(false)
        setFormDataMobile(msisdn)
        await handleSendOtp(msisdn)
    }

    const handleOtpResend = async () =>
        handleSendOtp((formDataMobile || mobile || '').trim())

    const clearForm = () => {
        setDob('')
        setMobile('')
        setLoanAccount('')
        setFormDataMobile('')
        setErrors({ dob: '', mobile: '', loan: '' })
    }

    const fetchPdfForAccount = async (
        account: string
    ): Promise<string | null> => {
        const resp = await callDownloadCOI({
            dob: dob.trim(),
            mobile: (formDataMobile || mobile || '').trim(),
            loan: account,
        })
        if (resp?.success && resp?.data?.pdf) return resp.data.pdf as string
        return null
    }

    const onDownloadAccount = async (account: string) => {
        setLoadingDownloadAcc(account)
        const b64 = await fetchPdfForAccount(account)
        setLoadingDownloadAcc(null)
        if (b64) {
            downloadBase64Pdf(b64, `COI_${account}.pdf`)
            showToast('Your COI is downloading…')
            setTimeout(() => showToast('Your COI has been downloaded'), 2000)
        } else {
            setModal({
                open: true,
                message:
                    'Unable to download this file right now. Please try again.',
            })
        }
    }

    const onViewAccount = async (account: string) => {
        setLoadingViewAcc(account)
        const b64 = await fetchPdfForAccount(account)
        setLoadingViewAcc(null)
        if (b64) {
            openBase64PdfInNewTab(b64)
            showToast('Opened COI in a new tab')
        } else {
            setModal({
                open: true,
                message:
                    'Unable to open this file right now. Please try again.',
            })
        }
    }

    const handleOtpSuccess = async () => {
        setOtpOpen(false)
        const msisdn = (formDataMobile || mobile || '').trim()
        const dobApi = dob.trim()

        if (flow === 'LOAN_ONLY') {
            const resp = await callDownloadCOI({
                dob: dobApi,
                mobile: msisdn,
                loan: loanAccount.trim(),
            })
            if (resp?.success && resp?.data?.pdf) {
                downloadBase64Pdf(resp.data.pdf, 'COI.pdf')
                showToast('Your COI is downloading…')
                setTimeout(
                    () => showToast('Your COI has been downloaded'),
                    2000
                )
                clearForm()
                setFlow(null)
            } else {
                setModal({
                    open: true,
                    message:
                        'Unable to download the certificate right now. Please try again.',
                })
            }
            return
        }

        const response = await callDownloadCOI({
            dob: dobApi,
            mobile: msisdn,
            loan: flow === 'BOTH' ? loanAccount.trim() : undefined,
        })

        if (!response?.success) {
            setModal({
                open: true,
                message:
                    'We are currently unable to fetch the Certificate of Insurance (COI). Please ensure that you have entered valid parameters. If the issue persists, kindly contact SUD Life Customer Care for further assistance.',
            })
            return
        }

        if (response?.data?.pdf) {
            downloadBase64Pdf(response.data.pdf, 'COI.pdf')
            showToast('Your COI is downloading…')
            setTimeout(() => showToast('Your COI has been downloaded'), 2000)
            clearForm()
            setFlow(null)
            return
        }

        const apps = response?.data?.application_details
        if (Array.isArray(apps) && apps.length > 0) {
            const loans = apps
                .map((x: any) => x?.loanAccNo)
                .filter(Boolean)
                .map((acc: string) => ({ account: acc }))
            setResultLoans(loans)
            setMode('RESULT')
            return
        }

        setModal({
            open: true,
            message: 'No records found for the provided details.',
        })
    }

    const handleBackFromResult = () => {
        setMode('FORM')
        setResultLoans([])
        setLoadingViewAcc(null)
        setLoadingDownloadAcc(null)
        clearForm()
        setFlow(null)
    }

    return (
        <FormWrapper id={navigationId}>
            <div className="main-container">
                <div className="form-title">
                    {title?.text && (
                        <Typography
                            className="title"
                            component={tagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                    )}
                </div>

                {mode === 'FORM' && (
                    <div className="form-wrapper">
                        <div className="wrapper-title">
                            {getLabel('form_name', "Policy Holder's Details")}
                        </div>

                        <div className="agent-form">
                            <div className="form-control">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                    className="form-label"
                                >
                                    {getLabel('dob_label', 'Date of Birth')}
                                    <span>*</span>
                                </Typography>
                                <input
                                    type="date"
                                    value={dob}
                                    max={maxDate}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                                <div className="error">{errors.dob}</div>
                            </div>

                            <div className="form-control mobile">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                    className="form-label"
                                >
                                    {getLabel('mobile_label', 'Contact Number')}
                                </Typography>
                                <div className="mobile-labels">
                                    <span>{countryCode}</span>
                                </div>
                                <input
                                    ref={mobileInputRef}
                                    type="tel"
                                    maxLength={10}
                                    value={mobile}
                                    onChange={(e) =>
                                        setMobile(
                                            e.target.value.replace(/\D/g, '')
                                        )
                                    }
                                    placeholder={getLabel(
                                        'mobile_placeholder',
                                        'Enter mobile number'
                                    )}
                                />
                                <div className="error">{errors.mobile}</div>
                            </div>

                            <div className="form-control or">Or</div>

                            <div className="form-control">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                    className="form-label"
                                >
                                    {getLabel(
                                        'lan_label',
                                        'Loan Account Number'
                                    )}
                                </Typography>
                                <input
                                    type="text"
                                    value={loanAccount}
                                    onChange={(e) =>
                                        setLoanAccount(e.target.value)
                                    }
                                />
                                <div className="error">{errors.loan}</div>
                            </div>

                            <div className="form-control action">
                                <Button
                                    onClick={onProceed}
                                    isDisabled={isGenerating || isDownloading}
                                    as="button"
                                    className="btn"
                                    variant="primary"
                                    variantColor="primary-red"
                                >
                                    {isGenerating || isDownloading
                                        ? 'Please wait...'
                                        : getLabel(
                                              'proceedbtn_label',
                                              'Proceed'
                                          )}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {mode === 'RESULT' && (
                    <div className="result-wrapper">
                        <Typography variant="h6" className="sub-title">
                            Download the COI for your Loan Accounts
                        </Typography>

                        <div className="list-wrapper">
                            {resultLoans.map((it) => {
                                const acc = it.account
                                const isViewing = loadingViewAcc === acc
                                const isDownloadingAcc =
                                    loadingDownloadAcc === acc
                                return (
                                    <div className="list" key={acc}>
                                        <div className="list-icon">
                                            <CoinHandIconfrom />
                                        </div>
                                        <div
                                            className="list-title"
                                            style={{ marginBottom: 8 }}
                                        >
                                            Loan Account Number -{' '}
                                            <span className="acc-number">
                                                {acc}
                                            </span>
                                        </div>
                                        <div className="action-links">
                                            <span
                                                role="button"
                                                className={`links ${isViewing ? 'disabled' : ''}`}
                                                onClick={() =>
                                                    !isViewing &&
                                                    onViewAccount(acc)
                                                }
                                                aria-disabled={isViewing}
                                            >
                                                {isViewing
                                                    ? 'Loading…'
                                                    : 'View'}{' '}
                                                <ArrowRight />
                                            </span>
                                            <span
                                                role="button"
                                                className={`links ${isDownloadingAcc ? 'disabled' : ''}`}
                                                onClick={() =>
                                                    !isDownloadingAcc &&
                                                    onDownloadAccount(acc)
                                                }
                                                aria-disabled={isDownloadingAcc}
                                            >
                                                {isDownloadingAcc
                                                    ? 'Loading…'
                                                    : 'Download'}{' '}
                                                <DownloadTrailingIcon />
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="footer-actions">
                            <Button
                                variant="primary"
                                onClick={handleBackFromResult}
                                className="btn btn-border"
                                variantColor="primary-red"
                            >
                                Back
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <ConfirmMobileModal
                open={confirmMobileModalOpen}
                countryCode={'+91'}
                defaultMobile={formDataMobile}
                getLabel={getLabel}
                onConfirm={handleConfirmMobileContinue}
                isLoading={isGenerating}
            />

            <OtpModal
                open={otpOpen}
                mobile={otpMobile}
                getLabel={getLabel}
                onClose={() => setOtpOpen(false)}
                onResend={handleOtpResend}
                onSuccess={handleOtpSuccess}
                initialCooldown={60}
                type="download_certificate"
            />

            {modal.open && (
                <ModalBackdrop>
                    <ModalContent>
                        <Typography variant="h6">{modal.message}</Typography>
                        <CloseButton
                            onClick={() =>
                                setModal({ open: false, message: '' })
                            }
                        >
                            Close
                        </CloseButton>
                    </ModalContent>
                </ModalBackdrop>
            )}

            {toast.open && (
                <div
                    style={{
                        position: 'fixed',
                        left: '50%',
                        bottom: 24,
                        transform: 'translateX(-50%)',
                        background: '#323232',
                        color: '#fff',
                        padding: '10px 16px',
                        borderRadius: 6,
                        boxShadow: '0 6px 18px rgba(0,0,0,.25)',
                        zIndex: 9999,
                        fontSize: 14,
                    }}
                    role="status"
                    aria-live="polite"
                >
                    {toast.message}
                </div>
            )}
        </FormWrapper>
    )
}

export default COIDownload
