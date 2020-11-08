import styled, { css } from 'styled-components';

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
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.main};

  ${shared}
`;

export const RegexCardsContainer = styled.div`
  margin-top: 20px;
  max-width: 100%;

  ${shared}
`;
