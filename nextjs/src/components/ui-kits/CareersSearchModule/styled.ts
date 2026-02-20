import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    overflow: hidden;
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .main-title {
        text-align: center;
        font-size: ${FONT_SIZE.fontSize60};
        weight: ${FONT_WEIGHT.bold};

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize32};
        }
    }

    .job-filters {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        max-width: 95.9rem;
        margin: 4rem auto 0;

        ${MEDIA_BREAKPOINTS.md.down} {
            margin-top: 3.6rem;
            display: block;
        }

        .filter {
            flex: 1;
            display: flex;
            flex-direction: column;
            text-transform: capitalize;

            ${MEDIA_BREAKPOINTS.md.down} {
                margin-bottom: 2rem;
            }
            label {
                display: block;
                margin-bottom: 0.4rem;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
                color: ${COLORS.grey_60};
            }
        }

        .custom-dropdown {
            position: relative;
            width: 100%;
            margin-top: 4px;

            .dropdown-header {
                background: ${COLORS.white};
                border: 1px solid ${COLORS.grey_20};
                padding: 1.4rem 1.6rem;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 8px;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
                height: 4.8rem;
                text-transform: capitalize;
                width: 306px;
                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                }
            }

            .arrow {
                font-size: ${FONT_SIZE.fontSize24};
                color: ${COLORS.grey_60};
            }

            .dropdown-list {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: ${COLORS.white};
                border: 1px solid ${COLORS.grey_20};
                border-radius: 8px;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                max-height: 132px;
                overflow-y: auto;
                z-index: ${Z_INDEX.zIndexLevel10};
                font-size: ${FONT_SIZE.fontSize14};

                li {
                    padding: 10px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                    text-transform: capitalize;

                    &.active,
                    &:hover {
                        background: ${COLORS.blue};
                        color: ${COLORS.white};
                        font-weight: ${FONT_WEIGHT.bold};
                    }
                }
            }
        }

        &.filter-button {
            flex: 0 0 auto;
            align-self: center;
        }
        .btn {
            ${MEDIA_BREAKPOINTS.md.down} {
                min-width: 20rem;
            }
        }
    }

    .job-list-wrapper {
        ${MEDIA_BREAKPOINTS.md.down} {
            overflow-x: auto;
            padding-bottom: 1rem;
            -webkit-overflow-scrolling: touch;

            ${MEDIA_BREAKPOINTS.md.down} {
                padding-bottom: 2rem;
            }
        }

        .job-list {
            margin-top: 4rem;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            min-height: 40rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: flex;
                flex-direction: row;
                gap: 1.2rem;
                flex-wrap: nowrap;
                margin-top: 2.4rem;
            }

            .job-card {
                flex: 1 1 calc(32.33% - 1rem);
                background: ${COLORS.white};
                padding: 2rem;
                border-radius: 3.2rem;
                box-shadow: 0 8px 50px 0 #231f200f;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                max-width: 41.3rem;
                ${MEDIA_BREAKPOINTS.md.down} {
                    flex: 0 0 auto;
                    max-width: 300px;
                    box-shadow: 0 8px 20px 0 #231f200f;
                }
                .designation {
                    background-color: ${COLORS.navy_blue_10};
                    border-radius: 1.6rem;
                    padding: 1.4rem;
                    color: ${COLORS.grey_dark};
                }
                .job-specifications {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 2.6rem;

                    .specifications {
                        flex: 0 0 50%;
                        max-width: 50%;
                        padding-right: 1rem;
                        margin-bottom: 1.4rem;
                        .specifications-items {
                            font-weight: ${FONT_WEIGHT.semiBold};
                            display: flex;
                            align-items: center;
                            gap: 1.2rem;
                            svg {
                                width: 2.4rem;
                                height: 2.4rem;
                            }

                            span {
                                width: calc(100% - 3.6rem);
                            }
                        }
                    }
                }
                .job-description {
                    margin-top: 2rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    overflow: hidden;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                    }
                }

                .job-redirections {
                    margin-top: 3.2rem;
                    .link {
                        &.btn {
                            border: ${COLORS.blue} solid 2px;
                            color: ${COLORS.blue};
                            background: ${COLORS.white};
                            font-size: ${FONT_SIZE.fontSize16};
                            font-weight: ${FONT_WEIGHT.bold};
                            padding: 1.5rem;
                            min-width: 16rem;
                            display: flex;
                            align-item: center;
                            justify-content: center;
                            border-radius: 10rem;
                            width: 100%;
                        }
                        &:hover {
                            text-decoration: none;
                            &.btn {
                                color: ${COLORS.white};
                                background: ${COLORS.blue};
                            }
                        }
                    }
                }
            }
        }
    }
    .btn-container {
        margin-top: 4rem;
        display: flex;
        justify-content: center;
        width: 100%;
        cursor: pointer;

        ${MEDIA_BREAKPOINTS.md.down} {
            margin-top: 2rem;
        }
    }
    .link {
        color: ${COLORS.blue};
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.bold};
    }
    .loading-text {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 30rem;
        width: 100%;
        font-weight: ${FONT_WEIGHT.bold};
    }
`

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 9rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    overflow: hidden;
`

export const ModalContent = styled.div`
    background: ${COLORS.white};
    border-radius: 8px;
    padding: 6rem 2rem 2rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: 80%;
    max-height: 70%;
    overflow: auto;
    position: relative;
`

export const CloseButton = styled.button`
    background: ${COLORS.grey_dark};
     background: ${COLORS.white}
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 14px;
    position:absolute;
    top: -2rem;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
