import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesComponent } from './games.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { CardModule } from 'src/app/components/card/card.module'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SelectModule } from 'src/app/components/select/select.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GamesComponent,
    GameFormComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    Ng2SearchPipeModule,
    SelectModule,
    NgSelectModule,
    HttpClientModule
  ],
  exports: [
    GamesComponent,
    CardModule,
    GameFormComponent,
    GameDetailComponent
  ]
})
export class GamesModule { }
