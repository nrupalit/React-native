import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, WingBlank } from '@ant-design/react-native';


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
                            <Card.Header
                                title={dataElement["Institute Name"]}
                                thumbStyle={{ width: undefined, height: undefined }}
                            />
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

