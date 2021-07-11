import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { PokemonDetailPageRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailPage } from './pokemon-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetailPageRoutingModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [PokemonDetailPage]
})
export class PokemonDetailPageModule {}
