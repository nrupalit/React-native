import React, { Component } from 'react'
import { Text, View ,  StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class SplashScreen extends Component {
    componentWillMount(){
        setTimeout(()=> {
            this.props.navigation.navigate('Home')
          },1000);
    }
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Home')}>
            <View style = {styles.container}>
                <View style= {styles.logo}>
                    <Image style= {styles.image}
                    source={require('./Images/1.png')}/>
                    <Text style={{
                        textAlign: 'center',
                        color: '#4D0497',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }}>Career E-Prophet</Text>
                </View>
            </View>
            </TouchableOpacity>
    </View>
    )
  }
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor : 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 400,
        height: 200
    }

}); 
