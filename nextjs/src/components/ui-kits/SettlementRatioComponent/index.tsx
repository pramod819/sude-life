import React, { useMemo } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Typography } from '@material-ui/core'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title as ChartTitle,
    Tooltip,
    Legend,
} from 'chart.js'
import type { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Wrapper } from './styled'
import { SettlementRatioData } from 'src/services/api/types'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ChartTitle,
    Tooltip,
    Legend
)

const clamp = (v: number, min = 0, max = 100) => Math.max(min, Math.min(max, v))
const startYear = (fy: string) => {
    const m = fy.match(/^(\d{4})/)
    return m ? parseInt(m[1], 10) : Number.POSITIVE_INFINITY
}

const SettlementRatioComponent: React.FC<SettlementRatioData> = ({
    title,
    description,
    fyRatios,
}) => {
    const TagType = (title?.tag || 'h2') as keyof JSX.IntrinsicElements

    const { labels, values } = useMemo(() => {
        const sorted = [...(fyRatios || [])].sort(
            (a, b) => startYear(a.fy) - startYear(b.fy)
        )
        return {
            labels: sorted.map((r) => r.fy),
            values: sorted.map((r) => clamp(r.value)),
        }
    }, [fyRatios])

    const chartData = useMemo(
        () => ({
            labels,
            datasets: [
                {
                    label: 'Settlement (%)',
                    data: values,
                    borderColor: '#0066FF',
                    backgroundColor: '#0066FF',
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                },
            ],
        }),
        [labels, values]
    )

    const yMin = Math.min(90, Math.floor(Math.min(...values) - 1))

    const options: ChartOptions<'line'> = useMemo<ChartOptions<'line'>>(
        () => ({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx: any) => `${ctx.parsed.y.toFixed(2)}%`,
                    },
                },
            },
            layout: { padding: { right: 30 } },
            scales: {
                x: {
                    type: 'category',
                    grid: {
                        display: true,
                        drawBorder: false,
                        color: '#E5E5E5',
                    },
                    ticks: {
                        color: '#555',
                        font: { size: 12 },
                        maxRotation: 0,
                    },
                },
                y: {
                    type: 'linear',
                    position: 'right' as const,
                    min: yMin,
                    max: 100,
                    grid: {
                        display: true,
                        drawBorder: false,
                        color: '#E5E5E5',
                        lineWidth: 1,
                    },
                    ticks: {
                        stepSize: 2,
                        color: '#555',
                        font: { size: 12 },
                        callback: (v: number) => `${v}%`,
                    },
                },
            },
        }),
        [yMin]
    )

    return (
        <Wrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text || '')}
                </Typography>

                {description && (
                    <Typography variant="body2" className="description">
                        {description}
                    </Typography>
                )}

                <div className="graph-wrapper">
                    <div className="graph-title">
                        Settlement Ratio over years
                    </div>
                    <div
                        className="graph-section"
                        style={{
                            width: '100%',
                            height: 336,
                            position: 'relative',
                        }}
                    >
                        <Line data={chartData} options={options} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SettlementRatioComponent
