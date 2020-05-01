import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesApiService } from './games-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ag-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  datasource: Observable<any>;
  searchText: string;

  constructor(
    private router: Router,
    private service: GamesApiService
    ) {
  }

  ngOnInit() {
    this.datasource = this.service.getAll();
  }

  navTo() {
    this.router.navigate(['games', 'game-form']);
  }

  filter() {

  }

}
