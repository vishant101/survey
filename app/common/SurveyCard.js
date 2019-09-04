import React, { Component } from 'react'
import { View, Text } from 'react-native'
import css from '../styles/CSS'
import CardHeader from '../common/CardHeader'
import CardBody from '../common/CardBody'

export default class SurveyCard extends Component {
    state = {
        questionCards: [],
        questionIndex: 0
    }

    showQuestionCard(index){
        const {data} = this.props
        const question = data[index]
        return(
            <View style={css.card_container} >
                <CardHeader title={this.getQuestionHeader(index)}/>
                <CardBody 
                    cardType={'Question'}
                    question={question.text}
                    questionType={question.type}
                    questionID={question.id}
                    onPress={(id, value) => this.onQuestionPress(id, value)}
                />
            </View>
        )
    }

    showSubmitCard(){
        return(
            <View style={css.card_container} >
                <CardHeader title={"Submit ?"}/>
                <CardBody 
                    cardType={'Submit'}
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
        console.log(value)
        this.setState(previousState => ({ questionIndex: previousState.questionIndex + 1 }))
        console.log(  this.state.questionIndex)
    }

    getQuestionHeader(questionNumber){
        const number = questionNumber +1
        const questionString = 'Question ' + number
        return questionString
    }

    render() {
        return(
            (this.state.questionIndex == this.props.data.length) ? this.showSubmitCard() : this.showQuestionCard(this.state.questionIndex)
        )
    }
}