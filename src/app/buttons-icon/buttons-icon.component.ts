import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-icon',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './buttons-icon.component.html',
  styleUrl: './buttons-icon.component.scss'
})
export class ButtonsIconComponent {

}
