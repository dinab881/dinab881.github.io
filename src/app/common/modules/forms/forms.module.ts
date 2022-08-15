import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseTextareaModule } from '@forms/base-textarea/base-textarea.module';
import { BaseInputModule } from './base-input/base-input.module';
import { BaseRangeInputModule } from './base-range-input/base-range-input.module';
import { BaseSelectModule } from './base-select/base-select.module';

@NgModule({
  exports: [FormsModule, ReactiveFormsModule, BaseInputModule, BaseSelectModule, BaseTextareaModule, BaseRangeInputModule]
})
export class AppFormsModule {}
