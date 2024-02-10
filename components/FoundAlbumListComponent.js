import {Text, TouchableWithoutFeedback, View} from "react-native";
import ProjectStyle from "./styles/ProjectStyle";


const FoundAlbumListComponent = (route) => {
	return (
		<View style={ProjectStyle.flatListElement}>
			<TouchableWithoutFeedback onPress={route.onPress}>
					<Text style={ProjectStyle.flatListText}>
						{`${route.title}${route.type ? ` (${route.type}) ` : ''}${route.releaseDate !== '' ? `\nreleased at ${route.releaseDate}` : ''}`}
					</Text>
			</TouchableWithoutFeedback>
		</View>
	);
}
export default FoundAlbumListComponent

