import {Image, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import ProjectStyle from "../styles/ProjectStyle";

export default function AlbumScreen({route}) {
	const {albumId, albumTitle, albumReleaseDate, albumType} = route.params;
	const [imageLink, setImageLink] = useState('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg');

	useEffect(() => {
		setImageLink('http://coverartarchive.org/release-group/' + albumId + '/front')
	}, [albumId])

	/* Used when image is not cover art */
	const handleImageError = () => {
		setImageLink('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg');
	}

	return (
		<View style={ProjectStyle.container}>
			<Text style={ProjectStyle.albumTypeText}>{albumType}</Text>
			<View style={ProjectStyle.albumScreenCore}>
				<Text style={ProjectStyle.albumCoverArtText}>{albumTitle}</Text>
				<Image style={ProjectStyle.albumCoverArt} source={{uri: imageLink}} onError={handleImageError}/>
				<Text style={ProjectStyle.albumCoverArtText}>{albumReleaseDate}</Text>
			</View>
		</View>
	);
}


