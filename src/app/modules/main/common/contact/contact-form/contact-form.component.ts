import { Component, OnInit } from '@angular/core';
import { BaseFormAbstractComponent } from '@base/misc/abstracts/base-form.abstract.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent extends BaseFormAbstractComponent implements OnInit {
  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this._initForm();
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    console.log('Send form', this.formGroup.value);
  }

  private _initForm(): void {
    this.formGroup = this._fb.group({
      name: this._fb.control('', Validators.compose([Validators.required])),
      email: this._fb.control('', Validators.compose([Validators.required, Validators.email])),
      message: this._fb.control('', Validators.compose([Validators.required]))
    });
  }
}
