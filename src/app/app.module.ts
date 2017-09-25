import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { route } from './routes';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
