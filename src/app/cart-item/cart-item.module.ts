import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CartItemComponent} from "./cart-item/cart-item.component";
import {CartItemRoutingModule} from "./cart-item-routing.module";


@NgModule({
  declarations: [
    CartItemComponent
  ],
  exports: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartItemRoutingModule
  ]
})
export class CartItemModule {
}
