import React from 'react'
import { View, Text } from 'react-native'
import css from '../styles/CSS'
import CardHeader from '../common/CardHeader'
import CardBody from '../common/CardBody'

const SurveyCard = (data) => (
	<View style={css.card_container} >
        <CardHeader title={'Question 1'} />
        <CardBody type={'Question'} />
	</View>
)

export default SurveyCard