export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    discount: number | null;
    favorite: boolean;
  }

// export class Product {
//     id!: number;
//     name!: string;
//     description!: string;
//     price!: number;
//     imageUrl!: string;
//     discount!: number;
//     favorite!: boolean;
//   }