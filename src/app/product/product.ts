import {Category} from "../category/category";

export interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  imageUrl: string;
  price: number;
  quantity: number;
  category: Category;
}
