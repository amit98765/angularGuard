import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { route } from './routes';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';

import { LoginGuard } from './loginGuard';
import { UnsavedChangesGuard } from './unsavedChangesGuard';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule, route, FormsModule, ReactiveFormsModule
  ],
  providers: [LoginGuard, UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
