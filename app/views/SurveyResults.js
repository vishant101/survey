import React, { Component } from 'react'
import { View } from 'react-native'
import ResultMessage from '../common/ResultMessage'
import { connect } from 'react-redux';
import css from '../styles/CSS'
import { BUTTONTEXT, VIEWS, STRINGS, REQUESTTYPES, HEADERS } from '../utils/Constants'
import { RESULTS_API_URL } from '../utils/APIs'
import IMAGES from '../utils/Images'
import ASSETS from '../utils/Assets'
import AnimatedLoader from 'react-native-animated-loader';

class SurveyResults extends Component {
	constructor(props){
		super(props)
		this.state = {isLoading: true}
	}

	onComplete(){
		const { navigation } = this.props
		navigation.replace(VIEWS.HOME)
	}

	componentDidMount(){
		return fetch(RESULTS_API_URL, this.buildRequest())
			.then((response) => response.json())
			.then((responseJson) => { 
				this.setState({ isLoading: false, results: responseJson.body.hasFlu }) 
			})
			.catch((error) => {
				this.setState({ isLoading: false }),
				console.log(error)
			})
	}

	buildRequest(){
		const request = {
			method: REQUESTTYPES.POST,
			headers: HEADERS.JSON,
			body: JSON.stringify(this.props.answers),
		}
		return request
	}

	showResults() {
		console.log(this.state.results)
		switch(this.state.results) {
			case false:
				return (
					<ResultMessage 
						heading={STRINGS.NODANGER}
						buttonText={BUTTONTEXT.CLOSE}
						image={IMAGES.CHECK}
						message={STRINGS.NEGATIVERESULT}
						onPress={() => this.onComplete()}
					/>
				)
			case true:
				return (
					<ResultMessage 
						heading={STRINGS.DANGER}
						buttonText={BUTTONTEXT.CLOSE}
						image={IMAGES.EXCLAMATION}
						message={STRINGS.POSITIVERESULT}
						onPress={() => this.onComplete()}
					/>
				)
			default:
				return (
					<ResultMessage 
						heading={STRINGS.ERROR}
						buttonText={BUTTONTEXT.CLOSE}
						image={IMAGES.CROSS}
						message={STRINGS.ERRORMESSAGE}
						onPress={() => this.onComplete()}
					/>
				)
		}
	}

	render() {
		if(this.state.isLoading){
			return(
				<View style={{flex: 1, padding: 20}}>
					<AnimatedLoader
						visible={this.state.isLoading}                
						animationStyle={css.lottie}          
						speed={1}
						source={ASSETS.SPINNER}
					/> 
				</View>
			)
		} else {
			return (
				<View style={css.container}>
					{this.showResults()}
				</View>
			)
		}
	}
}


const mapStateToProps = (state, props) => ({
	answers: state.survey.answers
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyResults)