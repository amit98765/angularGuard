import { CanDeactivate } from '@angular/router';


import { ProductDetailComponent } from './product-detail/product-detail.component';

export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent>{

    canDeactivate(component: ProductDetailComponent) {
        if (component.name.dirty) {
            return window.confirm("You have some unsaved changes. Still want to leave?");
        }
        else
            return true;
    }
}