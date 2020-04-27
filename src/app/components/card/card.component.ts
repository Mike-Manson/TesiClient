import { Component, OnInit, Input } from '@angular/core';
import { GamesDto } from 'src/app/pages/games/games';
import { Router } from '@angular/router';

@Component({
  selector: 'ag-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() data: GamesDto;

  constructor(private router: Router) { }

  navTo(id: number) {
    this.router.navigate(['games', id]);
  }

}
