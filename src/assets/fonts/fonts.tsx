import { createGlobalStyle } from "styled-components"
import KumbhSansBold from './KumbhSansBold.ttf';
import KumbhSansLight from './KumbhSansLight.ttf';
import KumbhSansRegular from './KumbhSansRegular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'KumbhSansBold';
        src: local('Kumbh Sans Bold'), local('KumbhSansBold'),
        url(${KumbhSansBold}) format('truetype')
    };
    @font-face {
        font-family: 'KumbhSansRegular';
        src: local('Kumbh Sans Regular'), local('KumbhSansRegular'),
        url(${KumbhSansRegular}) format('truetype')
    };
    @font-face {
        font-family: 'KumbhSansLight';
        src: local('Kumbh Sans Light'), local('KumbhSansLight'),
        url(${KumbhSansLight}) format('truetype')
    };
`