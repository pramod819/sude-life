import React from 'react'

const layoutStyle = {
    backgroundColor: '#ffffff',
    color: '#000000',
}

type BaseLayoutProps = {
    children: React.ReactNode
}

const BaseLayout = (props: BaseLayoutProps) => {
    return <div style={layoutStyle}>{props.children}</div>
}

export default BaseLayout
