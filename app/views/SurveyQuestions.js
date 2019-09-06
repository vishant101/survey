import React, { Component } from 'react'
import { View} from 'react-native'
import css from '../styles/CSS'
import SurveyCard from '../common/SurveyCard'
import { RESPONSE } from '../../mockApis/questionsAPI'
import { VIEWS } from '../utils/Constants'

export default class SurveryQuestions extends Component {
    onComplete(){
        const { navigation } = this.props
        navigation.replace(VIEWS.RESULTS)
    }

    render() {
        return (
            <View style={css.container}>
                <SurveyCard data={RESPONSE} onComplete={() => this.onComplete()}/>
            </View>
        )
    }
}