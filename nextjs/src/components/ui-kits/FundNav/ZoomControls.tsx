import React from 'react'

export type ZoomOption = 1 | 2 | 3 | 6 | 12 | 'YTD' | 'ALL'

interface ZoomControlsProps {
    selectedZoom: ZoomOption | null
    onZoomChange: (zoom: ZoomOption) => void
}

const ZoomControls: React.FC<ZoomControlsProps> = ({
    selectedZoom,
    onZoomChange,
}) => {
    const zoomOptions: ZoomOption[] = [1, 2, 3, 6, 'YTD', 12, 'ALL']

    return (
        <div className="zoom-controls">
            <label>Zoom:</label>
            <div className="radio-group">
                {zoomOptions.map((opt) => {
                    const value = String(opt)
                    let label: string
                    if (opt === 'YTD') label = 'YTD'
                    else if (opt === 'ALL') label = 'All'
                    else label = `${opt}M`

                    return (
                        <label key={value} className="custom-radio">
                            <input
                                type="radio"
                                name="zoom"
                                value={value}
                                checked={selectedZoom === opt}
                                onChange={() => onZoomChange(opt)}
                            />

                            <span className="radio-label">{label}</span>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default ZoomControls
