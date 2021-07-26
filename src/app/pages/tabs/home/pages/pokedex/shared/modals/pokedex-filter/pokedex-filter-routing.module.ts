import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexFilterPage } from './pokedex-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PokedexFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexFilterPageRoutingModule {}
