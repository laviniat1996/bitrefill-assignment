import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  height: 68px;
  width: 100%;
  border-bottom: 1px solid #ECEFED; 
`;

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center; 
  position: relative;
  cursor: pointer;
  margin-right: 9%;

  @media (max-width: 1200px) and (min-width: 900px) {
    margin-right: 3%;
  }
`;

export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CartCountBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #EA0B2C;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 14px;
  border: 2px solid #FCFCFC;
`;

export const Logo = styled.img`
  width: 114.78px;
  height: 28px;
  margin-left: 9%;

  @media (max-width: 1200px) and (min-width: 900px) {
    margin-left: 3%;
  }
`;

export const Cart = styled.img`
  width: 36px;
  height: 36px;
`;

export const CartText = styled.span`
  margin-left: 10px; 
  font-size: 16px;
  color: #002B28;
  font-weight: 600;
`;
