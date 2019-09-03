import React, { Component } from 'react';
import { Text, View} from 'react-native';
import css from '../styles/CSS'

export default class SurveryHome extends Component {
    render() {
        return (
            <View style={css.container}>
                <Text>SurveyQuestions</Text>
            </View>
        )
    }
}

