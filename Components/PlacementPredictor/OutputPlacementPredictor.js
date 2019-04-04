import React , { Component } from "react";
import { Dimensions , ImageBackground, BackHandler } from "react-native";
import PlacementTabNavigator from "./PlacementTabNavigator";
import { Icon } from '@ant-design/react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class OutputPlacementPredictor extends Component{
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick=()=> {
        this.props.navigation.navigate('PlacementPredictor');
        return true;
    }
    render(){
        return(
            <ImageBackground style= {{flex:1 , width: screenWidth, height: screenHeight , width: screenWidth}}
                        source={require('../Images/image.jpg')}>
                    <Icon name="arrow-left" size='lg' color="white" onPress={() => this.props.navigation.navigate('PlacementPredictor')} style={{ padding: 10 }} />
                    <Icon name="home" size='lg' color="white" onPress={() => this.props.navigation.navigate('Home')} style={{ paddingLeft: 380 , bottom:40 }} />
                <PlacementTabNavigator data={this.props.navigation.state.params.data}/>
            </ImageBackground>

        );
    }
}