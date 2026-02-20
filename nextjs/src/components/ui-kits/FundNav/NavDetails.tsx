import React, { useState, useEffect, useRef } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    TimeScale,
    LineController,
} from 'chart.js'
import { Typography } from '@material-ui/core'
import Button from 'src/misc/Button'
import {
    getFundDetails,
    getFundFilters,
} from 'src/services/user_api/AppFundNav'
import { COLORS } from 'src/styles/variables'
import { lgDown } from 'src/services/user_api/types'
import ZoomControls from './ZoomControls'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    TimeScale,
    LineController
)

const NavDetails = ({
    fundId,
    onClose,
    getLabel,
    fundType,
    date,
    nav,
    sfin,
}) => {
    const [selectedProduct, setSelectedProduct] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [products, setProducts] = useState([])
    const [tableData, setTableData] = useState([])
    const [chartData, setChartData] = useState({ labels: [], datasets: [] })
    const [loading, setLoading] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [errors, setErrors] = useState({
        product: '',
        startDate: '',
        endDate: '',
    })
    const [selectedZoom, setSelectedZoom] = useState<ZoomOption | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    const chartRef = useRef(null)
    const chartInstanceRef = useRef(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('chartjs-plugin-zoom')
                .then((zoomModule) => {
                    ChartJS.register(zoomModule.default)
                })
                .catch((error) =>
                    console.error(
                        'Error importing Chart.js zoom plugin:',
                        error
                    )
                )
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (!fundId) return
        const fetchFundDetails = async () => {
            try {
                const response = await getFundDetails(fundId)
                if (response?.status === 200) {
                    setProducts(response?.data?.list?.[0]?.nav_products || [])
                    setTableData(response.data.list)
                }
            } catch (error) {
                console.error('Error fetching fund details:', error)
            }
        }
        fetchFundDetails()
    }, [fundId])

    useEffect(() => {
        if (chartRef.current && chartData.labels.length > 0) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy()
            }
            chartInstanceRef.current = new ChartJS(chartRef.current, {
                type: 'line',
                data: chartData,
                options: {
                    responsive: true,
                    plugins: {
                        zoom: {
                            pan: { enabled: true, mode: 'xy' },
                            zoom: {
                                wheel: { enabled: true },
                                pinch: { enabled: true },
                                mode: 'xy',
                            },
                        },
                    },
                    scales: {
                        x: {
                            type: 'category',
                            title: { display: true, text: 'Date' },
                        },
                        y: {
                            title: { display: true, text: 'NAV Value' },
                            position: 'right',
                        },
                    },
                },
            })
        }
    }, [chartData])

    const CustomDropdown = ({
        options,
        selectedValue,
        onSelect,
        placeholder,
    }) => {
        const [isOpen, setIsOpen] = useState(false)
        return (
            <div className="custom-dropdown">
                <div
                    className="dropdown-header"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedValue || placeholder}{' '}
                    <span className="arrow">&#9662;</span>
                </div>
                {isOpen && (
                    <ul className="dropdown-list">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={
                                    option === selectedValue ? 'active' : ''
                                }
                                onClick={() => {
                                    onSelect(option)
                                    setIsOpen(false)
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }

    const validateFields = () => {
        const newErrors = { product: '', startDate: '', endDate: '' }
        if (!selectedProduct) newErrors.product = 'Please select a product'
        if (!startDate) newErrors.startDate = 'Please select a start date'
        if (!endDate) newErrors.endDate = 'Please select an end date'
        setErrors(newErrors)
        return !Object.values(newErrors).some((error) => error)
    }

    const handleSubmit = async () => {
        if (!validateFields()) return
        setLoading(true)
        setShowResults(false)
        try {
            const response = await getFundFilters(
                fundId,
                selectedProduct,
                startDate,
                endDate
            )
            if (response?.status === 200 && response.success) {
                const dataList = response.data?.list || []
                setChartData({
                    labels: dataList.map((item) => item.date),
                    datasets:
                        dataList.length > 0
                            ? [
                                  {
                                      label: '',
                                      data: dataList.map((item) => item.nav),
                                      borderColor: '#007bff',
                                      backgroundColor: 'rgba(0, 123, 255, 0.2)',
                                      fill: true,
                                      tension: 0.4,
                                  },
                              ]
                            : [],
                })
                setTableData(dataList)
                setShowResults(true)
            }
        } catch (error) {
            console.error('Error fetching fund filters:', error)
        }
        setLoading(false)
    }

    type ZoomOption = 1 | 2 | 3 | 6 | 12 | 'YTD' | 'ALL'

    const handleZoom = async (zoom: ZoomOption) => {
        setSelectedZoom(zoom)

        if (!startDate || !endDate) return

        const end = new Date(endDate)
        const calculatedStart = new Date(end)

        if (typeof zoom === 'number') {
            calculatedStart.setMonth(calculatedStart.getMonth() - zoom)
        } else if (zoom === 'YTD') {
            calculatedStart.setMonth(0)
            calculatedStart.setDate(1)
        } else {
            const originalStart = new Date(startDate)
            calculatedStart.setTime(originalStart.getTime())
        }

        const formattedStartDate = calculatedStart.toISOString().split('T')[0]
        const formattedEndDate = end.toISOString().split('T')[0]

        setStartDate(formattedStartDate)
        setEndDate(formattedEndDate)

        await fetchZoomData(formattedStartDate, formattedEndDate)
    }

    const fetchZoomData = async (startDate: string, endDate: string) => {
        setLoading(true)
        try {
            const response = await getFundFilters(
                fundId,
                selectedProduct,
                startDate,
                endDate
            )

            const dataList = response?.data?.list || []

            const newChartData = {
                labels: dataList.map((item) => item.date),
                datasets:
                    dataList.length > 0
                        ? [
                              {
                                  label: '',
                                  data: dataList.map((item) => item.nav),
                                  borderColor: '#007bff',
                                  backgroundColor: 'rgba(0, 123, 255, 0.2)',
                                  fill: true,
                                  tension: 0.4,
                              },
                          ]
                        : [],
            }

            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy()
                chartInstanceRef.current = null
            }

            setChartData(newChartData)
            setTableData(dataList)
            setShowResults(true)
        } catch (error) {
            console.error('Error fetching zoom data:', error)
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy()
                chartInstanceRef.current = null
            }
            setChartData({ labels: [], datasets: [] })
            setTableData([])
            setShowResults(false)
        }
        setLoading(false)
    }

    return (
        <div className="container">
            <div className="fund-details">
                <Button
                    variant="primary"
                    variantColor="primary-red"
                    className="btn back-btn"
                    onClick={onClose}
                >
                    Back
                </Button>
                <Typography className="main-title" variant="h2">
                    {fundType} Fund
                </Typography>
                <div className="sub-title">
                    {getLabel('lbllatest')} {nav} as on {date}
                </div>
                <div className="fund-filters">
                    <div className="fields">
                        <label>{getLabel('lblselectproduct')}</label>
                        <CustomDropdown
                            options={products.map((product) => product.title)}
                            selectedValue={selectedProduct}
                            onSelect={setSelectedProduct}
                            placeholder={getLabel('lblselect')}
                        />
                        {errors.product && (
                            <span className="error-msg">{errors.product}</span>
                        )}
                    </div>
                    <div className="fields">
                        <label>{getLabel('lblstartdate')}</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="input-fields"
                        />
                        {errors.startDate && (
                            <span className="error-msg">
                                {errors.startDate}
                            </span>
                        )}
                    </div>
                    <div className="fields">
                        <label>{getLabel('lblenddate')}</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="input-fields"
                        />
                        {errors.endDate && (
                            <span className="error-msg">{errors.endDate}</span>
                        )}
                    </div>
                    <div className="fields">
                        <label>&nbsp;</label>
                        <Button
                            variant="primary"
                            variantColor="primary-red"
                            className="btn"
                            onClick={handleSubmit}
                            isDisabled={loading}
                        >
                            {loading ? 'Loading...' : getLabel('lblsubmit')}
                        </Button>
                    </div>
                </div>
                {showResults && (
                    <div className="chart-analysis">
                        <svg
                            width="370"
                            height="371"
                            viewBox="0 0 370 371"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="circle right-circle"
                        >
                            <circle
                                opacity="0.1"
                                cx="185"
                                cy="185.5"
                                r="183"
                                stroke={COLORS.white}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="1 25"
                            />
                            <circle
                                opacity="0.4"
                                cx="185"
                                cy="185.5"
                                r="167"
                                stroke={COLORS.white}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="1 25"
                            />
                            <circle
                                cx="185"
                                cy="185.5"
                                r="150"
                                stroke={COLORS.white}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="1 25"
                            />
                            <circle
                                cx="185"
                                cy="185.5"
                                r="132"
                                stroke={COLORS.white}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="1 25"
                            />
                        </svg>
                        <div className="chart-title">
                            {getLabel('lblperformance')}
                        </div>
                        <div className="canvas">
                            <div className="inner-title">
                                {getLabel('lblfundhistory')}
                            </div>

                            <ZoomControls
                                selectedZoom={selectedZoom}
                                onZoomChange={handleZoom}
                            />
                            {loading ? (
                                <div className="chart-loading">Loading...</div>
                            ) : chartData.labels.length > 0 ? (
                                <canvas ref={chartRef} />
                            ) : (
                                <div className="no-chart-data">
                                    No data Available
                                </div>
                            )}
                        </div>
                        <svg
                            width="370"
                            height="371"
                            viewBox="0 0 370 371"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="circle left-circle"
                        >
                            <circle
                                opacity="0.1"
                                cx="185"
                                cy="185.5"
                                r="183"
                                stroke={COLORS.white}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="1 25"
                            />
                            <circle
                                opacity="0.4"
                                cx="185"
                                cy="185.5"
                                r="167"
                                stroke={COLORS.white}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="1 25"
                            />
                            <circle
                                cx="185"
                                cy="185.5"
                                r="150"
                                stroke={COLORS.white}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="1 25"
                            />
                            <circle
                                cx="185"
                                cy="185.5"
                                r="132"
                                stroke={COLORS.white}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="1 25"
                            />
                        </svg>
                    </div>
                )}
                {showResults && !isMobile && (
                    <div className="details-table">
                        <div className="table-wrapper">
                            <table className="custom-table">
                                <thead>
                                    <tr>
                                        <th>{getLabel('lbldate')}</th>
                                        <th>{getLabel('lblfundname')}</th>
                                        <th>{getLabel('lblplanname')}</th>
                                        <th>{getLabel('lblnav')}</th>
                                        <th>{getLabel('lblsfin')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.length > 0 ? (
                                        tableData.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.date || '-'}</td>
                                                <td>{fundType} Fund</td>
                                                <td>
                                                    {selectedProduct || '-'}
                                                </td>
                                                <td>{row.nav || '-'}</td>
                                                <td>{sfin || '-'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5}>
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {showResults && isMobile && (
                    <div className="chart-details-rows">
                        {tableData.length > 0 ? (
                            tableData.map((row, index) => (
                                <div key={index} className="details-row">
                                    <div className="rows-header">
                                        {row.date || '-'} &nbsp;{' '}
                                        {row.title || '-'}
                                    </div>
                                    <div className="row-content">
                                        <div className="main-details">
                                            {fundType} Fund
                                            <div className="nav-values">
                                                {getLabel('lblnav')}{' '}
                                                <strong>
                                                    {row.nav || '-'}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doc-id">
                                        <span className="hint">!</span>
                                        {selectedProduct || '-'}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No data available</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavDetails
