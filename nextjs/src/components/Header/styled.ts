import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    Z_INDEX,
    MEDIA_BREAKPOINTS,
    LINE_HEIGHT,
} from 'src/styles/variables'

export const HeaderWrapper = styled('header')`
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    background: #fff;
    border-radius: 0 0 1.6rem 1.6rem;
    box-shadow: 0 0 10px gainsboro;
    z-index: ${Z_INDEX.zIndexLevel9999};

    .container {
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 95%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }

    .header-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 0;

        &.desktop-header {
            ${MEDIA_BREAKPOINTS.lg.down} {
                display: none;
            }
        }

        .logo {
            display: flex;
            gap: 1.2rem;

            a {
                display: flex;
            }

            img {
                width: 18.8rem;
                height: 7rem;

                ${MEDIA_BREAKPOINTS.lgXl.down} {
                    width: 13.8rem;
                    height: auto;
                }
            }
            span {
                width: 0.1rem;
                height: 7rem;
                background-color: ${COLORS.grey_10};
            }
        }
        .top-nav {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            justify-content: flex-end;
            .search {
                display: flex;
                align-items: center;
                gap: 1rem;
                position: relative;
                font-size: 1.4rem;

                input {
                    height: 3.4rem;
                    width: 30rem;
                    padding: 0.8rem 4.8rem 0.8rem 2.4rem;
                    border-radius: 10rem;
                    font-size: inherit;
                    border: 1px solid #7a7979;
                    &:focus-visible {
                        outline: 0 !important;
                        border-top: 1px solid #7a7979;
                        border-right: 1px solid #7a7979;
                        border-bottom: 0;
                        border-left: 1px solid #7a7979;
                        border-radius: 2rem 2rem 0 0;
                    }
                    @media screen and (max-width: 1160px) {
                        width: 26rem;
                    }
                    @media screen and (max-width: 1120px) {
                        width: 23rem;
                    }
                    @media screen and (max-width: 1080px) {
                        width: 20rem;
                    }
                }
                .search-icon {
                    position: absolute;
                    right: 2rem;
                }
                .search-show {
                }
                .suggested-keyword,
                .recent-search {
                    position: absolute;
                    top: 3.4rem;
                    background: ${COLORS.white};
                    width: 100%;
                    z-index: 1;
                    border: 1px solid #7a7979;
                    padding: 1rem 2.4rem;
                    border-radius: 0 0 2rem 2rem;
                    font-size: inherit;
                    h5 {
                        font-size: ${FONT_SIZE.fontSize14};
                        margin-bottom: 0.5rem;
                    }
                    ul {
                        display: flex;
                        flex-direction: column;
                        row-gap: 0.5rem;
                        li {
                        }
                    }
                }
            }
            .btn {
                padding: 0.8rem 1rem;
                font-size: ${FONT_SIZE.fontSize12};
                border: 1px solid;
                border-radius: 8px;

                &.btn-red {
                    color: ${COLORS.red};

                    &:hover {
                        background: ${COLORS.red};
                        color: ${COLORS.white};
                    }
                }
                &.btn-blue {
                    color: ${COLORS.blue};

                    &:hover {
                        background: ${COLORS.blue};
                        color: ${COLORS.white};
                    }
                }
            }
        }
        .main-nav {
            display: flex;
            align-items: center;
            gap: 2.5rem;
            justify-content: flex-end;

            ${MEDIA_BREAKPOINTS.lgXl.down} {
                gap: 1.5rem;
            }

            li {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: ${COLORS.black_10};
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};

                &.active {
                    color: ${COLORS.red};

                    .arrow-down {
                        path {
                            stroke: ${COLORS.red};
                        }
                    }
                }
                > .span {
                    all: unset;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    border: 0;
                    padding: 0;
                    margin: 0;
                    background: transparent;

                    > svg {
                        top: 2px;
                        position: relative;
                        transition: 0.3s;
                    }
                }

                > span {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;

                    > svg {
                        top: 2px;
                        position: relative;
                        transition: 0.3s;
                    }
                }

                &.active > span {
                    svg {
                        transform: rotate(180deg);
                    }
                }

                &.has-level-2 {
                    position: relative;
                }
                .level-2 {
                    position: absolute;
                    left: 0;
                    top: calc(100% + 32px);
                    background: #fff;
                    padding: 18px;
                    box-shadow: 0 0 10px gainsboro;
                    border-radius: 0.5rem;
                    white-space: nowrap;
                    display: none;
                    flex-direction: column;
                    gap: 1rem;
                    min-width: 16rem;
                    animation: fadeIn 0.3s ease-in-out;

                    li {
                        font-size: ${FONT_SIZE.fontSize16};
                        justify-content: space-between;
                        gap: 2rem;

                        svg {
                            visibility: hidden;
                        }

                        &:hover {
                            color: ${COLORS.red};
                            cursor: pointer;

                            svg {
                                visibility: visible;
                                path {
                                    stroke: ${COLORS.red};
                                }
                            }
                        }
                    }

                    &.visible {
                        display: flex;
                    }
                }
                .tab-view {
                    display: none;
                    position: absolute;
                    top: 9rem;
                    left: 0;
                    background: #fff;
                    width: 100%;
                    right: 0;
                    padding: 5rem 0;
                    border-radius: 0 0 2rem 2rem;
                    box-shadow: 0 8px 10px #0000001c;

                    &.menuHeight {
                        height: calc(90vh - 9rem);
                        overflow: hidden;
                        overflow-y: auto;

                        &::-webkit-scrollbar {
                            width: 5px;
                            height: 5px;
                        }

                        &::-webkit-scrollbar-track {
                            background: transparent;
                        }

                        &::-webkit-scrollbar-thumb {
                            background-color: ${COLORS.grey_40};
                            border-radius: 10px;
                        }

                        &::-webkit-scrollbar-thumb:hover {
                            background-color: ${COLORS.grey_60};
                        }
                    }

                    .tab-nav {
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                        margin-bottom: 3rem;

                        span {
                            font-size: ${FONT_SIZE.fontSize16};
                            color: ${COLORS.blue};
                            padding: 1.2rem 2rem;
                            min-width: 15rem;
                            border-radius: 10rem;
                            text-align: center;
                            cursor: pointer;
                            transition: 0.3s;

                            &.active,
                            &:hover {
                                background: ${COLORS.blue};
                                color: ${COLORS.white};
                            }
                        }
                    }
                    .tab-pane {
                        display: flex;
                        align-items: stretch;
                        justify-content: flex-start;
                        gap: 2rem;

                        > div,
                        > ul {
                            flex: 0 0 calc(33.3% - 2rem);
                        }

                        .level-3-nav {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;

                            li {
                                padding: 1.5rem 2rem;
                                border-radius: 1.6rem;
                                font-size: ${FONT_SIZE.fontSize18};
                                border: 1px solid transparent;
                                color: ${COLORS.grey_70};
                                display: flex;
                                align-items: center;
                                a {
                                    display: flex;
                                    align-items: center;
                                    width: 100%;
                                    text-decoration: none;
                                    color: ${COLORS.grey_70};
                                }

                                svg {
                                    visibility: hidden;
                                    margin-left: auto;
                                }
                                .icon {
                                    display: block;
                                    visibility: visible;
                                    margin-left: 0;
                                    margin-right: 1rem;
                                    transition: 0.3s;
                                }

                                .icon-hover {
                                    display: none;
                                    margin-left: 0;
                                    margin-right: 1rem;
                                    transition: 0.3s;
                                }

                                &.active-l3 {
                                    border: 1px solid gainsboro;
                                    box-shadow: 0 0 2rem #00000017;
                                    cursor: pointer;
                                    color: ${COLORS.black};
                                    svg {
                                        visibility: visible;
                                    }
                                    .icon {
                                        display: none;
                                    }
                                    .icon-hover {
                                        display: block;
                                    }
                                }
                            }
                        }
                        .level-4-nav {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            border: 1px solid gainsboro;
                            box-shadow: 0 0 2rem #00000017;
                            border-radius: 1.6rem;
                            padding: 1rem;
                            max-height: 480px;
                            overflow-y: auto;

                            li {
                                padding: 1.5rem 2rem;
                                border-radius: 1.6rem;
                                font-size: ${FONT_SIZE.fontSize18};
                                border: 1px solid transparent;
                                color: ${COLORS.black};
                                cursor: pointer;
                                display: flex;
                                justify-content: space-between;
                                a {
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    width: 100%;
                                    text-decoration: none;
                                    color: ${COLORS.black};
                                }

                                svg {
                                    visibility: hidden;
                                    path {
                                        stroke: ${COLORS.black};
                                    }
                                }

                                &.active-l4 {
                                    color: ${COLORS.red};
                                    svg {
                                        visibility: visible;
                                        path {
                                            stroke: ${COLORS.red};
                                        }
                                    }
                                }
                            }
                            .view-all {
                                margin-left: 1.6rem;
                                margin-top: 1rem;
                                color: ${COLORS.blue};
                                display: flex;
                                align-items: center;
                                gap: 1rem;
                                cursor: pointer;

                                svg {
                                    path {
                                        stroke: ${COLORS.blue};
                                    }
                                }
                                span {
                                    color: ${COLORS.grey_dark};
                                }
                            }
                            .no-data {
                                color: ${COLORS.black};
                                padding: 0 1.5rem;
                                flex: 0 0 auto;
                            }
                        }
                        .benefits-block {
                            background: ${COLORS.yellow_10};
                            padding: 1.5rem;
                            border-radius: 1.6rem;
                            display: flex;
                            flex-direction: column;

                            .title {
                                font-size: ${FONT_SIZE.fontSize16};
                                color: ${COLORS.black};
                                margin-bottom: 1.5rem;
                            }

                            ul {
                                li {
                                    font-size: ${FONT_SIZE.fontSize16};
                                    color: ${COLORS.black};
                                    margin-bottom: 1rem;
                                    font-weight: ${FONT_WEIGHT.regular};
                                    align-items: flex-start;

                                    .tick-icon-red {
                                        position: relative;
                                        flex: 0 0 2rem;
                                        height: 2rem;
                                        margin-right: 1rem;
                                        top: 1px;
                                    }
                                }
                            }
                            .cta-block {
                                display: flex;
                                flex-direction: column;
                                margin-top: auto;
                                gap: 2rem;

                                .download-button span {
                                    display: flex;
                                    align-items: center;
                                    gap: 1rem;

                                    svg {
                                        path:nth-child(1) {
                                            stroke: ${COLORS.black};
                                        }
                                    }
                                }
                            }
                        }
                        .no-data {
                            color: ${COLORS.black};
                            padding: 1.5rem;
                            flex: 0 0 33.3%;
                        }
                    }
                }

                &.active {
                    .tab-view {
                        display: block;
                        animation: fadeIn 0.3s ease-in-out;
                    }
                }
            }
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const LanguageSelectorWrapper = styled('div')`
    .switch-container {
        display: inline-flex;
        align-items: center;
        border: 2px solid #007bff;
        border-radius: 20px;
        padding: 2px 5px;
        cursor: pointer;
        background-color: #fff;
    }

    .switch-label {
        font-size: 14px;
        margin-right: 8px;
        color: #007bff;
    }

    .switch-button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #ccc;
        transition: background-color 0.3s ease;
    }

    .switch-button.active {
        background-color: #ff3d00;
    }
