import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6rem 2rem;
    color: ${COLORS.grey_dark};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .mainTitle {
        text-align: center;
        margin-bottom: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin-bottom: 2rem;
        }
    }

    .cardDetails {
        display: flex;
        gap: 1.6rem;
        flex-wrap: wrap;
        justify-content: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column;
            gap: 0.8rem;
        }

        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1 1 calc(22rem - 1.6rem);
            max-width: 22rem;
            border-radius: 2rem;
            padding: 2rem;
            overflow: hidden;
            gap: 4.4rem;
            border: 1px solid ${COLORS.grey_10};
            box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);

            ${MEDIA_BREAKPOINTS.md.down} {
                flex: auto;
                width: 100%;
                max-width: 100%;
                gap: 2rem;
                flex-direction: row;
                align-items: center;
            }

            .image {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 8rem;
                height: 8rem;
                border-radius: 12rem;
                border: 1px solid ${COLORS.grey_10};
                box-shadow: 0px 6px 30px 0px rgba(35, 31, 32, 0.08);

                ${MEDIA_BREAKPOINTS.md.down} {
                    border-width: 0.75px;
                    box-shadow: 0px 4.5px 22.5px 0px rgba(35, 31, 32, 0.08);
                    width: 6rem;
                    height: 6rem;
                }

                img {
                    display: block;
                    width: 4.8rem;
                    height: auto;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: 3.6rem;
                    }
                }
            }

            .description {
                width: 100%;
                font-weight: ${FONT_WEIGHT.semiBold};

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: calc(100% - 8rem);
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
        }
    }
`
