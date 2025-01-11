import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';


@Component({
  selector: 'app-dialog',
  imports: [MatIcon, MatButton, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  public message = '';

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: "Tricolor",
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.message = result !== undefined ? result : '';
    });
  }

}
