import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyFirstCompComponent} from "./components/my-first-comp/my-first-comp.component";
import {AboutComponent} from "./components/about/about.component";
import {ProductsComponent} from "./components/products/products.component";
import {NewProductComponent} from "./components/new-product/new-product.component";

const routes: Routes = [
  {
    path: 'home',
    component: MyFirstCompComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
