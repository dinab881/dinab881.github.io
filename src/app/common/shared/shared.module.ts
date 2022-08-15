import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { RouterModule } from '@angular/router';
import { AppFormsModule } from '@forms/forms.module';
import { DirectivesModule } from '@directives/directives.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [MaterialModule, RouterModule, AppFormsModule, DirectivesModule, SharedComponentsModule, TranslateModule]
})
export class SharedModule {}
