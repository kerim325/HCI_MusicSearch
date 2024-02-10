import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./components/screens/HomeScreen";
import FoundArtistsScreen from "./components/screens/FoundArtistsScreen";
import FoundAlbumsScreen from "./components/screens/FoundAlbumsScreen";
import AlbumScreen from "./components/screens/AlbumScreen";
import MyArtistListScreen from "./components/screens/MyArtistListScreen";
import {FavouriteArtistsContextProvider} from "./components/contexts/FavouriteArtistsContext";


const Stack = createNativeStackNavigator();

/*
	HomeScreen: Search for artists, navigation to Favourite-Artist list
	FoundArtistsScreen: List of search result for artist search
	FoundAlbumsScreen: List of found albums of selected artist
	AlbumScreen: Display of album metadata
	MyArtistListScreen: List of artist saved to favourite-artist list.
*/

export default function App() {
	return (
		<FavouriteArtistsContextProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name={'Home'} component={HomeScreen}/>
					<Stack.Screen name={'Search Result'} component={FoundArtistsScreen}/>
					<Stack.Screen name={'Found Albums'} component={FoundAlbumsScreen}/>
					<Stack.Screen name={'Album'} component={AlbumScreen}/>
					<Stack.Screen name={'My Artist List'} component={MyArtistListScreen}/>
				</Stack.Navigator>
			</NavigationContainer>
		</FavouriteArtistsContextProvider>
	);
}