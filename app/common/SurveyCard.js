import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import css from '../styles/CSS'
import CardHeader from '../common/CardHeader'
import SubmitBody from '../common/SubmitBody'
import QuestionBody from '../common/QuestionBody'

class SurveyCard extends Component {
    state = {
        questionIndex: 0
    }

    showQuestionCard(index){
        const {questions} = this.props
        const question = questions[index]
        return(
            <View style={css.card_container} >
                <CardHeader title={this.getQuestionHeader(index)}/>
                <QuestionBody
                    question={question.text}
                    type={question.type}
                    id={question.id}
                    onPress={(id, value) => this.onQuestionPress(id, value)}
                />
            </View>
        )
    }

    showSubmitCard(){
        return(
            <View style={css.card_container} >
                <CardHeader title={"Submit ?"}/>
                <SubmitBody
                    onPress={(submit) => this.onSubmitPress(submit)}
                />
            </View>
        )
    }

    onSubmitPress(submit){
        if (!submit){
            this.setState(() => ({ questionIndex: 0 }))
        }
    }

    onQuestionPress(id, value){
        this.setState(previousState => ({ questionIndex: previousState.questionIndex + 1 }))
        this.props.addAnswer(id, value)
    }

    getQuestionHeader(questionNumber){
        const number = questionNumber +1
        const questionString = 'Question ' + number
        return questionString
    }

    render() {
        return(
            (this.state.questionIndex == this.props.questions.length) ? this.showSubmitCard() : this.showQuestionCard(this.state.questionIndex)
        )
    }
}

const mapStateToProps = (state, props) => ({
    questions: state.survey.questions
})

const mapDispatchToProps = dispatch => ({
    addAnswer: (id, value) => {
		dispatch({ type: 'UPDATE_ANSWER', id, value })
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyCard)