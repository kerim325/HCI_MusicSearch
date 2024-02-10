import Artist from "./Artist";
import Album from "./Album";

/*
	Class to handle musicbrainz api calls
*/

class NetworkHandler {

	searchArtists(searchString) {
		let url = "http://musicbrainz.org/ws/2/artist/?query=artist:" + searchString;
		/*console.log(url)*/
		return fetch(url, {
			headers: {
				'Accept': "application/json",
				'User-Agent': 'MSearch/1.0.0'
			},
		})
			.then(response => response.json())
			.then(data => {
				return data.artists.map(artist => new Artist(artist.name, artist.country, artist.id));
			})
			.catch(error => {
				console.log(error);
				return error;
			});
	}


	getAlbums(artistId) {
		let url = 'http://musicbrainz.org/ws/2/release-group?artist=' + artistId;
		/*console.log(url)*/
		return fetch(url, {
			headers: {
				'Accept': "application/json",
				'User-Agent': 'MusicSearch/1.0.0'
			},
		})
			.then(response => response.json())
			.then(data => {
				return data['release-groups'].map(album =>
					new Album(album['id'],
						album['title'],
						album['first-release-date'],
						album['primary-type'])
				)
			})
			.catch(error => {
				console.log(error);
				return error;
			});
	}
}

export default NetworkHandler;