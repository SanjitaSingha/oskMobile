import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import styles from './styles/SingleFoodCard';

const SingleFoodCard = ({ info, viewFood }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={ viewFood.bind(this)}>
		<View style={styles.cardContainer}>
			<Image source={{ uri: `${info.image}` }} style={styles.cardImage} />
			<View style={styles.cardTitleContainer}>
				<Text style={styles.cardTitle} numberOfLines={2}>
					{info.title}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);


export default SingleFoodCard;
