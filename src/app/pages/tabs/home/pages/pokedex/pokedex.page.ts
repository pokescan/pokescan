import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Query } from '@core/graphql/generated';
import { GenerationService } from '@core/services/generation/generation.service';
import { PokemonTypeService } from '@core/services/pokemon-type/pokemon-type.service';
import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { IonRouterOutlet } from '@ionic/angular';
import { loadingFor } from '@ngneat/loadoff';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ModalService } from '@shared/services/modal/modal.service';
import { Observable } from 'rxjs';
import { POKEDEX_DISPLAY_CHOICES } from './shared/constants';
import { PokedexFilterEnum } from './shared/enums/pokedex-filter.enum';
import { IFilterChoiceWrapper } from './shared/modals/pokedex-filter/interfaces/filter-choice-wrapper.interface';
import { IFilterOutput } from './shared/modals/pokedex-filter/interfaces/filter-output.interface';
import { PokedexFilterComponent } from './shared/modals/pokedex-filter/pokedex-filter.component';

@UntilDestroy()
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss']
})
export class PokedexPage implements OnInit {
  readonly DEFAULT_FILTER_CHOICE: string = PokedexFilterEnum.POKEMON;

  filterChoice: string = this.DEFAULT_FILTER_CHOICE;

  loaders = loadingFor('pokemons');

  /**
   * Variable that contains all the pokemons from the API
   *
   * @type {Query}
   * @memberof PokedexPage
   */
  data: Query;

  constructor(
    private pokemonService: PokemonService,
    private generationService: GenerationService,
    private pokemonTypeService: PokemonTypeService,
    private modalService: ModalService,
    private routerOutlet: IonRouterOutlet
  ) {}

  /**
   * ngOnInit function component
   *
   * @memberof PokedexPage
   */
  ngOnInit(): void {
    this.initPage();
  }

  initPage(): void {
    const routeToCall: Observable<
      ApolloQueryResult<Query>
    > = this.routeBySelectedChoice();

    routeToCall
      .pipe(untilDestroyed(this), this.loaders.pokemons.track())
      .subscribe(({ data }) => {
        this.data = data;
      });
  }

  private routeBySelectedChoice(): Observable<ApolloQueryResult<Query>> {
    switch (this.filterChoice) {
      case PokedexFilterEnum.GENERATION:
        return this.generationService.findAll();
      case PokedexFilterEnum.TYPE:
        return this.pokemonTypeService.findAll();
      default:
        return this.pokemonService.findAll();
    }
  }

  /**
   * Opens filter modal
   *
   * @memberof PokedexPage
   */
  async openFilters(): Promise<void> {
    const defaultChoices = [...POKEDEX_DISPLAY_CHOICES];

    const index = defaultChoices.findIndex(c => c.value === this.filterChoice);

    const choice = defaultChoices[index];

    choice.isSelected = true;

    defaultChoices.splice(index, 1, choice);

    const { selectedChoice }: IFilterOutput =
      (await this.modalService.openSwipeableModal<
        IFilterChoiceWrapper,
        IFilterOutput
      >(
        PokedexFilterComponent,
        this.routerOutlet.parentOutlet.nativeEl,
        'MODAL.FILTER',
        {
          choices: POKEDEX_DISPLAY_CHOICES
        }
      )) || ({} as IFilterOutput);

    this.filterChoice = selectedChoice || this.filterChoice;

    this.initPage();
  }
}
