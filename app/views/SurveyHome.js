import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import COLOR from '../styles/Colors'
import css from '../styles/CSS'
import { BUTTONTEXT, VIEWS } from '../utils/Constants'


export default class SurveryHome extends Component {
    onStartButtonPress(){
        const { navigation } = this.props
        navigation.navigate(VIEWS.QUESTIONS)
    }

    render() {
        return (
            <View style={css.container}>
                <Text>Click the button below to start the survey</Text>
                <Button
                    title={BUTTONTEXT.START}
                    color={COLOR.PRIMARY}
                    onPress={() => this.onStartButtonPress()}
                />
            </View>
        )
    }
}
