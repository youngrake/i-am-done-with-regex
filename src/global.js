import { createGlobalStyle } from 'styled-components';

import infoSvg from 'assets/info.svg';

export const Theme = {
  colors: {
    main: '#40444b',
    background: '#32353b',
    text: '#f4f6fc',
    darken: '#202225',
  },
  assets: {
    infoSvg,
  },
};

export const Style = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        margin: 0;
        padding: 0;
    }

    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
    }

    .popup {
      word-break: normal;
      max-width: 300px;
    }

    .copied {
      border-radius: 20px;
      background-color: #00FF2A !important;
      :after {
        border-top-color: #00FF2A !important;
      }
    }
`;
