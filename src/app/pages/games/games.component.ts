import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { games } from './games-datasource';
import { GamesDto } from './games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  datasource: GamesDto[];

  constructor(private router: Router) {
    this.datasource = games;
  }

  ngOnInit() {

  }

  navTo() {
    this.router.navigate(['games', 'game-form']);
  }
}
