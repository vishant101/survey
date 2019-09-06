import React, {Component} from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import css from '../styles/CSS'
import COLOR from '../styles/Colors'
import Button from './Button'
import { STRINGS, BUTTONTEXT, KEYBOARDTYPES } from '../utils/Constants'

export default class QuestionBody extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	}

	submitValue(id, onPress){
		const value = parseFloat(this.state.value)
		if (value == null || value.length == 0 || isNaN(value)) {
			Alert.alert(STRINGS.ALERTHEADER, STRINGS.ALERTMESSAGE)
		} else {
			onPress(id, value)
		}
	}
		
	getInputType(type, id, onPress) {
		switch(type) {
			case 'boolean':
				return ( 
					<View>
						<Button
							text={BUTTONTEXT.YES}
							onPress={() => onPress(id, true)}
						/>
						<Button
							text={BUTTONTEXT.NO}
							onPress={() => onPress(id, false)}
						/>
					</View>
				)
			case 'integer':
				return (
					<View>
						<TextInput
							style={css.textInputStyle}
							placeholder={STRINGS.PLACEHOLDER}
							onChangeText={(value) => this.setState({value})}
							value={this.state.value}
							keyboardType={KEYBOARDTYPES.NUMERIC}
							maxLength={6}
						/>
						<Button
							text={BUTTONTEXT.ENTERVALUE}
							onPress={() => this.submitValue(id, onPress)}
						/>
					</View>
				)
			default:
				return <View />
		  }
	}

	render() {
		const {type, question, id, onPress} = this.props
		return (
			<View style={css.cb_bodyContainer}>
				<Text style={css.cb_textStyle}>{question}</Text>
				{this.getInputType(type, id, onPress)}
			</View>
		)
	}
}