import { Component, OnInit } from '@angular/core';
import { TableDto } from 'src/app/table/table';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  datasource: TableDto = {
    columnDefs: [
      {
        headerName: 'title',
        field: 'title'
      },
      {
        headerName: 'desctiption',
        field: 'description'
      }
    ],
    rowData: [

      {
        title: 'title 1',
        desctiption: 'desctiption 1'
      },
      {
        title: 'title 2',
        desctiption: 'desctiption 2'
      },
      {
        title: 'title 3',
        desctiption: 'desctiption 3'
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
