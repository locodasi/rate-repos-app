import useReviews from "../hooks/useReviews";

import { FlatList } from "react-native";

import ReviewItem from "./RepositoryList/Repository/ReviewItem";

const MyReviews = () => {

    const {reviews, loading, fetchMore, refetch  } = useReviews({
        first: 6
      });
    
      if(loading){
        return(<></>)
      }

      const onEndReach = () => {
        fetchMore();
      }

      const reviewsNodes = reviews ? reviews.edges.map(edge => edge.node): [];

      return(
        <FlatList
            data={reviewsNodes}
            renderItem={({ item }) => <ReviewItem review={item} refetch={refetch}/>}
            keyExtractor={({ id }) => id}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
      )

}

export default MyReviews;