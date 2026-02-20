import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const MediaTemplateWrapper = styled('section')`
    padding: 6.4rem 0;
    position: relative;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .circle {
        position: absolute;
        right: 0;
        transform: translate(0, -50%);

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: none;
        }
    }

    .container {
        ${MEDIA_BREAKPOINTS.xl.down} {
            width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .tabs {
        display: flex;
        border: 1px solid ${COLORS.grey_40};
        border-radius: 10rem;
        padding: 3px;
        margin-bottom: 5rem;
        background: ${COLORS.white};
        white-space: nowrap;
        overflow: auto;
        scrollbar-width: thin; /* For Firefox */
        scrollbar-color: ${COLORS.grey_40} transparent;
        width: 80%;
        margin: 0 auto 3rem auto;
        position: relative;
    }

    .tabs::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    .tabs::-webkit-scrollbar-track {
        background: transparent;
    }

    .tabs::-webkit-scrollbar-thumb {
        background-color: ${COLORS.grey_40};
        border-radius: 10px;
        border: 3px solid ${COLORS.light_grey};
    }

    .tabs::-webkit-scrollbar-thumb:hover {
        background-color: ${COLORS.grey_60};
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
        transition: 0.5s;
        flex: 1;
    }

    .tab-button.active {
        background: ${COLORS.blue};
        color: ${COLORS.white};
    }

    .tab-content {
        display: none;

        &.show {
            display: block;
            animation: fadeIn 0.5s ease-in forwards; /* 2 seconds duration */
        }
    }

    .sub-tab-parent {
        animation: fadeIn 0.5s ease-in forwards;
    }

    .dropdown {
        position: relative;
        margin-bottom: 2rem;
    }

    .dropdown-button {
        width: 100%;
        padding: 3px;
        border: 1px solid ${COLORS.grey_40};
        border-radius: 10rem;
        background: ${COLORS.white};
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        color: ${COLORS.blue};
        font-family: 'Mulish', sans-serif;
        font-weight: bold;

        .label {
            flex: 1;
            text-align: center;
            padding: 12px;
            color: ${COLORS.white};
            background: ${COLORS.blue};
            border-radius: 100px;
            margin-right: 8px;
        }
    }

    .dropdown-icon {
        font-size: 18px;
        display: flex;
        margin-right: 0.5rem;

        .rotate {
            transform: rotate(180deg);
        }
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        border: 1px solid gainsboro;
        border-radius: 0;
        overflow: hidden;
        z-index: 1000;
        box-shadow: 0 0 10px ${COLORS.grey_30};
        margin-top: 2rem;
        padding: 1.5rem;
        border-radius: 1.5rem;
    }

    .dropdown-menu button {
        width: 100%;
        padding: 1.2rem 2rem;
        border: none;
        cursor: pointer;
        background: none;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        color: ${COLORS.blue};
        font-family: 'Mulish', sans-serif;
        font-weight: bold;
        text-align: left;
    }

    .dropdown-menu button:hover,
    .dropdown-menu button.active {
        background: ${COLORS.blue};
        color: ${COLORS.white};
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight28};
        margin-bottom: 2rem;
    }

    .sub-tabs {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;

        button {
            padding: 1rem 1.5rem;
            border-radius: 10rem;
            background: ${COLORS.grey_10};
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            color: ${COLORS.black};
            border: 0;
            min-width: 10rem;
            cursor: pointer;
            font-family: 'Mulish', sans-serif;

            &.active,
            &:hover {
                background: ${COLORS.grey_30};
            }
        }
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        margin-bottom: 3rem;
        position: relative;

        ${MEDIA_BREAKPOINTS.xl.down} {
            grid-template-columns: repeat(3, 1fr);
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: repeat(2, 1fr);
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            grid-template-columns: repeat(1, 1fr);
        }

        .card {
            border: 1px solid ${COLORS.grey_10};
            padding: 1.6rem;
            border-radius: 1.6rem;
            transition: 0.3s;
            cursor: pointer;
            background: ${COLORS.white};
            display: flex;
            flex-direction: column;

            &:hover {
                background: ${COLORS.yellow_10};
                border-color: ${COLORS.yellow_30};
            }
            a {
                text-decoration: none;
            }

            .card-image {
                display: flex;
                margin-bottom: 2rem;
                border-radius: 1rem;
                overflow: hidden;

                ${MEDIA_BREAKPOINTS.md.down} {
                    height: auto;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .description {
                color: ${COLORS.grey_90};
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-bottom: 2.5rem;
            }

            .card-footer {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                margin-top: auto;

                .cta-trigger {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    cursor: pointer;

                    .label {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                        color: ${COLORS.grey_70};
                    }
                }

                .read-more-cta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    color: ${COLORS.blue};
                    font-weight: ${FONT_WEIGHT.bold};

                    svg {
                        path {
                            stroke: ${COLORS.blue};
                        }
                    }
                }
                .date-posted {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    color: ${COLORS.grey_50};
                    text-transform: uppercase;
                }
            }

            .card-footer:has(.read-more-cta) .label {
                display: none;
            }
        }
    }
`

