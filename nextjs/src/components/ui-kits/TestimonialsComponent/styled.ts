import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'
import {
    alignItemsCenter,
    alignItemsEnd,
    alignItemsStart,
    dFlex,
    flexDirectionColumn,
    justifyContentBetween,
    justifyContentEnd,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 5rem 0;
    border-top: 8rem solid ${COLORS.white};
    position: relative;
    margin: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 2rem 0;
    }

    ${MEDIA_BREAKPOINTS.md.down} {
        border-radius: 3rem;
        box-shadow: 0px -8px 50px 0px rgba(0, 0, 0, 0.16);
        border-top: 0;
        margin-top: 8.4rem;
        margin-bottom: 3.2rem;
    }

    .sectionTitle {
        color: ${COLORS.blue};
        font-size: 9.1vw;
        line-height: 9.4rem;
        font-weight: ${FONT_WEIGHT.black};
        letter-spacing: 3.2px;
        opacity: 0.12;
        width: 100%;
        text-align: center;
        position: absolute;
        top: -92px;
        left: 0;
        pointer-events: none;
        overflow: hidden;
        text-transform: uppercase;
        white-space: nowrap;

        ${MEDIA_BREAKPOINTS.lgXl.down} {
            top: -8rem;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            top: -7rem;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: 8rem;
            line-height: normal;
            letter-spacing: 1.6px;
            top: -6.5rem;

            &-inner {
                animation: bouncing-text 10s ease-in-out infinite alternate;

                @keyframes bouncing-text {
                    0% {
                        transform: translateX(50%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            }
        }
    }

    .testimonialsBg {
        width: 24.9rem;
        height: 37.2rem;
        position: absolute;
        left: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
        ${dFlex};
        ${alignItemsEnd};

        ${MEDIA_BREAKPOINTS.md.down} {
            width: 18.2rem;
            height: 26.9rem;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    .testimonialsTopSection {
        ${dFlex};
        ${justifyContentBetween};
        ${alignItemsCenter};
        padding: 7.8rem 10rem 0;

        ${MEDIA_BREAKPOINTS.lgXl.down} {
            padding: 0 2rem;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            ${alignItemsStart};
            gap: 2rem;
            margin-bottom: 2.8rem;
        }

        &-quoteTop {
            ${MEDIA_BREAKPOINTS.md.down} {
                img {
                    width: 6rem;
                    height: auto;
                }
            }
        }

        &-title {
            font-size: ${FONT_SIZE.fontSize24};
            font-weight: ${FONT_WEIGHT.semiBold};
            line-height: ${LINE_HEIGHT.LineHeight28};
            max-width: 320px;
            text-align: right;
            color: ${COLORS.white};

            ${MEDIA_BREAKPOINTS.md.down} {
                text-align: left;
            }
        }
    }

    .testimonialsMiddleSection {
        position: relative;
        z-index: ${Z_INDEX.zIndexLevel1};
        min-height: 35rem;
        ${dFlex};
        overflow: hidden;
        overflow-x: auto;
        gap: 1rem;
        scrollbar-width: none;

        @media (min-width: 1500px) {
            justify-content: flex-start;
        }

        &::-webkit-scrollbar {
            width: 0;
        }

        &-inner {
            ${dFlex};
            gap: 1rem;
        }

        .testimonials {
            background-color: ${COLORS.white};
            padding: 1.6rem 2rem;
            border-radius: 2.4rem;
            ${dFlex};
            ${flexDirectionColumn};
            height: fit-content;
            flex: 50rem 0 0;
            position: relative;

            ${MEDIA_BREAKPOINTS.md.down} {
                flex: 30rem 0 0;
            }
            &:last-child {
                margin-right: 2rem;
            }
            &:first-child {
                margin-left: 10rem;

                ${MEDIA_BREAKPOINTS.lgXl.down} {
                    margin-left: 2rem;
                }

                &::after {
                    content: '';
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="276" height="107" viewBox="0 0 276 107" fill="none"><path d="M2 0V55.2571C2 82.8713 24.3858 105.257 52 105.257H138.639H275.278" stroke="white" stroke-width="3" stroke-dasharray="3 14"/></svg>')
                        no-repeat;
                    width: 27.6rem;
                    height: 10.7rem;
                    display: block;
                    position: absolute;
                    bottom: -10.7rem;
                    right: -10rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        bottom: -9rem;
                    }
                }
            }

            &:nth-child(2)::after {
                content: '';
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="247" height="106" viewBox="0 0 247 106" fill="none"><path d="M1.91211 106V52C1.91211 24.3858 24.2979 2 51.9121 2H124.206H246.5" stroke="white" stroke-width="3" stroke-dasharray="3 14"/></svg>')
                    no-repeat;
                width: 24.7rem;
                height: 10.6rem;
                display: block;
                position: absolute;
                top: -10.6rem;
                right: -10rem;
            }

            &:nth-child(3)::after {
                content: '';
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="263" height="106" viewBox="0 0 263 106" fill="none"><path d="M261.16 106V52C261.16 24.3858 238.774 2 211.16 2H130.728H0.29493" stroke="white" stroke-width="3" stroke-dasharray="3 14"/></svg>')
                    no-repeat;
                width: 26.3rem;
                height: 10.6rem;
                display: block;
                position: absolute;
                bottom: 0;
                right: -26.3rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    bottom: inherit;
                    top: 5rem;
                    right: -17.3rem;
                }
            }

            &:nth-child(4)::after {
                content: '';
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="263" height="107" viewBox="0 0 263 107" fill="none"><path d="M261.379 0V55.2571C261.379 82.8713 238.993 105.257 211.379 105.257H131.029H0.679695" stroke="white" stroke-width="3" stroke-dasharray="3 14"/></svg>')
                    no-repeat;
                width: 26.3rem;
                height: 10.6rem;
                display: block;
                position: absolute;
                top: 0;
                right: -26.3rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    top: inherit;
                    bottom: 75px;
                    right: -16.3rem;
                }
            }

            &:nth-child(5)::after {
                content: '';
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="263" height="106" viewBox="0 0 263 106" fill="none"><path d="M261.16 106V52C261.16 24.3858 238.774 2 211.16 2H130.728H0.29493" stroke="white" stroke-width="3" stroke-dasharray="3 14"/></svg>')
                    no-repeat;
                width: 26.3rem;
                height: 10.6rem;
                display: block;
                position: absolute;
                bottom: 0;
                right: -26.3rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    bottom: inherit;
                    top: 5rem;
                    right: -17.3rem;
                }
            }

            &:nth-child(odd) {
                margin-bottom: 19.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    margin-bottom: 15.4rem;
                }
            }

            &:nth-child(even) {
                align-self: flex-end;
                margin-top: 19.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    margin-top: 15.4rem;
                    margin-bottom: 8rem;
                }
            }

            &:nth-child(6)::after {
                content: '';
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="327" height="4" viewBox="0 0 327 4" fill="none"><path d="M325 3.5C325.828 3.5 326.5 2.82843 326.5 2C326.5 1.17157 325.828 0.5 325 0.5V3.5ZM324.509 0.5C323.68 0.5 323.009 1.17157 323.009 2C323.009 2.82843 323.68 3.5 324.509 3.5V0.5ZM310.75 3.5C311.578 3.5 312.25 2.82843 312.25 2C312.25 1.17157 311.578 0.5 310.75 0.5V3.5ZM309.767 0.5C308.938 0.5 308.267 1.17157 308.267 2C308.267 2.82843 308.938 3.5 309.767 3.5V0.5ZM296.008 3.5C296.836 3.5 297.508 2.82843 297.508 2C297.508 1.17157 296.836 0.5 296.008 0.5V3.5ZM295.025 0.5C294.197 0.5 293.525 1.17157 293.525 2C293.525 2.82843 294.197 3.5 295.025 3.5V0.5ZM281.266 3.5C282.094 3.5 282.766 2.82843 282.766 2C282.766 1.17157 282.094 0.5 281.266 0.5V3.5ZM280.283 0.5C279.455 0.5 278.783 1.17157 278.783 2C278.783 2.82843 279.455 3.5 280.283 3.5V0.5ZM266.524 3.5C267.352 3.5 268.024 2.82843 268.024 2C268.024 1.17157 267.352 0.5 266.524 0.5V3.5ZM265.541 0.5C264.713 0.5 264.041 1.17157 264.041 2C264.041 2.82843 264.713 3.5 265.541 3.5V0.5ZM251.782 3.5C252.611 3.5 253.282 2.82843 253.282 2C253.282 1.17157 252.611 0.5 251.782 0.5V3.5ZM250.799 0.5C249.971 0.5 249.299 1.17157 249.299 2C249.299 2.82843 249.971 3.5 250.799 3.5V0.5ZM237.04 3.5C237.869 3.5 238.54 2.82843 238.54 2C238.54 1.17157 237.869 0.5 237.04 0.5V3.5ZM236.058 0.5C235.229 0.5 234.558 1.17157 234.558 2C234.558 2.82843 235.229 3.5 236.058 3.5V0.5ZM222.299 3.5C223.127 3.5 223.799 2.82843 223.799 2C223.799 1.17157 223.127 0.5 222.299 0.5V3.5ZM221.316 0.5C220.487 0.5 219.816 1.17157 219.816 2C219.816 2.82843 220.487 3.5 221.316 3.5V0.5ZM207.557 3.5C208.385 3.5 209.057 2.82843 209.057 2C209.057 1.17157 208.385 0.5 207.557 0.5V3.5ZM206.574 0.5C205.746 0.5 205.074 1.17157 205.074 2C205.074 2.82843 205.746 3.5 206.574 3.5V0.5ZM192.815 3.5C193.643 3.5 194.315 2.82843 194.315 2C194.315 1.17157 193.643 0.5 192.815 0.5V3.5ZM191.832 0.5C191.004 0.5 190.332 1.17157 190.332 2C190.332 2.82843 191.004 3.5 191.832 3.5V0.5ZM178.073 3.5C178.902 3.5 179.573 2.82843 179.573 2C179.573 1.17157 178.902 0.5 178.073 0.5V3.5ZM177.09 0.5C176.262 0.5 175.59 1.17157 175.59 2C175.59 2.82843 176.262 3.5 177.09 3.5V0.5ZM163.331 3.5C164.16 3.5 164.831 2.82843 164.831 2C164.831 1.17157 164.16 0.5 163.331 0.5V3.5ZM162.348 0.5C161.52 0.5 160.848 1.17157 160.848 2C160.848 2.82843 161.52 3.5 162.348 3.5V0.5ZM148.589 3.5C149.418 3.5 150.089 2.82843 150.089 2C150.089 1.17157 149.418 0.5 148.589 0.5V3.5ZM147.607 0.5C146.778 0.5 146.107 1.17157 146.107 2C146.107 2.82843 146.778 3.5 147.607 3.5V0.5ZM133.848 3.5C134.676 3.5 135.348 2.82843 135.348 2C135.348 1.17157 134.676 0.5 133.848 0.5V3.5ZM132.865 0.5C132.036 0.5 131.365 1.17157 131.365 2C131.365 2.82843 132.036 3.5 132.865 3.5V0.5ZM119.106 3.5C119.934 3.5 120.606 2.82843 120.606 2C120.606 1.17157 119.934 0.5 119.106 0.5V3.5ZM118.123 0.5C117.295 0.5 116.623 1.17157 116.623 2C116.623 2.82843 117.295 3.5 118.123 3.5V0.5ZM104.364 3.5C105.192 3.5 105.864 2.82843 105.864 2C105.864 1.17157 105.192 0.5 104.364 0.5V3.5ZM103.381 0.5C102.553 0.5 101.881 1.17157 101.881 2C101.881 2.82843 102.553 3.5 103.381 3.5V0.5ZM89.6221 3.5C90.4505 3.5 91.1221 2.82843 91.1221 2C91.1221 1.17157 90.4505 0.5 89.6221 0.5V3.5ZM88.6393 0.5C87.8108 0.5 87.1393 1.17157 87.1393 2C87.1393 2.82843 87.8108 3.5 88.6393 3.5V0.5ZM74.8802 3.5C75.7086 3.5 76.3802 2.82843 76.3802 2C76.3802 1.17157 75.7086 0.5 74.8802 0.5V3.5ZM73.8974 0.5C73.069 0.5 72.3974 1.17157 72.3974 2C72.3974 2.82843 73.069 3.5 73.8974 3.5V0.5ZM60.1384 3.5C60.9668 3.5 61.6384 2.82843 61.6384 2C61.6384 1.17157 60.9668 0.5 60.1384 0.5V3.5ZM59.1556 0.5C58.3272 0.5 57.6556 1.17157 57.6556 2C57.6556 2.82843 58.3272 3.5 59.1556 3.5V0.5ZM45.3966 3.5C46.225 3.5 46.8966 2.82843 46.8966 2C46.8966 1.17157 46.225 0.5 45.3966 0.5V3.5ZM44.4138 0.5C43.5854 0.5 42.9138 1.17157 42.9138 2C42.9138 2.82843 43.5854 3.5 44.4138 3.5V0.5ZM30.6548 3.5C31.4832 3.5 32.1548 2.82843 32.1548 2C32.1548 1.17157 31.4832 0.5 30.6548 0.5V3.5ZM29.672 0.5C28.8435 0.5 28.172 1.17157 28.172 2C28.172 2.82843 28.8435 3.5 29.672 3.5V0.5ZM15.9129 3.5C16.7414 3.5 17.4129 2.82843 17.4129 2C17.4129 1.17157 16.7414 0.5 15.9129 0.5V3.5ZM14.9301 0.5C14.1017 0.5 13.4301 1.17157 13.4301 2C13.4301 2.82843 14.1017 3.5 14.9301 3.5V0.5ZM1.17111 3.5C1.99954 3.5 2.67111 2.82843 2.67111 2C2.67111 1.17157 1.99954 0.5 1.17111 0.5V3.5ZM325 0.5H324.509V3.5H325V0.5ZM310.75 0.5H309.767V3.5H310.75V0.5ZM296.008 0.5L295.025 0.5V3.5H296.008V0.5ZM281.266 0.5L280.283 0.5V3.5H281.266V0.5ZM266.524 0.5L265.541 0.5V3.5H266.524V0.5ZM251.782 0.5L250.799 0.5V3.5H251.782V0.5ZM237.04 0.5H236.058V3.5H237.04V0.5ZM222.299 0.5H221.316V3.5H222.299V0.5ZM207.557 0.5H206.574V3.5H207.557V0.5ZM192.815 0.5H191.832V3.5H192.815V0.5ZM178.073 0.5L177.09 0.5V3.5L178.073 3.5V0.5ZM163.331 0.5L162.348 0.5V3.5L163.331 3.5V0.5ZM148.589 0.5L147.607 0.5V3.5L148.589 3.5V0.5ZM133.848 0.5L132.865 0.5V3.5L133.848 3.5V0.5ZM119.106 0.5H118.123V3.5H119.106V0.5ZM104.364 0.5H103.381V3.5H104.364V0.5ZM89.6221 0.5H88.6393V3.5H89.6221V0.5ZM74.8802 0.5H73.8974V3.5H74.8802V0.5ZM60.1384 0.5L59.1556 0.5V3.5L60.1384 3.5V0.5ZM45.3966 0.5L44.4138 0.5V3.5L45.3966 3.5V0.5ZM30.6548 0.5L29.672 0.5V3.5L30.6548 3.5V0.5ZM15.9129 0.5L14.9301 0.5V3.5L15.9129 3.5V0.5ZM1.17111 0.5H0.679688V3.5H1.17111V0.5Z" fill="white"/></svg>')
                    no-repeat;
                width: 32.7rem;
                height: 0.4rem;
                display: block;
                position: absolute;
                top: 50%;
                right: -32.7rem;
            }

            &:last-child::after {
                background: none;
            }

            .testi-quote {
                width: 3rem;
                height: auto;
                margin-bottom: 0.8rem;

                img {
                    transform: scaleX(-1);
                }
            }

            &-title {
                margin-bottom: 0.8rem;
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight24};
                color: ${COLORS.grey_dark};
            }

            &-text {
                margin-bottom: 1.6rem;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight24};
                color: ${COLORS.grey_80};
            }

            &-bottom {
                ${dFlex};
                ${justifyContentBetween};
                ${alignItemsCenter};

                ${MEDIA_BREAKPOINTS.md.down} {
                    ${flexDirectionColumn};
                    ${alignItemsStart};
                    gap: 0.8rem;
                }

                &-picName {
                    ${dFlex};
                    ${alignItemsCenter};
                    gap: 1.2rem;

                    &-pic {
                        width: 4rem;
                        height: 4rem;
                        border-radius: 4rem;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    &-name {
                        font-size: ${FONT_SIZE.fontSize16};
                        font-weight: ${FONT_WEIGHT.semiBold};
                        line-height: ${LINE_HEIGHT.LineHeight24};
                        color: ${COLORS.grey_dark};
                        width: calc(100% - 4rem);
                    }
                }

                &-rating {
                    ${dFlex};
                    ${alignItemsCenter};
                    gap: 0.8rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        margin-left: 4.6rem;
                    }

                    &.rate-1 {
                        .rating {
                            svg:nth-child(-n + 1) path {
                                fill: #fdb913;
                            }
                        }
                    }
                    &.rate-2 {
                        .rating {
                            svg:nth-child(-n + 2) path {
                                fill: #fdb913;
                            }
                        }
                    }
                    &.rate-3 {
                        .rating {
                            svg:nth-child(-n + 3) path {
                                fill: #fdb913;
                            }
                        }
                    }
                    &.rate-4 {
                        .rating {
                            svg:nth-child(-n + 4) path {
                                fill: #fdb913;
                            }
                        }
                    }
                    &.rate-5 {
                        .rating {
                            svg:nth-child(-n + 5) path {
                                fill: #fdb913;
                            }
                        }
                    }
                }
            }
        }

        .testimonials-last {
            ${dFlex};
            ${flexDirectionColumn};
            width: 22rem;
            margin-left: 26rem;
            margin-right: 10rem;
            align-self: center;
            position: relative;
            background-color: ${COLORS.blue};

            ${MEDIA_BREAKPOINTS.lgXl.down} {
                margin-right: 2rem;
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                margin-right: 3rem;
                margin-left: 17rem;
            }

            &::before {
                content: '';
                background: linear-gradient(
                    90deg,
                    rgba(34, 108, 172, 0) 0%,
                    #2474b9 75.9%
                );
                width: 27rem;
                height: 100%;
                top: 0;
                left: -27rem;
                position: absolute;

                ${MEDIA_BREAKPOINTS.md.down} {
                    left: -17rem;
                    width: 17rem;
                }
            }

            &-text {
                margin-bottom: 3.1rem;
                font-size: ${FONT_SIZE.fontSize75};
                font-weight: ${FONT_WEIGHT.black};
                line-height: ${LINE_HEIGHT.LineHeight75};
                color: ${COLORS.white};
                opacity: 0.3;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize60};
                    line-height: ${LINE_HEIGHT.LineHeight65};
                }
            }

            a {
                min-width: 16.2rem;
                color: ${COLORS.white};
                border-color: ${COLORS.white};
                background-color: transparent;
            }
        }
    }

    .testimonialsbottomSection {
        ${dFlex};
        ${alignItemsCenter};
        ${justifyContentEnd};
        padding: 0 10rem;

        ${MEDIA_BREAKPOINTS.lgXl.down} {
            padding: 0 2rem;
        }

        img {
            transform: scaleX(-1);

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 6rem;
                height: auto;
            }
        }
    }

    .slide-icon {
        width: 100%;
        position: absolute;
        bottom: 10.4rem;
        left: 0;

        img {
            width: 6rem;
            height: 1.2rem;
            filter: brightness(0) invert(1);
        }
    }
`
