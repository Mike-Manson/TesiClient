import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesDto, Pegi, PegiDescriptor } from '../games';
import { Location } from '@angular/common';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  selectedGame: GamesDto;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private service: GamesApiService
    ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.getById(id).subscribe(g => {
      // this.selectedGame = g
    });

  }

  selectedPegi() {
    switch (this.selectedGame.pegi) {
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
