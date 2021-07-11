import { Injectable } from '@angular/core';
import { CreateAbilityDto, UpdateAbilityDto } from '@core/graphql/generated';
import { AbstractService } from '@shared/services/abstract/abstract.service';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class AbilityService extends AbstractService<
  CreateAbilityDto,
  UpdateAbilityDto
> {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  protected findAllQuery(): DocumentNode {
    return gql`
      query($offset: Int = 0, $limit: Int = 10) {
        findAllAbilitys(offset: $offset, limit: $limit) {
          items {
            id
            name
            description
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
        ability(id: $id) {
          id
          name
          description
        }
      }
    `;
  }

  protected createQuery(): DocumentNode {
    return gql`
      mutation($name: String!, $description: String!) {
        createAbility(
          abilityInputDto: { name: $name, description: $description }
        ) {
          id
          name
          description
        }
      }
    `;
  }

  protected updateQuery(): DocumentNode {
    return gql`
      mutation($description: String!, $id: String!) {
        updateAbility(abilityInputDto: { description: $description }, id: $id) {
          id
          name
          description
        }
      }
    `;
  }

  protected deleteQuery(): DocumentNode {
    return gql`
      mutation($id: String!) {
        removeAbility(id: $id) {
          id
        }
      }
    `;
  }
}
