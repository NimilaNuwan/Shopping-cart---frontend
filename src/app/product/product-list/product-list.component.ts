import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../../service/product.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  // public products!: Product[];
  products:any[]=[];
  constructor(private productService: ProductService) {}

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

}
