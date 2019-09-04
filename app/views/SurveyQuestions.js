import React, { Component } from 'react'
import { View} from 'react-native'
import css from '../styles/CSS'
import SurveyCard from '../common/SurveyCard'
import { RESPONSE } from '../../mockApis/questionsAPI'

export default class SurveryQuestions extends Component {
    render() {
        return (
            <View style={css.container}>
                <SurveyCard data={RESPONSE}/>
            </View>
        )
    }
}