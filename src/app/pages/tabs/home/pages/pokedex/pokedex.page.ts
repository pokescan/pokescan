import { Component, OnInit } from '@angular/core';
import { PokemonDto } from '@core/graphql/generated';
import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { loadingFor } from '@ngneat/loadoff';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ModalService } from '@shared/services/modal/modal.service';

@UntilDestroy()
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss']
})
export class PokedexPage implements OnInit {
  loaders = loadingFor('pokemons');

  /**
   * Variable that contains all the pokemons from the API
   *
   * @type {PokemonDto[]}
   * @memberof PokedexPage
   */
  pokemons: PokemonDto[];

  constructor(
    private pokemonService: PokemonService,
    private modalService: ModalService
  ) {}

  /**
   * ngOnInit function component
   *
   * @memberof PokedexPage
   */
  ngOnInit(): void {
    this.pokemonService
      .findAll()
      .pipe(untilDestroyed(this), this.loaders.pokemons.track())
      .subscribe(
        ({
          data: {
            findAllPokemons: { items: pokemons }
          }
        }) => {
          this.pokemons = pokemons;
        }
      );
  }

  /**
   * Opens filter modal
   *
   * @memberof PokedexPage
   */
  openFilters(): void {}

  getPokemonImageUrl(pokedexId: number): string {
    return `pokemon/${pokedexId}.gif`;
  }
}
