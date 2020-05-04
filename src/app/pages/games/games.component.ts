import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesApiService } from './games-api.service';
import { Observable } from 'rxjs';
import { AllPlatform, Purpose, Gameplay, Scope, Pegi, PegiDescriptor, ActionAdventure, ActionGames, Adventure, Idle, Puzzle, RolePlaying, Simulation, Sports, Strategy, Audience, GamesDto } from './games';
import { filter, find } from 'rxjs/operators';

@Component({
  selector: 'ag-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  filterOpened = false;
  datasource: Observable<any>;
  searchText: string;

  platforms =  Object.values(AllPlatform)
  purposes =  Object.values(Purpose)
  gameplays =  Object.values(Gameplay);
  scopes =  Object.values(Scope);
  pegis = Object.values(Pegi);
  descriptors = Object.values(PegiDescriptor);
  actionAdventure = Object.values(ActionAdventure);
  actionGames = Object.values(ActionGames);
  adventure = Object.values(Adventure);
  idle = Object.values(Idle);
  puzzle = Object.values(Puzzle);
  rolePlaying = Object.values(RolePlaying);
  simulation = Object.values(Simulation);
  sports = Object.values(Sports);
  strategy = Object.values(Strategy);
  audience = Object.values(Audience);

  game: GamesDto = {
    id: 0,
    name: '',
    description: '',
    authors: [],
    gameplay: Gameplay.GameBased,
    purpose: [],
    scope: [],
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

  filter(game) {
    this.datasource = this.service.search(game);
    // this.datasource = this.service.getAll(game)
  }

 selectedPegi(pegi: Pegi) {
  switch (pegi) {
    case Pegi.PEGi3:
      return 'assets/PEGi/PEGi3.png';
    case Pegi.PEGi7:
      return 'assets/PEGi/PEGi7.png';
    case Pegi.PEGi12:
      return 'assets/PEGi/PEGi12.png';
    case Pegi.PEGi16:
      return 'assets/PEGi/PEGi16.png';
    case Pegi.PEGi18:
      return 'assets/PEGi/PEGi18.png';
    default:
      return 'assets/no-image.jpg';
  }
}

selectedPegiDescriptor(descriptor: PegiDescriptor) {
  switch (descriptor) {
    case PegiDescriptor.BadLanguage:
      return 'assets/PEGi/descriptors/bad-language.png';
    case PegiDescriptor.Discrimination:
      return 'assets/PEGi/descriptors/discrimination.png';
    case PegiDescriptor.Drugs:
      return 'assets/PEGi/descriptors/drugs.jpg';
    case PegiDescriptor.Fear:
      return 'assets/PEGi/descriptors/fear.png';
    case PegiDescriptor.Gambling:
      return 'assets/PEGi/descriptors/gambling.png';
    case PegiDescriptor.InGamePurchases:
      return 'assets/PEGi/descriptors/in-game-purchase.jpg';
    case PegiDescriptor.Online:
      return 'assets/PEGi/descriptors/online.png';
    case PegiDescriptor.Sex:
      return 'assets/PEGi/descriptors/sex.png';
    case PegiDescriptor.Violence:
      return 'assets/PEGi/descriptors/violence.png';
    default:
      return 'assets/no-image.jpg';
  }
}

}
