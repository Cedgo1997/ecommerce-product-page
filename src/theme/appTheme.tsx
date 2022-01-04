import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalFonts from './../assets/fonts/fonts';


const mainTheme = {
    colors: {
        primary: {
            dark: 'hsl(26, 100%, 55%)',
            light: 'hsl(25, 100%, 94%)'
        },
        secondary: {
            dark: 'hsl(220, 13%, 13%)',
            normal: 'hsl(219, 9%, 45%)',
            light: 'hsl(220, 14%, 75%)',
            lightest: 'hsl(223, 64%, 98%)'
        },
        text: 'black'
    },
    fontSize: {
        small: '16px',
        normal: '18px',
        large: '20px'
    },
    fontFamily: {
        light: 'KumbhSansLight',
        normal: 'KumbhSansRegular',
        bold: 'KumbhSansBold'
    },
}

export const MainTheme: React.FC = ({ children }) => (
    <ThemeProvider theme={mainTheme}>
        <GlobalFonts />
        {children}
    </ThemeProvider>
)