import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { PokemonDto, PokemonTypeDto, Query } from '@core/graphql/generated';
import { SubjectService } from '@core/services/subject/subject.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { PokemonDisplayCommon } from '@shared/utils';

@Component({
  selector: 'pks-pokedex-by-type',
  templateUrl: './pokedex-by-type.component.html',
  styleUrls: ['./pokedex-by-type.component.scss']
})
export class PokedexByTypeComponent
  extends PokemonDisplayCommon
  implements OnChanges {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Input('pokemonTypes') types: Query;

  type: PokemonTypeDto;
  pokemons: PokemonDto[] = [];

  /**
   * Default constructor
   */
  constructor(
    private cloudinary: Cloudinary,
    private subjectService: SubjectService
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes?.types?.currentValue;

    if (currentValue) {
      const type: PokemonTypeDto = currentValue?.pokemonType;

      this.pokemons.push(...type.pokemons);
      this.type = type;

      this.infiniteScroll?.complete();
    }
  }

  createPokemonImageUrl(pokedexId: string): string {
    return this.cloudinary.cloudinaryInstance.url(`pokemon/${pokedexId}.gif`);
  }

  loadData(): void {
    // this.subjectService.pokemons$.next({
    //   offset: this.metadata.offset + DEFAULT_LIMIT
    // });
  }
}
