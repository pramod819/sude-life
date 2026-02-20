import React, { useState, useEffect } from 'react'
import StyledImage from 'src/misc/StyledImage'
import {
    CloseButton,
    ModalBackdrop,
    ModalContent,
    ProductCardsWrapper,
} from './styled'
import { IApiHaveAnIdeaComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import { haveAnIdea } from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import { useReCaptcha } from 'next-recaptcha-v3'

declare global {
    interface Window {
        dataLayer: Record<string, any>[]
    }
}

const HaveAnIdea: React.FC<IApiHaveAnIdeaComponent> = (props) => {
    const { navigationId, title, bgImage, formTitle, departments, labelPack } =
        props
    const imgBasePath = useImageBasePath()
    const { executeRecaptcha } = useReCaptcha()
    const isReCaptchaActionName = appConfig.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME
    const [isMobile, setIsMobile] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const bgImageUrl = isMobile ? bgImage?.mobile?.url : bgImage?.desktop?.url
    const [formData, setFormData] = useState({
        department: '',
        employee_id: '',
        subject: '',
        idea: '',
    })
    const [errors, setErrors] = useState({
        department: '',
        employee_id: '',
        subject: '',
        idea: '',
    })

    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const [modal, setModal] = useState({
        open: false,
        message: '',
    })
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
    }

    const validateForm = () => {
        const newErrors: typeof errors = {
            department: '',
            employee_id: '',
            subject: '',
            idea: '',
        }
        if (!formData.employee_id)
            newErrors.employee_id = 'Employee id is required.'
        if (!formData.department)
            newErrors.department = 'Department is required.'
        if (!formData.subject) newErrors.subject = 'Subject is required.'
        if (!formData.idea) newErrors.idea = 'Idea is required.'

        setErrors(newErrors)
        return Object.values(newErrors).every((error) => error === '')
    }

    const handleContactUs = async () => {
        setIsSubmitting(true)

        if (!validateForm()) {
            setIsSubmitting(false)
            return
        }
        const token = await executeRecaptcha(isReCaptchaActionName)
        const payload = {
            employee_id: formData.employee_id,
            department: formData.department,
            subject: formData.subject,
            idea: formData.idea,
            token,
        }

        const response: any = await haveAnIdea(
            payload.employee_id,
            payload.department,
            payload.subject,
            payload.idea,
            payload.token
        )

        if (response?.status === 200) {
            setModal({
                open: true,
                message: getLabel('success'),
            })
            setFormData({
                employee_id: '',
                department: '',
                subject: '',
                idea: '',
            })
        } else {
            setModal({
                open: true,
                message: 'Failed to submit the form. Please try again.',
            })
        }
        setIsSubmitting(false)
    }

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
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
        <ProductCardsWrapper
            id={navigationId}
            style={
                !isMobile
                    ? { backgroundImage: `url(${imgBasePath + bgImageUrl})` }
                    : {}
            }
        >
            <div className="main-container top-container">
                <div className="text-container">
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
                {isMobile && (
                    <div className="card-image">
                        <StyledImage
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
                )}
                <div className="row card">
                    {formTitle && (
                        <Typography variant="h4" className="form-title">
                            {formTitle}
                        </Typography>
                    )}
                    <div className="agent-form">
                        <div className="form-control messages">
                            <Typography
                                component="label"
                                variant="subtitle2"
                                htmlFor="departmentId"
                            >
                                {getLabel('department')}
                            </Typography>
                            <select
                                name="department"
                                onChange={handleInputChange}
                                value={formData.department}
                                className="custom-select"
                                id="departmentId"
                            >
                                <option value="">Select Department</option>
                                {departments.map((dept, idx) => (
                                    <option key={idx} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                            {errors.department && (
                                <div className="error">{errors.department}</div>
                            )}
                        </div>
                        <div className="form-control messages">
                            <Typography
                                component="label"
                                variant="subtitle2"
                                htmlFor="employees"
                            >
                                {getLabel('employee_id')}
                            </Typography>
                            <input
                                type="text"
                                name="employee_id"
                                id="employees"
                                onChange={handleInputChange}
                                value={formData.employee_id}
                            />
                            {errors.employee_id && (
                                <div className="error">
                                    {errors.employee_id}
                                </div>
                            )}
                        </div>
                        <div className="one-col">
                            <div className="form-control messages">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                    htmlFor="subjectId"
                                >
                                    {getLabel('subject')}
                                </Typography>
                                <input
                                    id="subjectId"
                                    type="text"
                                    name="subject"
                                    onChange={handleInputChange}
                                    value={formData.subject}
                                />
                                {errors.subject && (
                                    <div className="error">
                                        {errors.subject}
                                    </div>
                                )}
                            </div>
                            <div className="form-control messages">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                    htmlFor="ideaId"
                                >
                                    {getLabel('idea')}
                                </Typography>
                                <textarea
                                    id="ideaId"
                                    name="idea"
                                    onChange={handleInputChange}
                                    value={formData.idea}
                                />
                                {errors.idea && (
                                    <div className="error">{errors.idea}</div>
                                )}
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="form-control action">
                                <Button
                                    variant="primary"
                                    variantColor="primary-red"
                                    as="button"
                                    className="btn"
                                    onClick={handleContactUs}
                                    isDisabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? 'Submitting...'
                                        : getLabel('button')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal.open && (
                <ModalBackdrop>
                    <ModalContent>
                        <Typography variant="h6">{modal.message}</Typography>
                        <CloseButton onClick={closeModal}>Close</CloseButton>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </ProductCardsWrapper>
    )
}

export default HaveAnIdea
