import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseRangeInputComponent } from './base-range-input.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [BaseRangeInputComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  exports: [BaseRangeInputComponent]
})
export class BaseRangeInputModule {}
