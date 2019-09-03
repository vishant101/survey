import React from 'react'
import { View, Text } from 'react-native'
import css from '../styles/CSS'

const QuestionBody = ({ type }) => {
	if (!type ) {
		return null
	} else {
		return (
			<View style={css.cq_bodyContainer}>
					<Text> Question </Text>
			</View>
		)
	}
}

export default QuestionBody
