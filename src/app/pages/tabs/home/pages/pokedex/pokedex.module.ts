import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { PokedexPageRoutingModule } from './pokedex-routing.module';
import { PokedexPage } from './pokedex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokedexPageRoutingModule,
    TranslateModule,
    SharedModule,
    CloudinaryModule
  ],
  declarations: [PokedexPage]
})
export class PokedexPageModule {}
