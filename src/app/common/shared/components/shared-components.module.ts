import { NgModule } from '@angular/core';
import { LoaderContainerModule } from './loader-container/loader-container.module';
import { NotificationModule } from '@shared/components/notification/notification.module';
import { GamesFiltersModule } from '@shared/components/games-filters/games-filters.module';
import { FormsModule } from '@angular/forms';
import { GameItemModule } from '@shared/components/game-item/game-item.module';

@NgModule({
  exports: [LoaderContainerModule, NotificationModule, GamesFiltersModule, FormsModule, GameItemModule]
})
export class SharedComponentsModule {}
