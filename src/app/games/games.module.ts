import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { TableModule } from 'src/app/table/table.module';



@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class GamesModule { }
