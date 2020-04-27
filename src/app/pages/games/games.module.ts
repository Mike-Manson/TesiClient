import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { CardModule } from 'src/app/components/card/card.module'

@NgModule({
  declarations: [
    GamesComponent,
    GameFormComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    GamesComponent,
    CardModule,
    GameFormComponent,
    GameDetailComponent
  ]
})
export class GamesModule { }
