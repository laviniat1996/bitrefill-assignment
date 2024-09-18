import styled from "styled-components";

export const StyledButton = styled.button<{ center?: boolean }>`
  background-color: #EA0B2C;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  padding: 0px 14px;
  margin: ${({ center }) => (center ? '0 auto' : '0')};
  border-radius: 40px;
  cursor: pointer;
  display: flex; 
  justify-content: center; 
  align-items: center;
  width: 279px;
  height: 40px;
  border: none;
  box-shadow: none;

  &:hover {
    background-color: #D92240;
  }
`;
