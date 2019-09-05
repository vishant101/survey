import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'
import css from '../styles/CSS'
import Button from './Button'

export default class ResultMessage extends Component {
	render() {
		const { image, buttonText, heading, message, onPress } = this.props
		return (
            <View style={css.container}>
                <Text style={css.containerHeaderStyle}>{heading}</Text>
                <Image
                    style={css.containerImage} 
                    source={image} 
                />
                <Text style={css.containerTextStyle}>{message}</Text>
                <Button
                    text={buttonText}
                    onPress={onPress}
                />
            </View>
        )
	}
}