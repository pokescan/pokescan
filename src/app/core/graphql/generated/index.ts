import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type AbilityDto = {
  __typename?: 'AbilityDto';
  /** Id of the object */
  id: Scalars['ID'];
  /** Latest update date for object */
  updatedAt: Scalars['String'];
  /** Creation date for object */
  createdAt: Scalars['String'];
  /** Name of the ability */
  name: Scalars['String'];
  /** Description of the ability */
  description: Scalars['String'];
};

export type AbilityMetadata = {
  __typename?: 'AbilityMetadata';
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type AbilityPaginated = {
  __typename?: 'AbilityPaginated';
  items?: Maybe<Array<AbilityDto>>;
  metadata: AbilityMetadata;
};

export type CreateAbilityDto = {
  /** Name of the ability */
  name: Scalars['String'];
  /** Description of the ability */
  description: Scalars['String'];
};

export type CreateGameVersionDto = {
  name: Scalars['String'];
  imageUrl: Scalars['String'];
  generation: Scalars['String'];
};

export type CreatePokemonMoveDetailDto = {
  levelLearnedAt: Scalars['Int'];
  learnMethod: LearnMethod;
  version: Scalars['String'];
  pokemonType: Scalars['String'];
  pokemonMove?: Maybe<Scalars['String']>;
  accuracy: Scalars['Int'];
  pp: Scalars['Int'];
  power: Scalars['Int'];
  effect: Scalars['Int'];
  damage: Damage;
  contestType: Scalars['Int'];
  contestCharm: Scalars['Int'];
  contestLocking: Scalars['Int'];
};

export type CreatePokemonMoveDto = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export enum Damage {
  Statut = 'STATUT',
  Physique = 'PHYSIQUE',
  Special = 'SPECIAL'
}

export type GameVersionDto = {
  __typename?: 'GameVersionDto';
  /** Id of the object */
  id: Scalars['ID'];
  /** Latest update date for object */
  updatedAt: Scalars['String'];
  /** Creation date for object */
  createdAt: Scalars['String'];
  name: Scalars['String'];
  imageUrl: Scalars['String'];
  generation: GenerationDto;
};

export type GameVersionMetadata = {
  __typename?: 'GameVersionMetadata';
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type GameVersionPaginated = {
  __typename?: 'GameVersionPaginated';
  items?: Maybe<Array<GameVersionDto>>;
  metadata: GameVersionMetadata;
};

export type GenerationDto = {
  __typename?: 'GenerationDto';
  /** Id of the object */
  id: Scalars['ID'];
  /** Latest update date for object */
  updatedAt: Scalars['String'];
  /** Creation date for object */
  createdAt: Scalars['String'];
  /** The order of the generation */
  order: Scalars['Int'];
};

export type GenerationInputDto = {
  /** The order of the generation */
  order: Scalars['Int'];
};

export type GenerationMetadata = {
  __typename?: 'GenerationMetadata';
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type GenerationPaginated = {
  __typename?: 'GenerationPaginated';
  items?: Maybe<Array<GenerationDto>>;
  metadata: GenerationMetadata;
};

export enum LearnMethod {
  Evolution = 'EVOLUTION'
}

export type LocationDto = {
  __typename?: 'LocationDto';
  /** Id of the object */
  id: Scalars['ID'];
  /** Latest update date for object */
  updatedAt: Scalars['String'];
  /** Creation date for object */
  createdAt: Scalars['String'];
  /** Name of the location */
  name: Scalars['String'];
  /** Region of the location */
  region: RegionDto;
};

export type LocationInputDto = {
  /** Name of the location */
  name: Scalars['String'];
  /** Id of the region */
  region: Scalars['String'];
};

export type LocationMetadata = {
  __typename?: 'LocationMetadata';
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type LocationPaginated = {
  __typename?: 'LocationPaginated';
  items?: Maybe<Array<LocationDto>>;
  metadata: LocationMetadata;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAbility: AbilityDto;
  updateAbility: AbilityDto;
  removeAbility?: Maybe<AbilityDto>;
  createPokemonMove: PokemonMoveDto;
  updatePokemonMove: PokemonMoveDto;
  removePokemonMove?: Maybe<PokemonMoveDto>;
  createPokemonMoveDetail: PokemonMoveDetailDto;
  updatePokemonMoveDetail: PokemonMoveDetailDto;
  removePokemonMoveDetail?: Maybe<PokemonMoveDetailDto>;
  createPokemonType: PokemonTypeDto;
  updatePokemonType: PokemonTypeDto;
  removePokemonType?: Maybe<PokemonTypeDto>;
  createGameVersion: GameVersionDto;
  updateGameVersion: GameVersionDto;
  removeGameVersion?: Maybe<GameVersionDto>;
  createGeneration: GenerationDto;
  removeGeneration?: Maybe<GenerationDto>;
  createRegion: RegionDto;
  updateRegion: RegionDto;
  removeRegion?: Maybe<RegionDto>;
  createLocation: LocationDto;
  updateLocation: LocationDto;
  removeLocation?: Maybe<LocationDto>;
};


export type MutationCreateAbilityArgs = {
  abilityInputDto: CreateAbilityDto;
};


export type MutationUpdateAbilityArgs = {
  abilityInputDto: UpdateAbilityDto;
  id: Scalars['String'];
};


export type MutationRemoveAbilityArgs = {
  id: Scalars['String'];
};


export type MutationCreatePokemonMoveArgs = {
  pokemonMoveInputDto: CreatePokemonMoveDto;
};


export type MutationUpdatePokemonMoveArgs = {
  updatePokemonMoveDto: UpdatePokemonMoveDto;
  id: Scalars['String'];
};


export type MutationRemovePokemonMoveArgs = {
  id: Scalars['String'];
};


export type MutationCreatePokemonMoveDetailArgs = {
  pokemonMoveDetailDto: CreatePokemonMoveDetailDto;
  pokemonMoveId: Scalars['String'];
};


export type MutationUpdatePokemonMoveDetailArgs = {
  pokemonMoveDetailDto: UpdatePokemonMoveDetailDto;
  pokemonMoveDetailId: Scalars['String'];
  pokemonMoveId: Scalars['String'];
};


export type MutationRemovePokemonMoveDetailArgs = {
  pokemonMoveDetailId: Scalars['String'];
};


export type MutationCreatePokemonTypeArgs = {
  pokemonTypeInputDto: PokemonTypeInputDto;
};


export type MutationUpdatePokemonTypeArgs = {
  pokemonTypeInputDto: PokemonTypeInputDto;
  id: Scalars['String'];
};


export type MutationRemovePokemonTypeArgs = {
  id: Scalars['String'];
};


export type MutationCreateGameVersionArgs = {
  createGameVersion: CreateGameVersionDto;
};


export type MutationUpdateGameVersionArgs = {
  updateGameVersion: UpdateGameVersionDto;
};


export type MutationRemoveGameVersionArgs = {
  id: Scalars['String'];
};


export type MutationCreateGenerationArgs = {
  generationInputDto: GenerationInputDto;
};


export type MutationRemoveGenerationArgs = {
  id: Scalars['String'];
};


export type MutationCreateRegionArgs = {
  regionInputDto: RegionInputDto;
};


export type MutationUpdateRegionArgs = {
  regionInputDto: RegionInputDto;
  id: Scalars['String'];
};


export type MutationRemoveRegionArgs = {
  id: Scalars['String'];
};


export type MutationCreateLocationArgs = {
  locationInputDto: LocationInputDto;
};


export type MutationUpdateLocationArgs = {
  locationInputDto: LocationInputDto;
  id: Scalars['String'];
};


export type MutationRemoveLocationArgs = {
  id: Scalars['String'];
};

export type PokemonMoveDetailDto = {
  __typename?: 'PokemonMoveDetailDto';
  /** Id of the object */
  id: Scalars['ID'];
  /** Latest update date for object */
  updatedAt: Scalars['String'];
  /** Creation date for object */
  createdAt: Scalars['String'];
  levelLearnedAt: Scalars['Int'];
  learnMethod: LearnMethod;
  version: GameVersionDto;
  pokemonMove: PokemonMoveDto;
  pokemonType: PokemonTypeDto;
  accuracy: Scalars['Int'];
  pp: Scalars['Int'];
  power: Scalars['Int'];
  effect: Scalars['Int'];
  damage: Damage;
  contestType: Scalars['Int'];
  contestCharm: Scalars['Int'];
  contestLocking: Scalars['Int'];
};

export type PokemonMoveDto = {
  __typename?: 'PokemonMoveDto';
  /** Id of the object */
  id: Scalars['ID'];
  /** Latest update date for object */
  updatedAt: Scalars['String'];
  /** Creation date for object */
  createdAt: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  pokemonMoveDetails: Array<PokemonMoveDetailDto>;
};

export type PokemonMoveMetadata = {
  __typename?: 'PokemonMoveMetadata';
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PokemonMovePaginated = {
  __typename?: 'PokemonMovePaginated';
  items?: Maybe<Array<PokemonMoveDto>>;
  metadata: PokemonMoveMetadata;
};

export type PokemonTypeDto = {
  __typename?: 'PokemonTypeDto';
  /** Id of the object */
  id: Scalars['ID'];
  /** Latest update date for object */
  updatedAt: Scalars['String'];
  /** Creation date for object */
  createdAt: Scalars['String'];
  /** Name of the pokemon type */
  name: Scalars['String'];
};

export type PokemonTypeInputDto = {
  /** Name of the pokemon type */
  name: Scalars['String'];
};

export type PokemonTypeMetadata = {
  __typename?: 'PokemonTypeMetadata';
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PokemonTypePaginated = {
  __typename?: 'PokemonTypePaginated';
  items?: Maybe<Array<PokemonTypeDto>>;
  metadata: PokemonTypeMetadata;
};

export type Query = {
  __typename?: 'Query';
  findAllAbilitys: AbilityPaginated;
  ability: AbilityDto;
  findAllPokemonMoves: PokemonMovePaginated;
  pokemonMove: PokemonMoveDto;
  findAllPokemonTypes: PokemonTypePaginated;
  pokemonType: PokemonTypeDto;
  findAllGameVersions: GameVersionPaginated;
  gameVersion: GameVersionDto;
  findAllGenerations: GenerationPaginated;
  generation: GenerationDto;
  findAllRegions: RegionPaginated;
  region: RegionDto;
  findAllLocations: LocationPaginated;
  location: LocationDto;
};


export type QueryFindAllAbilitysArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAbilityArgs = {
  id: Scalars['String'];
};


export type QueryFindAllPokemonMovesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPokemonMoveArgs = {
  id: Scalars['String'];
};


export type QueryFindAllPokemonTypesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPokemonTypeArgs = {
  id: Scalars['String'];
};


export type QueryFindAllGameVersionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGameVersionArgs = {
  id: Scalars['String'];
};


export type QueryFindAllGenerationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGenerationArgs = {
  id: Scalars['String'];
};


export type QueryFindAllRegionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryRegionArgs = {
  id: Scalars['String'];
};


export type QueryFindAllLocationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryLocationArgs = {
  id: Scalars['String'];
};

export type RegionDto = {
  __typename?: 'RegionDto';
  /** Id of the object */
  id: Scalars['ID'];
  /** Latest update date for object */
  updatedAt: Scalars['String'];
  /** Creation date for object */
  createdAt: Scalars['String'];
  /** Name of the region */
  name: Scalars['String'];
  /** Generated related to the region */
  generation: GenerationDto;
};

export type RegionInputDto = {
  /** Name of the region */
  name: Scalars['String'];
  /** Locations that are related to the region */
  generation: Scalars['String'];
};

export type RegionMetadata = {
  __typename?: 'RegionMetadata';
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type RegionPaginated = {
  __typename?: 'RegionPaginated';
  items?: Maybe<Array<RegionDto>>;
  metadata: RegionMetadata;
};

export type UpdateAbilityDto = {
  /** Description of the ability */
  description: Scalars['String'];
};

export type UpdateGameVersionDto = {
  imageUrl: Scalars['String'];
  generation: Scalars['String'];
  id: Scalars['String'];
};

export type UpdatePokemonMoveDetailDto = {
  levelLearnedAt?: Maybe<Scalars['Int']>;
  learnMethod?: Maybe<LearnMethod>;
  version?: Maybe<Scalars['String']>;
  pokemonType?: Maybe<Scalars['String']>;
  pokemonMove?: Maybe<Scalars['String']>;
  accuracy?: Maybe<Scalars['Int']>;
  pp?: Maybe<Scalars['Int']>;
  power?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['Int']>;
  damage?: Maybe<Damage>;
  contestType?: Maybe<Scalars['Int']>;
  contestCharm?: Maybe<Scalars['Int']>;
  contestLocking?: Maybe<Scalars['Int']>;
};

export type UpdatePokemonMoveDto = {
  description: Scalars['String'];
};
