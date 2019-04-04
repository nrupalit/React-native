import React, { Component } from "react";
import {  View, CheckBox, Picker, Text, TextInput , ScrollView , Button , StyleSheet , BackHandler , Dimensions , Image , ImageBackground } from "react-native";
import axios_config from "../axios.config";
import { Icon } from '@ant-design/react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;



export default class PlacementPredictor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: 'Software Developer',
            location: 'Mumbai',
            CTC: 'twotothree',
            CGPA: 5,
            backlogs: false,
            dotnet: false,
            C: false,
            Cpp: false,
            Python: false,
            Java: false,
            SQL: false,
            Javascript: false,
            HTML: false,
            Android: false,
            Data_Science: false,
            PHP: false

        }
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick=()=> {
        this.props.navigation.navigate('Home');
        return true;
    }
    predict = () => {
        axios_config.post('/placement', {
            position: this.state.position,
            location: this.state.location,
            CTC: this.state.CTC,
            CGPA: this.state.CGPA,
            backlogs: this.state.backlogs,
            '.NET': this.state.dotnet,
            C: this.state.C,
            Cpp: this.state.Cpp,
            Python: this.state.Python,
            Java: this.state.Java,
            SQL: this.state.SQL,
            Javascript: this.state.Javascript,
            HTML: this.state.HTML,
            Android: this.state.Android,
            'Data Science': this.state.Data_Science,
            PHP: this.state.PHP

        }).then((response) => {
            this.props.navigation.navigate('OutputPlacementPredictor',{data:response.data})

        }).catch((err) => {
            console.log(err);

        })
    }
    render() {
        return (
            <ScrollView>
                <ImageBackground style= {{flex:1 , width: screenWidth, height: screenHeight , width: screenWidth}}
                        source={require('../Images/image.jpg')}>
                    <Icon style={[styles.icon]} name="arrow-left" size='lg' color="grey" onPress={() => this.props.navigation.navigate('Home')} style={{ padding: 20 }} />
                    <Icon style={[styles.icon]} name="home" size='lg' color="grey" onPress={() => this.props.navigation.navigate('Home')} style={{ padding: 20 , top: -70, left: 340 }} />
                    <Text style={{
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20,
                            bottom:60
                        }}>Placement Predictor</Text>
                    <View style = {{paddingLeft:20 , paddingRight: 20}}>
                        <View style={{padding: 20 , backgroundColor: '#a5a7aa'}}>
                        <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            keyboardType="numeric"
                            maxLength={4}
                            onChangeText={(CGPA) => this.setState({ CGPA })}
                            placeholder="Enter current CGPA"
                        />
                        </View>
                        <Picker
                            style={styles.liststyle}
                            selectedValue={this.state.position}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ position: itemValue })
                            }>
                            <Picker.Item label="Software Developer" value="Software Developer" />
                            <Picker.Item label="Network Engineer" value="Network Engineer" />
                            <Picker.Item label="Web Developer" value="Web Developer" />
                            <Picker.Item label="Android Developer" value="Android Developer" />
                            <Picker.Item label="SQL Developer" value="SQL Developer" />
                            <Picker.Item label="Data Scientist" value="Data Scientist" />
                        </Picker>
                        <Picker style={styles.liststyle}
                            selectedValue={this.state.location}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ location: itemValue })
                            }>
                            <Picker.Item label="Mumbai" value="Mumbai" />
                            <Picker.Item label="Bengaluru" value="Bengaluru" />
                            <Picker.Item label="Hyderabad" value="Hyderabad" />
                            <Picker.Item label="Chennai" value="Chennai" />
                            <Picker.Item label="Delhi" value="Delhi" />
                        </Picker>
                        <Picker style={styles.liststyle}
                            selectedValue={this.state.CTC}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ CTC: itemValue })
                            }>
                            <Picker.Item label="2-3 Lakhs" value="twotothree" />
                            <Picker.Item label="3-4 Lakhs" value="threetofour" />
                            <Picker.Item label="Above 4 Lakhs" value="abovefour" />

                        </Picker>
                        <View style={{ flexDirection: 'row' , padding:10 }}>
                            <CheckBox value={this.state.backlogs}
                                onChange={() => this.setState({ backlogs: !this.state.backlogs })}></CheckBox>
                            <Text style={{ marginTop: 5, color:'black' , paddingRight:10  }}>Backlogs</Text>

                        </View>
                        <View style={{ flexDirection: 'column' , padding:10 }}>
                            <Text style={{ marginTop: 5, color:'black' }}>Select </Text>


                            <View style={{ flexDirection: 'row' , padding:10 }}>
                                <CheckBox value={this.state.dotnet}
                                    onChange={() => this.setState({ dotnet: !this.state.dotnet })} style = {{padding:10}}></CheckBox>
                                <Text style={{ marginTop: 5, color:'black' ,  paddingRight:10 , paddingRight:10 }}>.NET</Text>

                                <CheckBox value={this.state.C}
                                    onChange={() => this.setState({ C: !this.state.C })} style = {{padding:10}}></CheckBox>
                                <Text style={{ marginTop: 5, color:'black' ,  paddingRight:10 }}>C</Text>

                                <CheckBox value={this.state.Cpp}
                                    onChange={() => this.setState({ Cpp: !this.state.Cpp })} style = {{padding:10}}></CheckBox>
                                <Text style={{ marginTop: 5, color:'black' ,  paddingRight:10 }}>C++</Text>


                                <CheckBox value={this.state.Python}
                                    onChange={() => this.setState({ Python: !this.state.Python })} style = {{padding:10}}></CheckBox>
                                <Text style={{ marginTop: 5, color:'black' ,  paddingRight:10 }}>Python</Text>

                                <CheckBox value={this.state.Java}
                                    onChange={() => this.setState({ Java: !this.state.Java })} style = {{padding:10}}></CheckBox>
                                <Text style={{ marginTop: 5 , color:'black' ,  paddingRight:10}}>Java</Text>

                            </View>
                            <View style={{ flexDirection: 'row' , padding:10 }}>
                                <CheckBox value={this.state.SQL}
                                        onChange={() => this.setState({ SQL: !this.state.SQL })} style = {{padding:10}}></CheckBox>
                                    <Text style={{ marginTop: 5 , color:'black' ,  paddingRight:10}}>SQL</Text>

                                <CheckBox value={this.state.Javascript}
                                    onChange={() => this.setState({ Javascript: !this.state.Javascript })} style = {{padding:10}}></CheckBox>
                                <Text style={{ marginTop: 5 , color:'black' ,  paddingRight:10}}>Javascript</Text>

                                <CheckBox value={this.state.HTML}
                                    onChange={() => this.setState({ HTML: !this.state.HTML })} style = {{padding:10}}></CheckBox>
                                <Text style={{ marginTop: 5 , color:'black' ,  paddingRight:10}}>HTML</Text>
                                
                                <CheckBox value={this.state.Android}
                                    onChange={() => this.setState({ Android: !this.state.Android })} style = {{padding:10}}></CheckBox>
                                <Text style={{ marginTop: 5 , color:'black' ,  paddingRight:10}}>Android</Text>

                            </View>
                            <View style={{ flexDirection: 'row' , padding:10 }}>
                                <CheckBox value={this.state.Data_Science}
                                        onChange={() => this.setState({ Data_Science: !this.state.Data_Science })} style = {{padding:10}}></CheckBox>
                                    <Text style={{ marginTop: 5 , color:'black' ,  paddingRight:10}}>Data Science</Text>
                                    
                                <CheckBox value={this.state.PHP}
                                        onChange={() => this.setState({ PHP: !this.state.PHP })} style = {{padding:10}}></CheckBox>
                                    <Text style={{ marginTop: 5 , color:'black' ,  paddingRight:10 }}>PHP</Text>
                            </View>
                        </View>
                        
                        <View  style ={{ overflow: 'hidden' , borderRadius:20 , height: 40 , backgroundColor: '#290345'}}>
                            <Button onPress={this.predict} title=" Predict " color="#290345" />
                        </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>

        );

        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box:{
   
        marginTop:100,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        borderRadius:10,
        borderBottomWidth: 1,
        width:350,
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    liststyle:{
        height: 35, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 20,
    },
    buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:350,
    borderRadius:30,
    },
    loginButton: {
    backgroundColor: '#290345',
    },
    loginText: {
    color: 'white',
    },
    restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
    },
  });