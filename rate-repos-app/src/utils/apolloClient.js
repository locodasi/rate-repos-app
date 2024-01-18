import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import Constants from "expo-constants"
import {setContext} from "@apollo/client/link/context"

const createApolloClient = (authStorage) => {

  const authLink = setContext(async (_,{headers}) => {
    const accessToken = await authStorage.getAccessToken();
    return {headers: {...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    }}
  });

  const httpLink = createHttpLink({uri: Constants.expoConfig.extra.apollo_uri})

  return new ApolloClient({
    // Replace the IP address part with your own IP address!
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    
  });
};

export default createApolloClient;