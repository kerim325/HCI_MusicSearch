/* Used to store album information retrieved from musicbrainz */

class Album {
	id;
	title;
	type;
	releaseDate;

	constructor(id, title, releaseDate, type) {
		this.title = title;
		this.id = id;
		this.releaseDate = releaseDate;
		this.type = type;
	}
}
export default Album;