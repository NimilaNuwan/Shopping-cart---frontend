import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'product',canActivate:[], loadChildren:()=>import ('./product/product.module').then(m=>m.ProductModule)},
  {path:'cart-item', canActivate:[], loadChildren:()=>import('./cart-item/cart-item.module').then(m=>m.CartItemModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
