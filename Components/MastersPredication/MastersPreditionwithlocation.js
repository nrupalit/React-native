import React, { Component } from "react";
import { View, Text, Dimensions, ImageBackground, StyleSheet, TextInput, BackHandler,TouchableOpacity, Picker } from "react-native";
import { Icon } from '@ant-design/react-native';
import axios_config from "../axios.config";
import { ScrollView } from "react-native-gesture-handler";
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default class MastersPredictionwithlocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marks:50,
            location:'Dadar'
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
        axios_config.post('/masters', {
           marks:this.state.marks.toString(),
           location:this.state.location

        }).then((response) => {
            this.props.navigation.navigate('OutputMastersPredictionwithlocation', { data: response.data })
            
            
        }).catch((err) => {
            console.log(err);

        })
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#a5a7aa' }}>
                <ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight}}
                    source={require('../Images/image.jpg')}>
                    <Icon style={[styles.icon]} name="arrow-left" size='lg' color="white" onPress={() => this.props.navigation.navigate('Home')} style={{ padding: 20 }} />
                    <Icon style={[styles.icon]} name="home" size='lg' color="white" onPress={() => this.props.navigation.navigate('Home')} style={{ padding: 20, top: -70, left: 340 }} />
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        bottom:110,
                    }}>Masters Prediction</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' , padding:30 }}>
                        <View style={styles.box} style = {{padding: 20 , backgroundColor: 'white' , borderRadius:5}}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="CGPA"
                                    underlineColorAndroid="transparent"
                                    keyboardType='numeric'
                                    maxLength={4}
                                    onChangeText={(text) => this.setState({ text })}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="GATE score"
                                    underlineColorAndroid="transparent"
                                    keyboardType='numeric'
                                    maxLength={2}
                                    onChangeText={(marks) => this.setState({ marks })}
                                />
                            </View>
                            <Text>Select location :</Text>
                            <Picker
                                selectedValue={this.state.location}
                                style={styles.liststyle}
                                onValueChange={(itemValue) =>
                                    this.setState({ location: itemValue })
                                }>
                                <Picker.Item label="Borivali" value={'Borivali'} />
                                <Picker.Item label="Andheri" value={"Andheri"} />
                                <Picker.Item label="Dadar" value={"Dadar"} />
                                <Picker.Item label="Vashi" value={"Vashi"} />
                                <Picker.Item label="Bandra" value={"Bandra"} />
                                <Picker.Item label="Virar" value={"Virar"} />
                                <Picker.Item label="Kurla" value={"Kurla"} />
                            </Picker>
                            <View style={{ padding: 10 }}></View>
                            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
                                onPress={this.predict}>
                                <Text style={styles.loginText}>Submit</Text>
                            </TouchableOpacity>
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
    box: {

        marginTop: 100,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        borderRadius: 10,
        borderBottomWidth: 1,
        width: 350,
        height: 45,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#290345',
        borderBottomWidth: 1,
        flex: 1,
    },
    liststyle: {
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 20,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 350,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#290345',
    },
    loginText: {
        color: 'white',
    },
    restoreButtonContainer: {
        width: 250,
        marginBottom: 15,
        alignItems: 'flex-end'
    },
});