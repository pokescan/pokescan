import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { CreatePokemonTypeDto, Query } from '@core/graphql/generated';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@shared/constants';
import { AbstractService } from '@shared/services/abstract/abstract.service';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService extends AbstractService<
  CreatePokemonTypeDto,
  unknown
> {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  findTypes(
    offset = DEFAULT_OFFSET,
    limit = DEFAULT_LIMIT
  ): Observable<ApolloQueryResult<Query>> {
    return this.apollo.query<Query>({
      query: gql`
        query($offset: Int = 0, $limit: Int = 10) {
          findAllPokemonTypes(limit: $limit, offset: $offset) {
            items {
              id
              name {
                key
                value
              }
            }
            metadata {
              totalCount
              hasNextPage
              limit
              offset
            }
          }
        }
      `,
      variables: { offset, limit }
    });
  }

  protected findAllQuery(): DocumentNode {
    return gql`
      query($offset: Int = 0, $limit: Int = 10) {
        findAllPokemonTypes(limit: $limit, offset: $offset) {
          items {
            id
            name {
              key
              value
            }
            pokemons {
              id
              pokedexId
              name {
                key
                value
              }
              abilities {
                name {
                  key
                  value
                }
              }
              captureRate
              createdAt
              cycle
              description {
                key
                value
              }
              eggsGroup {
                name {
                  key
                  value
                }
              }
              firstAppearenceGeneration {
                order
              }
              genderRepartition {
                female
                male
              }
              generation {
                order
              }
              height
              weight
              nextPokemon {
                name {
                  key
                  value
                }
              }
              previousPokemon {
                name {
                  key
                  value
                }
              }
              step
            }
          }
          metadata {
            totalCount
            hasNextPage
            limit
            offset
          }
        }
      }
    `;
  }

  protected findByIdQuery(): DocumentNode {
    return gql`
      query($id: String!) {
        pokemonType(id: $id) {
          id
          name {
            key
            value
          }
          pokemons {
            id
            pokedexId
            name {
              key
              value
            }
            abilities {
              name {
                key
                value
              }
            }
            captureRate
            createdAt
            cycle
            description {
              key
              value
            }
            eggsGroup {
              name {
                key
                value
              }
            }
            firstAppearenceGeneration {
              order
            }
            genderRepartition {
              female
              male
            }
            generation {
              order
            }
            height
            weight
            nextPokemon {
              name {
                key
                value
              }
            }
            previousPokemon {
              name {
                key
                value
              }
            }
            step
          }
        }
      }
    `;
  }

  protected createQuery(): DocumentNode {
    throw new Error('Method not implemented.');
  }

  protected updateQuery(): DocumentNode {
    throw new Error('Method not implemented.');
  }

  protected deleteQuery(): DocumentNode {
    throw new Error('Method not implemented.');
  }
}
