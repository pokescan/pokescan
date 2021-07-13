import { Component, Input } from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { Query } from '@core/graphql/generated';
import { PokemonDisplayCommon } from '../../../../../../../../shared/utils/pokemon-common';

@Component({
  selector: 'pks-pokedex-by-pokemon',
  templateUrl: './pokedex-by-pokemon.component.html',
  styleUrls: ['./pokedex-by-pokemon.component.scss']
})
export class PokedexByPokemonComponent extends PokemonDisplayCommon {
  @Input() pokemons: Query;

  constructor(private cloudinary: Cloudinary) {
    super();
  }

  createPokemonImageUrl(pokedexId: string): string {
    return this.cloudinary.cloudinaryInstance.url(`pokemon/${pokedexId}.gif`);
  }
}
