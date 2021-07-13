import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTabsPage } from './pokemon-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonTabsPage,
    children: [
      {
        path: 'pokemon-detail',
        loadChildren: () =>
          import('./pokemon-detail/pokemon-detail.module').then(
            m => m.PokemonDetailPageModule
          )
      },
      {
        path: '',
        redirectTo: '/pokemon-tabs/pokemon-detail',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonTabsPageRoutingModule {}
