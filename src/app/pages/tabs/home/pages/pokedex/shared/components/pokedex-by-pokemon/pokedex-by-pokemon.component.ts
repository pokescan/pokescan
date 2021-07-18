import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { PokemonDto, PokemonMetadata, Query } from '@core/graphql/generated';
import { SubjectService } from '@core/services/subject/subject.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { DEFAULT_LIMIT } from '@shared/constants';
import { PokemonDisplayCommon } from '@shared/utils';

@Component({
  selector: 'pks-pokedex-by-pokemon',
  templateUrl: './pokedex-by-pokemon.component.html',
  styleUrls: ['./pokedex-by-pokemon.component.scss']
})
export class PokedexByPokemonComponent
  extends PokemonDisplayCommon
  implements OnChanges {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Input('pokemons') pokemonsInput: Query;

  metadata: PokemonMetadata;
  pokemons: PokemonDto[] = [];

  constructor(
    private cloudinary: Cloudinary,
    private subjectService: SubjectService
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes?.pokemonsInput?.currentValue;

    if (currentValue) {
      const { metadata, items } = this.pokemonsInput.findAllPokemons;

      this.pokemons.push(...items);
      this.metadata = { ...metadata };

      this.infiniteScroll?.complete();
    }
  }

  createPokemonImageUrl(pokedexId: string): string {
    return this.cloudinary.cloudinaryInstance.url(`pokemon/${pokedexId}.gif`);
  }

  loadData(): void {
    this.subjectService.pokemons$.next({
      offset: this.metadata.offset + DEFAULT_LIMIT
    });
  }
}
