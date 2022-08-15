import { OrderBy, OrderDirection } from '@base/models/enums/sort.enum';
import { IGameFilter } from '@base/models/interfaces/filter.interface';

export const DEFAULT_FILTER: IGameFilter = {
  name: '',
  score: {
    min: 1,
    max: 100
  },
  orderBy: OrderBy.date,
  orderDirection: OrderDirection.asc
};
