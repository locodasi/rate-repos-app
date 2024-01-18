import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {
  const {data, error, loading} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network"
  })

  let repositories = loading ? [] : data.repositories
  return {repositories, loading}
};

export default useRepositories;
