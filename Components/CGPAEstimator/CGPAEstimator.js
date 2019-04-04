import React, { Component } from "react";
import { View, Text, Button, Dimensions, Image, BackHandler,ImageBackground, StyleSheet, ScrollView, TextInput, TouchableOpacity, Picker } from "react-native";
import axios_config from "../axios.config";
import Toast from "react-native-simple-toast";
import { Icon } from '@ant-design/react-native';


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class CGPAEstimator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_type: "regular",
            current_sem: "5",
            current_cgpa: 5,
            target_cgpa: 8
        }
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick=()=> {
        this.props.navigation.navigate('Home');
        return true;
    }
    showCGPA = () => {
        console.log(this.state);

        axios_config.post('/cgpa_estimator', {
            student_type: this.state.student_type,
            current_sem: this.state.current_sem,
            current_cgpa: this.state.current_cgpa,
            target_cgpa: this.state.target_cgpa
        }).then((response) => {
            Toast.show(response.data['required_cgpa'], Toast.LONG);
            console.log(response.data);

        }).catch((err) => {
            console.log(err);

        })
    }
    renderSelectedSemester = () => {
        if (this.state.student_type == 'regular') {
            return this.renderRegularSemesters()

        } else {
            return this.renderDiplomaSemesters()
        }
    }
    renderDiplomaSemesters = () => {
        return <Picker selectedValue={this.state.current_sem} onValueChange={(itemValue, itemIndex) => this.setState({ current_sem: itemValue })}>
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
        </Picker>;
    }

    renderRegularSemesters = () => {
        return <Picker selectedValue={this.state.current_sem} onValueChange={(itemValue, itemIndex) => this.setState({ current_sem: itemValue })}>
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
        </Picker>;
    }


    renderBackgroundImage = () => {
        return <ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight / 3 }}
            source={require('../Images/photo.jpg')}>
            <Icon style={[styles.icon]} name="arrow-left" size='lg' color="grey" onPress={() => this.props.navigation.navigate('Home')} style={{ padding: 20 }} />
            <Icon style={[styles.icon]} name="home" size='lg' color="grey" onPress={() => this.props.navigation.navigate('Home')} style={{ padding: 20 , top: -70, left: 340 }} />
        </ImageBackground>;
    }
    renderStudentCategory = () => {
        return <View>
            <Text style={styles.loginText}>Select student category</Text>
            <Picker selectedValue={this.state.student_type} onValueChange={(itemValue, itemIndex) => this.setState({ student_type: itemValue })}>
                <Picker.Item label="Regular" value="regular" />
                <Picker.Item label="Direct 2nd Year" value="diploma" />
            </Picker>
        </View>;
    }
    renderCurrentCGPAInput = () => {
        return <View style={styles.inputContainer}>
            <TextInput underlineColorAndroid="transparent" keyboardType="numeric" maxLength={4} style={styles.inputs} onChangeText={(current_cgpa) => this.setState({ current_cgpa })} placeholder="Enter current CGPA"></TextInput>
        </View>;
    }

    renderSemesterSelection = () => {
        return <View>
            <Text style={styles.loginText}>Select your semester</Text>
            {this.renderSelectedSemester()}
        </View>;
    }

    renderTargetCGPAInput = () => {
        return <View style={styles.inputContainer}>
            <TextInput underlineColorAndroid="transparent" keyboardType="numeric" maxLength={4} style={styles.inputs} onChangeText={(target_cgpa) => this.setState({ target_cgpa })} placeholder="Enter target CGPA" />
        </View>;
    }

    renderCaculateButton = () => {
        return <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.showCGPA}>
            <Text style={styles.loginText}>Calculate</Text>
        </TouchableOpacity>;
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#a5a7aa' }}>
                {this.renderBackgroundImage()}
                <Text style={{
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20,
                            bottom:120,
                        }}>CGPA Estimator</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.box}>
                        {this.renderStudentCategory()}
                        {this.renderSemesterSelection()}
                        {this.renderCurrentCGPAInput()}
                        {this.renderTargetCGPAInput()}
                        <View style={{ padding: 10 }}></View>
                        {this.renderCaculateButton()}
                    </View>
                </View>
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
        borderBottomColor: '#FFFFFF',
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