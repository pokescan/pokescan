import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDto } from '@core/graphql/generated';
import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss']
})
export class PokemonDetailPage implements OnInit {
  pokemon: PokemonDto;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const pokemonId: string = this.route.snapshot.params.pokemonId;

    this.pokemonService
      .find(pokemonId)
      .pipe(untilDestroyed(this))
      .subscribe(({ data: { pokemon } }) => {
        console.log(
          '🚀 ~ file: pokemon-detail.page.ts ~ line 28 ~ PokemonDetailPage ~ .subscribe ~ pokemon',
          pokemon
        );
        this.pokemon = pokemon;
      });
  }
}
