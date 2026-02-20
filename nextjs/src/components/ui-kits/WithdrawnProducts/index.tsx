import React, { useState } from 'react'
import { Wrapper } from './styled'
import { IApiWithdrawnProducts } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import ChevronRightIcon from '../../ui-kits/Icon/assets/ChevronRightIcon'
import Link from 'src/theme/Link'

const WithdrawnProducts: React.FC<IApiWithdrawnProducts> = ({
    title,
    products,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [activeTab, setActiveTab] = useState(0)
    const categories = Array.from(
        new Set(products.map((product) => product.withdrawnProductCategory))
    )

    const filteredProducts = products.filter(
        (product) => product.withdrawnProductCategory === categories[activeTab]
    )

    const handleTabChange = (index: number) => {
        setActiveTab(index)
    }

    return (
        <Wrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                {categories && (
                    <div className="tabs">
                        <div className="tabs-inner">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`tab ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="product-list">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="list-item">
                            <Typography
                                className="cardtitle"
                                component={'h4'}
                                variant="h5"
                            >
                                {product?.codeDescription}
                            </Typography>
                            {product.code && (
                                <div className="product-code">
                                    {product.code}
                                </div>
                            )}
                            <div className="created-date">
                                {product.withdrawnProductDate}{' '}
                                <div className="link">
                                    <Link href={product.withdrawnProductLink}>
                                        <ChevronRightIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default WithdrawnProducts
