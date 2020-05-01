import { Component, OnInit } from '@angular/core';
import { GamesDto, Gameplay, Scope, Audience, Pegi, AllPlatform } from '../games';
import { Router } from '@angular/router';

@Component({
  selector: 'ag-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})

export class GameFormComponent implements OnInit {

  selectedPlatform;
  platforms =  Object.values(AllPlatform)

  gameplays =  Object.values(Gameplay);

  game: GamesDto = {
    id: 0,
    name: '',
    description: '',
    authors: [],
    gameplay: Gameplay.GameBased,
    purpose: [],
    scope: Scope.Education,
    platform: [],
    category: {
      actionAdventure: [],
      actionGames: [],
      adventure: [],
      idle: [],
      puzzle: [],
      rolePlaying: [],
      simulation: [],
      sports: [],
      strategy: []
    },
    audience: [],
    img: '',
    pegi: Pegi.PEGi3,
    pegiDescriptors: [],
  };

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit(e) {
    console.log(e, this.selectedPlatform);
    // this.router.navigate(['games', 'game-form']);
 }

}
