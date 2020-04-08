import { Component, OnInit } from '@angular/core';
import { TableDto } from 'src/app/components/table/table';
import { Router } from '@angular/router';

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
    rowData: [
      {
        name: 'Gioco 1',
        description: 'Descrizione 1',
        authors: 'Autore 1',
        gameplay: 'Gameplay 1',
        scope: 'MilitaryDefense',
        platform: 'Virtual',
        audience: 'Band5',
      },
      {
        name: 'Gioco 2',
        description: 'Descrizione 2',
        authors: 'Autore 2',
        gameplay: 'Gameplay 2',
        scope: 'MilitaryDefense',
        platform: 'Virtual',
        audience: 'Band5',
      },
      {
        name: 'Gioco 3',
        description: 'Descrizione 3',
        authors: 'Autore 3',
        gameplay: 'Gameplay 3',
        scope: 'MilitaryDefense',
        platform: 'Virtual',
        audience: 'Band5',
      },
      {
        name: 'Gioco 4',
        description: 'Descrizione 4',
        authors: 'Autore 4',
        gameplay: 'Gameplay 4',
        scope: 'MilitaryDefense',
        platform: 'Virtual',
        audience: 'Band5',
      },
      {
        name: 'Gioco 5',
        description: 'Descrizione 5',
        authors: 'Autore 5',
        gameplay: 'Gameplay 5',
        scope: 'MilitaryDefense',
        platform: 'Virtual',
        audience: 'Band5',
      },
      {
        name: 'Gioco 6',
        description: 'Descrizione 6',
        authors: 'Autore 6',
        gameplay: 'Gameplay 6',
        scope: 'MilitaryDefense',
        platform: 'Virtual',
        audience: 'Band5',
      },
    ]
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navTo() {
    this.router.navigate(['games', 'game-form']);
  }

}