export const YoutubePopupWrapper = styled('section')`
    &.popup-overlay {
        position: fixed;
        inset: 0;
        background: #0000007d;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;

        @keyframes slideInUp {
            from {
                transform: translateY(10rem);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .popup-content {
            width: 90%;
            max-width: 128rem;
            background: ${COLORS.white};
            border-radius: 1.6rem;
            padding: 2rem;
            display: flex;
            height: 80%;
            position: relative;
            animation: slideInUp 0.3s ease-in forwards; /* 2 seconds duration */

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 90%;
            }

            .close-icon svg {
                position: absolute;
                top: -6rem;
                right: 0;
                width: 5rem;
                color: ${COLORS.white};
                cursor: pointer;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    right: 0em;
                    top: -6rem;
                }
            }

            iframe {
                border: 0;
                border-radius: 1.6rem;
            }
        }
    }
`

export const AudioPopupWrapper = styled('section')`
    &.popup-overlay {
        position: fixed;
        inset: 0;
        background: #0000007d;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;

        @keyframes slideInUp {
            from {
                transform: translateY(10rem);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .popup-content {
            width: 90%;
            max-width: 128rem;
            background: ${COLORS.white};
            border-radius: 1.6rem;
            padding: 2rem;
            display: flex;
            height: 20.6rem;
            position: relative;
            animation: slideInUp 0.3s ease-in forwards; /* 2 seconds duration */

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 90%;
            }

            .close-icon svg {
                position: absolute;
                top: -6rem;
                right: 0;
                width: 5rem;
                color: ${COLORS.white};
                cursor: pointer;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    right: 0em;
                    top: -6rem;
                }
            }

            iframe {
                border: 0;
            }
        }
    }
`

export const LightboxSliderWrapper = styled('section')`
    position: fixed;
    inset: 0;
    z-index: 99999;
    padding: 5rem;
    background: #000000ad;
    display: flex;
    flex-direction: column;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 1.5rem;
        justify-content: center;
    }
    .slick-track {
        height: 100%;
    }

    /* Gallery */
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .caption {
        position: absolute;
        bottom: 0;
        background: #0000008a;
        width: 100%;
        padding: 1rem;
        text-align: center;
        color: ${COLORS.white};
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight28};
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }
    .thumbnail {
        border: 2px solid #ccc;
        transition: transform 0.3s;
    }

    .thumbnail:hover {
        transform: scale(1.1);
        border-color: #000;
    }

    /* Lightbox */
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .lightbox-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }

    .lightbox-content {
        position: relative;
        background-color: black;
        padding: 20px;
        z-index: 2;
        width: 80%;
        max-width: 900px;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: red;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 5px 10px;
        z-index: 3;
    }

    .slider-container {
        height: 100%;
        max-width: 120rem;
        margin: 0 auto;
        width: 100%;
        position: relative;
        ${MEDIA_BREAKPOINTS.lg.down} {
            height: auto;
        }
    }

    .main-slider {
        height: 80%;
        background: ${COLORS.white};
        padding: 2rem;
        border-radius: 3rem;
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            height: auto;
        }

        .main-slider-image {
            width: 100%;
            height: 100%;
            background: ${COLORS.black};
            ${MEDIA_BREAKPOINTS.lg.down} {
                height: 32.8rem;
                object-fit: contain;
            }
        }

        .slick-list {
            height: 100%;
            border-radius: 2rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                height: auto;
            }
        }

        .slick-slide > div,
        .slick-slide > div > div {
            height: 100%;
            display: flex;
        }
    }

    .thumbnail-slider {
        .slick-slide {
            padding: 0 1rem;
            img {
                float: left;
                width: 100%;
                border-radius: 1rem;
            }
            &.slick-current img {
                border: 3px solid ${COLORS.white};
            }
        }

        .slick-next,
        .slick-prev {
            width: 4rem;
            height: 4rem;
            padding: 8px;
            border-radius: 100px;
            top: inherit;
            bottom: -75px;
            border: 2px solid ${COLORS.white};

            path {
                fill: ${COLORS.white};
            }
        }

        .slick-next {
            right: calc(50% - 5rem);
        }

        .slick-prev {
            left: calc(50% - 5rem);
        }
    }

    .close-icon {
        position: absolute;
        top: -5rem;
        right: 0;
        width: 4rem;
        color: ${COLORS.white};
        cursor: pointer;

        ${MEDIA_BREAKPOINTS.lg.down} {
            right: 0em;
            top: -6rem;
        }
    }
`
