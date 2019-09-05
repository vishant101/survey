import React, {Component} from 'react'
import { View, Text, TextInput } from 'react-native'
import css from '../styles/CSS'
import COLOR from '../styles/Colors'
import Button from './Button'

export default class QuestionBody extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	  }

	getInputType(type, id, onPress) {
		switch(type) {
			case 'boolean':
				return ( 
					<View>
						<Button
							text='Yes'
							onPress={() => onPress(id, 'true')}
						/>
						<Button
							text='No'
							onPress={() => onPress(id, 'false')}
						/>
					</View>
				)
			case 'integer':
				return (
					<View>
						<TextInput
							style={{height: 40}}
							placeholder="Input value here"
							onChangeText={(value) => this.setState({value})}
							value={this.state.value}
							keyboardType='numeric'
						/>
						<Button
							text='Enter Value'
							onPress={() => onPress(id, this.state.value)}
						/>
					</View>
				)
			default:
			  return 'foo';
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