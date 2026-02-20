import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiTextWithProduct } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Button from 'src/misc/Button'
import VerificationIcon from '../Icon/assets/VerificationIcon'
import { mdDown } from 'src/services/user_api/types'

const TextWithProduct: React.FC<IApiTextWithProduct> = ({
    title,
    subtitle,
    disclaimer,
    product,
    secondProduct,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <div
                    className={`inner-container ${secondProduct.title ? 'withSecondProduct' : ''}`}
                >
                    <div className="text-container">
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>

                        {subtitle && (
                            <Typography
                                className="sub-title"
                                component="h6"
                                variant="body1"
                            >
                                {subtitle}
                            </Typography>
                        )}

                        {disclaimer && (
                            <Typography
                                className="disclamer-text"
                                component="p"
                                variant="body1"
                            >
                                {disclaimer}
                            </Typography>
                        )}
                    </div>

                    <div className="productContainer">
                        <div className="product-description">
                            <Typography
                                className="product-name"
                                component="h6"
                                variant="body1"
                            >
                                {product.title}
                            </Typography>
                            <div className="product-range">
                                Coverage starting from
                                <div className="range">
                                    <span>&#8377; {product?.minAmount}*</span> /
                                    per day
                                </div>
                            </div>
                            <div className="features-list">
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <Typography
                                            key={index}
                                            variant="subtitle1"
                                            component="li"
                                        >
                                            <div className="list-icon">
                                                <VerificationIcon />
                                            </div>
                                            {feature}
                                        </Typography>
                                    ))}
                                </ul>
                            </div>
                            <Button
                                variant="primary"
                                variantColor="primary-red"
                                className="learn-more"
                                as="a"
                                href={product.path}
                            >
                                Learn More
                            </Button>
                        </div>

                        {secondProduct.title && (
                            <div className="product-description">
                                <Typography
                                    className="product-name"
                                    component="h6"
                                    variant="body1"
                                >
                                    {secondProduct.title}
                                </Typography>
                                <div className="product-range">
                                    Coverage starting from
                                    <div className="range">
                                        <span>
                                            &#8377; {secondProduct?.minAmount}*
                                        </span>{' '}
                                        / per day
                                    </div>
                                </div>
                                <div className="features-list">
                                    <ul>
                                        {secondProduct.features?.map(
                                            (feature, index) => (
                                                <Typography
                                                    key={index}
                                                    variant="subtitle1"
                                                    component="li"
                                                >
                                                    <div className="list-icon">
                                                        <VerificationIcon />
                                                    </div>
                                                    {feature}
                                                </Typography>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <Button
                                    variant="primary"
                                    variantColor="primary-red"
                                    className="learn-more"
                                    as="a"
                                    href={secondProduct.path}
                                >
                                    Learn More
                                </Button>
                            </div>
                        )}
                    </div>

                    {isMobile && secondProduct?.title && (
                        <div className="slide-icon text-center">
                            <img
                                loading="lazy"
                                src="/images/scrollAniTransH.gif"
                                alt="Slide"
                            />
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default TextWithProduct
