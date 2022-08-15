import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseFormFieldAbstractComponent } from '@misc/abstracts/base-form-field.abstract.component';
import { filter, map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'base-range-input',
  templateUrl: './base-range-input.component.html',
  styleUrls: ['./base-range-input.component.scss']
})
export class BaseRangeInputComponent extends BaseFormFieldAbstractComponent implements OnInit, OnChanges {
  innerControl: FormControl = new FormControl();
  @Input() min: number = 0;
  @Input() max: number = 100;

  ngOnInit(): void {
    this._subscribeToChanges();
  }

  override ngOnChanges({ value, disabled, placeholder, control }: SimpleChanges) {
    super.ngOnChanges({ value, disabled, placeholder, control });

    if (control) {
      this.innerControl.setValue(control.currentValue?.value?.join?.(' - '));
    }
  }

  private _subscribeToChanges(): void {
    this.innerControl.valueChanges
      .pipe(
        tap((value: string): void => {
          if (/(\d)- - /gm.test(value)) {
            this.innerControl.setValue(value.replace(/(\d)- - /gm, '$1 - '));
          }
        }),
        map((value: string): string[] => value.replace(/\n/gm, '').split('-')),
        filter(([min]: string[]): boolean => this._isValidNumber(min)),
        map(([min, max]: string[]): [number, number] => [parseFloat(min), this._isValidNumber(max) ? parseFloat(max) : this.max]),
        filter(([min, max]: [number, number]): boolean => {
          const minValid: boolean = min >= this.min;
          const maxValid: boolean = max <= this.max;

          if (!minValid) {
            this.innerControl.setValue(`${this.min} - ${max}`);
          }

          if (!maxValid) {
            this.innerControl.setValue(`${min} - ${this.max}`);
          }

          return minValid && maxValid;
        })
      )
      .subscribe((value: [number, number]): void => this.control?.setValue(value));
  }

  private _isValidNumber(value: number | string): boolean {
    return !isNaN(parseFloat(String(value))) && isFinite(parseFloat(String(value)));
  }
}
