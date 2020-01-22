import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ActionproductComponent } from './actionproduct/actionproduct.component';
import { CartComponent } from './cart/cart.component';

const route:Routes=[{path:'product',component:ProductComponent},
                     {path:'actionproduct/:data',component:ActionproductComponent},
                    {path:'cart', component:CartComponent},
                   // {path:'cart',component:CartComponent}
                  ];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ActionproductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
