import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './components/my-first-comp/my-first-comp.component';
import {FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './components/message-details/message-details.component';
import {MyFirstService} from "./services/my-first.service";
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import {provideHttpClient} from "@angular/common/http";
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NewProductComponent } from './components/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    MyFirstService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
