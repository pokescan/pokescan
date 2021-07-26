import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { PokedexPageRoutingModule } from './pokedex-routing.module';
import { PokedexPage } from './pokedex.page';
import { PokedexByGenerationComponent } from './shared/components/pokedex-by-generation/pokedex-by-generation.component';
import { PokedexByPokemonComponent } from './shared/components/pokedex-by-pokemon/pokedex-by-pokemon.component';
import { PokedexByTypeComponent } from './shared/components/pokedex-by-type/pokedex-by-type.component';
import { PokedexFilterPageModule } from './shared/modals/pokedex-filter/pokedex-filter.module';

const components: Type<any>[] = [
  PokedexPage,
  PokedexByGenerationComponent,
  PokedexByPokemonComponent,
  PokedexByTypeComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokedexPageRoutingModule,
    TranslateModule,
    SharedModule,
    CloudinaryModule,
    PokedexFilterPageModule,
    ScrollingModule
  ],
  declarations: [...components]
})
export class PokedexPageModule {}
