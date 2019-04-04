import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PlacementBestJob from "./PlacementBestJob";
import PlacementCompanyList from "./PlacementCompanyList";
import PlacementSkillSet from "./PlacementSkillSet";
import PlacementLocationWise from "./PlacementLocationWise";
import { Image } from "react-native";


const TabNavigators = createBottomTabNavigator({
  BestJob: {
    screen: PlacementBestJob,
    path: './PlacementBestJob',
    navigationOptions: {
      tabBarLabel: 'Best job',
      tabBarIcon: <Image source={require('../Images/user.png')} style={{ width: 25, height: 25 }} />
    },
  },
  CompanyList: {
    screen: PlacementCompanyList,
    path: './PlacementCompanyList',
    navigationOptions: {
      tabBarLabel: 'Company List',
      tabBarIcon: <Image source={require('../Images/man.png')} style={{ width: 20, height: 20 }} />
    },
  },
  LocationWise: {
    screen: PlacementLocationWise,
    path: './PlacementLocationWise',
    navigationOptions: {
      tabBarLabel: 'Location Wise',
      tabBarIcon: <Image source={require('../Images/college.png')} style={{ width: 25, height: 25 }} />
    },
  },
  SkillSet: {
    screen: PlacementSkillSet,
    path: './PlacementSkillSet',
    navigationOptions: {
      tabBarLabel: 'Skill Set',
      tabBarIcon: <Image source={require('../Images/list.png')} style={{ width: 20, height: 20 }} />
    },
  }
},
  {
    headerMode: 'none',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#3e16aa',
      inactiveTintColor: '#cea0e8',
      showIcon: 'true',
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: '#fff',
        height: 50
      }
    },
  });
const AppNavigator = createAppContainer(TabNavigators);
export default class TabNavigator extends Component {
  render() {        
    return (
      <AppNavigator screenProps={this.props.data} />
    );
  }
}