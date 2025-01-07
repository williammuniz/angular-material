import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-form-field-input',
  imports: [MatInputModule, FormsModule, MatIconModule],
  templateUrl: './form-field-input.component.html',
  styleUrl: './form-field-input.component.scss'
})
export class FormFieldInputComponent {
  value = '';

}
