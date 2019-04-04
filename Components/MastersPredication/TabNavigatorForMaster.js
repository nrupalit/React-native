import React, { Component } from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MastersBestCollege from "./MastersBestCollege";
import MastersBasedOnLocation from "./MastersBasedOnLocation";
import MasterBasedOnMarks from "./MasterBasedOnMarks";
import { Image } from "react-native";

const TabNavigators = createBottomTabNavigator({
    BestJob:{
        screen: MastersBestCollege,
        path: './MastersBestCollege',
        navigationOptions: {
          tabBarLabel: 'Best College',
          tabBarIcon: <Image source = {require('../Images/user.png')} style= {{ width: 25, height:25 }} />
        },
      },
      CompanyList:{
        screen: MastersBasedOnLocation,
        path: './MastersBasedOnLocation',
        navigationOptions: {
          tabBarLabel: 'College Based On Location',
          tabBarIcon: <Image source = {require('../Images/man.png')} style= {{ width: 20, height:20 }} />
        },
      },
      LocationWise:{
        screen: MasterBasedOnMarks,
        path: './MasterBasedOnMarks',
        navigationOptions: {
          tabBarLabel: 'College Based On Marks',
          tabBarIcon: <Image source = {require('../Images/college.png')} style= {{ width: 25, height:25 }} />
        },
      },
  },
  {
    headerMode: 'none',        
    tabBarPosition: 'bottom',  
    tabBarOptions: {
      activeTintColor: '#3e16aa',  
      inactiveTintColor: '#cea0e8', 
      showIcon: 'true',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: '#fff', 
        height: 50 
      }
    },
});
const AppNavigator = createAppContainer(TabNavigators);
export default class TabNavigatorForMaster extends Component {
  render() {
    return (
      <AppNavigator screenProps={this.props.data} />
    )
  }
}
