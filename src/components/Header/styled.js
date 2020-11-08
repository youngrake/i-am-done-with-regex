import styled from 'styled-components';

export const Header = styled.header`
  z-index: 1;
  padding: 12px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.colors.darken};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderLogo = styled.div`
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  transform: scaleY(1.1) scaleX(0.8) translateX(-20px);
  cursor: default;
`;
