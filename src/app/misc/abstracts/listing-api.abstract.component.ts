import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { HttpServiceError } from '@services/http/http-service-error.class';
import { DEFAULT_FILTER } from '@misc/constants/default-filter.constant';
import { FilterService } from '@services/filter/filter.service';
import { IGameFilter } from '@models/interfaces/filter.interface';

@Component({
  template: ''
})
export abstract class ListingApiAbstractComponent<T = any> implements OnInit, OnDestroy {
  protected readonly DESTROYED$: Subject<void> = new Subject<void>();
  abstract filteredItems: T[];
  abstract items: T[];
  isLoading: boolean = false;

  protected constructor(protected filter: FilterService, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadItems(this.params).subscribe();
    this.filter.FILTERS$.pipe(takeUntil(this.DESTROYED$)).subscribe((filters: IGameFilter): void => {
      this.filteredItems = this.filterItems(filters);
    });
  }

  ngOnDestroy(): void {
    this.DESTROYED$.next();
    this.DESTROYED$.complete();
  }

  get params(): Params {
    return this.activatedRoute.snapshot.queryParams;
  }

  protected loadItems(params: Params): Observable<T[]> {
    this.isLoading = true;

    return this.getItems(params).pipe(
      takeUntil(this.DESTROYED$),
      catchError((err: HttpServiceError): Observable<never> => {
        this.items = [];
        this.filteredItems = [];
        this.isLoading = false;
        throw err;
      }),
      tap((items: T[]): void => {
        this.items = items;
        this.filteredItems = this.filterItems(DEFAULT_FILTER);
        this.isLoading = false;
      })
    );
  }

  protected abstract getItems(params: Params): Observable<T[]>;

  protected abstract filterItems(filters: Params): T[];
}
