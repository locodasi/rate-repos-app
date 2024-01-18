import {ApolloClient, InMemoryCache} from '@apollo/client';
import Constants from "expo-constants"

const createApolloClient = () => {
  return new ApolloClient({
    // Replace the IP address part with your own IP address!
    uri: Constants.expoConfig.extra.apollo_uri,
    cache: new InMemoryCache()
  });
};




export default createApolloClient;