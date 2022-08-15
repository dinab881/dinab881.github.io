import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main/main-layout.component';
import { CommonModule } from '@angular/common';
import { MainLayoutModule } from '@layouts/main/main-layout.module';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/main/client/client.module').then(m => m.ClientModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    MainLayoutModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      enableTracing: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
