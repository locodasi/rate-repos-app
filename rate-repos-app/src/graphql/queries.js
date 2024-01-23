import { gql } from "@apollo/client";

import { REPOSITORY_BASE_FIELDS, REVIEW_BASE_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
    repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first) {
        edges {
          node {
            ...repositoryBaseFields
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
    }
}
${REPOSITORY_BASE_FIELDS}
`;

export const ME = gql`
query{
  me {
    id
    username
  }
}
`;

export const GET_REPOSITORY = gql`
query getRepository($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    ...repositoryBaseFields
    url
    reviews (first: $first, after: $after) {
      edges {
        node {
          ...reviewBaseFields
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
${REPOSITORY_BASE_FIELDS}
${REVIEW_BASE_FIELDS}
`;

export const GET_REVIEWS = gql`
query getReview($includeReviews: Boolean = true, $after: String, $first: Int) {
  me {
    reviews (after: $after, first: $first) @include(if: $includeReviews) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...reviewBaseFields
          repository {
            fullName
            id
          }
        }
      }
    }
    username
  }
}
${REVIEW_BASE_FIELDS}
`;