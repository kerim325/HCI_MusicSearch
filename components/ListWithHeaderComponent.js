import {FlatList, Text, View} from "react-native";
import ProjectStyle from "./styles/ProjectStyle";

const ListWithHeaderComponent = (route) => {
	return (
		<View>
			<Text style={ProjectStyle.flatListLabel}>{route.text}</Text>
			<FlatList style={ProjectStyle.flatList} data={route.data} renderItem={route.renderFunction}/>
		</View>
	);
}

export default ListWithHeaderComponent;