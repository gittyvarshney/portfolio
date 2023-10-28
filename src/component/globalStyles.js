import { createGlobalStyle } from "styled-components";
import RubikFont from '../fonts/Rubik-VariableFont_wght.ttf';
import JustMoreFont from '../fonts/Justmore.ttf';
import Courgette from '../fonts/Courgette-Regular.ttf';
import Charm from '../fonts/Charm-Regular.ttf';
import MeriendaOne from '../fonts/MeriendaOne-Regular.ttf';
import Lily from '../fonts/LilyScriptOne-Regular.ttf';
import McLaren from '../fonts/McLaren-Regular.ttf';
import Bellota from '../fonts/Bellota-Regular.ttf';
import Paprika from '../fonts/Paprika-Regular.ttf';
import Buda from '../fonts/Buda-Light.ttf';
import Delius from '../fonts/DeliusSwashCaps-Regular.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Rubik';
    src: url(${RubikFont}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Justmore';
    src: url(${JustMoreFont}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Courgette';
    src: url(${Courgette}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Charm';
    src: url(${Charm}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'MeriendaOne';
    src: url(${MeriendaOne}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'McLaren';
    src: url(${McLaren}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Lily';
    src: url(${Lily}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Bellota';
    src: url(${Bellota}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Paprika';
    src: url(${Paprika}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Buda';
    src: url(${Buda}) format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Delius';
    src: url(${Delius}) format('truetype');
    font-display: swap;
}

html,
body {
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%
}

*, *::before, *::after{
    box-sizing: border-box;
}

#root{
    height: 100%;
}

`
export default GlobalStyle;