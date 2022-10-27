import styled from 'styled-components';
import { IoIosContact } from 'react-icons/io';

export const Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 14px;
`;

export const ContactIcon = styled(IoIosContact)`
    margin-right: 2px;
`;

export const ContactName = styled.span`
  display: inline-block;
  min-width: 150px;
  
`;

export const ContactNumber = styled.span`
  display: inline-block;
  min-width: 150px;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 10px;
  border: 1px solid darkviolet;
  border-radius: 4px;
  box-shadow: 1px 1px 1px darkviolet;
  :hover {
    background-color: violet;} 
`;
