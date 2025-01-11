import { Component, Inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';





@Component({
  selector: 'app-dialog-modal',
  imports: [MatIcon, MatButton, MatDialogModule],
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss'
})
export class DialogModalComponent {


  constructor(public matDialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string

  ) { }


  closeDialog() {
    this.matDialogRef.close('Returned Tricolor');
  }
}
