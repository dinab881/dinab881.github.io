import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '@services/api/games-api/games-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from '@models/classes/game.model';
import { ListingApiAbstractComponent } from '@misc/abstracts/listing-api.abstract.component';
import { Observable } from 'rxjs';
import { FilterService } from '@base/services/filter/filter.service';
import { IGameFilter } from '@base/models/interfaces/filter.interface';
import { OrderBy, OrderDirection } from '@base/models/enums/sort.enum';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent extends ListingApiAbstractComponent implements OnInit {
  items: Game[];
  filteredItems: Game[];

  constructor(
    private _gamesApi: GamesApiService,
    protected override activatedRoute: ActivatedRoute,
    protected override filter: FilterService
  ) {
    super(filter, activatedRoute);
  }

  protected getItems(params: Params): Observable<Game[]> {
    return this._gamesApi.getItems({}, { skipLoaderStart: true });
  }

  filterItems(filters: IGameFilter): Game[] {
    if (!this.items) return [];

    let filtered = this.items.slice().filter(item => {
      return (
        item.name.toLowerCase().includes((filters.name ?? '').toLowerCase()) &&
        item.rating >= filters.score.min &&
        item.rating <= filters.score.max
      );
    });

    switch (filters.orderBy) {
      case OrderBy.name:
        return filtered.sort((a, b) =>
          filters.orderDirection === OrderDirection.asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
      case OrderBy.date:
        return filtered.sort((a, b) =>
          filters.orderDirection === OrderDirection.asc
            ? a.firstReleaseDate.getTime() - b.firstReleaseDate.getTime()
            : b.firstReleaseDate.getTime() - a.firstReleaseDate.getTime()
        );
      case OrderBy.score:
        return filtered.sort((a, b) => (filters.orderDirection === OrderDirection.asc ? a.rating - b.rating : b.rating - a.rating));
      default:
        return filtered;
    }
  }
}
