import { Injectable } from '@angular/core';
import { ApiBaseAbstractService } from '@misc/abstracts/api-base.abstract.service';
import { Game } from '@models/classes/game.model';
import { ClassConstructor } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService extends ApiBaseAbstractService<Game> {
  protected readonly MODEL: ClassConstructor<Game> = Game;
  protected readonly URLPath: string = '/applicant-test/';
}
