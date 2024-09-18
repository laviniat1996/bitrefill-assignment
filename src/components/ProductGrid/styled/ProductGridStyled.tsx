import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  gap: 40px;
  background-color: #F8FAF9;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 40px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  gap: 4px;
  width: 18%;
  align-items: flex-start;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02); 
    box-shadow: 0 8px 20px #00000033; 
  }

  @media (max-width: 1200px) {
    width: 28%; 
  }

  @media (max-width: 900px) {
    width: 38%; 
  }

  @media (max-width: 600px) {
    width: 38%;
  }

  &:nth-last-child(1) {
    margin-right: auto;
  }
`;


export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;   
  width: 100%; 
  height: 206px; 
  border: 1px solid #ECEFED;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #FFFFFF;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0 0; 
`;

export const ProductPrice = styled.p`
  color: #6A716E;
  font-size: 16px;
  font-weight: 400px;
  margin: 10px 0 0; 
`;
