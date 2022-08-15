import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { RouterModule } from '@angular/router';
import { LoaderContainerComponent } from './loader-container.component';

@NgModule({
  declarations: [LoaderContainerComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [LoaderContainerComponent]
})
export class LoaderContainerModule {}
