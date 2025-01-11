import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort, MatSortModule } from '@angular/material/sort'


import { DATA_MOVIES } from './model/data-movies';

@Component({
  selector: 'app-datatable',
  imports: [MatTableModule, MatPaginator, MatSort, MatSortModule],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  dataSource = new MatTableDataSource(DATA_MOVIES);

  displayedNameColumns: string[] = ['name', 'category', 'rating', 'year', 'director'];
}
