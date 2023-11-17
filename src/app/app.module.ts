import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductModule} from "./product/product.module";
import {HttpClientModule} from "@angular/common/http";
import {CartItemModule} from "./cart-item/cart-item.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    CartItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
