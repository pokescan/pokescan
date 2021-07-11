import { Pipe, PipeTransform } from '@angular/core';
import { TranslatableObjectOutput } from '@core/graphql/generated';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'languageTranslate'
})
export class LanguageTranslatePipe implements PipeTransform {
  /**
   * Default constructor
   */
  constructor(private translateService: TranslateService) {}

  transform(values: TranslatableObjectOutput[], ...args: unknown[]): string {
    const language = this.translateService.currentLang;
    const defaultLanguage = this.translateService.defaultLang;

    const v = values?.find(to => language === to?.key);
    const defaultValue = values?.find(to => defaultLanguage === to?.key);

    return v?.value || defaultValue?.value || 'NO CORRESPONDING VALUE';
  }
}
