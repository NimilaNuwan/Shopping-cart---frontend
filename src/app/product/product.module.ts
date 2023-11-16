import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import {BrowserModule} from "@angular/platform-browser";
import {ProductService} from "../service/product.service";


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
