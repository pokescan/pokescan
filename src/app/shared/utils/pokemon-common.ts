export class PokemonDisplayCommon {
  getPokemonImageUrl(pokedexId: number): string {
    return `pokemon/${pokedexId}.gif`;
  }
}
