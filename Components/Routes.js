import React , { Component } from "react";
import { createSwitchNavigator , createAppContainer  } from "react-navigation";
import MainPage from "./MainPage";
import PlacementPredictor from "./PlacementPredictor/PlacementPredictor";
import MasterBasedOnMarks from "./MastersPredication/MasterBasedOnMarks";
import MastersPreditionwithlocation from "./MastersPredication/MastersPreditionwithlocation";
import CGPAEstimator from "./CGPAEstimator/CGPAEstimator";
import DrawerNavigator from "./DrawerNavigator";
import PlacementTabNavigator from "./PlacementPredictor/PlacementTabNavigator";
import PlacementBestJob from "./PlacementPredictor/PlacementBestJob";
import PlacementCompanyList from "./PlacementPredictor/PlacementCompanyList";
import PlacementSkillSet from "./PlacementPredictor/PlacementSkillSet";
import PlacementLocationWise from "./PlacementPredictor/PlacementLocationWise";
import MastersBasedOnLocation from "./MastersPredication/MastersBasedOnLocation";
import OutputMastersPredictionwithlocation from "./MastersPredication/OutputMastersPredictionwithlocation";
import OutputPlacementPredictor from "./PlacementPredictor/OutputPlacementPredictor";

import SplashScreen from "./SplashScreen";


export const Navigator = createSwitchNavigator({
    Home :{
        screen: MainPage,
        path:'./MainPage'
    },
  PlacementPredictor:{
      screen: PlacementPredictor,
      path: './PlacementPredictor/PlacementPredictor'
  },
  MasterBasedOnMarks:{
      screen: MasterBasedOnMarks,
      path: './MastersPredication/MasterBasedOnMarks'
  },
  MastersPreditionwithlocation:{
      screen: MastersPreditionwithlocation,
      path: './MastersPredication/MastersPreditionwithlocation'
  },
  CGPAEstimator:{
      screen: CGPAEstimator,
      path: './CGPAEstimator/CGPAEstimator'
  },
  PlacementTabNavigator:{
    screen: PlacementTabNavigator,
    path: './PlacementTabNavigator'
},
  DrawerNavigator:{
    screen: DrawerNavigator,
    path: './DrawerNavigator'
  },
  PlacementBestJob:{
    screen: PlacementBestJob,
    path: './PlacementPredictor/PlacementBestJob'
  },
  PlacementCompanyList:{
    screen: PlacementCompanyList,
    path: './PlacementPredictor/PlacementCompanyList'
  },
  PlacementLocationWise:{
    screen: PlacementLocationWise,
    path: './PlacementPredictor/PlacementLocationWise'
  },
  PlacementSkillSet:{
    screen: PlacementSkillSet,
    path: './PlacementPredictor/PlacementSkillSet'
  },
  MastersBasedOnLocation:{
    screen: MastersBasedOnLocation,
    path: './MastersPredication/MastersBasedOnLocation'
  },
  OutputMastersPredictionwithlocation:{
    screen: OutputMastersPredictionwithlocation,
    path: './MastersPredication/OutputMastersPredictionwithlocation'
  },
  OutputPlacementPredictor:{
    screen: OutputPlacementPredictor,
    path: './PlacementPredictor/OutputPlacementPredictor'
  },
  SplashScreen:{
    screen: SplashScreen,
    path: './SplashScreen'
  }

},
{
  initialRouteName: 'SplashScreen'
}
);

const AppContainer = createAppContainer(Navigator);

export default class Routes extends Component{

    render(){
        return(
            <AppContainer />
        );
    }
}