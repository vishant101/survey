import React from 'react'
import { View, Text } from 'react-native'
import css from '../styles/CSS'
import QuestionBody from './QuestionBody'
import SubmitBody from './SubmitBody'

const CardBody = ({ type }) => {
	if (!type ) {
		return null
	} else {
		return (
			<View style={css.cb_bodyContainer}>
					{(type == 'Question') ? (<QuestionBody type='Numerical' />) : (<SubmitBody />)}
			</View>
		)
	}
}

export default CardBody
