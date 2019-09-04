import React, {Component} from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import css from '../styles/CSS'
import COLOR from '../styles/Colors'

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
							title='Yes'
							color={COLOR.PRIMARY}
							onPress={() => onPress(id, 'true')}
						/>
						<Button
							title='No'
							color={COLOR.PRIMARY}
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
							title='Enter Value'
							color={COLOR.PRIMARY}
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
				<Text>{question}</Text>
				{this.getInputType(type, id, onPress)}
			</View>
		)
	}
}