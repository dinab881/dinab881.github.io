import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SharedModule } from '@base/common/shared/shared.module';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild([{ path: '', component: ContactComponent }])]
})
export class ContactModule {}
