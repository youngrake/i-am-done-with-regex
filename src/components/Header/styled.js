import styled from 'styled-components';

export const Header = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.darken};
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 906px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const GithubLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`;

export const HeaderLogo = styled.div`
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  transform: scaleY(1.2) scaleX(0.9) translateX(-20px);
`;
