import React, {Component} from 'react'
import { View, Text } from 'react-native'
import css from '../styles/CSS'
import Button from './Button'
import { STRINGS, BUTTONTEXT } from '../utils/Constants'

export default class SubmitBody extends Component {
	render() {
		const {onPress} = this.props
		return (
			<View style={css.cb_bodyContainer}>
				<Text style={css.cb_textStyle}>{STRINGS.SUBMITTEXT}</Text>
				<Button
					text={BUTTONTEXT.SUBMIT}
					onPress={() => onPress(true)}
				/>	
				<Button
					text={BUTTONTEXT.STARTOVER}
					onPress={() => onPress(false)}
				/>
			</View>
		)
	}
}