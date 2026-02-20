import styled from 'styled-components'
import { COLORS, FONT_WEIGHT, MEDIA_BREAKPOINTS } from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 2rem;
        padding: 4rem 10rem;
        background: ${COLORS.blue};

        ${MEDIA_BREAKPOINTS.lgXl.down} {
            padding: 4rem 2rem;
        }

        .main-title {
            text-align: center;
            color: ${COLORS.white};
        }

        .card-flex {
            display: flex;
            gap: 2.4rem;
            justify-content: space-between;

            ${MEDIA_BREAKPOINTS.lg.down} {
                flex-direction: column;
            }

            .card {
                display: flex;
                width: 100%;
                padding: 1.6rem;
                border: 1px solid ${COLORS.grey_10};
                border-radius: 2rem;
                gap: 1.6rem;
                background: ${COLORS.white};
                box-shadow: 0px 6px 30px 0px rgba(35, 31, 32, 0.08);
                align-items: center;

                .icon {
                    width: 7rem;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    width: calc(100% - 8.6rem);

                    &-title {
                        font-size: ${FONT_WEIGHT.bold};
                    }

                    &-text {
                        font-size: ${FONT_WEIGHT.medium};

                        a {
                            color: ${COLORS.grey_dark};
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
`
