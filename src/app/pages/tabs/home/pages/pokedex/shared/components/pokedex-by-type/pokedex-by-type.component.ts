import { Component, Input } from '@angular/core';
import { Query } from '@core/graphql/generated';
import { PokemonDisplayCommon } from '../../../../../../../../shared/utils/pokemon-common';

@Component({
  selector: 'pks-pokedex-by-type',
  templateUrl: './pokedex-by-type.component.html',
  styleUrls: ['./pokedex-by-type.component.scss']
})
export class PokedexByTypeComponent extends PokemonDisplayCommon {
  @Input() pokemonTypes: Query;
}
