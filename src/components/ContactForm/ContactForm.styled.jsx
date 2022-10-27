import styled from 'styled-components';

export const Form = styled.form`
font-size: 14px;
// color: darkviolet;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  margin-top: 2px;
  border: 1px solid darkviolet;
  box-shadow: 2px 2px 2px darkviolet;
  border-radius: 4px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid darkviolet;
  border-radius: 4px;
  box-shadow: 1px 1px 1px darkviolet;
  :hover {
    background-color: violet;
  }
`;
