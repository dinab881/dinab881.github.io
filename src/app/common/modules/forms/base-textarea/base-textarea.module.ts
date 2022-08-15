import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseTextareaComponent } from './base-textarea.component';

@NgModule({
  declarations: [BaseTextareaComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [BaseTextareaComponent]
})
export class BaseTextareaModule {}
