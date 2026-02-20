import React from 'react'

import ServiceContext from './ServiceContext'
import container from './container'

const ServiceProvider: React.FC<any> = ({ children }) => {
    return (
        <ServiceContext.Provider value={container}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceProvider
