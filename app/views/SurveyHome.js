import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux';
import COLOR from '../styles/Colors'
import css from '../styles/CSS'
import { BUTTONTEXT, VIEWS } from '../utils/Constants'
import { RESPONSE } from '../../mockApis/questionsAPI'

class SurveryHome extends Component {
    constructor(props) {
        super(props)
        this.loadQuestions()
    }

    loadQuestions(){
        // TODO: Fetch questions using API
        this.props.addQuestions(RESPONSE)
    }

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

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({
	addQuestions: (questions) => {
		dispatch({ type: 'SET_QUESTIONS', questions })
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveryHome)