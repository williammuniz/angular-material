import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';





@Component({
  selector: 'app-dialog-modal',
  imports: [MatIcon, MatButton, MatDialogModule],
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss'
})
export class DialogModalComponent {

  constructor(public matDialogRef: MatDialogRef<DialogModalComponent>) { }


  closeDialog() {
    this.matDialogRef.close();
  }
}
