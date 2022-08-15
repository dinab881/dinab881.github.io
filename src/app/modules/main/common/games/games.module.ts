import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from '@modules/main/common/games/games-list/games-list.component';
import { GamesListModule } from '@modules/main/common/games/games-list/games-list.module';

const routes: Routes = [
  {
    path: 'list',
    component: GamesListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), GamesListModule]
})
export class GamesModule {}
