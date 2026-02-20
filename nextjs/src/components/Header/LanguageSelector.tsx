import React, { useState } from 'react'
import { LanguageSelectorWrapper } from './styled'

const LanguageSelector = () => {
    const [active, setActive] = useState(false)

    const toggleSwitch = () => {
        setActive(!active)
    }

    return (
        <LanguageSelectorWrapper
            className="switch-container"
            onClick={toggleSwitch}
        >
            <span className="switch-label">ENG</span>
            <div className={`switch-button ${active ? 'active' : ''}`}></div>
        </LanguageSelectorWrapper>
    )
}

export default LanguageSelector
