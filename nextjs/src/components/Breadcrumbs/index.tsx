import React, { useEffect, useState } from 'react'
import { Wrapper } from './styled'
import { IApiHeaderComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Link from 'src/theme/Link'
import { useRouter } from 'next/router'

const Breadcrumbs: React.FC<IApiHeaderComponent> = (props) => {
    const { breadcrumbs } = props
    const router = useRouter()
    const [hasTabbedMenus, setHasTabbedMenus] = useState(false)

    useEffect(() => {
        const checkTabbedMenus = () => {
            const tabbedMenus = document.querySelectorAll('.tabbed-menus')
            setHasTabbedMenus(tabbedMenus.length > 0)
        }
        checkTabbedMenus()

        router.events.on('routeChangeComplete', checkTabbedMenus)

        return () => {
            router.events.off('routeChangeComplete', checkTabbedMenus)
        }
    }, [router.events])

    if (!breadcrumbs || !breadcrumbs.list || breadcrumbs.list.length < 2) {
        return null
    }
    return (
        <Wrapper className={`${hasTabbedMenus ? 'breadcrumb' : ''}`}>
            <ul
                className={`container ${breadcrumbs?.theme === 'light' ? 'light-theme' : 'dark-theme'}`}
            >
                {breadcrumbs?.list?.map(({ title, path, disable }, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && (
                            <Typography
                                className="separator "
                                component="span"
                                variant="subtitle1"
                            >
                                /
                            </Typography>
                        )}

                        {disable ? (
                            <Typography
                                className="link-item disabled"
                                component="li"
                                variant="subtitle1"
                            >
                                {ReactHtmlParser(title)}
                            </Typography>
                        ) : (
                            <Typography
                                className="link-item"
                                component="li"
                                variant="subtitle1"
                            >
                                <Link
                                    href={path}
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    {ReactHtmlParser(title)}
                                </Link>
                            </Typography>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </Wrapper>
    )
}

export default Breadcrumbs
