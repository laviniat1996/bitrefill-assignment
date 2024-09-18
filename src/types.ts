// types.ts

// src/types.ts

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
  selectedPrice?: number; // Optional selected price for each product
}


export interface ProductGridProps {
  products: Product[];
}

export interface ProductDetailsProps {
  product: Product;       // Changed from 'products: Product[]' to 'product: Product'
  onClose: () => void;    // Include the onClose function as a prop
}
