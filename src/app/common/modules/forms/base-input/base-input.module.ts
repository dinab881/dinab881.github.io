import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseInputComponent } from './base-input.component';

@NgModule({
  declarations: [BaseInputComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [BaseInputComponent]
})
export class BaseInputModule {}
