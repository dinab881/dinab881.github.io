import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DEFAULT_FILTER } from '@base/misc/constants/default-filter.constant';
import { OrderDirection } from '@base/models/enums/sort.enum';
import { IOption } from '@base/models/interfaces/forms/option.interface';
import { FilterService } from '@base/services/filter/filter.service';
import { orderOptions } from '@misc/constants/_base.constant';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { BaseFormAbstractComponent } from '@misc/abstracts/base-form.abstract.component';

@Component({
  selector: 'games-filters',
  templateUrl: './games-filters.component.html',
  styleUrls: ['./games-filters.component.scss']
})
export class GamesFiltersComponent extends BaseFormAbstractComponent implements OnInit, OnDestroy {
  private _debounce: number = 400;
  orderOptions: IOption[] = orderOptions;
  isAscendingOrder: boolean;

  constructor(private _translate: TranslateService, private _filter: FilterService, private _fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this._initOptions();
    this._initForm();

    this.formGroup.valueChanges
      .pipe(debounceTime(this._debounce), distinctUntilChanged(), takeUntil(this.DESTROYED$))
      .subscribe(({ orderBy, name, score: [min, max] }) =>
        this._filter.setFilters({ ...this._filter.filter, name, orderBy, score: { min, max } })
      );
  }

  changeOrderDirection(): void {
    if (this.isAscendingOrder) {
      this._filter.setFilters({ ...this._filter.filter, orderDirection: OrderDirection.asc });
    } else {
      this._filter.setFilters({ ...this._filter.filter, orderDirection: OrderDirection.desc });
    }
  }

  clearFilters() {
    this._setDefaultFormValues();
  }

  private _initOptions(): void {
    this.orderOptions = this.orderOptions.map(
      (item: IOption): IOption => ({
        value: item.value,
        label: this._translate.instant(`GAMES_FILTERS.${item.label}`),
        disabled: false
      })
    );
  }

  private _initForm(): void {
    this.formGroup = this._fb.group({
      name: this._fb.control(null),
      orderBy: this._fb.control(null),
      score: this._fb.control(null)
    });
    this._setDefaultFormValues();
  }

  private _setDefaultFormValues(): void {
    this.form.name.setValue('');
    this.form.orderBy.setValue(orderOptions[0].value);
    this.form.score.setValue([DEFAULT_FILTER.score.min, DEFAULT_FILTER.score.max]);
    this.isAscendingOrder = true;
    this.changeOrderDirection();
  }
}
