import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
mutation aut($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        username
        id
      }
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
mutation addReview($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`;

export const CREATE_USER = gql`
mutation addUser($user: CreateUserInput) {
  createUser(user: $user) {
    username
  }
}
`;

export const DELETE_REVIEW = gql`
mutation removeReview($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`;