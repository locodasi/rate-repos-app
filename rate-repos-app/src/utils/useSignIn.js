import { useMutation } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);
  
    const signIn = async ({ username, password }) => {
      const credentials = {password, username};
      await mutate({variables: {credentials}})
      return result;
    };
  
    return [signIn, result];
  };

export default useSignIn;