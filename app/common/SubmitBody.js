import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import css from '../styles/CSS'
import COLOR from '../styles/Colors'

export default class SubmitBody extends Component {
	render() {
		const {onPress} = this.props
		return (
			<View style={css.cb_bodyContainer}>
				<Text> If you would like to Submit please click submit, if you would like to start over click start over </Text>
				<Button
					title='Start Over'
					color={COLOR.PRIMARY}
					onPress={() => onPress(false)}
				/>
				<Button
					title='Submit'
					color={COLOR.PRIMARY}
					onPress={() => onPress(true)}
				/>	
			</View>
		)

	}
}