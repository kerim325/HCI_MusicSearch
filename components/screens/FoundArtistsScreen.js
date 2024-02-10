import {View} from 'react-native';
import {useEffect} from "react";
import {useState} from "react";
import ProjectStyle from "../styles/ProjectStyle";
import ArtistListComponent from "../ArtistListComponent";
import NetworkHandler from "../classes/NetworkHandler";
import ListWithHeaderComponent from "../ListWithHeaderComponent";

export default function FoundArtistsScreen({route, navigation}) {
	const {artistName} = route.params;
	const [foundArtists, setFoundArtists] = useState([]);
	const networkHandler = new NetworkHandler();

	useEffect(() => {
		networkHandler.searchArtists(artistName)
			.then(artists => {
				setFoundArtists(artists);
			});
	}, [artistName]);

	const renderFoundArtistListItem = ({item}) => (
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
				text={`Results for "${artistName}":`}
				data={foundArtists}
				renderFunction={renderFoundArtistListItem}
			/>
		</View>
	);
}



