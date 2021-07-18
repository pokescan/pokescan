import { PokedexFilterEnum } from '../enums/pokedex-filter.enum';
import { IFilterChoice } from '../modals/pokedex-filter/interfaces/filter-choice.interface';

export const POKEDEX_DISPLAY_CHOICES: IFilterChoice[] = [
  {
    label: 'GENERATION.MAIN',
    value: PokedexFilterEnum.GENERATION,
    icon: '',
    isSelected: false
  },
  {
    label: 'TYPE',
    value: PokedexFilterEnum.TYPE,
    icon: '',
    isSelected: false
  },
  {
    label: 'POKEMON',
    value: PokedexFilterEnum.POKEMON,
    icon: '',
    isSelected: true
  }
];

export const DEFAULT_OFFSET = 0;
export const DEFAULT_LIMIT = 10;
