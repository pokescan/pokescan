import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { GenerationDto, PokemonDto, Query } from '@core/graphql/generated';
import { SubjectService } from '@core/services/subject/subject.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { PokemonDisplayCommon } from '@shared/utils';

@Component({
  selector: 'pks-pokedex-by-generation',
  templateUrl: './pokedex-by-generation.component.html',
  styleUrls: ['./pokedex-by-generation.component.scss']
})
export class PokedexByGenerationComponent
  extends PokemonDisplayCommon
  implements OnChanges {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Input('generation') generationInput: Query;

  generation: GenerationDto;
  pokemons: PokemonDto[] = [];

  /**
   * Default constructor
   */
  constructor(cloudinary: Cloudinary, private subjectService: SubjectService) {
    super(cloudinary);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes?.generationInput?.currentValue;

    if (currentValue) {
      const generation = currentValue?.generation;

      this.pokemons.push(...generation.pokemons);
      this.generation = generation;

      this.infiniteScroll?.complete();
    }
  }

  loadData(): void {
    // this.subjectService.pokemons$.next({
    //   offset: this.metadata.offset + DEFAULT_LIMIT
    // });
  }
}
