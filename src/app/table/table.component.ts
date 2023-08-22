import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  course: string;
  percentage: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Manu', course:'MEARN', percentage:'99%'},
  {position: 2, name: 'Nimmi', course:'PYTHON', percentage:'98%'},
  {position: 3, name: 'Liya', course:'JAVA', percentage:'95%'},
  {position: 4, name: 'Miya', course:'FLUTTER', percentage:'96%'},
  {position: 5, name: 'Binu', course:'BIG DATA',percentage:'97%'},
  {position: 6, name: 'Catherin', course:'TESTING', percentage:'90%'},
  {position: 7, name: 'Nihara', course:'.NET', percentage:'91%'},
  {position: 8, name: 'Oxygen', course:'MEARN', percentage:'99%'},
  {position: 9, name: 'Fluorine',course:'MEARN', percentage:'99%'},
  {position: 10, name: 'Neon', course:'MEARN', percentage:'99%'},
  {position: 11, name: 'Sodium', course:'MEARN', percentage:'99%'},
  {position: 12, name: 'Magnesium', course:'MEARN', percentage:'99%'},
  {position: 13, name: 'Aluminum', course:'MEARN', percentage:'99%'},
  {position: 14, name: 'Silicon', course:'MEARN', percentage:'99%'},
  {position: 15, name: 'Phosphorus', course:'MEARN', percentage:'99%'},
  {position: 16, name: 'Sulfur', course:'MEARN', percentage:'99%'},
  {position: 17, name: 'Chlorine', course:'MEARN', percentage:'99%'},
  {position: 18, name: 'Argon', course:'MEARN', percentage:'99%'},
  {position: 19, name: 'Potassium',course:'MEARN', percentage:'99%'},
  {position: 20, name: 'Calcium', course:'MEARN', percentage:'99%'},
];
