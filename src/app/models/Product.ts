export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    discount: number | null;
    favorite: boolean;
  }
