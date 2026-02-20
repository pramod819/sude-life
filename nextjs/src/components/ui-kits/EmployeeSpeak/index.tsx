import React, { useState, useEffect, useRef } from 'react'
import { EmployeeSpeakWrapper } from './styled'
import { IApiEmployeeSpeakComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import { mdDown } from 'src/services/user_api/types'
import RedDotLeftTopIcon from '../Icon/assets/RedDotLeftTopIcon'
import RedDotBottomRightIcon from '../Icon/assets/RedDotBottomRightIcon'

const EmployeeSpeak: React.FC<IApiEmployeeSpeakComponent> = (props) => {
    const { title, description, employeeList } = props
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const imgBasePath = useImageBasePath()
    const [branchIndex, setBranchIndex] = useState<number>(0)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleTabClick = (index: number) => {
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
        setBranchIndex(index)
    }
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
            videoRef.current.load()
        }
    }, [branchIndex])

    return (
        <EmployeeSpeakWrapper className="branch-locator">
            {!isMobile && <RedDotLeftTopIcon className="top-bg" />}
            <div className="container">
                {title?.text && (
                    <Typography
                        component={TagType}
                        className="title"
                        variant="h2"
                    >
                        {ReactHtmlParser(title.text)}
                    </Typography>
                )}
                {description && (
                    <Typography
                        className="description"
                        variant="body1"
                        component="div"
                    >
                        {ReactHtmlParser(description)}
                    </Typography>
                )}
                <div className="row">
                    <div className="tabs">
                        {employeeList.map((employees, index) => (
                            <>
                                <div
                                    key={index}
                                    className={`tab-button ${index === branchIndex ? 'active' : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <div className="employee-image">
                                        <StyledImage
                                            src={employees?.image?.url}
                                            alt={employees?.image?.alt}
                                        />
                                    </div>
                                    <div className="employee-text">
                                        <Typography
                                            className="name"
                                            variant="body2"
                                            component="h6"
                                        >
                                            {employees?.name}
                                        </Typography>
                                        {employees?.location && (
                                            <Typography
                                                className="location"
                                                variant="subtitle2"
                                                component="p"
                                            >
                                                {employees.location}
                                            </Typography>
                                        )}
                                    </div>
                                </div>
                                {isMobile && index === branchIndex && (
                                    <div className="video-container">
                                        {employeeList[branchIndex]
                                            ?.videoTitle && (
                                            <Typography
                                                className="video-title"
                                                variant="h3"
                                            >
                                                {
                                                    employeeList[branchIndex]
                                                        ?.videoTitle
                                                }
                                            </Typography>
                                        )}
                                        <div className="active-video">
                                            <video
                                                controls
                                                ref={videoRef}
                                                autoPlay={false}
                                            >
                                                <source
                                                    src={`${imgBasePath}${employeeList[branchIndex]?.video?.url}`}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                    {!isMobile && (
                        <div className="video-container">
                            {employeeList[branchIndex]?.videoTitle && (
                                <Typography
                                    className="video-title"
                                    variant="h3"
                                >
                                    {employeeList[branchIndex]?.videoTitle}
                                </Typography>
                            )}
                            <div className="active-video">
                                <video
                                    controls
                                    ref={videoRef}
                                    autoPlay={false}
                                    preload="none"
                                >
                                    <source
                                        src={`${imgBasePath}${employeeList[branchIndex]?.video?.url}`}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {!isMobile && <RedDotBottomRightIcon className="bottom-bg" />}
        </EmployeeSpeakWrapper>
    )
}

export default EmployeeSpeak
