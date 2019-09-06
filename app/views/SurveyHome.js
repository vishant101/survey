import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../common/Button'
import { connect } from 'react-redux';
import css from '../styles/CSS'
import { BUTTONTEXT, VIEWS, STRINGS } from '../utils/Constants'
import IMAGES from '../utils/Images'
import { RESPONSE } from '../../mockApis/questionsAPI'

class SurveryHome extends Component {
	constructor(props) {
		super(props)
		this.loadQuestions()
	}

	loadQuestions(){
		// TODO: Fetch questions using API
		this.props.addQuestions(RESPONSE)
	}

	onStartButtonPress(){
		const { navigation } = this.props
		navigation.navigate(VIEWS.QUESTIONS)
	}

	render() {
		return (
			<View style={css.container}>
				<Image source={IMAGES.DOCTOR} />
				<Text style={css.containerTextStyle}>{STRINGS.HOMETEXT}</Text>
				<Button text={BUTTONTEXT.START} onPress={() => this.onStartButtonPress()} />
			</View>
		)
	}
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({
	addQuestions: (questions) => {
		dispatch({ type: 'SET_QUESTIONS', questions })
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveryHome)