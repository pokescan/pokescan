import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PokedexFilterPageRoutingModule } from './pokedex-filter-routing.module';
import { PokedexFilterPage } from './pokedex-filter.page';

const components: Type<any>[] = [PokedexFilterPage];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PokedexFilterPageRoutingModule,
    TranslateModule,
    CloudinaryModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class PokedexFilterPageModule {}
