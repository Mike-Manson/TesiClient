import { Component, OnInit, Input } from '@angular/core';
import { TableDto } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() datasource: TableDto;

  constructor() { }

  ngOnInit(): void {
  }

}
