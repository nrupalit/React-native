import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SplashScreen extends Component {
    componentWillMount(){
        setTimeout(()=> {
            this.props.navigation.navigate('Home')
          },1000);
    }
  render() {
    return (
      <View>
        <Text> Hello World </Text>
      </View>
    )
  }
}
