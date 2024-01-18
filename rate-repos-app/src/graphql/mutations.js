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