import {Component, OnInit} from '@angular/core';
import {CartItemService} from "../../service/cart-item.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {CartItem} from "../cart-item";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{
  items: CartItem[]=[];
  constructor(private cartItemService: CartItemService) {}

  ngOnInit() {
    this.getItems();
  }

  public getItems(): void {
    this.cartItemService.getCartItems().subscribe(
      (response: any) => {
        this.items = response;
        // @ts-ignore
        document.getElementById('totalField').innerHTML = "$" + this.getTotal(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    // @ts-ignore
    //document.getElementById('totalField').innerHTML = "$" + this.getTotal(response);
  }

  public deleteItem(item: CartItem): void{
    this.cartItemService.deleteItem(item.itemId).subscribe(
      (response: any) => {
        console.log(response);
        this.getItems();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public updateItem(itemId:number, quantity:string){
    const itemUpdateData = {
      itemId: itemId,
      quantity: parseInt(quantity)
    };
    this.cartItemService.updateItem(itemUpdateData).subscribe(
      (response: any) => {
        console.log(response);
        this.getItems();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  private getTotal(items: CartItem[]) :number{
    let total = 0;
    for (let item of this.items) {
      total += item.itemTotal;
    }
    return parseFloat(total.toFixed(2));
  }
  public addItem(productId:number){
    const addItemData = {
      cartId: 1,
      productId: productId,
      quantity: 1
    };
    this.cartItemService.addItem(addItemData).subscribe(
      (response: any) => {
        console.log(response);
        this.getItems();
      }
    )
  }
}
