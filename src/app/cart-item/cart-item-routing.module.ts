import {RouterModule, Routes} from "@angular/router";
import {CartItemComponent} from "./cart-item/cart-item.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path:'cart-item-list', component: CartItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartItemRoutingModule { }
