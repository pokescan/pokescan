import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VirtualInfiniteScrollComponent } from './components/virtual-infinite-scroll/virtual-infinite-scroll.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { BaseModalComponent } from './modals/base-modal/base-modal.component';
import { LanguageTranslatePipe } from './pipes/language-translate/language-translate.pipe';

const components: Type<unknown>[] = [
  SpinnerComponent,
  BaseModalComponent,
  VirtualInfiniteScrollComponent
];

const directives: Type<unknown>[] = [];

const pipes: Type<unknown>[] = [LanguageTranslatePipe];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  exports: [...components, ...directives, ...pipes],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    TranslateModule,
    IonicModule,
    RouterModule,
    ScrollingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
