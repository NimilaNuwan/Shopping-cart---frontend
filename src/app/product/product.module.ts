import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductService} from "../service/product.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [ProductService]
})
export class ProductModule {
}
