import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort, MatSortModule } from '@angular/material/sort'
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';




import { DATA_MOVIES } from './model/data-movies';

@Component({
  selector: 'app-datatable',
  imports: [MatTableModule, MatPaginator, MatSort, MatSortModule, MatFormField, MatLabel,
    MatFormFieldModule, MatInputModule],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(DATA_MOVIES);

  displayedNameColumns: string[] = ['name', 'category', 'rating', 'year', 'director'];

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
