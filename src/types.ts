
export interface Product {
  id: string;
  image: string;
  name: string;
  categories: string[];
  range: {
    min: number;
    max: number;
  };
  currency: string;
  description?: string;
  selectedPrice?: number; 
}


export interface ProductGridProps {
  products: Product[];
}

export interface ProductDetailsProps {
  product: Product;      
  onClose: () => void;   
}
