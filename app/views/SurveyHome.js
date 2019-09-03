import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const GREEN = 'rgba(141,196,63,1)';

export default class SurveryHome extends Component {

    onStartButtonPress(){
        const { navigation } = this.props
        console.log('PRESS')
        navigation.navigate('Questions')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Click the button below to start the survey</Text>
                <Button
                    title='start'
                    color={GREEN}
                    onPress={() => this.onStartButtonPress()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
