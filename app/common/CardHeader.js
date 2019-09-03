import React from 'react'
import { View, Text } from 'react-native'
import css from '../styles/CSS'

const CardHeader = ({ title }) => {
	if (!title ) {
		return null
	} else {
		return (
			<View style={css.ch_headerContainer}>
				<Text style={css.ch_titleText}>
					{title}
				</Text>
			</View>
		)
	}
}

export default CardHeader
