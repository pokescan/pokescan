import { TranslatableObjectOutput } from '@core/graphql/generated';
import { DEFAULT_LANGUAGE } from '@shared/constants';

export class PokemonDisplayCommon {
  getPokemonImageUrl(pokedexId: number): string {
    return `pokemon/${pokedexId}.gif`;
  }
}

export const extractCurrentLanguageValue: (
  values: TranslatableObjectOutput[],
  language: string,
  defaultLanguage?: string,
  defaultLanguageInput?: boolean
) => string = (
  values: TranslatableObjectOutput[],
  language: string,
  defaultLanguage: string = DEFAULT_LANGUAGE,
  defaultLanguageInput: boolean = false
): string => {
  const v = values?.find(to => language === to?.key);
  const defaultValue = values?.find(to => defaultLanguage === to?.key);

  return defaultLanguageInput
    ? defaultValue?.value
    : v?.value || defaultValue?.value || 'NO CORRESPONDING VALUE';
};
