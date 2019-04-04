import React , { Component } from "react";
import { View , Text , Dimensions , ImageBackground , StyleSheet , ScrollView , TouchableOpacity , Image , FlatList } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { Button, Drawer, List , Icon } from '@ant-design/react-native';


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
let arrTapBar = [{"key": "Masters Prediction" , "value": "With location" , "index" : 0 }  , {"key": "Placement Predictor" , "value": "best company for you" , "index" : 1 }, {"key": "CGPA Estimator" , "value": "set a target" , "index" :2 }]


export default class MainPage extends Component{
    gotoNextPage(item){
        if (item == 0 )
            return this.props.navigation.navigate('MastersPreditionwithlocation')
        else if (item == 1)
            return this.props.navigation.navigate('PlacementPredictor')
        else if (item == 2)
            return this.props.navigation.navigate('CGPAEstimator')
        
    }
    image(item){
        if (item == 0 )
            return image = require('./Images/college.png')
        else if (item == 1)
            return image = require('./Images/road.png')
        else if (item == 2)
            return image = require('./Images/man.png')
    }

    renderGridItem(item) {
        img = this.image(item["index"])
        return (
            <TouchableOpacity
                activeOpacity = {1} onPress = {() => this.gotoNextPage(item["index"])}>
                <Transition shared={item['key' , 'value']} >
                    <View style={styles.bottomGridItemContainer}>
                     <Image source = {image} style ={{width:150 , height : 150 , marginLeft: 20}} />
                        <Text style={{
                            marginLeft: 150,
                            marginRight: 10,
                            position: 'absolute',
                            bottom: 100,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}>{item['key']}</Text>
                        <Text style={{
                            marginLeft: 200,
                            marginRight: 10,
                            position: 'absolute',
                            bottom: 80,
                            color: 'white',
                            fontSize: 15,
                        }}>{item['value']}</Text>
                    </View> 
                 </Transition>
            </TouchableOpacity>
        );
    }

    render(){
        const sidebar = (
            <ScrollView style={[styles.container]}>
              <List>
                    <Icon style={[styles.icon]} name="fund" size='lg' color="grey" />
                    <Text style={[styles.drawer]} onPress={() => this.props.navigation.navigate('MastersPreditionwithlocation')}>Masters Prediction</Text>
                </List>
              <List >
                    <Icon style={[styles.icon]} name="number" size='lg' color="grey" />
                    <Text style={[styles.drawer]} onPress={() => this.props.navigation.navigate('PlacementPredictor')}>Placement Predictor</Text>
                </List>
              <List >
                    <Icon style={[styles.icon]} name="percentage" size='lg' color="grey" />
                    <Text style={[styles.drawer]} onPress={() => this.props.navigation.navigate('CGPAEstimator')}>CGPA Estimator</Text>
                </List>
              <Button
                        type="primary"
                        size="small"
                        onPress={() => this.drawer.closeDrawer()}
                      >
                        Exit
                      </Button>
            </ScrollView>
          );
        return(
            <ImageBackground style= {{flex:1 , width: screenWidth, height: screenHeight , opacity: 1}}
                    source={require('./Images/g11.jpg')}>
                    <Drawer
                        sidebar={sidebar}
                        position="left"
                        open={false}
                        drawerRef={el => (this.drawer = el)}
                        onOpenChange={this.onOpenChange}
                        drawerBackgroundColor="white"
                    >
                        <Icon name="align-left" size='lg' color="grey" style ={{ top:screenHeight/40 , marginLeft: screenWidth/10}} onPress={() => this.drawer && this.drawer.openDrawer()} />
                        <Text style={{color:'white' , fontSize:25 , marginLeft: screenWidth/10 , top:screenHeight/30 }} >Welcome to</Text>
                        <Text style={{color:'white' , fontSize:35 , marginLeft: screenWidth/10 , top:screenHeight/30 , fontWeight: 'bold',}}>Career E-Prophet</Text>
                        <Text style={{color:'white' , fontSize:15 , marginLeft: screenWidth/10 , top:screenHeight/30}}>Prognostication of your Career</Text>
                        <ScrollView style = {styles.mainGrid}>
                            <View style={styles.bottomGridContainer}>
                                <FlatList
                                        showsHorizontalScrollIndicator={false}
                                        onPress
                                        horizontal={true}
                                        data={arrTapBar}
                                        renderItem={({item, index}) => this.renderGridItem(item, index)}
                                />
                            </View>
                        </ScrollView>
                        <Text style={{color:'#112F5E' , fontSize:25 , marginLeft: screenWidth/15 , bottom:screenHeight/1.8}}>Choose the best option for you</Text>
                    </Drawer>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    mainGrid:{
        flex:1,
        top:200,
    },
    bottomGridItemContainer: {
        opacity:1,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 240,
        marginBottom: 10,
        bottom:220,
        width: screenWidth * 300 / 375,
        height: screenHeight / 2 - 70,
        backgroundColor: '#2B285F',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 15,
        
    },
    container: {
        flex: 1,
      },
      drawer: {
          flex: 1,
          textAlign: 'center',
          marginTop:10,
          marginBottom:40,
          fontSize:16,
          color:"black",
         },
    icon:{
        flex: 1,
        color:"black",
        top: 30,
        bottom:20,
        marginLeft:50
    },
})