import { Component, OnInit } from '@angular/core';
import { TableDto } from 'src/app/components/table/table';

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
        headerName: 'description',
        field: 'description'
      }
    ],
    rowData: [

      {
        title: 'title 1',
        description: 'description 1'
      },
      {
        title: 'title 2',
        description: 'description 2'
      },
      {
        title: 'title 3',
        description: 'description 3'
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
