import { Component, OnInit } from '@angular/core';
import { GamesDto, Gameplay, Scope, Audience, Pegi } from '../games';

@Component({
  selector: 'ag-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})

export class GameFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  game: GamesDto = {
    id: 0,
    name: '',
    description: '',
    authors: [],
    gameplay: Gameplay.GameBased,
    purpose: [],
    scope: Scope.Education,
    platform: [],
    category: {},
    audience: Audience.Band4,
    img: '',
    pegi: Pegi.PEGi3,
    pegiDescriptors: [],
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(e) {
    console.log(e);

 }

}
