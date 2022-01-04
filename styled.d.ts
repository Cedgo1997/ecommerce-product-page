// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: {
            dark: string,
            light: string
        },
        secondary: {
            dark: string,
            normal: string,
            light: string,
            lightest: string
        },
        text: string
    },
    fontSize: {
        small: string,
        normal: string,
        large: string
    },
    fontFamily: {
        light: string,
        normal: string,
        bold: string
    }
  }
}