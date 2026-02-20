import React, { useState, useEffect } from 'react'
import { CloseButton, ModalBackdrop, ModalContent, Wrapper } from './styled'
import { IApiNewsLetter } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { mdDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import { useReCaptcha } from 'next-recaptcha-v3'
import { validateEmail } from 'src/utils/validateUtils'
import appConfig from 'src/appConfig'
import { newsLetter } from 'src/services/user_api/AppContactUs'
import { useRouter } from 'next/router'

const Newsletter: React.FC<IApiNewsLetter> = (props) => {
    const {
        title,
        subtitle,
        bgColour,
        bgImage,
        inputPlaceholder,
        btnText,
        successMessage,
    } = props
    const router = useRouter()
    const [currentUrl, setCurrentUrl] = useState('')
    const [isMobile, setIsMobile] = useState(false)

    const { executeRecaptcha } = useReCaptcha()
    const isReCaptchaActionName = appConfig.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME

    const [formData, setFormData] = useState({
        email: '',
    })
    const [errors, setErrors] = useState({
        email: '',
    })
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href)
        }
    }, [router.asPath])
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [modal, setModal] = useState({
        open: false,
        message: '',
    })

    const validateForm = () => {
        const newErrors: typeof errors = {
            email: '',
        }
        if (!formData.email) {
            newErrors.email = 'Email is required.'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format.'
        }

        setErrors(newErrors)
        return Object.values(newErrors).every((error) => error === '')
    }
    const handleNewsLetter = async () => {
        if (!validateForm()) {
            return
        }

        const token = await executeRecaptcha(isReCaptchaActionName)
        const payload = {
            email: formData.email,
            page: currentUrl,
            token,
        }

        const response: any = await newsLetter(
            payload.email,
            payload.page,
            payload.token
        )

        if (response?.status === 200) {
            setModal({
                open: true,
                message: successMessage,
            })
            setFormData({
                email: '',
            })
        } else {
            setModal({
                open: true,
                message: 'Failed to submit the form. Please try again.',
            })
        }
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    const closeModal = () => {
        setModal({
            open: false,
            message: '',
        })
    }
    return (
        <Wrapper>
            <div className="container">
                <div
                    className="inner-wrapper"
                    style={{ backgroundColor: bgColour }}
                >
                    <div className="form-container">
                        <Typography className="main-title" variant="h2">
                            {ReactHtmlParser(title)}
                        </Typography>
                        <div className="sub-title">
                            {ReactHtmlParser(subtitle)}
                        </div>
                        <div className="form-wrapper">
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder={inputPlaceholder}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <Button
                                    variant="primary"
                                    variantColor="primary-red"
                                    as="button"
                                    className="btn"
                                    onClick={handleNewsLetter}
                                >
                                    {btnText}
                                </Button>
                            </div>
                        </div>
                    </div>

                    <StyledImage
                        className="picture"
                        src={
                            isMobile
                                ? bgImage?.mobile?.url
                                : bgImage?.desktop?.url
                        }
                        alt={
                            isMobile
                                ? bgImage?.mobile?.alt
                                : bgImage?.desktop?.alt
                        }
                    />
                </div>
            </div>
            {modal.open && (
                <ModalBackdrop>
                    <ModalContent>
                        <Typography variant="h6">{modal?.message}</Typography>
                        <CloseButton onClick={closeModal}>Close</CloseButton>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </Wrapper>
    )
}

export default Newsletter
