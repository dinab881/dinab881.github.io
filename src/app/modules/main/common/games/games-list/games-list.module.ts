import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [GamesListComponent],
  imports: [CommonModule, SharedModule]
})
export class GamesListModule {}
