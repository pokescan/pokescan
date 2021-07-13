import { Injectable } from '@angular/core';
import { CreateGenerationDto } from '@core/graphql/generated';
import { AbstractService } from '@shared/services/abstract/abstract.service';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class GenerationService extends AbstractService<
  CreateGenerationDto,
  unknown
> {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  protected findAllQuery(): DocumentNode {
    return gql`
      query($offset: Int = 0, $limit: Int = 10) {
        findAllGenerations(limit: $limit, offset: $offset) {
          items {
            id
            order
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
        generation(id: $id) {
          id
          order
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
