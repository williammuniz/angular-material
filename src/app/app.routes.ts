import { Routes } from '@angular/router';
import { ButtonsIconComponent } from './buttons-icon/buttons-icon.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

export const routes: Routes = [
    { path: '', redirectTo: 'buttonIcon', pathMatch: 'full' },
    { path: 'buttonIcon', component: ButtonsIconComponent },
    { path: 'formFieldInput', component: FormFieldInputComponent },
    { path: 'progsBarSpinner', component: ProgressSpinnerComponent },

];
