import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { alignItemsCenter, dFlex } from 'src/theme/mixins'

export const BenefitsComponentWrapper = styled.section`
    padding: 5rem 0;
    color: ${COLORS.grey_dark};
    background-color: ${COLORS.white};

    .heading-block {
        text-align: center;
        margin-bottom: 4rem;
        .main-title {
            margin-bottom: 1.2rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight38};
            }
        }
        .sub-title {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            margin-bottom: 1.5rem;
            font-weight: ${FONT_WEIGHT.medium};

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                margin-bottom: 0;
            }
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-bottom: 2rem;
        }
    }
    .additional-tips {
        padding-top: 2rem;
        font-weight: ${FONT_WEIGHT.medium};
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-top: 0;
        }
        .tips-title {
            font-size: ${FONT_SIZE.fontSize28};
            line-height: ${LINE_HEIGHT.LineHeight40};
            font-weight: ${FONT_WEIGHT.bold};
            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }
        .icon-and-description {
            font-size: ${FONT_SIZE.fontSize16};
        }
        .short-text {
            font-size: ${FONT_SIZE.fontSize14};
            margin-top: 3rem;
        }
        .description {
            font-size: ${FONT_SIZE.fontSize14};
            margin: 1rem 0 2rem;
        }
        .bulletTitle {
            font-size: ${FONT_SIZE.fontSize14};
            margin: 1rem 0;
        }

    }

   .accordion-wrapper {
        background-color: ${COLORS.yellow_10};
        border-radius: 3rem;
        padding: 4rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 2.4rem 2rem;
            margin: 0 -20px;
        }
    }

    .accordion {
        ${alignItemsCenter};
        cursor: pointer;
        background-color: ${COLORS.white};
        border-radius: 1.2rem;
        padding: 2rem;
        overflow: hidden;
        transition: .3s;
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-wrap: wrap;
        }
        &.active {
            .accordion-content {
                padding-top: 2rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    padding-top: 0;
                }
            }
        }
        &.double-list {
            .accordion-content { 
                column-count: 2;
                column-gap: 2rem;
            }
        }
        .accordion-header {
            ${dFlex};
            ${alignItemsCenter};
            gap: 8px;
            transition: .3s;
            font-size: ${FONT_SIZE.fontSize20};
            font-weight: ${FONT_WEIGHT.bold};
            line-height: ${LINE_HEIGHT.LineHeight28};
             width: 100%;

            ${MEDIA_BREAKPOINTS.lg.down} {
                flex: 1;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
            span {
                color:  ${COLORS.s_red};
            }
            .expand-icon {
                margin-left: auto;
                svg {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }

        .accordion-content {
            font-size: ${FONT_SIZE.fontSize16};
            font-weight: ${FONT_WEIGHT.medium};
            line-height: ${LINE_HEIGHT.LineHeight22};
            max-height: 0;
            overflow: hidden;
            transition: .3s;
            width: 100%;
            p {
                margin: 0;
                margin-top: 1.2rem;
                ${dFlex};
                gap: 10px;
                &:first-child {
                    margin-top: 0;
                }
                svg{
                    width: 2rem;
                    height: 2rem;
                }
            }
            ${MEDIA_BREAKPOINTS.lg.down} {
                order: 3;
                flex: 0 0 100%;
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
            &.open {
                max-height: 50rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    margin-top: 2rem;
                    max-height: none;
                }
            }
        }
    }
    
    .list-item {
        &.with-title {
            .icon-and-title {
                ${dFlex};
                ${alignItemsCenter};
                gap: 8px;
                margin-bottom: 0.5rem;
            }
            margin-bottom: 2.8rem;
        }
        &.without-title {
            margin-top: 1.5rem;
            &:first-child {
                margin-top: 0;
            }
            .icon-and-description {
                ${dFlex};
                align-items: flex-start;
                gap: 8px;
            }
        }
        .icon-and-description,
        .icon-and-title {
            svg, .list-icon {
                width: 20px;
                height: 20px;
                flex-shrink: 0;
            }
            .list-title {
                margin: 0; 
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight20};
                font-weight: ${FONT_WEIGHT.bold};
            }
        }
        .icon-and-title {
        +.icon-and-description {
            margin-top: 8px;
        }
    }
    

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 50%, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    .fade-in-up {
        animation-name: fadeInUp;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        animation-fill-mode: both;
    }
`
