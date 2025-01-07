import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';


@Component({
  selector: 'app-progress-spinner',
  imports: [MatProgressBarModule, MatProgressSpinnerModule],
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.scss'
})
export class ProgressSpinnerComponent implements OnInit {

  loadingPercent = 0;
  queryValue = 0;
  queryMode: ProgressBarMode = 'query';
  currentPlayback = 0;


  constructor() {

  }

  ngOnInit(): void {
    this.loadingProgress(500).subscribe(i => this.loadingPercent = i);

    this.loadingProgress(420).subscribe(i => this.currentPlayback = i);


    concat(
      interval(3000).
        pipe(
          take(1),
          tap(_ => (this.queryMode = 'determinate')),
        ),
      this.loadingProgress(500)).subscribe(i => this.queryValue = i);
  }

  loadingProgress(speed: number) {
    return interval(speed).pipe(
      map(i => i * 10),
      takeWhile(i => i <= 100)
    );
  }
}
