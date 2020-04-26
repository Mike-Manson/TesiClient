import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { TableModule } from 'src/app/components/table/table.module';
import { GameFormComponent } from './game-form/game-form.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    GamesComponent,
    GameFormComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    GamesComponent,
    TableModule,
    GameFormComponent,
    GameDetailComponent
  ]
})
export class GamesModule { }
