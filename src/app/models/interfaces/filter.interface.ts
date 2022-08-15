import { OrderBy, OrderDirection } from '../enums/sort.enum';

export interface IGameFilter {
  name: string;
  score: {
    min: number;
    max: number;
  };
  orderBy: OrderBy;
  orderDirection: OrderDirection;
}
