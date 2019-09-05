import React, {Component} from 'react'
import { View, Text } from 'react-native'
import css from '../styles/CSS'
import COLOR from '../styles/Colors'
import Button from './Button'

export default class SubmitBody extends Component {
	render() {
		const {onPress} = this.props
		return (
			<View style={css.cb_bodyContainer}>
				<Text style={css.cb_textStyle}> If you would like to Submit please click submit, if you would like to start over click start over </Text>
				<Button
					text='Start Over'
					onPress={() => onPress(false)}
				/>
				<Button
					text='Submit'
					onPress={() => onPress(true)}
				/>	
			</View>
		)
	}
}