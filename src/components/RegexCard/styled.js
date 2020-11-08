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
  padding: 10px;
  border-radius: 0.3em;
  box-shadow: rgba(26, 26, 26, 0.2) 0px 4px 6px,
    rgba(26, 26, 26, 0.1) 0px 5px 15px;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const Icon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0;
  width: 20px;
`;

export const DescriptionBlock = styled.div``;

export const Tags = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  user-select: none;
  list-style-type: none;
  margin-top: 10px;
`;

export const Tag = styled.li`
  display: inline-block;
  color: black;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 2px 5px;
  margin: 5px 5px;
  background-color: #ffa700;

  :hover {
    background-color: #ffbd40;
  }
`;

const input = styled.input`
  width: 100%;
  height: 46px;
  text-align: center;
  color: rgb(234, 234, 234);
  background-color: rgb(44, 48, 53);
  border: 1px solid rgb(44, 48, 53);
  outline: none;
  border-radius: 0.4em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px inset;
`;

export const Regex = styled(input)`
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Input = styled(input)`
  &:valid {
    border-color: green;
  }
  &:invalid:focus:not(:placeholder-shown) {
    border-color: #a60000;
  }
`;
