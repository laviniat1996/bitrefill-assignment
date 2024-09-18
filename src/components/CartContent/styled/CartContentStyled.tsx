import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000066;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 12px;
`;

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #ECEFED;
`;

export const CartItemImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const CartItemDetails = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;

export const CartItemName = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: #002B28;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CartItemPrice = styled.p`
  font-size: 16px;
  font-weight: 400px;
  color: #6A716E;
  margin: 5px 0 0;
`;

export const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CartItemActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; 
`;

export const CartItemTotalPrice = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #002B28;
  margin-top: 10px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: #EA0B2C;
  }

  svg {
    width: 17.45px;
    height: 17.45px;
    fill: #002B28;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  height:48px;
  justify-content: space-between;
  align-items: center; 
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #002B28;

  span:first-child {
    font-weight: 400;
  }

  span:last-child {
    font-weight: 600;
  }
`;
