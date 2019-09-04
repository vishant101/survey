import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import css from '../styles/CSS'
import COLOR from '../styles/Colors'

export default class QuestionBody extends Component {
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
						<Text> Number Types </Text>
						<Button
							title='Enter Value'
							color={COLOR.PRIMARY}
							onPress={() => onPress(id, '45')}
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
			<View style={css.cq_bodyContainer}>
				<Text>{question}</Text>
				{this.getInputType(type, id, onPress)}
			</View>
		)
	}
}