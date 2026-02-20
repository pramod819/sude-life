import React, { useEffect, useState } from 'react'
import { BranchLocatorWrapper } from './styled'
import { IApiBranchLocatorComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Button from 'src/misc/Button'
import { COLORS } from 'src/styles/variables'
import AngleArrowRight from '../Icon/assets/AngleArrowRight'
import Link from 'next/link'

import {
    getLocalities,
    getBranchByLocality,
} from 'src/services/user_api/AppBranchLocator'

const BranchLocator: React.FC<IApiBranchLocatorComponent> = (props) => {
    const { navigationId, title, state: stateData, labelPack } = props
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const defaultCoordinates = {
        latitude: '19.06451197095206',
        longitude: '72.99651785302989',
    }

    const [selectedState, setSelectedState] = useState('')
    const [districts, setDistricts] = useState<string[]>([])
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [localities, setLocalities] = useState<string[]>([])
    const [selectedLocality, setSelectedLocality] = useState('')
    const [branches, setBranches] = useState([])

    const [selectedBranchIndex, setSelectedBranchIndex] = useState(0)

    const [selectedBranch, setSelectedBranch] = useState({
        name: '',
        slug: '',
        address: '',
        coordinates: defaultCoordinates,
    })

    const mapUrlPrefix = 'https://www.google.com/maps'

    useEffect(() => {
        if (selectedState) {
            const stateDetails = stateData.find(
                (state) => state.name === selectedState
            )
            setDistricts(stateDetails ? stateDetails.districts : [])
            setSelectedDistrict('')
            setLocalities([])
            setBranches([])
            setSelectedBranchIndex(0)
        }
    }, [selectedState, stateData])

    useEffect(() => {
        const fetchLocalities = async () => {
            if (selectedDistrict) {
                try {
                    const response = await getLocalities(selectedDistrict)
                    if (response?.success && response.data.length > 0) {
                        setLocalities(response.data)
                        setSelectedLocality('')
                    } else {
                        setLocalities([])
                    }
                } catch (error) {
                    setLocalities([])
                }
            }
        }
        fetchLocalities()
    }, [selectedDistrict])

    const handleSearch = async () => {
        if (selectedLocality) {
            try {
                const response = await getBranchByLocality(selectedLocality)
                if (response?.success) {
                    setBranches(response.data || [])
                    setSelectedBranchIndex(0)
                    setSelectedBranch(response.data[0] || selectedBranch)
                } else {
                    setLocalities([])
                }
            } catch (error) {
                setLocalities([])
            }
        }
    }

    const handleTabClick = (index: number) => {
        setSelectedBranchIndex(index)
        setSelectedBranch(branches[index])
    }

    const handleReset = () => {
        setSelectedState('')
        setDistricts([])
        setSelectedDistrict('')
        setLocalities([])
        setSelectedLocality('')
        setBranches([])
        setSelectedBranch({
            name: '',
            slug: '',
            address: '',
            coordinates: { latitude: '', longitude: '' },
        })
        setSelectedBranchIndex(0)
    }

    const handleGetDirections = () => {
        if (
            selectedBranch?.coordinates?.latitude &&
            selectedBranch?.coordinates?.longitude
        ) {
            const googleMapsUrl = `${mapUrlPrefix}/dir/?api=1&destination=${selectedBranch?.coordinates.latitude},${selectedBranch?.coordinates.longitude}`
            window.open(googleMapsUrl, '_blank')
        }
    }

    return (
        <BranchLocatorWrapper id={navigationId} className="branch-locator">
            <div className="container">
                <Typography
                    component={TagType}
                    className="main-title"
                    variant="h2"
                >
                    {ReactHtmlParser(title.text)}
                </Typography>
                <div className="filters">
                    <div className="input-group">
                        <label>{labelPack[0]?.text}</label>
                        <select
                            className="dropdown"
                            value={selectedState}
                            onChange={(e) => {
                                setSelectedState(e.target.value)
                                setSelectedDistrict('')
                                setSelectedLocality('')
                            }}
                        >
                            <option selected value="">
                                Select
                            </option>
                            {stateData.map((state) => (
                                <option key={state.name} value={state.name}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-group">
                        <label>{labelPack[1]?.text}</label>
                        <select
                            className="dropdown"
                            value={selectedDistrict}
                            onChange={(e) => {
                                setSelectedDistrict(e.target.value)
                                setSelectedLocality('')
                            }}
                            disabled={!districts.length}
                        >
                            <option selected value="">
                                Select
                            </option>
                            {districts.map((district) => (
                                <option key={district} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-group">
                        <label>{labelPack[2]?.text}</label>
                        <select
                            className="dropdown"
                            value={selectedLocality}
                            onChange={(e) =>
                                setSelectedLocality(e.target.value)
                            }
                            disabled={!localities.length}
                        >
                            <option selected value="">
                                Select
                            </option>
                            {localities.map((locality, index) => (
                                <option key={index} value={locality}>
                                    {locality}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="actions">
                        <Button
                            animation
                            variant="primary"
                            variantColor="primary-red"
                            onClick={handleSearch}
                            isDisabled={!selectedLocality}
                            className={`search ${!selectedLocality ? 'disabled' : ''}`}
                        >
                            Search
                        </Button>

                        <Button
                            animation
                            variant="primary"
                            variantColor="primary-blue"
                            onClick={handleReset}
                            className="reset"
                        >
                            Reset
                        </Button>
                    </div>
                </div>

                {branches.length > 0 && (
                    <div className="branches">
                        <p className="branch-count">
                            <span style={{ color: COLORS.red }}>
                                We are available at {branches.length} branches
                                near you
                            </span>
                            - choose one and get directions instantly.
                        </p>
                    </div>
                )}

                <div className="branch-flex">
                    {branches?.length > 1 && (
                        <div className="branch-tabs">
                            {branches.map((branch, index) => (
                                <div
                                    key={index}
                                    className={`tab-button ${index === selectedBranchIndex ? 'active' : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <span>
                                        SUD Life, {branch?.name.split(',')[1]}
                                    </span>
                                    <AngleArrowRight />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="map-container">
                        <svg
                            width="70"
                            height="68"
                            viewBox="0 0 70 68"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="circle-left"
                        >
                            <circle
                                opacity="0.1"
                                cx="20.875"
                                cy="19.3914"
                                r="47.8406"
                                stroke="white"
                                strokeWidth="1.13906"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.12"
                            />
                            <circle
                                opacity="0.4"
                                cx="20.8747"
                                cy="19.3922"
                                r="43.6578"
                                stroke="white"
                                strokeWidth="1.13906"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.12"
                            />
                            <circle
                                cx="20.8762"
                                cy="19.3894"
                                r="39.2136"
                                stroke="white"
                                strokeWidth="1.13906"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.12"
                            />
                            <circle
                                cx="20.875"
                                cy="19.3918"
                                r="34.508"
                                stroke="white"
                                strokeWidth="1.13906"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.12"
                            />
                        </svg>

                        <iframe
                            title="Branch Location"
                            src={`${mapUrlPrefix}?q=${selectedBranch.coordinates.latitude || defaultCoordinates.latitude},${selectedBranch.coordinates.longitude || defaultCoordinates.longitude}&hl=es;z=1&output=embed`}
                            allowFullScreen={true}
                            loading="lazy"
                        />
                        {selectedBranch?.name !== '' && (
                            <div className="branch-preview">
                                <div className="left">
                                    <Typography
                                        component={'h3'}
                                        className="branch-title "
                                        variant="h3"
                                    >
                                        {selectedBranch.name}
                                    </Typography>
                                    <p>{selectedBranch.address}</p>
                                </div>
                                <div className="buttons">
                                    <Button
                                        animation
                                        variant="primary"
                                        variantColor="primary-red"
                                        className="button secondary"
                                        onClick={handleGetDirections}
                                    >
                                        Get Directions
                                    </Button>

                                    <Link
                                        href={`/branch/${selectedBranch.slug}`}
                                    >
                                        <Button
                                            animation
                                            variant="primary"
                                            variantColor="primary-red"
                                            className="button primary"
                                        >
                                            Branch Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                        <svg
                            width="98"
                            height="71"
                            viewBox="0 0 98 71"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="circle-bottom"
                        >
                            <circle
                                opacity="0.1"
                                cx="48.8934"
                                cy="48.41"
                                r="47.8406"
                                stroke="white"
                                strokeWidth="1.13906"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.12"
                            />
                            <circle
                                opacity="0.4"
                                cx="48.8931"
                                cy="48.4108"
                                r="43.6578"
                                stroke="white"
                                strokeWidth="1.13906"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.12"
                            />
                            <circle
                                cx="48.8943"
                                cy="48.408"
                                r="39.2136"
                                stroke="white"
                                strokeWidth="1.13906"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.12"
                            />
                            <circle
                                cx="48.8937"
                                cy="48.4103"
                                r="34.508"
                                stroke="white"
                                strokeWidth="1.13906"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.12"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </BranchLocatorWrapper>
    )
}

export default BranchLocator
