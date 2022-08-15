import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseSelectComponent } from './base-select.component';

@NgModule({
  declarations: [BaseSelectComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [BaseSelectComponent]
})
export class BaseSelectModule {}
