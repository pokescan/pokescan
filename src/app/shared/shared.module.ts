import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Type } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LanguageTranslatePipe } from './pipes/language-translate/language-translate.pipe';

const components: Type<unknown>[] = [SpinnerComponent];

const directives: Type<unknown>[] = [];

const pipes: Type<unknown>[] = [LanguageTranslatePipe];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  exports: [...components, ...directives, ...pipes],
  imports: [CommonModule, NgxSpinnerModule, TranslateModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
