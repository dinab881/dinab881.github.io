import { Injectable } from '@angular/core';
import { DEFAULT_FILTER } from '@base/misc/constants/default-filter.constant';
import { IGameFilter } from '@base/models/interfaces/filter.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private readonly _filter = new BehaviorSubject<IGameFilter>(DEFAULT_FILTER);
  readonly FILTERS$: Observable<IGameFilter> = this._filter.asObservable();

  get filter(): IGameFilter {
    return this._filter.getValue();
  }

  setFilters(val: IGameFilter) {
    this._filter.next(val);
  }
}
