import { createGlobalStyle } from 'styled-components'

import Mulish_ExtraLight from '../../public/fonts/Mulish-ExtraLight.ttf'
import Mulish_Light from '../../public/fonts/Mulish-Light.ttf'
import Mulish_Regular from '../../public/fonts/Mulish-Regular.ttf'
import Mulish_Medium from '../../public/fonts/Mulish-Medium.ttf'
import Mulish_SemiBold from '../../public/fonts/Mulish-SemiBold.ttf'
import Mulish_Bold from '../../public/fonts/Mulish-Bold.ttf'
import Mulish_ExtraBold from '../../public/fonts/Mulish-ExtraBold.ttf'
import Mulish_Black from '../../public/fonts/Mulish-Black.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Mulish';
        src: url(${Mulish_ExtraLight});
        font-style: normal;
        font-weight: 200;
    }
    @font-face {
        font-family: 'Mulish';
        src: url(${Mulish_Light});
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: 'Mulish';
        src: url(${Mulish_Regular});
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: 'Mulish';
        src: url(${Mulish_Medium});
        font-style: normal;
        font-weight: 500;
    }
    @font-face {
        font-family: 'Mulish';
        src: url(${Mulish_SemiBold});
        font-style: normal;
        font-weight: 600;
    }
    @font-face {
        font-family: 'Mulish';
        src: url(${Mulish_Bold});
        font-style: normal;
        font-weight: 700;
    }
    @font-face {
        font-family: 'Mulish';
        src: url(${Mulish_ExtraBold});
        font-style: normal;
        font-weight: 800;
    }
    @font-face {
        font-family: 'Mulish';
        src: url(${Mulish_Black});
        font-style: normal;
        font-weight: 900;
    }
`
