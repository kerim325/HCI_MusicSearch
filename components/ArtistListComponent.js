import {Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import ProjectStyle from "./styles/ProjectStyle";
import {useContext} from "react";
import FavouriteArtistsContext from "./contexts/FavouriteArtistsContext";

const ArtistListComponent = (route) => {
	const {artistArray, setArtistArray} = useContext(FavouriteArtistsContext);

	function addOrRemoveArtist() {
		if (artistArray.some(artist => artist.id === route.artist.id))
			setArtistArray(artistArray.filter(artist => artist.id !== route.artist.id));
		else
			setArtistArray([...artistArray, route.artist]);
	}

	return (
		<View style={ProjectStyle.flatListElement}>
			<View style={ProjectStyle.flatListElementArtistTouchable}>
				<TouchableWithoutFeedback onPress={route.onPress}>
					<Text style={ProjectStyle.flatListText}>
						{route.artist.name} {route.artist.country !== undefined ? `(${route.artist.country})` : ' '}
					</Text>
				</TouchableWithoutFeedback>
			</View>
			<View style={ProjectStyle.flatListElementAddRemoveTouchable}>
				<TouchableOpacity onPress={addOrRemoveArtist}>
					<Text>
						{artistArray.some(artist => artist.id === route.artist.id) ? "Remove" : "Add"}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export default ArtistListComponent

