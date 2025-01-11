import { Routes } from '@angular/router';
import { ButtonsIconComponent } from './buttons-icon/buttons-icon.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepikerComponent } from './datepiker/datepiker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';

export const routes: Routes = [
    { path: '', redirectTo: 'buttonIcon', pathMatch: 'full' },
    { path: 'buttonIcon', component: ButtonsIconComponent },
    { path: 'formFieldInput', component: FormFieldInputComponent },
    { path: 'progsBarSpinner', component: ProgressSpinnerComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'datePiker', component: DatepikerComponent },
    { path: 'snackbar', component: SnackbarComponent },
    { path: 'dialog', component: DialogComponent },
];
