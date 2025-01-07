import { Routes } from '@angular/router';
import { ButtonsIconComponent } from './buttons-icon/buttons-icon.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';

export const routes: Routes = [
    { path: '', redirectTo: 'buttonIcon', pathMatch: 'full' },
    { path: 'buttonIcon', component: ButtonsIconComponent },
    { path: 'formFieldInput', component: FormFieldInputComponent },
];
