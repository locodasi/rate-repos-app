import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = (variables) => {
    const {data, error, loading, fetchMore} = useQuery(GET_REPOSITORY, {
      fetchPolicy: "cache-and-network",
      variables
    })

    const handleFetchMore = () => {
      const canFetchMore = 
        !loading && data && data.repository.reviews.pageInfo.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }
  
      fetchMore({
        query: GET_REPOSITORY,
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          ...variables,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const nextResult = {
            repository: {
              ...previousResult.repository,
              reviews: {
                ...fetchMoreResult.repository.reviews,
                edges: [
                  ...previousResult.repository.reviews.edges,
                  ...fetchMoreResult.repository.reviews.edges,
                ],
              }
            },
          };
  
          return nextResult;
        },
      });
    };
  
    let repository = loading ? null : data.repository
    return {repository, loading, fetchMore: handleFetchMore}
  };

  export default useRepository;
