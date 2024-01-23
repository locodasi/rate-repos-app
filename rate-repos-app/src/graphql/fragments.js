import { gql } from "@apollo/client";

export const REPOSITORY_BASE_FIELDS  = gql`
    fragment repositoryBaseFields on Repository {
        id
            fullName
            description
            language
            ownerAvatarUrl
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
    }
`;

export const REVIEW_BASE_FIELDS  = gql`
    fragment reviewBaseFields on Review {
        id
          text
          rating
          createdAt
          user {
            id
            username
          }  
    }
`;
