import React, { useState, useEffect, useCallback } from 'react'
import { Wrapper } from './styled'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Link from 'src/theme/Link'
import Button from 'src/misc/Button'
import CalendarIcon from '../Icon/assets/CalendarIcon'
import DepartmentIcon from '../Icon/assets/DepartmentIcon'
import PlaceIcon from '../Icon/assets/PlaceIcon'
import OfficeIcon from '../Icon/assets/OfficeIcon'
import { CareersSearchModuleProps, Job } from 'src/services/api/types'
import { decode } from 'html-entities'
import { careerData } from 'src/services/user_api/AppCareerSearch'

const stripHtml = (html: string): string => {
    const decoded = decode(html)
    if (typeof document === 'undefined') {
        return decoded.replace(/<[^>]*>?/gm, '')
    }
    const div = document.createElement('div')
    div.innerHTML = decoded
    return div.textContent || div.innerText || ''
}

const CustomDropdown: React.FC<{
    options: string[]
    selectedValue: string
    onSelect: (val: string) => void
    placeholder: string
    disabled?: boolean
}> = ({ options = [], selectedValue, onSelect, placeholder, disabled }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="custom-dropdown">
            <div
                className={`dropdown-header${disabled ? ' disabled' : ''}`}
                onClick={() => !disabled && setIsOpen((o) => !o)}
            >
                {selectedValue !== 'All' ? selectedValue : placeholder}{' '}
                <span className="arrow">&#9662;</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {['All', ...options].map((opt) => (
                        <li
                            key={opt}
                            className={opt === selectedValue ? 'active' : ''}
                            onClick={() => {
                                onSelect(opt)
                                setIsOpen(false)
                            }}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

const CareersSearchModule: React.FC<CareersSearchModuleProps> = ({
    title,
    labelPack,
    navigationId,
}) => {
    const TagType = title.tag as keyof JSX.IntrinsicElements
    const getLabel = (type: string) =>
        labelPack.find((l) => l.type === type)?.text || ''

    const [allJobs, setAllJobs] = useState<Job[]>([])
    const [businessUnits, setBusinessUnits] = useState<string[]>([])
    const [locations, setLocations] = useState<string[]>([])

    const [loading, setLoading] = useState(true)
    const [selectedJobRole, setSelectedJobRole] = useState('All')
    const [selectedLocation, setSelectedLocation] = useState('All')
    const [filteredJobs, setFilteredJobs] = useState<Job[] | undefined>(
        undefined
    )
    const [showAllJobs, setShowAllJobs] = useState(false)

    const loadJobs = useCallback(async () => {
        setLoading(true)
        try {
            const res = await careerData()

            if (res.success) {
                setAllJobs(res.data.jobList)
                setBusinessUnits(res.data.businessUnit)
                setLocations(res.data.location)
                setFilteredJobs(res.data.jobList)
            } else {
                setFilteredJobs([])
            }
        } catch {
            setFilteredJobs([])
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        loadJobs()
    }, [loadJobs])

    const handleFilterClick = () => {
        let results = allJobs
        if (selectedJobRole !== 'All') {
            results = results.filter((j) => j.department === selectedJobRole)
        }
        if (selectedLocation !== 'All') {
            results = results.filter((j) =>
                j.location.includes(selectedLocation)
            )
        }
        setFilteredJobs(results)
        setShowAllJobs(false)
    }

    const safeJobs = Array.isArray(filteredJobs) ? filteredJobs : []
    const jobsToDisplay = showAllJobs ? safeJobs : safeJobs.slice(0, 3)

    return (
        <Wrapper id={navigationId}>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h1"
                >
                    {ReactHtmlParser(title.text)}
                </Typography>

                <div className="job-filters">
                    <div className="filter">
                        <label>{getLabel('business_unit')}</label>
                        <CustomDropdown
                            options={businessUnits}
                            selectedValue={selectedJobRole}
                            onSelect={setSelectedJobRole}
                            placeholder="All"
                            disabled={loading}
                        />
                    </div>
                    <div className="filter">
                        <label>{getLabel('location')}</label>
                        <CustomDropdown
                            options={locations}
                            selectedValue={selectedLocation}
                            onSelect={setSelectedLocation}
                            placeholder="All Locations"
                            disabled={loading}
                        />
                    </div>
                    <div className="filter">
                        <label>&nbsp;</label>
                        <Button
                            variant="primary"
                            variantColor="primary-red"
                            onClick={handleFilterClick}
                            className="btn"
                            isDisabled={loading}
                        >
                            {getLabel('find_best_opportunity_button')}
                        </Button>
                    </div>
                </div>

                {loading && (
                    <Typography className="loading-text">Loading…</Typography>
                )}

                {!loading && (
                    <>
                        {jobsToDisplay.length > 0 ? (
                            <div className="job-list-wrapper">
                                <div className="job-list">
                                    {jobsToDisplay.map((job, idx) => (
                                        <div key={idx} className="job-card">
                                            <Typography
                                                variant="h4"
                                                className="designation"
                                            >
                                                {job.designation}
                                            </Typography>
                                            <div className="job-specifications">
                                                <div className="specifications">
                                                    <Typography
                                                        variant="subtitle2"
                                                        className="specifications-items"
                                                    >
                                                        <DepartmentIcon />
                                                        <span>
                                                            {job.department}
                                                        </span>
                                                    </Typography>
                                                </div>
                                                <div className="specifications">
                                                    <Typography
                                                        variant="subtitle2"
                                                        className="specifications-items"
                                                    >
                                                        <CalendarIcon />
                                                        <span>
                                                            {job.employeeType}
                                                        </span>
                                                    </Typography>
                                                </div>
                                                <div className="specifications">
                                                    <Typography
                                                        variant="subtitle2"
                                                        className="specifications-items"
                                                    >
                                                        <PlaceIcon />
                                                        <span>
                                                            {job.location.join(
                                                                ', '
                                                            )}
                                                        </span>
                                                    </Typography>
                                                </div>

                                                <div className="specifications">
                                                    <Typography
                                                        variant="subtitle2"
                                                        className="specifications-items"
                                                    >
                                                        <OfficeIcon />
                                                        <span>
                                                            {job.experience ||
                                                                '-'}
                                                        </span>
                                                    </Typography>
                                                </div>
                                            </div>
                                            <Typography
                                                variant="body1"
                                                className="job-description"
                                            >
                                                {stripHtml(job.description)}
                                            </Typography>
                                            <div className="job-redirections">
                                                <Link
                                                    href={job.applyLink}
                                                    target="_blank"
                                                    className="link btn"
                                                >
                                                    {getLabel('apply_button')}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Typography>No jobs found.</Typography>
                        )}

                        {safeJobs.length > 3 && !showAllJobs && (
                            <div className="btn-container">
                                <Button
                                    variant="primary"
                                    variantColor="primary-red"
                                    onClick={() => setShowAllJobs(true)}
                                >
                                    {getLabel('show_more_button')} (
                                    {safeJobs.length - 3})
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Wrapper>
    )
}

export default CareersSearchModule
