import {View} from 'react-native';
import ProjectStyle from "../styles/ProjectStyle";
import ArtistListComponent from "../ArtistListComponent";
import ListWithHeaderComponent from "../ListWithHeaderComponent";
import {useContext} from "react";
import FavouriteArtistsContext from "../contexts/FavouriteArtistsContext";

export default function MyArtistListScreen({navigation}) {
	const {artistArray} = useContext(FavouriteArtistsContext);

	const renderArtistListItem = ({item}) => (
		<ArtistListComponent
			artist={item}
			onPress={() =>
				navigation.navigate('Found Albums', {
					artistId: item.id,
					artistName: item.name,
					artistCountry: item.country
				})
			}
		/>
	);

	return (
		<View style={ProjectStyle.container}>
			<ListWithHeaderComponent
				text={`My favourite artists:`}
				data={artistArray}
				renderFunction={renderArtistListItem}
			/>
		</View>
	);
}


