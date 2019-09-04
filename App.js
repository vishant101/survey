import React, { Component } from 'react'
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import { View } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import survey from './app/reducers/SurveyReducer';
import SurveyHome from './app/views/SurveyHome'
import SurveyQuestions from './app/views/SurveyQuestions'

const store = createStore(survey)

const stackNav = createStackNavigator({
    Home: {
        screen: SurveyHome
    },
    Questions: {
        screen: SurveyQuestions
    }
})

const AppContainer = createAppContainer(stackNav);

export default class App extends Component {
	render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
	}
}