import {RouterModule, Routes} from "@angular/router";
import {CartItemComponent} from "./cart-item.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path:'item list', component: CartItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartItemRoutingModule { }
