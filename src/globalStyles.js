import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        color: ${theme('colors.text')};
        background: ${theme('colors.background')};
        
        font-family: ${theme('fonts.basic.fontFamily')};

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;