import React, { useEffect, useState } from 'react'
import {
    Wrapper,
    Container,
    StandardTextWrapper,
    StandardTableWrapper,
    MainTitleWrapper,
    HeadWrapper,
    ToggleRow,
    TextColumn,
    RepeatedColumnRow,
    TableWrapper,
    TableHead,
    TableBody,
    ContaintWrapper,
} from './styled'
import { IApiTableComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import CircleLeftSlideIcon from '../Icon/assets/CircleLeftSlideIcon'
import DownArrow from '../Icon/assets/DownArrow'

const TableComponent: React.FC<IApiTableComponent> = ({
    title,
    assortedTable,
    collapseTable,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [expandedRows, setExpandedRows] = useState<boolean[]>(
        Array(assortedTable.rows.length).fill(true)
    )
    const [isTableVisible, setIsTableVisible] = useState<boolean>(true)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleRow = (index: number) => {
        setExpandedRows((prev) =>
            prev.map((isExpanded, i) =>
                i === index ? !isExpanded : isExpanded
            )
        )
    }
    console.log('assortedTable hideHeader', assortedTable?.hideHeader)
    const headerItems = assortedTable.header.map((header, index) => (
        <Typography
            key={index}
            className="header-items"
            component="h3"
            variant="h3"
        >
            {header}
        </Typography>
    ))

    return (
        <Wrapper>
            <Container className="container">
                {title?.text && (
                    <MainTitleWrapper>
                        <Typography
                            className={`main-title ${assortedTable.hideHeader !== true ? '' : 'spacing'}`}
                            component={TagType}
                            variant="h2"
                            {...(collapseTable && {
                                onClick: () =>
                                    setIsTableVisible(!isTableVisible),
                            })}
                        >
                            {ReactHtmlParser(title?.text)}{' '}
                            {collapseTable && (
                                <DownArrow
                                    className={isTableVisible ? '' : 'expanded'}
                                />
                            )}
                        </Typography>
                    </MainTitleWrapper>
                )}
                {isTableVisible && (
                    <>
                        {!isMobile && (
                            <>
                                {assortedTable.hideHeader !== true ? (
                                    <HeadWrapper
                                        columns={assortedTable?.header?.length}
                                    >
                                        {headerItems}
                                    </HeadWrapper>
                                ) : null}
                            </>
                        )}
                        {assortedTable.rows.map((row, rowIndex) => (
                            <ContaintWrapper
                                className="containt-wrapper"
                                key={rowIndex}
                            >
                                <>
                                    <ToggleRow className="toggle-row">
                                        <Typography
                                            className="toggle-title"
                                            component="h6"
                                            variant="subtitle2"
                                        >
                                            {row.collapsableText}
                                        </Typography>
                                        <CircleLeftSlideIcon
                                            onClick={() => toggleRow(rowIndex)}
                                            className={
                                                expandedRows[rowIndex]
                                                    ? ''
                                                    : 'expanded'
                                            }
                                        />
                                    </ToggleRow>

                                    {expandedRows[rowIndex] &&
                                        row.type === 'standardText' && (
                                            <>
                                                {!isMobile ? (
                                                    <StandardTextWrapper
                                                        className="standard-text"
                                                        columns={
                                                            assortedTable.header
                                                                .length
                                                        }
                                                    >
                                                        {row.columns.map(
                                                            (
                                                                column,
                                                                colIndex
                                                            ) => (
                                                                <TextColumn
                                                                    className="text-column"
                                                                    key={
                                                                        colIndex
                                                                    }
                                                                >
                                                                    {Array.isArray(
                                                                        column
                                                                    ) ? (
                                                                        column.map(
                                                                            (
                                                                                item,
                                                                                itemIndex
                                                                            ) => (
                                                                                <RepeatedColumnRow
                                                                                    className="repeated-column-row"
                                                                                    key={
                                                                                        itemIndex
                                                                                    }
                                                                                >
                                                                                    <Typography
                                                                                        className="bold-text"
                                                                                        component="h6"
                                                                                        variant="subtitle2"
                                                                                    >
                                                                                        {
                                                                                            item?.boldText
                                                                                        }
                                                                                    </Typography>
                                                                                    <Typography
                                                                                        className="normal-text"
                                                                                        component="p"
                                                                                        variant="subtitle2"
                                                                                    >
                                                                                        {
                                                                                            item?.normalText
                                                                                        }
                                                                                    </Typography>
                                                                                </RepeatedColumnRow>
                                                                            )
                                                                        )
                                                                    ) : (
                                                                        <Typography
                                                                            component="p"
                                                                            variant="subtitle2"
                                                                        >
                                                                            {
                                                                                column?.text
                                                                            }
                                                                        </Typography>
                                                                    )}
                                                                </TextColumn>
                                                            )
                                                        )}
                                                    </StandardTextWrapper>
                                                ) : (
                                                    <StandardTextWrapper
                                                        className="standard-text"
                                                        columns={
                                                            assortedTable.header
                                                                .length
                                                        }
                                                    >
                                                        {assortedTable.header.map(
                                                            (
                                                                header,
                                                                headerIndex
                                                            ) => (
                                                                <div
                                                                    className="repeteble-row"
                                                                    key={
                                                                        headerIndex
                                                                    }
                                                                >
                                                                    {assortedTable.hideHeader !==
                                                                    true ? (
                                                                        <Typography
                                                                            className="header-items"
                                                                            component="h3"
                                                                            variant="h3"
                                                                        >
                                                                            {
                                                                                header
                                                                            }
                                                                        </Typography>
                                                                    ) : null}
                                                                    {row
                                                                        .columns[
                                                                        headerIndex
                                                                    ] && (
                                                                        <>
                                                                            {Array.isArray(
                                                                                row
                                                                                    .columns[
                                                                                    headerIndex
                                                                                ]
                                                                            ) ? (
                                                                                row.columns.map(
                                                                                    (
                                                                                        column,
                                                                                        colIndex
                                                                                    ) => (
                                                                                        <TextColumn
                                                                                            className="text-column"
                                                                                            key={
                                                                                                colIndex
                                                                                            }
                                                                                        >
                                                                                            {Array.isArray(
                                                                                                column
                                                                                            ) ? (
                                                                                                column.map(
                                                                                                    (
                                                                                                        item,
                                                                                                        itemIndex
                                                                                                    ) => (
                                                                                                        <RepeatedColumnRow
                                                                                                            className="repeated-column-row"
                                                                                                            key={
                                                                                                                itemIndex
                                                                                                            }
                                                                                                        >
                                                                                                            <Typography
                                                                                                                className="bold-text"
                                                                                                                component="h6"
                                                                                                                variant="subtitle2"
                                                                                                            >
                                                                                                                {
                                                                                                                    item?.boldText
                                                                                                                }
                                                                                                            </Typography>
                                                                                                            <Typography
                                                                                                                className="normal-text"
                                                                                                                component="p"
                                                                                                                variant="subtitle2"
                                                                                                            >
                                                                                                                {
                                                                                                                    item?.normalText
                                                                                                                }
                                                                                                            </Typography>
                                                                                                        </RepeatedColumnRow>
                                                                                                    )
                                                                                                )
                                                                                            ) : (
                                                                                                // <-- Handle case where column is not an array
                                                                                                <Typography
                                                                                                    component="p"
                                                                                                    variant="subtitle2"
                                                                                                >
                                                                                                    {
                                                                                                        column?.text
                                                                                                    }
                                                                                                </Typography>
                                                                                            )}
                                                                                        </TextColumn>
                                                                                    )
                                                                                )
                                                                            ) : (
                                                                                <Typography
                                                                                    component="p"
                                                                                    variant="subtitle2"
                                                                                >
                                                                                    {
                                                                                        row
                                                                                            .columns[
                                                                                            headerIndex
                                                                                        ]
                                                                                            ?.text
                                                                                    }
                                                                                </Typography>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </div>
                                                            )
                                                        )}
                                                    </StandardTextWrapper>
                                                )}
                                            </>
                                        )}

                                    {expandedRows[rowIndex] &&
                                        row.type === 'standardTable' && (
                                            <>
                                                {!isMobile ? (
                                                    <StandardTableWrapper
                                                        className="standard-table"
                                                        columns={
                                                            assortedTable.header
                                                                .length
                                                        }
                                                    >
                                                        {row.columns.map(
                                                            (
                                                                { text, table },
                                                                tableIndex
                                                            ) => {
                                                                return (
                                                                    <TextColumn
                                                                        key={
                                                                            tableIndex
                                                                        }
                                                                    >
                                                                        {text && (
                                                                            <Typography
                                                                                className="bold-text"
                                                                                component="h5"
                                                                                variant="subtitle2"
                                                                            >
                                                                                {
                                                                                    text
                                                                                }
                                                                            </Typography>
                                                                        )}

                                                                        {table.map(
                                                                            (
                                                                                tableItem,
                                                                                idx
                                                                            ) => (
                                                                                <>
                                                                                    {tableItem.text && (
                                                                                        <Typography
                                                                                            className="normal-text"
                                                                                            component="p"
                                                                                            variant="subtitle2"
                                                                                        >
                                                                                            {
                                                                                                tableItem.text
                                                                                            }
                                                                                        </Typography>
                                                                                    )}

                                                                                    <TableWrapper
                                                                                        key={
                                                                                            idx
                                                                                        }
                                                                                    >
                                                                                        <TableHead>
                                                                                            <Typography
                                                                                                className="table-head-title"
                                                                                                component="h6"
                                                                                                variant="subtitle2"
                                                                                            >
                                                                                                {
                                                                                                    tableItem
                                                                                                        ?.header
                                                                                                        ?.columnOne
                                                                                                }
                                                                                            </Typography>
                                                                                            <Typography
                                                                                                className="table-head-title"
                                                                                                component="h6"
                                                                                                variant="subtitle2"
                                                                                            >
                                                                                                {
                                                                                                    tableItem
                                                                                                        ?.header
                                                                                                        ?.columnTwo
                                                                                                }
                                                                                            </Typography>
                                                                                        </TableHead>
                                                                                        <TableBody>
                                                                                            {tableItem.rows.map(
                                                                                                (
                                                                                                    rowItem,
                                                                                                    itemIndex
                                                                                                ) => {
                                                                                                    return (
                                                                                                        <div
                                                                                                            className="body-row"
                                                                                                            key={
                                                                                                                itemIndex
                                                                                                            }
                                                                                                        >
                                                                                                            <Typography
                                                                                                                className="table-body-title"
                                                                                                                component="p"
                                                                                                                variant="body2"
                                                                                                            >
                                                                                                                {
                                                                                                                    rowItem?.columnOne
                                                                                                                }
                                                                                                            </Typography>
                                                                                                            <Typography
                                                                                                                className="table-body-title"
                                                                                                                component="p"
                                                                                                                variant="body2"
                                                                                                            >
                                                                                                                {
                                                                                                                    rowItem?.columnTwo
                                                                                                                }
                                                                                                            </Typography>
                                                                                                        </div>
                                                                                                    )
                                                                                                }
                                                                                            )}
                                                                                        </TableBody>
                                                                                    </TableWrapper>
                                                                                </>
                                                                            )
                                                                        )}
                                                                    </TextColumn>
                                                                )
                                                            }
                                                        )}
                                                    </StandardTableWrapper>
                                                ) : (
                                                    <StandardTableWrapper
                                                        className="standard-table"
                                                        columns={
                                                            assortedTable.header
                                                                .length
                                                        }
                                                    >
                                                        {assortedTable.header.map(
                                                            (
                                                                header,
                                                                headerIndex
                                                            ) => (
                                                                <div
                                                                    className="repetable-table"
                                                                    key={
                                                                        headerIndex
                                                                    }
                                                                >
                                                                    {row
                                                                        .columns[
                                                                        headerIndex
                                                                    ] && (
                                                                        <>
                                                                            {row.columns.map(
                                                                                (
                                                                                    {
                                                                                        text,
                                                                                        table,
                                                                                    },
                                                                                    tableIndex
                                                                                ) => (
                                                                                    <TextColumn
                                                                                        key={
                                                                                            tableIndex
                                                                                        }
                                                                                    >
                                                                                        {assortedTable.hideHeader !==
                                                                                        true ? (
                                                                                            <Typography
                                                                                                className="header-items"
                                                                                                component="h3"
                                                                                                variant="h3"
                                                                                            >
                                                                                                {
                                                                                                    header
                                                                                                }
                                                                                            </Typography>
                                                                                        ) : null}
                                                                                        {text && (
                                                                                            <Typography
                                                                                                className="bold-text"
                                                                                                component="h5"
                                                                                                variant="subtitle2"
                                                                                            >
                                                                                                {
                                                                                                    text
                                                                                                }
                                                                                            </Typography>
                                                                                        )}

                                                                                        {table.map(
                                                                                            (
                                                                                                tableItem,
                                                                                                idx
                                                                                            ) => (
                                                                                                <>
                                                                                                    {tableItem.text && (
                                                                                                        <Typography
                                                                                                            className="normal-text"
                                                                                                            component="p"
                                                                                                            variant="subtitle2"
                                                                                                        >
                                                                                                            {
                                                                                                                tableItem.text
                                                                                                            }
                                                                                                        </Typography>
                                                                                                    )}

                                                                                                    <TableWrapper
                                                                                                        key={
                                                                                                            idx
                                                                                                        }
                                                                                                    >
                                                                                                        <TableHead>
                                                                                                            <Typography
                                                                                                                className="table-head-title"
                                                                                                                component="h6"
                                                                                                                variant="subtitle2"
                                                                                                            >
                                                                                                                {
                                                                                                                    tableItem
                                                                                                                        ?.header
                                                                                                                        ?.columnOne
                                                                                                                }
                                                                                                            </Typography>
                                                                                                            <Typography
                                                                                                                className="table-head-title"
                                                                                                                component="h6"
                                                                                                                variant="subtitle2"
                                                                                                            >
                                                                                                                {
                                                                                                                    tableItem
                                                                                                                        ?.header
                                                                                                                        ?.columnTwo
                                                                                                                }
                                                                                                            </Typography>
                                                                                                        </TableHead>
                                                                                                        <TableBody>
                                                                                                            {tableItem.rows.map(
                                                                                                                (
                                                                                                                    rowItem,
                                                                                                                    itemIndex
                                                                                                                ) => {
                                                                                                                    return (
                                                                                                                        <div
                                                                                                                            className="body-row"
                                                                                                                            key={
                                                                                                                                itemIndex
                                                                                                                            }
                                                                                                                        >
                                                                                                                            {rowItem?.columnOne && (
                                                                                                                                <Typography
                                                                                                                                    className="table-body-title"
                                                                                                                                    component="p"
                                                                                                                                    variant="body2"
                                                                                                                                >
                                                                                                                                    {
                                                                                                                                        rowItem?.columnOne
                                                                                                                                    }
                                                                                                                                </Typography>
                                                                                                                            )}
                                                                                                                            <Typography
                                                                                                                                className="table-body-title"
                                                                                                                                component="p"
                                                                                                                                variant="body2"
                                                                                                                            >
                                                                                                                                {
                                                                                                                                    rowItem?.columnTwo
                                                                                                                                }
                                                                                                                            </Typography>
                                                                                                                        </div>
                                                                                                                    )
                                                                                                                }
                                                                                                            )}
                                                                                                        </TableBody>
                                                                                                    </TableWrapper>
                                                                                                </>
                                                                                            )
                                                                                        )}
                                                                                    </TextColumn>
                                                                                )
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </div>
                                                            )
                                                        )}
                                                    </StandardTableWrapper>
                                                )}
                                            </>
                                        )}
                                </>
                            </ContaintWrapper>
                        ))}
                    </>
                )}
            </Container>
        </Wrapper>
    )
}

export default TableComponent
