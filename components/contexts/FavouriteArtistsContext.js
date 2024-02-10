import React from 'react';

/* I use this context to store my favourite-artist list. With this context, I can make the stored information
available to ArtistListComponent.js and FoundArtistListScreen.js without passing it explicitly through props.  */

const FavouriteArtistsContext = React.createContext();

export const FavouriteArtistsContextProvider = ({children}) => {
	const [artistArray, setArtistArray] = React.useState([]);

	return (
		<FavouriteArtistsContext.Provider value={{artistArray, setArtistArray}}>
			{children}
		</FavouriteArtistsContext.Provider>
	);
};

export default FavouriteArtistsContext;
