import { combineReducers } from 'redux'

const initialState = {
	questions: [],
	answers: {}
}

function surveyReducer(state = initialState, action) {
    const newState = { ...state }

	switch (action.type) {
		case 'SET_QUESTIONS': {
            newState.questions = action.questions
            console.log(newState)
			return newState
		}
		case 'UPDATE_ANSWER': {
			newState.answers[action.id] = action.value
			console.log(newState)
            return newState
		}
		default: {
			return state
		}
	}
}

module.exports = combineReducers({ survey: surveyReducer })
