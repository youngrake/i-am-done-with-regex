import styled from 'styled-components';

export const RegexCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  float: left;
  left: 0;
  top: 0;
  width: 292px;
  margin: 5px;
  border-radius: 0.3em;
  box-shadow: rgba(26, 26, 26, 0.2) 0px 4px 6px,
    rgba(26, 26, 26, 0.1) 0px 5px 15px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 10px;
`;

export const Tags = styled.ul`
  user-select: none;
  padding: 0;
  list-style-type: none;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const DescriptionBlock = styled.div``;

export const Tag = styled.li`
  color: black;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 7px 15px;
  margin: 0 5px;
  background-color: #ffa700;

  :hover {
    background-color: #ffbd40;
  }
`;

export const Regex = styled.input`
  cursor: pointer;
  width: 90%;
  text-align: center;
  height: 46px;
  color: rgb(234, 234, 234);
  background-color: rgb(44, 48, 53);
  border: 1px solid rgb(44, 48, 53);
  outline: none;
  border-radius: 0.4em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px inset;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  text-align: center;
  padding: 10px;
  height: 46px;
  width: 90%;
  color: rgb(234, 234, 234);
  background-color: rgb(44, 48, 53);
  border: 1px solid rgb(44, 48, 53);
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px inset;
  border-radius: 0.4em;
`;
