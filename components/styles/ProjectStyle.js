import {StyleSheet} from "react-native";

/*
	Separation of Style and Logic
*/

const ProjectStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 40,
		flexDirection: "column",
		flexWrap: "nowrap",
		alignSelf: "stretch",
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
	childViews: {
		margin: 5,
		flexDirection:"column",
	},
	heading: {
		fontSize: 40,
		fontWeight: 'bold',
	},
	studentId: {
		fontSize: 15,
		fontWeight: "normal",
		marginBottom: 10,
	},
	textInput: {
		borderWidth: 2,
		borderColor: 'grey',
		padding: 3,
		borderRadius: 10,
	},
	textInputLabel: {
		fontSize: 20,
	},
	searchButton: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
	},
	inputComponentView: {
		marginBottom: 20,
	},
	searchButtonText: {
		color: '#000000',
	},
	albumCoverArt: {
		width:300,
		height:300
	},
	flatListLabel: {
		fontSize:25,
		fontWeight: "900",
		marginBottom: 15,
	},
	flatList: {
		paddingVertical:5,
		marginBottom:50,
	},
	flatListElement: {
		marginBottom:10,
		padding:2,
		backgroundColor: '#DDDDDD',
		flexDirection:"row"
	},
	flatListText: {
		flex:1,
		fontSize:20,
	},
	albumTypeText: {
		fontSize:35,
		fontStyle:"italic",
		flex: 1,
	},
	albumScreenCore: {
		flex:4,
		alignItems:"center",
	},
	albumCoverArtText: {
		fontSize:30,
		fontStyle:"italic"
	},
	myArtistListPressableText: {
		fontSize:15,
		textDecorationLine: 'underline',
		alignSelf: "flex-end",
		marginBottom: 25,
	},
	flatListElementAddRemoveTouchable: {
		flex:1,
		alignItems:"center",
		justifyContent:"center",
	},
	flatListElementArtistTouchable: {
		flex:4,
	}
});

export default ProjectStyle;