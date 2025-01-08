import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Platform } from '@angular/cdk/platform'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import moment from 'moment';

import 'moment/locale/pt-br'; 

moment.locale('pt-br'); 



@Component({
  selector: 'app-datepiker',
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatMomentDateModule
  ],
  templateUrl: './datepiker.component.html',
  styleUrl: './datepiker.component.scss'
})
export class DatepikerComponent {

  startDate = moment([2024,0,1]);
  minDate = moment([2023, 0, 1]);
  maxDate = moment([2024, 11, 20]);

  constructor(private platform: Platform) {

  }

  get isTouchDivice() {
    return this.platform.ANDROID || this.platform.IOS;
  }

}
