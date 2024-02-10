import {Text, View, TouchableHighlight, Pressable} from 'react-native';
import {useState} from "react";
import InputComponent from "../InputComponent";
import ProjectStyle from "../styles/ProjectStyle";

export default function HomeScreen({navigation}) {
	const [inputBandName, setInputBandName] = useState('');

	function openMyArtistList()
	{
		navigation.navigate("My Artist List");
	}

	return (
		<View style={ProjectStyle.container}>
			<View style={ProjectStyle.childViews}>
				<Pressable onPress={openMyArtistList}>
					<Text style={ProjectStyle.myArtistListPressableText}>favourite artists</Text>
				</Pressable>
				<Text style={ProjectStyle.heading}>MusicSearch</Text>
				<Text style={ProjectStyle.studentId}>{' '}</Text>
			</View>
			<View style={ProjectStyle.childViews}>
				<InputComponent
					title={"Name of the Band:"}
					placeholder={"search artist name"}
					updateState={setInputBandName}
				/>
				<TouchableHighlight onPress={() => navigation.navigate('Search Result', {
					artistName: inputBandName,
				})}>
					<View style={ProjectStyle.searchButton}>
						<Text style={ProjectStyle.searchButtonText}>
							Search
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	);
}

