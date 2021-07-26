import { Pipe, PipeTransform } from '@angular/core';
import { TranslatableObjectOutput } from '@core/graphql/generated';
import { TranslateService } from '@ngx-translate/core';
import { extractCurrentLanguageValue } from '@shared/utils';

@Pipe({
  name: 'languageTranslate'
})
export class LanguageTranslatePipe implements PipeTransform {
  /**
   * Default constructor
   */
  constructor(private translateService: TranslateService) {}

  transform(
    values: TranslatableObjectOutput[],
    defaultLanguageInput: boolean = false
  ): string {
    return extractCurrentLanguageValue(
      values,
      this.translateService.currentLang,
      this.translateService.defaultLang,
      defaultLanguageInput
    );
  }
}
