import styled, { css } from 'styled-components';

import { Search } from '@styled-icons/boxicons-regular/Search';

const shared = css`
  @media screen and (max-width: 920px) and (min-width: 621px) {
    max-width: 604px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 620px) {
    max-width: 302px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Container = styled.div`
  padding-top: 90px;
  margin: 0 auto;
  max-width: 906px;
`;

export const MenuBar = styled.div`
  height: 50px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  ${shared}
`;

export const RegexCardsContainer = styled.div`
  margin-top: 20px;
  max-width: 100%;
  ${shared}
`;

export const SearchInput = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchInputIcon = styled(Search)`
  position: absolute;
  top: 9px;
  left: 9px;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.main};
  display: inline-block;
  font-size: ${props => `${props.size}px`};

  &:before {
    content: ${props => props.icon};
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const SearchInputElement = styled.input`
  height: 50px;
  width: 300px;
  border: none;
  outline: none;
  font-size: 24px;
  background-color: rgb(44, 48, 53);
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding-left: 50px;
  box-shadow: -2px 7px 50px 2px rgba(255, 255, 255, 0.09);
`;
