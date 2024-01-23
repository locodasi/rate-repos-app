import { GET_REVIEWS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useReviews = (variables) => {

    const {data, error, loading, fetchMore, refetch } = useQuery(GET_REVIEWS, {
        fetchPolicy: "cache-and-network",
        variables
      })

      const handleFetchMore = () => {
        const canFetchMore = 
          !loading && data && data.me.reviews.pageInfo.hasNextPage;
    
          
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
          query: GET_REVIEWS,
          variables: {
            after: data.me.reviews.pageInfo.endCursor,
            ...variables,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const nextResult = {
              me: {
                ...previousResult.me,
                reviews: {
                  ...fetchMoreResult.me.reviews,
                  edges: [
                    ...previousResult.me.reviews.edges,
                    ...fetchMoreResult.me.reviews.edges,
                  ],
                }
              },
            };
    
            return nextResult;
          },
        });
      };

      let reviews = loading ? null : data.me.reviews
      return {reviews, loading, fetchMore: handleFetchMore, refetch }
}

export default useReviews;