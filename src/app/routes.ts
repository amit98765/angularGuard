import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'product-detail', component: ProductDetailComponent, canActivate: [LoginGuard], canDeactivate: [UnsavedChangesGuard] }

]

export const route = RouterModule.forRoot(routes);