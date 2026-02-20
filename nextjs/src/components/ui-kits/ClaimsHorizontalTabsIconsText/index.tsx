import React, { useRef, useState } from 'react'
import { HorizontalTabsIconsWrapper } from './styled'
import { IApiClaimsHorizontalTabsIconsText } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Slider from 'react-slick'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const ClaimsHorizontalTabsIconsText: React.FC<
    IApiClaimsHorizontalTabsIconsText
> = (props) => {
    const { titleTags, description, tabList } = props

    const [activeTab, setActiveTab] = useState(0)
    const sliderRef = useRef<Slider | null>(null)

    const TagType = titleTags?.tag as keyof JSX.IntrinsicElements

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: lgDown,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const handleTabClick = (index: number) => {
        setActiveTab(index)
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index)
        }
    }

    return (
        <HorizontalTabsIconsWrapper>
            <div className="box-wrapper">
                <div className="container">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(titleTags?.text)}
                    </Typography>
                    <p className="description">{description}</p>

                    <ul className="tablist">
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {tabList?.map(({ tabText }, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleTabClick(index)}
                                    className={
                                        activeTab === index ? 'active' : ''
                                    }
                                >
                                    <div className="tab">
                                        <h4>{tabText}</h4>
                                        <span className="index">
                                            0{index + 1}.
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </Slider>
                    </ul>

                    <div className="tab-content">
                        <div className="points">
                            <div className="points-titleContainer">
                                <Typography
                                    className="points-titleContainer-title"
                                    component="div"
                                    variant="h3"
                                >
                                    {ReactHtmlParser(
                                        tabList[activeTab].tabText
                                    )}
                                </Typography>

                                <Typography
                                    className="points-titleContainer-content"
                                    component="p"
                                    variant="body2"
                                >
                                    {ReactHtmlParser(
                                        tabList[activeTab].description
                                    )}
                                </Typography>
                            </div>

                            <div className="points-listContainer">
                                {tabList[activeTab].iconList.map(
                                    (item, index) => (
                                        <div
                                            className={`points-listContainer-list ${
                                                item.textPosition === 'top'
                                                    ? 'textPT'
                                                    : ''
                                            }`}
                                            key={index}
                                        >
                                            <div className="points-listContainer-list-image">
                                                <StyledImage
                                                    className="img"
                                                    src={item?.icon?.url}
                                                    alt={item?.icon?.alt}
                                                />

                                                {item.textPosition ===
                                                    'bottom' && (
                                                    <Typography
                                                        className="title"
                                                        component="div"
                                                        variant="body1"
                                                    >
                                                        {item.iconText}
                                                    </Typography>
                                                )}
                                            </div>
                                            <div className="points-listContainer-list-content">
                                                {item.textPosition ===
                                                    'top' && (
                                                    <Typography
                                                        className="title"
                                                        component="div"
                                                        variant="body2"
                                                    >
                                                        {item.iconText}
                                                    </Typography>
                                                )}
                                                {ReactHtmlParser(item.points)}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {tabList[activeTab].tableContent?.[0]?.header && (
                            <div className="claims">
                                <div className="claims-titleContainer">
                                    <Typography
                                        className="claims-titleContainer-title"
                                        component="div"
                                        variant="h3"
                                    >
                                        {ReactHtmlParser(
                                            tabList[activeTab].tableContent?.[0]
                                                ?.header
                                        )}
                                    </Typography>

                                    {tabList[activeTab].tableContent?.[0]
                                        ?.description && (
                                        <Typography
                                            className="claims-titleContainer-content"
                                            component="p"
                                            variant="body2"
                                        >
                                            {ReactHtmlParser(
                                                tabList[activeTab]
                                                    .tableContent?.[0]
                                                    ?.description
                                            )}
                                        </Typography>
                                    )}
                                </div>

                                {tabList[activeTab]?.tableContent?.map(
                                    (table, tableIndex) => (
                                        <div
                                            className="claim-table"
                                            key={tableIndex}
                                        >
                                            <div className="claim-table-header">
                                                <div className="claim-table-header-columnL">
                                                    {table.columnOneHeader}
                                                </div>
                                                <div className="claim-table-header-columnR">
                                                    {table.columnTwoHeader}
                                                </div>
                                            </div>

                                            {table?.rowData?.map(
                                                (item, rowIndex) => (
                                                    <div
                                                        className="claim-table-row"
                                                        key={rowIndex}
                                                    >
                                                        <div className="claim-table-row-columnL">
                                                            {item.columnOneText}
                                                        </div>
                                                        <div className="claim-table-row-columnR">
                                                            {item.columnTwoText}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        {(tabList[activeTab].tableContent?.[0]
                            ?.importantPointHeader ||
                            tabList[activeTab].tableContent?.[0]
                                ?.importantPoints) && (
                            <div className="importantNotes">
                                <Typography
                                    className="importantNotes-title"
                                    component="div"
                                    variant="h3"
                                >
                                    {ReactHtmlParser(
                                        tabList[activeTab].tableContent?.[0]
                                            ?.importantPointHeader
                                    )}
                                </Typography>

                                <div className="importantNotes-content">
                                    {ReactHtmlParser(
                                        tabList[activeTab].tableContent?.[0]
                                            ?.importantPoints
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="arrowContainer">
                            <SliderArrowLeft
                                className={`arrow left-arrow ${activeTab === 0 ? 'disable' : ''}`}
                                onClick={() =>
                                    handleTabClick(Math.max(activeTab - 1, 0))
                                }
                            />
                            <SliderArrowRight
                                className={`arrow right-arrow ${
                                    activeTab === tabList.length - 1
                                        ? 'disable'
                                        : ''
                                }`}
                                onClick={() =>
                                    handleTabClick(
                                        Math.min(
                                            activeTab + 1,
                                            tabList.length - 1
                                        )
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </HorizontalTabsIconsWrapper>
    )
}

export default ClaimsHorizontalTabsIconsText
