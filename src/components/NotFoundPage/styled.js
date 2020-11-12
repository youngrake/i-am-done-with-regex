import styled from 'styled-components';

export const ErrorTitle = styled.h1`
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  animation: type 0.5s alternate infinite;
`;

export const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const ErrorContainer = styled.div`
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
  transition: all 0.6s;
  font-family: 'Helvetica', sans-serif;
  color: #888;
  margin: 0;

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;
