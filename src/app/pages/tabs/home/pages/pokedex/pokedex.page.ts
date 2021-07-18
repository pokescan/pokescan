import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { GenerationDto, PokemonTypeDto, Query } from '@core/graphql/generated';
import { GenerationService } from '@core/services/generation/generation.service';
import { PokemonTypeService } from '@core/services/pokemon-type/pokemon-type.service';
import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { SubjectService } from '@core/services/subject/subject.service';
import { IonRouterOutlet } from '@ionic/angular';
import { loadingFor } from '@ngneat/loadoff';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@shared/constants';
import { IPokemonSearchEvent } from '@shared/interfaces/pokemon-search-event.interface';
import { BaseModalComponent } from '@shared/modals/base-modal/base-modal.component';
import { ModalService } from '@shared/services/modal/modal.service';
import { extractCurrentLanguageValue } from '@shared/utils';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { PokedexFilterEnum } from './shared/enums/pokedex-filter.enum';
import { IFilterChoice } from './shared/modals/pokedex-filter/interfaces/filter-choice.interface';
import { IFilterOutput } from './shared/modals/pokedex-filter/interfaces/filter-output.interface';
import { PokedexFilterPage } from './shared/modals/pokedex-filter/pokedex-filter.page';

@UntilDestroy()
@Component({
  selector: 'pks-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss']
})
export class PokedexPage implements OnInit {
  loader = loadingFor('pokemons');
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly DEFAULT_FILTER_CHOICE: string = PokedexFilterEnum.POKEMON;

  /**
   * Current choice when page intiailizes (defaults to Pokemon, always)
   *
   * @type {string}
   * @memberof PokedexPage
   */
  parentChoice: string = this.DEFAULT_FILTER_CHOICE;

  /**
   * Current choice when page intiailizes (defaults to Pokemon, always)
   *
   * @type {string}
   * @memberof PokedexPage
   */
  filterChoice = '';

  /**
   * Variable that contains all the pokemons from the API
   *
   * @type {Query}
   * @memberof PokedexPage
   */
  data: Query;

  /**
   * All pokemon types from API (only name is stored in this component)
   *
   * @type {TranslatableObjectOutput[]}
   * @memberof PokedexPage
   */
  types: PokemonTypeDto[];

  /**
   * All existing current generations orders
   *
   * @type {number[]}
   * @memberof PokedexPage
   */
  generations: GenerationDto[];

  /**
   * Current offset, used for the next API request
   *
   * @type {number}
   * @memberof PokedexPage
   */
  offset: number = DEFAULT_OFFSET;

  /**
   * Current limit, used for the next API request
   *
   * @type {number}
   * @memberof PokedexPage
   */
  limit: number = DEFAULT_LIMIT;

  constructor(
    private pokemonService: PokemonService,
    private generationService: GenerationService,
    private pokemonTypeService: PokemonTypeService,
    private modalService: ModalService,
    private routerOutlet: IonRouterOutlet,
    private subjectService: SubjectService,
    private translateService: TranslateService
  ) {}

  /**
   * ngOnInit function component
   *
   * @memberof PokedexPage
   */
  ngOnInit(): void {
    // this.initPage();

    forkJoin<
      ApolloQueryResult<Query>,
      ApolloQueryResult<Query>,
      ApolloQueryResult<Query>
    >([
      this.generationService.findGenerations().pipe(catchError(() => of({}))),
      this.pokemonService.findAll().pipe(catchError(() => of({}))),
      this.pokemonTypeService.findTypes().pipe(catchError(() => of({})))
    ])
      .pipe(untilDestroyed(this), this.loader.pokemons.track())
      .subscribe(
        ([
          {
            data: { findAllGenerations: generations }
          },
          { data: pokemons },
          {
            data: { findAllPokemonTypes: types }
          }
        ]) => {
          this.generations = generations.items;
          this.types = types.items;
          this.data = pokemons;
        }
      );

    this.subjectService.pokemon
      .pipe(
        untilDestroyed(this),
        filter(event => !!event)
      )
      .subscribe(({ offset }: IPokemonSearchEvent) => {
        this.offset = offset;
        this.initPage();
      });
  }

  initPage(): void {
    const routeToCall: Observable<
      ApolloQueryResult<Query>
    > = this.routeBySelectedChoice();

    routeToCall
      .pipe(untilDestroyed(this), this.loader.pokemons.track())
      .subscribe(({ data }) => {
        this.data = data;
      });
  }

  routeBySelectedChoice(): Observable<ApolloQueryResult<Query>> {
    switch (this.parentChoice) {
      case PokedexFilterEnum.GENERATION:
        return this.generationService.find(this.filterChoice);
      case PokedexFilterEnum.TYPE:
        return this.pokemonTypeService.find(this.filterChoice);
      default:
        return this.pokemonService.findAll(this.offset, this.limit);
    }
  }

  /**
   * Opens filter modal
   *
   * @memberof PokedexPage
   */
  async openFilters(): Promise<void> {
    const { parentChoice, selectedChoice }: IFilterOutput =
      (await this.modalService.openSwipeableModal<IFilterOutput>(
        BaseModalComponent,
        this.routerOutlet.parentOutlet.nativeEl,
        {
          rootPage: PokedexFilterPage,
          dataToPassOn: {
            choices: this.buildFilterModalChoices(),
            defaultChoice: this.filterChoice,
            title: 'MODAL.FILTER'
          }
        }
      )) || ({} as IFilterOutput);

    this.parentChoice = parentChoice || this.parentChoice;
    this.filterChoice = selectedChoice || this.filterChoice;

    this.initPage();
  }

  buildFilterModalChoices(): IFilterChoice[] {
    return [
      {
        label: this.translateService.instant('GENERATION.MAIN', {
          generation: ''
        }),
        value: PokedexFilterEnum.GENERATION,
        icon: '',
        hasSubchoices: true,
        subChoices: this.generations.map(
          ({ order, id }: GenerationDto) =>
            ({
              label: this.translateService.instant('GENERATION.MAIN', {
                generation: order
              }),
              value: id,
              isSelected: this.precheckIfFilterChoiceIsSelected(
                PokedexFilterEnum.GENERATION,
                id
              )
            } as IFilterChoice)
        ),
        isSelected: false
      },
      {
        label: this.translateService.instant('TYPE', { type: '' }),
        value: PokedexFilterEnum.TYPE,
        icon: '',
        hasSubchoices: true,
        subChoices: this.types.map(
          ({ name, id }: PokemonTypeDto) =>
            ({
              label: extractCurrentLanguageValue(
                name,
                this.translateService.currentLang
              ),
              value: id,
              isSelected: this.precheckIfFilterChoiceIsSelected(
                PokedexFilterEnum.TYPE,
                id
              )
            } as IFilterChoice)
        ),
        isSelected: false
      },
      {
        label: this.translateService.instant('POKEMON'),
        value: PokedexFilterEnum.POKEMON,
        icon: '',
        isSelected: this.precheckIfFilterChoiceIsSelected(
          PokedexFilterEnum.POKEMON
        )
      }
    ];
  }

  precheckIfFilterChoiceIsSelected(
    filterEnum: PokedexFilterEnum,
    id?: string
  ): boolean {
    switch (filterEnum) {
      case PokedexFilterEnum.GENERATION:
      case PokedexFilterEnum.TYPE:
        return this.filterChoice === id;
      default:
        return this.parentChoice === filterEnum;
    }
  }
}
