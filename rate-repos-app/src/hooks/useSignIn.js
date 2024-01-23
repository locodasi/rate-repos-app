import { useMutation, useApolloClient } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations";

import {useAuthStorage} from '../contexts/AuthStorageContext';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);

    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
      const credentials = {password, username};
      const { data } = await mutate({variables: {credentials}})
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      
      return data;
    };

  
    return [signIn, result];
  };

export default useSignIn;