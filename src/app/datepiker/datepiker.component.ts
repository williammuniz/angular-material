import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-datepiker',
  imports: [MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
  templateUrl: './datepiker.component.html',
  styleUrl: './datepiker.component.scss'
})
export class DatepikerComponent {

}
