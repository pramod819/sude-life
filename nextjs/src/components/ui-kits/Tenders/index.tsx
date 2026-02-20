import React, { useState, useEffect } from 'react'
import {
    TendersWrapper,
    TabButton,
    TabsHeader,
    TabWrapper,
    TabMobileContent,
    Card,
} from './styled'
import { IApiTendersComponent } from 'src/services/api/types'

import DownloadTrailingIcon from '../Icon/assets/DownloadTrailingIcon'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import ExpandCollapse from '../Icon/assets/ExpandCollapse'
import { Typography } from '@material-ui/core'
interface Headers {
    rfpno: string
    status: string
    tenderrfp: string
    issueddate: string
    submissiondate: string
    download: string
}
const Tenders: React.FC<IApiTendersComponent> = (props) => {
    const { tabs, tableHeader, tenders } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState<number>(0)
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

    const imgBasePath = useImageBasePath()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 991.9)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Upcoming':
                return 'blue'
            case 'Closing soon':
                return 'yellow'
            case 'Active':
                return 'green'
            case 'Closed':
                return 'grey-30'
            default:
                return ''
        }
    }

    const filteredTenders = tenders.filter((tender) =>
        activeTab === 0
            ? tender.status !== 'Closed'
            : activeTab === 1 && tender.status === 'Closed'
    )

    useEffect(() => {
        setExpandedCards((prevState) => ({
            ...prevState,
            [activeTab]: new Set(filteredTenders.map((_, index) => index)),
        }))
    }, [activeTab, tenders])

    const headers: Headers = tableHeader.reduce((acc, headerName) => {
        const key = headerName.replace(/\s+|\/+/g, '').toLowerCase()
        acc[key] = headerName
        return acc
    }, {} as Headers)

    const {
        rfpno: rfpNoHeader,
        status: statusHeader,
        tenderrfp: tenderDescriptionHeader,
        issueddate: dateOfIssueHeader,
        submissiondate: dateOfSubmissionHeader,
        download: downloadHeader,
    } = headers

    const toggleExpandCard = (index: number) => {
        setExpandedCards((prevState) => {
            const tabExpandedCards = new Set(prevState[activeTab] || [])
            tabExpandedCards.has(index)
                ? tabExpandedCards.delete(index)
                : tabExpandedCards.add(index)

            return {
                ...prevState,
                [activeTab]: tabExpandedCards,
            }
        })
    }
    const handleTabClick = (index: number) => {
        setActiveTab(index)

        setExpandedCards((prevState) => ({
            ...prevState,
            [index]:
                prevState[index] || new Set(filteredTenders.map((_, i) => i)),
        }))
    }

    return (
        <TendersWrapper>
            <TabWrapper>
                <div className="tab-container">
                    {tabs?.length && (
                        <TabsHeader>
                            {tabs.map((tab, index) => (
                                <TabButton
                                    className="tab-heading"
                                    key={index}
                                    isActive={activeTab === index}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {tab}
                                </TabButton>
                            ))}
                        </TabsHeader>
                    )}
                </div>
                <TabMobileContent>
                    <div className="tab-contents">
                        {filteredTenders.map((tender, index) => (
                            <Card className="card" key={index}>
                                <div className="card-header">
                                    <h6 className="rfp-no">
                                        {rfpNoHeader}: {tender?.number}
                                    </h6>
                                    {isMobile && (
                                        <ExpandCollapse
                                            onClick={() =>
                                                toggleExpandCard(index)
                                            }
                                            className={
                                                expandedCards[activeTab]?.has(
                                                    index
                                                )
                                                    ? 'expanded'
                                                    : 'collapsed'
                                            }
                                        />
                                    )}
                                </div>
                                {!isMobile && (
                                    <div className="card-body">
                                        <div className="row row-dates">
                                            <div className="cols">
                                                <Typography
                                                    className="issuedate-title"
                                                    component="h6"
                                                    variant="subtitle2"
                                                >
                                                    {tenderDescriptionHeader}
                                                </Typography>
                                                <Typography
                                                    className="issue-date"
                                                    component="p"
                                                    variant="subtitle2"
                                                >
                                                    {tender.description}
                                                </Typography>
                                            </div>
                                            <div className="cols">
                                                <Typography
                                                    className="issuedate-title"
                                                    component="h6"
                                                    variant="subtitle2"
                                                >
                                                    {dateOfIssueHeader}
                                                </Typography>
                                                <Typography
                                                    className="issue-date"
                                                    component="p"
                                                    variant="subtitle2"
                                                >
                                                    {tender.issueDate}
                                                </Typography>
                                            </div>

                                            <div className="cols">
                                                <Typography
                                                    className="finaldate-title"
                                                    component="h6"
                                                    variant="subtitle2"
                                                >
                                                    {dateOfSubmissionHeader}
                                                </Typography>

                                                <Typography
                                                    className="final-date"
                                                    component="p"
                                                    variant="subtitle2"
                                                >
                                                    {tender.submissionDate}
                                                </Typography>
                                            </div>
                                            <div className="cols">
                                                <Typography
                                                    className="statusheader-title"
                                                    component="h6"
                                                    variant="subtitle2"
                                                >
                                                    {statusHeader}
                                                </Typography>
                                                <span
                                                    className={`chip ${getStatusClass(tender.status)}`}
                                                >
                                                    {tender.status}
                                                </span>
                                            </div>
                                            <div className="cols">
                                                {tender.document?.url && (
                                                    <a
                                                        href={`${imgBasePath}${tender?.document.url}`}
                                                        target="_blank"
                                                    >
                                                        {downloadHeader}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {expandedCards[activeTab]?.has(index) &&
                                    isMobile && (
                                        <div className="card-body">
                                            <div className="row row-documents">
                                                <Typography
                                                    className="desc-hedding"
                                                    component="h5"
                                                    variant="subtitle1"
                                                >
                                                    {tenderDescriptionHeader}
                                                </Typography>
                                                {tender.document?.url && (
                                                    <a
                                                        href={`${imgBasePath}${tender?.document.url}`}
                                                        target="_blank"
                                                    >
                                                        <DownloadTrailingIcon />
                                                    </a>
                                                )}
                                            </div>
                                            <div className="row row-desc">
                                                <Typography
                                                    component="p"
                                                    variant="subtitle2"
                                                    className="description"
                                                >
                                                    {tender.description}
                                                </Typography>
                                            </div>
                                            <div className="row row-dates">
                                                <div className="cols">
                                                    <Typography
                                                        className="issuedate-title"
                                                        component="h6"
                                                        variant="subtitle2"
                                                    >
                                                        {dateOfIssueHeader}
                                                    </Typography>
                                                    <Typography
                                                        className="issue-date"
                                                        component="p"
                                                        variant="subtitle2"
                                                    >
                                                        {tender.issueDate}
                                                    </Typography>
                                                </div>

                                                <div className="cols">
                                                    <Typography
                                                        className="finaldate-title"
                                                        component="h6"
                                                        variant="subtitle2"
                                                    >
                                                        {dateOfSubmissionHeader}
                                                    </Typography>

                                                    <Typography
                                                        className="final-date"
                                                        component="p"
                                                        variant="subtitle2"
                                                    >
                                                        {tender.submissionDate}
                                                    </Typography>
                                                </div>
                                                <div className="cols">
                                                    <Typography
                                                        className="statusheader-title"
                                                        component="h6"
                                                        variant="subtitle2"
                                                    >
                                                        {statusHeader}
                                                    </Typography>
                                                    <span
                                                        className={`chip ${getStatusClass(tender.status)}`}
                                                    >
                                                        {tender.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </Card>
                        ))}
                    </div>
                </TabMobileContent>
            </TabWrapper>
        </TendersWrapper>
    )
}

export default Tenders
