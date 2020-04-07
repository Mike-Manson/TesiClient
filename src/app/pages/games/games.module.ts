import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { TableModule } from 'src/app/components/table/table.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [GamesComponent, TableModule]
})
export class GamesModule { }
