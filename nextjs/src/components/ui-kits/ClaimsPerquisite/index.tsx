import React, { useEffect, useState } from 'react'
import {
    TabButton,
    TabContent,
    TabsHeader,
    TabWrapper,
    Wrapper,
} from './styled'
import { IApiClaimsPerquisiteComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Button from 'src/misc/Button'
import { lgDown } from 'src/services/user_api/types'
import FileIcon from '../Icon/assets/FileIcon'
import Link from 'src/theme/Link'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import ChevronDown from '../Icon/assets/ChevronDown'
import CrossCircle from '../Icon/assets/CrossCircle'
import PlusCircle from '../Icon/assets/PlusCircle'
import AngleArrowRight from '../Icon/assets/AngleArrowRight'
const ClaimsPerquisite: React.FC<IApiClaimsPerquisiteComponent> = (props) => {
    const {
        tabList,
        leftText,
        rightText,
        getDirection,
        scheduleCall,
        labelPack,
    } = props

    const [isMobile, setIsMobile] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const imgBasePath = useImageBasePath()
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(0)

    const handleQuestionClick = (index) => {
        setVisibleAnswerIndex(index)
    }

    const handleQuestionClickMobile = (index) => {
        setVisibleAnswerIndex(visibleAnswerIndex === index ? -1 : index)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <TabWrapper>
                    {isMobile ? (
                        <>
                            {Array.isArray(tabList) &&
                                tabList[activeTab]?.tabText && (
                                    <div
                                        className="mobileMenu"
                                        onClick={toggleDropdown}
                                    >
                                        <button className="dropdown-button">
                                            <span className="label">
                                                {tabList[activeTab].tabText}
                                            </span>
                                            <span className="dropdown-icon">
                                                <ChevronDown
                                                    className={
                                                        isDropdownOpen
                                                            ? 'rotate'
                                                            : ''
                                                    }
                                                />
                                            </span>
                                        </button>
                                        {isDropdownOpen && (
                                            <TabsHeader>
                                                {tabList.map((tab, index) => (
                                                    <TabButton
                                                        className="tab-heading"
                                                        key={index}
                                                        isActive={
                                                            activeTab === index
                                                        }
                                                        onClick={() =>
                                                            setActiveTab(index)
                                                        }
                                                    >
                                                        {tab.tabText}
                                                    </TabButton>
                                                ))}
                                            </TabsHeader>
                                        )}
                                    </div>
                                )}
                        </>
                    ) : (
                        <>
                            {Array.isArray(tabList) && tabList.length > 0 && (
                                <TabsHeader
                                    className={
                                        tabList.length > 4 ? 'moreTab' : ''
                                    }
                                >
                                    {tabList.map((tab, index) => (
                                        <TabButton
                                            className="tab-heading"
                                            key={index}
                                            isActive={activeTab === index}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.tabText}
                                        </TabButton>
                                    ))}
                                </TabsHeader>
                            )}
                        </>
                    )}
                </TabWrapper>

                <div className="tab-content">
                    {isMobile
                        ? activeTab === 0 && (
                              <>
                                  {tabList[0]?.tableContent?.map(
                                      (table, index) => (
                                          <div key={index}>
                                              <div className="table-header">
                                                  {table?.tableHeader && (
                                                      <Typography
                                                          className="title"
                                                          variant="h2"
                                                      >
                                                          {ReactHtmlParser(
                                                              table.tableHeader
                                                          )}
                                                      </Typography>
                                                  )}
                                              </div>

                                              <div className="mobile-table-container">
                                                  {table?.rows?.map(
                                                      (item, rowIndex) => (
                                                          <div
                                                              key={rowIndex}
                                                              className="mobile-table"
                                                          >
                                                              <div className="mobile-table-heading">
                                                                  {
                                                                      item.columnData1
                                                                  }
                                                              </div>

                                                              {table?.columnHeader2 && (
                                                                  <div className="mobile-table-row">
                                                                      <div>
                                                                          {
                                                                              table.columnHeader2
                                                                          }
                                                                      </div>
                                                                      <div>
                                                                          {item.columnData2 ===
                                                                          'Yes'
                                                                              ? 'Yes*'
                                                                              : item.columnData2 ??
                                                                                'N/A'}
                                                                      </div>
                                                                  </div>
                                                              )}

                                                              {table?.columnHeader3 && (
                                                                  <div className="mobile-table-row">
                                                                      <div>
                                                                          {
                                                                              table.columnHeader3
                                                                          }
                                                                      </div>
                                                                      <div>
                                                                          {item.columnData3 ===
                                                                          'Yes'
                                                                              ? 'Yes*'
                                                                              : item.columnData3 ??
                                                                                'N/A'}
                                                                      </div>
                                                                  </div>
                                                              )}

                                                              {table?.columnHeader4 && (
                                                                  <div className="mobile-table-row">
                                                                      <div>
                                                                          {
                                                                              table.columnHeader4
                                                                          }
                                                                      </div>
                                                                      <div>
                                                                          {item.columnData4 ===
                                                                          'Yes'
                                                                              ? 'Yes*'
                                                                              : item.columnData4 ??
                                                                                'N/A'}
                                                                      </div>
                                                                  </div>
                                                              )}

                                                              {table?.columnHeader5 && (
                                                                  <div className="mobile-table-row">
                                                                      <div>
                                                                          {
                                                                              table.columnHeader5
                                                                          }
                                                                      </div>
                                                                      <div>
                                                                          {item.columnData5 ===
                                                                          'Yes'
                                                                              ? 'Yes*'
                                                                              : item.columnData5 ??
                                                                                'N/A'}
                                                                      </div>
                                                                  </div>
                                                              )}

                                                              {table?.columnHeader6 && (
                                                                  <div className="mobile-table-row">
                                                                      <div>
                                                                          {
                                                                              table.columnHeader6
                                                                          }
                                                                      </div>
                                                                      <div>
                                                                          {item.columnData6 ===
                                                                          'Yes'
                                                                              ? 'Yes*'
                                                                              : item.columnData6 ??
                                                                                'N/A'}
                                                                      </div>
                                                                  </div>
                                                              )}

                                                              {table?.columnHeader7 && (
                                                                  <div className="mobile-table-row">
                                                                      <div>
                                                                          {
                                                                              table.columnHeader7
                                                                          }
                                                                      </div>
                                                                      <div>
                                                                          {item.columnData7 ===
                                                                          'Yes'
                                                                              ? 'Yes*'
                                                                              : item.columnData7 ??
                                                                                'N/A'}
                                                                      </div>
                                                                  </div>
                                                              )}
                                                          </div>
                                                      )
                                                  )}
                                              </div>

                                              {table?.disclaimerText && (
                                                  <Typography
                                                      className="disclaimer"
                                                      component="p"
                                                      variant="subtitle2"
                                                  >
                                                      {ReactHtmlParser(
                                                          table.disclaimerText
                                                      )}
                                                  </Typography>
                                              )}
                                          </div>
                                      )
                                  )}
                              </>
                          )
                        : activeTab === 0 &&
                          tabList[0]?.tableContent?.map((table, index) => (
                              <div className="table-content" key={index}>
                                  {table?.tableHeader && (
                                      <Typography
                                          className="title"
                                          variant="h2"
                                      >
                                          {ReactHtmlParser(table.tableHeader)}
                                      </Typography>
                                  )}

                                  <div className="table">
                                      <table>
                                          <thead>
                                              <tr>
                                                  {[...Array(7)].map(
                                                      (_, i) =>
                                                          table?.[
                                                              `columnHeader${i + 1}`
                                                          ] && (
                                                              <th key={i}>
                                                                  {ReactHtmlParser(
                                                                      table[
                                                                          `columnHeader${i + 1}`
                                                                      ]
                                                                  )}
                                                              </th>
                                                          )
                                                  )}
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {table?.rows?.map(
                                                  (row, rowIndex) => (
                                                      <tr key={rowIndex}>
                                                          {[...Array(7)].map(
                                                              (_, i) =>
                                                                  row?.[
                                                                      `columnData${i + 1}`
                                                                  ] &&
                                                                  table?.[
                                                                      `columnHeader${i + 1}`
                                                                  ] && (
                                                                      <td
                                                                          key={
                                                                              i
                                                                          }
                                                                      >
                                                                          {ReactHtmlParser(
                                                                              row[
                                                                                  `columnData${i + 1}`
                                                                              ] ===
                                                                                  'Yes'
                                                                                  ? 'Yes*'
                                                                                  : row[
                                                                                        `columnData${i + 1}`
                                                                                    ] ??
                                                                                        'N/A'
                                                                          )}
                                                                      </td>
                                                                  )
                                                          )}
                                                      </tr>
                                                  )
                                              )}
                                          </tbody>
                                      </table>
                                  </div>

                                  {table?.disclaimerText && (
                                      <Typography
                                          className="disclaimer"
                                          component="p"
                                          variant="subtitle2"
                                      >
                                          {ReactHtmlParser(
                                              table.disclaimerText
                                          )}
                                      </Typography>
                                  )}
                              </div>
                          ))}

                    {/* Form Download Tab */}
                    {activeTab === 1 && (
                        <div className="form-upload">
                            {tabList[1]?.header && (
                                <Typography className="title" variant="h2">
                                    {ReactHtmlParser(tabList[1]?.header)}
                                </Typography>
                            )}
                            <div className="governance-section">
                                <div className="icon-wrapper">
                                    {tabList[1].formDownload.map(
                                        (form, index) => (
                                            <div className="files" key={index}>
                                                <div className="icon">
                                                    <FileIcon />
                                                </div>
                                                <div className="file-name">
                                                    {form?.formName}
                                                </div>
                                                <div className="links-wrapper">
                                                    {labelPack?.map((label) =>
                                                        label.type ===
                                                        'view' ? (
                                                            <Link
                                                                key={label.type}
                                                                href={
                                                                    imgBasePath +
                                                                    form?.formUpload
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="link"
                                                            >
                                                                {label.text}{' '}
                                                                <AngleArrowRight />
                                                            </Link>
                                                        ) : label.type ===
                                                          'download' ? (
                                                            <Link
                                                                key={label.type}
                                                                href={
                                                                    imgBasePath +
                                                                    form?.formUpload
                                                                }
                                                                download={
                                                                    form?.formUpload
                                                                }
                                                                className="link"
                                                            >
                                                                {label.text}{' '}
                                                                <AngleArrowRight />
                                                            </Link>
                                                        ) : null
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* FAQs Tab */}
                    {activeTab === 2 && (
                        <div
                            className="faqs"
                            style={{
                                backgroundImage: `url(${imgBasePath + (isMobile ? tabList[2]?.backgroundImage?.mobile.url : tabList[2]?.backgroundImage?.desktop.url)})`,
                            }}
                        >
                            {tabList[2]?.header && (
                                <Typography className="title" variant="h2">
                                    {ReactHtmlParser(tabList[2]?.header)}
                                </Typography>
                            )}
                            <TabWrapper>
                                {isMobile ? (
                                    <>
                                        <TabContent>
                                            {tabList[2].faqList.map(
                                                (item, index) => (
                                                    <div
                                                        key={index}
                                                        className={`faqMobile ${visibleAnswerIndex === index ? 'active' : ''}`}
                                                    >
                                                        <Typography
                                                            className="faqQuestion-tab"
                                                            component="div"
                                                            variant="body1"
                                                            onClick={() =>
                                                                handleQuestionClickMobile(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            {item.question}
                                                            {visibleAnswerIndex ===
                                                            index ? (
                                                                <CrossCircle />
                                                            ) : (
                                                                <PlusCircle />
                                                            )}
                                                        </Typography>
                                                        {visibleAnswerIndex ===
                                                            index && (
                                                            <div className="faqAnswer-container">
                                                                <Typography
                                                                    className="faqAnswer"
                                                                    component="div"
                                                                    variant="body1"
                                                                >
                                                                    {ReactHtmlParser(
                                                                        item.answer
                                                                    )}
                                                                </Typography>
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </TabContent>
                                    </>
                                ) : (
                                    <>
                                        <TabContent>
                                            <div className="faqQuestion">
                                                {tabList[2].faqList.map(
                                                    (item, index) => (
                                                        <Typography
                                                            key={index}
                                                            className={`faqQuestion-tab ${visibleAnswerIndex === index ? 'active' : ''}`}
                                                            component="div"
                                                            variant="body1"
                                                            onClick={() =>
                                                                handleQuestionClick(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            {item.question}
                                                        </Typography>
                                                    )
                                                )}
                                            </div>

                                            <div className="faqAnswer-container">
                                                {tabList[2].faqList.map(
                                                    (item, index) =>
                                                        visibleAnswerIndex ===
                                                            index && (
                                                            <Typography
                                                                key={index}
                                                                className="faqAnswer"
                                                                component="p"
                                                                variant="body1"
                                                            >
                                                                {ReactHtmlParser(
                                                                    item.answer
                                                                )}
                                                            </Typography>
                                                        )
                                                )}
                                            </div>
                                        </TabContent>
                                    </>
                                )}
                            </TabWrapper>
                        </div>
                    )}
                </div>
                <div className="common-content">
                    {leftText && (
                        <div className="left-text">
                            {ReactHtmlParser(leftText)}
                        </div>
                    )}
                    {rightText && (
                        <div className="right-text">
                            <div className="text">
                                {ReactHtmlParser(rightText)}
                            </div>
                            <div className="button">
                                {getDirection?.link && (
                                    <Button
                                        variant="primary"
                                        variantColor="primary-blue"
                                        href={getDirection.link}
                                        as="a"
                                        className="btn get-direction"
                                        isNewTab={
                                            !!getDirection?.options?.newWindow
                                        }
                                    >
                                        {getDirection?.text}
                                    </Button>
                                )}
                                {scheduleCall?.link && (
                                    <Button
                                        variant="primary"
                                        variantColor="primary-red"
                                        href={scheduleCall.link}
                                        as="a"
                                        className="btn schedule-call"
                                        isNewTab={
                                            !!scheduleCall?.options?.newWindow
                                        }
                                    >
                                        {scheduleCall?.text}
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default ClaimsPerquisite
