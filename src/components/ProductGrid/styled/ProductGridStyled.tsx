import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  background-color: #F8FAF9;
  display: flex;
  justify-content: center;
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background-color: #F8FAF9;
  padding: 40px 0;
  width: 100%;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid #ECEFED;
  border-radius: 0;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #FFFFFF;
`;

export const ProductImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #ECEFED;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
`;

export const ProductPrice = styled.p`
  color: #6A716E;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;