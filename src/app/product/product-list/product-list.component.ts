import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../../service/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {CartItemService} from "../../service/cart-item.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  // public products!: Product[];
  products:any[]=[];
  constructor(private productService: ProductService, private cartItemService:CartItemService) {}

  ngOnInit() {
    this.getProducts();
  }
  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response:any) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
   public addToCart(productId: number){
     const addItemData = {
       cartId: 1,
       productId: productId,
       quantity: 1
     };
     this.cartItemService.addItem(addItemData).subscribe(
       (response: any) => {
         console.log(response);
         this.getProducts();
       }
     )
   }

   public searchProducts(key: string): void {
    const results: Product[] = [];
    for(const product of this.products) {
      if(product.productName.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !==-1){
        results.push(product);
      }
    }
    this.products = results;
    if(results.length === 0 || !key) {
      this.getProducts();
    }
   }
}
