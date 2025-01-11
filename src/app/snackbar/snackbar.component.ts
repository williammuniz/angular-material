import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-snackbar',
  imports: [MatSnackBarModule, MatIconModule, MatButtonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent implements OnInit {

  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    //this.snackBar.open('Teste snackbar', 'Close', { duration: 2000 });
  }

  openSnackBar(): void {
    const snackBar = this.snackBar.open('Teste snackbar', 'Close', { duration: 2000 });
    snackBar.afterDismissed().subscribe(() => console.log("fechou"));

    snackBar.onAction().subscribe(() => console.log("On Action"));
  }

  openFromComponent(): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: 'Hello Pepoppe',
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 2000,
    });

  }
}
