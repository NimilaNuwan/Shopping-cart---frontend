import {Product} from "../product/product";
import {ShoppingCart} from "../shopping-cart/shopping-cart";

export interface CartItem {
  itemId: number;
  product: Product;
  quantity: number;
  itemTotal: number;
  cart: ShoppingCart;
}
