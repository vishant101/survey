import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import SurveyHome from './app/views/SurveyHome'

const stackNav = createStackNavigator({
    Home: {
        screen: SurveyHome
    }
})

const AppContainer = createAppContainer(stackNav);

export default AppContainer;
