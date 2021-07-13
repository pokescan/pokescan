import { Component, Input } from '@angular/core';
import { Query } from '@core/graphql/generated';
import { PokemonDisplayCommon } from '../../../../../../../../shared/utils/pokemon-common';

@Component({
  selector: 'pks-pokedex-by-generation',
  templateUrl: './pokedex-by-generation.component.html',
  styleUrls: ['./pokedex-by-generation.component.scss']
})
export class PokedexByGenerationComponent extends PokemonDisplayCommon {
  @Input() generations: Query;
}
