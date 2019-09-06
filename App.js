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
import SurveyResults from './app/views/SurveyResults'
import COLOR from './app/styles/Colors'
import css from './app/styles/CSS'

const store = createStore(survey)

const stackNav = createStackNavigator({
    Home: {
        screen: SurveyHome,
        navigationOptions: {
            title: 'DigiDoc',
            headerTitleStyle : css.nb_homeTextStyle,
            headerLeft: null
        }
    },
    Questions: {
        screen: SurveyQuestions,
        navigationOptions: {
            title: 'Questionaire',
            headerTintColor: COLOR.DGREY,
            headerTitleStyle : css.nb_viewsTextStyle
        }
    },
    Results: {
        screen: SurveyResults,
        navigationOptions: {
            title: 'Results',
            headerTintColor: COLOR.DGREY,
            headerTitleStyle : css.nb_viewsTextStyle,
        }
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