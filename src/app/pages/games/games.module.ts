import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { TableModule } from 'src/app/components/table/table.module';
import { GameFormComponent } from './game-form/game-form.component';

@NgModule({
  declarations: [
    GamesComponent,
    GameFormComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    GamesComponent,
    TableModule,
    GameFormComponent
  ]
})
export class GamesModule { }
