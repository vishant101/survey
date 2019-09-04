import { combineReducers } from 'redux'

import surveyReducer from './SurveyReducer'

module.exports = combineReducers({ survey: surveyReducer })
