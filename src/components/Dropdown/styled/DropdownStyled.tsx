import styled from 'styled-components';

export const DropdownContainer = styled.div<{ size: 'small' | 'medium'; center?: boolean; extraMargin?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid #D7DCDA;
  border-radius: 40px;
  width: ${({ size }) => (size === 'small' ? '80px' : '160px')};
  height: ${({ size }) => (size === 'small' ? '40px' : '50px')};
  background-color: white;
  margin: ${({ center }) => (center ? '0 auto' : '0')};
  margin-top: ${({ extraMargin }) => (extraMargin ? '10px' : '0')};
  margin-bottom: ${({ extraMargin }) => (extraMargin ? '10px' : '0')}; 
`;

export const Select = styled.select<{ size: 'small' | 'medium' }>`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  appearance: none;
  padding-left: 15px;
  padding-right: 35px;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled.svg`
  position: absolute;
  right: 10px;
  pointer-events: none;
  width: 20px;
  height: 20px;
  fill: #1D242B;
`;
