import { ApolloQueryResult } from '@apollo/client/core';
import { PokemonDto, Query } from '@core/graphql/generated';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { VirtualScrollDataSource } from '@shared/components/virtual-infinite-scroll/data-source/virtual-scroll-data-source';
import { AbstractService } from '@shared/services/abstract/abstract.service';
import { Observable } from 'rxjs';

@UntilDestroy()
export class PokemonDataSource extends VirtualScrollDataSource<PokemonDto> {
  metadata: any;

  constructor(
    private service: AbstractService<unknown, unknown>,
    private queryName: string,
    private id?: string
  ) {
    super();
    this.getDataSource();
  }

  getDataSource(): void {
    const serviceMethod: Observable<
      ApolloQueryResult<Query>
    > = this.getApiMethod();

    serviceMethod.pipe(untilDestroyed(this)).subscribe(({ data }) => {
      const queryResult: Record<string, unknown> = data[this.queryName];

      this.metadata = queryResult.metadata;

      const pokemons: PokemonDto[] = queryResult.items as PokemonDto[];
      this.cached = this.cached.concat(pokemons);
      this.dataStream.next(this.cached);
    });
  }

  getApiMethod(): Observable<ApolloQueryResult<Query>> {
    return this.id ? this.service.find(this.id) : this.service.findAll();
  }
}
