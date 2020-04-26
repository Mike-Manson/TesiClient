import { Component, OnInit } from '@angular/core';
import { TableDto } from 'src/app/components/table/table';
import { Router } from '@angular/router';
import { games } from './games-datasource';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  datasource: TableDto = {
    columnDefs: [
      {
        headerName: 'Name',
        field: 'name'
      },
      {
        headerName: 'Description',
        field: 'description'
      },
      {
        headerName: 'Authors',
        field: 'authors'
      },
      {
        headerName: 'Gameplay',
        field: 'gameplay'
      },
      {
        headerName: 'Scope',
        field: 'scope'
      },
      {
        headerName: 'Platform',
        field: 'platform'
      },
      {
        headerName: 'Audience',
        field: 'audience'
      }
    ],
    rowData: games,
    rowClicked: e => this.goToDetailPage(e)
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navTo() {
    this.router.navigate(['games', 'game-form']);
  }

  goToDetailPage(row) {
    console.log(row);
    const id = row.data.id;
    this.router.navigate(['games', id]);
  }

}
