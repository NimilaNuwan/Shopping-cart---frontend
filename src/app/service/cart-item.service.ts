import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/enviroment";
import {CartItem} from "../cart-item/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  baseUrl= environment.baseUrl;
  constructor(private http: HttpClient ) { }
  public getCartItems(){
    return this.http.get(this.baseUrl + '/item/all/1');
  }
  public addItem(cartItem: any){
    return this.http.post(this.baseUrl + '/item/add',cartItem);
  }
  public updateItem(cartItem: any){
    return this.http.put(this.baseUrl + '/item/update' ,cartItem);
  }
  public deleteItem(itemId: number){
    return this.http.delete(this.baseUrl + '/item/delete/' + itemId);
  }
  public clearCart(cartId: number){
    return this.http.delete(this.baseUrl + '/item/clear/' + cartId);
  }
}