`

export const MobileWrapper = styled('div')`
    .mobile-header-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 0;

        .logo {
            display: flex;
            gap: 1.2rem;
            img {
                width: 16rem;
                height: auto;
            }
        }
    }

    .top-nav {
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: flex-end;
        ${MEDIA_BREAKPOINTS.md.down} {
            gap: 1rem;
        }
        .btn {
            padding: 0.8rem 1rem;
            font-size: ${FONT_SIZE.fontSize12};
            border: 1px solid;
            border-radius: 8px;

            &.pay-premium {
                color: ${COLORS.red};

                &:hover {
                    background: ${COLORS.red};
                    color: ${COLORS.white};
                }
            }
            &.buy-online {
                color: ${COLORS.blue};

                &:hover {
                    background: ${COLORS.blue};
                    color: ${COLORS.white};
                }
            }
        }
        .search {
            display: flex;
            align-items: center;
            gap: 1rem;
            position: relative;
            font-size: 1.4rem;
            input {
                height: 3.2rem;
                width: 24rem;
                padding: 0.8rem 3rem 0.8rem 1.4rem;
                border-radius: 10rem;
                font-size: inherit;
                border: 1px solid #7a7979;

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                    margin-left: 0.6rem;
                }
                &:focus-visible {
                    outline: 0 !important;
                    border-top: 1px solid #7a7979;
                    border-right: 1px solid #7a7979;
                    border-bottom: 0;
                    border-left: 1px solid #7a7979;
                    border-radius: 2rem 2rem 0 0;
                }
            }

            svg.search-icon {
                position: absolute;
                right: 0.8rem;
                width: 2rem;
                height: 2rem;
            }
            svg.search-show {
                width: 2.4rem;
                height: 2.4rem;
            }
            .suggested-keyword,
            .recent-search {
                position: absolute;
                top: 3rem;
                background: ${COLORS.white};
                width: 100%;
                z-index: 1;
                border: 1px solid #7a7979;
                padding: 0.8rem 1.4rem;
                border-radius: 0 0 2rem 2rem;
                font-size: inherit;

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: calc(100% - 0.6rem);
                    margin-left: 0.6rem;
                }
            }
        }
    }

    .additionalLogo {
        display: flex;
        margin-bottom: 1rem;

        img {
            width: auto;
            height: 6rem;
            ${MEDIA_BREAKPOINTS.md.down} {
                height: 4rem;
            }
        }
    }
    .button-flex {
        display: flex;
        gap: 1rem;
        padding-bottom: 2rem;
    }
    .btn {
        flex: 1;
        padding: 0.8rem 1rem;
        font-size: ${FONT_SIZE.fontSize12};
        border: 1px solid;
        border-radius: 8px;

        &.btn-red {
            color: ${COLORS.red};

            &:hover {
                background: ${COLORS.red};
                color: ${COLORS.white};
            }
        }
        &.btn-blue {
            color: ${COLORS.blue};

            &:hover {
                background: ${COLORS.blue};
                color: ${COLORS.white};
            }
        }
    }
    .search {
        svg {
            width: 3.2rem;
            height: 3.2rem;
        }
    }
    .mobile-menu-toggle {
        svg {
            width: 3.2rem;
            height: 3.2rem;
            display: flex;
        }
    }
    .mobile-menu-content {
        padding-bottom: 2rem;

        li {
            font-size: 16px;
            display: flex;
            align-items: center;
            padding: 1rem 0;
            gap: 1rem;

            svg {
                &:last-child {
                    margin-left: auto;
                    flex: 0 0 1.2rem;
                    height: 1.2rem;
                }
                path {
                    stroke: ${COLORS.black};
                }
            }
        }
    }
    .mobile-back {
        margin: 2rem 0;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        font-size: ${FONT_SIZE.fontSize16};
        svg {
            path {
                stroke: ${COLORS.black};
            }
        }
        .disabled {
            opacity: 0.5;
        }
    }

    .tabs {
        display: flex;
        border: 1px solid ${COLORS.grey_40};
        border-radius: 10rem;
        padding: 3px;
        margin-bottom: 2rem;
        background: ${COLORS.white};
        white-space: nowrap;
        overflow: auto;
    }

    .tabs::-webkit-scrollbar {
        display: none;
        visibility: hidden;
    }

    .tab-button {
        padding: 1.2rem 2rem;
        border: none;
        cursor: pointer;
        background: none;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        color: ${COLORS.blue};
        border-radius: 10rem;
        font-family: 'Mulish', sans-serif;
        font-weight: bold;
    }

    .tab-button.active {
        background: ${COLORS.blue};
        color: ${COLORS.white};
    }
    .level-4-content {
        background: ${COLORS.yellow_10};
        padding: 1.5rem;
        border-radius: 1.6rem;
        display: flex;
        flex-direction: column;

        .title {
            font-size: ${FONT_SIZE.fontSize16};
            color: ${COLORS.black};
            margin-bottom: 1.5rem;
        }

        ul {
            li {
                font-size: ${FONT_SIZE.fontSize16};
                color: ${COLORS.black};
                margin-bottom: 1rem;
                font-weight: ${FONT_WEIGHT.regular};
                align-items: flex-start;

                .tick-icon-red {
                    position: relative;
                    flex: 0 0 2rem;
                    height: 2rem;
                    margin-right: 1rem;
                    top: 1px;
                }
            }
        }
        .cta-block {
            display: flex;
            flex-direction: column;
            margin-top: auto;
            gap: 2rem;

            .download-button span {
                display: flex;
                align-items: center;
                gap: 1rem;

                svg {
                    path:nth-child(1) {
                        stroke: ${COLORS.black};
                    }
                }
            }
        }
    }
    .no-data {
        color: ${COLORS.black};
        font-size: ${FONT_SIZE.fontSize16};
    }
`
