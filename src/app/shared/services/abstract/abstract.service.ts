import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { Mutation, Query } from '@core/graphql/generated';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<C, E> {
  constructor(private apollo: Apollo) {}

  findAll(offset = 0, limit = 10): Observable<ApolloQueryResult<Query>> {
    return this.apollo.query<Query>({
      query: this.findAllQuery(),
      variables: {
        offset,
        limit
      }
    });
  }

  find(id: string): Observable<ApolloQueryResult<Query>> {
    return this.apollo.query<Query>({
      query: this.findByIdQuery(),
      variables: { id }
    });
  }

  create(body: C): Observable<FetchResult<Mutation>> {
    return this.apollo.mutate<Mutation>({
      mutation: this.createQuery(),
      variables: { ...body }
    });
  }

  edit(body: E): Observable<FetchResult<Mutation>> {
    return this.apollo.mutate<Mutation>({
      mutation: this.updateQuery(),
      variables: {
        ...body
      }
    });
  }

  remove(id: string): Observable<FetchResult<Mutation>> {
    return this.apollo.mutate<Mutation>({
      mutation: this.deleteQuery(),
      variables: {
        id
      }
    });
  }

  protected abstract findAllQuery(): DocumentNode;

  protected abstract findByIdQuery(): DocumentNode;

  protected abstract createQuery(): DocumentNode;

  protected abstract updateQuery(): DocumentNode;

  protected abstract deleteQuery(): DocumentNode;
}
