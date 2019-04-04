import React, { Component } from "react";
import { View, Text , ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, WingBlank } from '@ant-design/react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class MasterBasedOnMarks extends Component {
    state = {
        data: JSON.parse(this.props.screenProps.colleges_based_on_marks)
    }
    renderCards = () => {
        cards = [];
        for (let index = 0; index < this.state.data.length; index++) {
            const dataElement = this.state.data[index];
            console.log(dataElement);

            cards.push(
                <View style={{ paddingTop: 10 }}>
                    <WingBlank size="lg">
                        <Card>
                            <ImageBackground source = {{uri:dataElement.Image}} style ={{width: wp('92%') , height: hp('30%')}}>
                                <Card.Header
                                    title={<Text style ={{color:'white' , fontSize: hp('3%') ,top: hp('20%')}}>{dataElement["Institute Name"]}</Text>}
                                    thumbStyle={{width: wp('92%') , height: hp('50%') }}
                                />
                            </ImageBackground>
                            <Card.Body>
                                <View style={{ height: undefined }}>
                                    <Text style={{ marginLeft: 16 , padding:5 }}>{dataElement['Description']}</Text>
                                    <Text style={{ marginLeft: 16 , padding:5 }}>Expected GATE Scrore :{dataElement['CS-CAP1']}</Text>
                                    <Text style={{ marginLeft: 16 , padding:5 }}>Institute Code :{dataElement['Institute Code']}</Text>
                                </View>
                            </Card.Body>
                            <Card.Footer

                            />
                        </Card>
                    </WingBlank>
                </View>
            )
        }
        return cards
    }
    render() {
        console.log(this.state.data);

        return (
            <View>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>College Based On Marks</Text>
                <ScrollView>
                    {this.renderCards()}
                    <View style={{padding:20}}></View>
                </ScrollView>
            </View>
        );
    }
}

