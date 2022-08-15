import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameItemComponent } from './game-item.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@base/pipes/pipes.module';
import { DirectivesModule } from '@base/directives/directives.module';

@NgModule({
  declarations: [GameItemComponent],
  imports: [CommonModule, MaterialModule, RouterModule, TranslateModule, PipesModule, DirectivesModule],
  exports: [GameItemComponent]
})
export class GameItemModule {}
