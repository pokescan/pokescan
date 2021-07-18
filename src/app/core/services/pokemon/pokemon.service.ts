import { Injectable } from '@angular/core';
import { CreatePokemonDto, UpdatePokemonDto } from '@core/graphql/generated';
import { AbstractService } from '@shared/services/abstract/abstract.service';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends AbstractService<
  CreatePokemonDto,
  UpdatePokemonDto
> {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  protected findAllQuery(): DocumentNode {
    return gql`
      query($offset: Int = 0, $limit: Int = 10) {
        findAllPokemons(offset: $offset, limit: $limit) {
          items {
            id
            pokedexId
            name {
              key
              value
            }
            pokemonTypes {
              name {
                key
                value
              }
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
        pokemon(id: $id) {
          id
          pokedexId
          name {
            key
            value
          }
          pokemonTypes {
            name {
              key
              value
            }
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
    `;
  }

  protected createQuery(): DocumentNode {
    return gql`
      mutation(
        $name: [TranslatableObjectInput!]!
        $abilities: [String!]!
        $captureRate: Int!
        $cycle: Int!
        $description: [TranslatableObjectInput!]!
        $eggsGroup: [String!]!
        $firstAppearenceGeneration: String!
        $genderRepartition: PokemonGenderRepartitionObjectInput!
        $generation: String!
        $height: Float!
        $weight: Float!
        $nextPokemon: String
        $previousPokemon: String
        $pokedexId: Int!
        $pokemonTypes: [String!]!
        $pokemonStats: [PokemonStatObjectInput!]!
        $pokemonMoves: [String!]!
        $step: Float!
      ) {
        createPokemon(
          pokemonInputDto: {
            name: $name
            abilities: $abilities
            captureRate: $captureRate
            cycle: $cycle
            description: $description
            eggsGroup: $eggsGroup
            firstAppearenceGeneration: $firstAppearenceGeneration
            genderRepartition: $genderRepartition
            generation: $generation
            height: $height
            weight: $weight
            nextPokemon: $nextPokemon
            previousPokemon: $previousPokemon
            pokedexId: $pokedexId
            pokemonTypes: $pokemonTypes
            pokemonStats: $pokemonStats
            pokemonMoves: $pokemonMoves
            step: $step
          }
        ) {
          id
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
    `;
  }

  protected updateQuery(): DocumentNode {
    return gql`
      mutation(
        $name: [TranslatableObjectInput!]!
        $abilities: [String!]!
        $captureRate: Int!
        $cycle: Int!
        $description: [TranslatableObjectInput!]!
        $eggsGroup: [String!]!
        $firstAppearenceGeneration: String!
        $genderRepartition: PokemonGenderRepartitionObjectInput!
        $generation: String!
        $height: Float!
        $weight: Float!
        $nextPokemon: String
        $previousPokemon: String
        $pokedexId: Int!
        $pokemonTypes: [String!]!
        $pokemonStats: [PokemonStatObjectInput!]!
        $pokemonMoves: [String!]!
        $step: Float!
        $id: String!
      ) {
        updatePokemon(
          updatePokemonDto: {
            id: $id
            name: $name
            abilities: $abilities
            captureRate: $captureRate
            cycle: $cycle
            description: $description
            eggsGroup: $eggsGroup
            firstAppearenceGeneration: $firstAppearenceGeneration
            genderRepartition: $genderRepartition
            generation: $generation
            height: $height
            weight: $weight
            nextPokemon: $nextPokemon
            previousPokemon: $previousPokemon
            pokedexId: $pokedexId
            pokemonTypes: $pokemonTypes
            pokemonStats: $pokemonStats
            pokemonMoves: $pokemonMoves
            step: $step
          }
        ) {
          id
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
    `;
  }

  protected deleteQuery(): DocumentNode {
    return gql`
      mutation($id: String!) {
        removePokemon(id: $id) {
          id
        }
      }
    `;
  }
}
