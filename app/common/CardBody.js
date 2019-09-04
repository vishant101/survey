import React from 'react'
import { View, Text } from 'react-native'
import css from '../styles/CSS'
import QuestionBody from './QuestionBody'
import SubmitBody from './SubmitBody'

const CardBody = ({ cardType, question, questionType, questionID, onPress }) => {
	if (!cardType ) {
		return null
	} else {
		return (
			<View style={css.cb_bodyContainer}>
					{(cardType == 'Question') ? 
						(<QuestionBody  question={question} type={questionType} id={questionID} onPress={onPress} />) : 
						(<SubmitBody onPress={onPress} />)}
			</View>
		)
	}
}

export default CardBody
