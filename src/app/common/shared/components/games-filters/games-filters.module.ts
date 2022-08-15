import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesFiltersComponent } from './games-filters.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { AppFormsModule } from '@base/common/modules/forms/forms.module';

@NgModule({
  declarations: [GamesFiltersComponent],
  imports: [CommonModule, MaterialModule, RouterModule, TranslateModule, AppFormsModule],
  exports: [GamesFiltersComponent]
})
export class GamesFiltersModule {}
