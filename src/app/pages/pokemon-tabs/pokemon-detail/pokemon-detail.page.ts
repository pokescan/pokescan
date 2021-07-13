import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDto } from '@core/graphql/generated';
import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DEFAULT_LANGUAGE } from '@shared/constants';
import { PokemonDisplayCommon } from '@shared/utils/pokemon-common';

@UntilDestroy()
@Component({
  selector: 'pks-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss']
})
export class PokemonDetailPage extends PokemonDisplayCommon implements OnInit {
  pokemon: PokemonDto;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    const pokemonId: string = this.route.snapshot.params.pokemonId;

    this.pokemonService
      .find(pokemonId)
      .pipe(untilDestroyed(this))
      .subscribe(({ data: { pokemon } }) => {
        this.pokemon = pokemon;
      });
  }

  getClassAccordingToPokemonType(): string {
    const englishValue = this.findPokemonTypeAccordingToDefaultLanguage();
    return `ion-color-${englishValue}`;
  }

  findPokemonTypeAccordingToDefaultLanguage(): string {
    return this.pokemon.pokemonTypes[0].name
      .find(t => t.key === DEFAULT_LANGUAGE)
      .value?.toLowerCase();
  }
}
