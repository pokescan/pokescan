import { Injectable } from '@angular/core';
import { CreatePokemonTypeDto } from '@core/graphql/generated';
import { AbstractService } from '@shared/services/abstract/abstract.service';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

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
