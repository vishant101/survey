import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import COLOR from '../styles/Colors'
import css from '../styles/CSS'

export default class SurveryHome extends Component {

    onStartButtonPress(){
        const { navigation } = this.props
        console.log('PRESS')
        navigation.navigate('Questions')
    }

    render() {
        return (
            <View style={css.container}>
                <Text>Click the button below to start the survey</Text>
                <Button
                    title='start'
                    color={COLOR.PRIMARY}
                    onPress={() => this.onStartButtonPress()}
                />
            </View>
        )
    }
}
