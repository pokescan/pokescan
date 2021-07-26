import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { SubjectService } from '@core/services/subject/subject.service';
import { PokemonDisplayCommon } from '@shared/utils';
import { PokemonDataSource } from '../../models/pokemon-data-source';

@Component({
  selector: 'pks-pokedex-by-pokemon',
  templateUrl: './pokedex-by-pokemon.component.html',
  styleUrls: ['./pokedex-by-pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokedexByPokemonComponent
  extends PokemonDisplayCommon
  implements OnInit, OnChanges {
  dataSource: PokemonDataSource;

  constructor(
    cloudinary: Cloudinary,
    private subjectService: SubjectService,
    private pokemonService: PokemonService
  ) {
    super(cloudinary);
  }

  ngOnInit(): void {
    this.dataSource = new PokemonDataSource(
      this.pokemonService,
      'findAllPokemons'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const currentValue = changes?.pokemonsInput?.currentValue;
    // if (currentValue) {
    //   const { metadata, items } = this.pokemonsInput.findAllPokemons;
    //   this.pokemons.push(...items);
    //   this.metadata = { ...metadata };
    //   this.infiniteScroll?.complete();
    // }
  }

  // loadData(): void {
  //   this.subjectService.pokemons$.next({
  //     offset: this.metadata.offset + DEFAULT_LIMIT
  //   });
  // }
}
