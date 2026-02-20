import React, { useState } from 'react'
import {
    AccordionBody,
    AccordionHeader,
    AccordionItemWrapper,
    Wrapper,
} from './styled'
import Link from 'src/theme/Link'
import AccordianCircleIcon from '../Icon/assets/AccordianCircleIcon'
import { INestedTabs, TabItem, TabAction } from 'src/services/api/types'

type AccordionItem = {
    label: string
    actions?: TabAction[]
    children?: AccordionItem[]
}

const mapTabsToAccordion = (tabs: TabItem[] = []): AccordionItem[] =>
    tabs.map((tab) => ({
        label: tab.text,
        actions: Array.isArray(tab.action)
            ? tab.action
            : tab.action
              ? [tab.action]
              : [],
        children: mapTabsToAccordion(tab.children || []),
    }))

const CustomAccordion: React.FC<{ item: AccordionItem; level?: number }> = ({
    item,
    level = 0,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const isTopLevel = level === 0

    return (
        <AccordionItemWrapper
            className={`accordion-item nested-${level}`}
            level={level}
        >
            <AccordionHeader
                className={`nested-${level} ${item?.actions?.length === 0 && item?.children?.length === 0 ? 'diabled' : ''}`}
                topLevel={isTopLevel}
                level={level}
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {!item.actions || item.actions.length === 0 ? (
                    <span className={`actions bold-700`}>{item.label}</span>
                ) : (
                    <>
                        {item?.actions?.map((a, idx) =>
                            a.type === 'link' ? (
                                <Link
                                    className="actions"
                                    key={idx}
                                    href={a?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item?.label}
                                </Link>
                            ) : (
                                <Link
                                    className="actions"
                                    key={idx}
                                    href={a?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                    </>
                )}

                {item?.actions?.length !== 0 && (
                    <span className="fix-icon">
                        <AccordianCircleIcon className="rotait-icon" />
                    </span>
                )}
                {item?.children?.length !== 0 && (
                    <span className="icon">
                        <AccordianCircleIcon className="child-icon" />
                    </span>
                )}
            </AccordionHeader>

            {isOpen && item.children && (
                <AccordionBody className={`nested-body-${level}`}>
                    {item.children.map((child, i) => (
                        <CustomAccordion
                            key={i}
                            item={child}
                            level={level + 1}
                        />
                    ))}
                </AccordionBody>
            )}
        </AccordionItemWrapper>
    )
}

const RecursiveAccordion: React.FC<{ items: AccordionItem[] }> = ({
    items,
}) => (
    <Wrapper>
        <div className="container">
            <div className="accordian-wrraper">
                {items.map((item, i) => (
                    <CustomAccordion key={i} item={item} level={0} />
                ))}
            </div>
        </div>
    </Wrapper>
)

const NestedTabs: React.FC<INestedTabs> = ({ tabs }) => {
    const accordionItems = mapTabsToAccordion(tabs || [])
    return <RecursiveAccordion items={accordionItems} />
}

export default NestedTabs
