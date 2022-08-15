import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePlaceholderDirective } from '@directives/image-placeholder/image-placeholder.directive';

@NgModule({
  declarations: [ImagePlaceholderDirective],
  exports: [ImagePlaceholderDirective],
  imports: [CommonModule]
})
export class DirectivesModule {}
