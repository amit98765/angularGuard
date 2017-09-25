import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent>{

    canDeactivate(component: ProductDetailComponent) {
        if (component.name.dirty) {
            return window.confirm("You have some unsaved changes. Still want to leave?");
        }
        else
            return true;
    }
} 