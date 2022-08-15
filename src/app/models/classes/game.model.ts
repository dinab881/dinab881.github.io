import { BaseModel } from '@models/classes/_base.model';
import { Exclude, Expose, Transform } from 'class-transformer';
import { transformToDate } from '@misc/helpers/model-conversion/transform-helpers/transform-to-date.function';

@Exclude()
export class Game extends BaseModel {
  @Expose({ name: 'first_release_date' })
  @Transform(transformToDate)
  firstReleaseDate: Date;
  @Expose()
  name: string;
  @Expose()
  rating: number;
  @Expose()
  summary: string;
}
