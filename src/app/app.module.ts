/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {
  CloudinaryConfiguration,
  CloudinaryModule
} from '@cloudinary/angular-5.x';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Cloudinary } from 'cloudinary-core';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'rakuen',
      api_key: environment.cloudinaryApiKey,
      api_secret: environment.cloudinaryApiSecret
    } as CloudinaryConfiguration)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
