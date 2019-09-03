import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import SurveyHome from './app/views/SurveyHome'
import SurveyQuestions from './app/views/SurveyQuestions'

const stackNav = createStackNavigator({
    Home: {
        screen: SurveyHome
    },
    Questions: {
        screen: SurveyQuestions
    }
})

const AppContainer = createAppContainer(stackNav);

export default AppContainer;
