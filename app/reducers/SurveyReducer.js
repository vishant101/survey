const initialState = {
	questions: [],
	answers: []
}

function survey(state = initialState, action) {
	switch (action.type) {
		case 'SET_QUESTIONS': {
            newState.questions = action.questions
			return newState
		}
		case 'UPDATE_ANSWER': {
            return state
		}
		default: {
			return state
		}
	}
}

module.exports = survey