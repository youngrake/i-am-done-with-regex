import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  colors: {
    main: '#40444b',
    background: '#32353b',
    text: '#f4f6fc',
    darken: '#202225',
  },
};

export const Style = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        margin: 0;
        padding: 0;
    }
`;
