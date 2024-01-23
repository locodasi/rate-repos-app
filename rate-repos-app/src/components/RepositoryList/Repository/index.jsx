import { useParams } from "react-router-native"
import { FlatList} from "react-native";

import useRepository from "../../../hooks/useRepository";
import RepositoryItem from "../RepositoryItem";
import Button from "../../customComps/Button";
import ReviewItem from "./ReviewItem";

import * as Linking from 'expo-linking';



const Repository = () => { 
    const id = useParams("id");
    const {repository, loading, fetchMore} = useRepository({
        repositoryId: id.id,
        first: 6
    });

    if(loading){
        return(<></>)
    }

    const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

    const onEndReach = () => {
        fetchMore();
      };

    return(
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() =>(
                <RepositoryItem item={repository} 
                button={<Button onPress={()=>Linking.openURL(repository.url)}>Open in GitHub</Button>}
                /> 
            )}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    )
}

export default Repository