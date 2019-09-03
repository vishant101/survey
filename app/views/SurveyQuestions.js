import React, { Component } from 'react'
import { View} from 'react-native'
import css from '../styles/CSS'
import SurveyCard from '../common/SurveyCard'

export default class SurveryHome extends Component {
    render() {
        return (
            <View style={css.container}>
                <SurveyCard />
            </View>
        )
    }
}

