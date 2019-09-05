import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import Button from '../common/Button'
import ResultMessage from '../common/ResultMessage'
import { connect } from 'react-redux';
import COLOR from '../styles/Colors'
import css from '../styles/CSS'
import { BUTTONTEXT, VIEWS, STRINGS } from '../utils/Constants'
import IMAGES from '../utils/Images'
import { RESPONSE } from '../../mockApis/questionsAPI'

class SurveyResults extends Component {
    constructor(props) {
        super(props)
    }

    onComplete(){
        const { navigation } = this.props
        navigation.navigate(VIEWS.HOME)
    }

    getResults(type) {
		switch(type) {
			case 'negative':
				return (
                    <ResultMessage 
                        heading={STRINGS.NODANGER}
                        buttonText={BUTTONTEXT.CLOSE}
                        image={IMAGES.CHECK}
                        message={STRINGS.NEGATIVERESULT}
                        onPress={() => this.onComplete()}
                    />
				)
			case 'positive':
				return (
                    <ResultMessage 
                        heading={STRINGS.DANGER}
                        buttonText={BUTTONTEXT.CLOSE}
                        image={IMAGES.EXCLAMATION}
                        message={STRINGS.POSITIVERESULT}
                        onPress={() => this.onComplete()}
                    />
                )
            case 'loading':
                return (
                    <View>
                        <ActivityIndicator size="large" color={COLOR.PRIMARY} />
                        <ActivityIndicator size="small" color={COLOR.PRIMARY} />
                    </View> 
                )
			default:
				return <View />
		}
	}

    render() {
        return (
            <View style={css.container}>
                {this.getResults('loading')}
            </View>
        )
    }
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyResults)