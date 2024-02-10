import {View} from 'react-native';
import NetworkHandler from "../classes/NetworkHandler";
import {useEffect} from "react";
import {useState} from "react";
import ProjectStyle from "../styles/ProjectStyle";
import FoundAlbumListComponent from "../FoundAlbumListComponent";
import ListWithHeaderComponent from "../ListWithHeaderComponent";

export default function FoundAlbumsScreen({route, navigation}) {
	const {artistId, artistName, artistCountry} = route.params;
	const networkHandler = new NetworkHandler();
	const [artistAlbums, setArtistAlbums] = new useState([]);

	useEffect(() => {
		networkHandler.getAlbums(artistId)
			.then(albums => {
				setArtistAlbums(albums);
			});
	}, [artistId]);

	const renderFoundAlbumListEntry = ({item}) => (
		<FoundAlbumListComponent
			id={item.id}
			title={item.title}
			releaseDate={item.releaseDate}
			type={item.type}
			onPress={() =>
				navigation.navigate('Album', {
					albumId: item.id,
					albumTitle: item.title,
					albumReleaseDate: item.releaseDate,
					albumType: item.type,
				})
			}
		/>
	);

	return (
		<View style={ProjectStyle.container}>
			<ListWithHeaderComponent
				text={`Albums of ${artistName}${artistCountry !== undefined ? ` (${artistCountry})` : ''}:`}
				data={artistAlbums}
				renderFunction={renderFoundAlbumListEntry}
			/>
		</View>
	);
}


