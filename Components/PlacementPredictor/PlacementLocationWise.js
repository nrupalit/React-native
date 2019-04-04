import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, WingBlank } from '@ant-design/react-native'
export default class PlacementLocationWise extends Component {
    state = {
        data: JSON.parse(this.props.screenProps.position_location)
    }
    renderCards = () => {
        cards = [];
        for (let index = 0; index < this.state.data.length; index++) {
            const dataElement = this.state.data[index];
            cards.push(
                <View style={{ paddingTop: 10 }}>
                    <WingBlank size="lg">
                        <Card>
                            <Card.Header
                                title={dataElement.Company}
                                thumbStyle={{ width: 30, height: 30 }}
                            />
                            <Card.Body>
                                <View style={{ height: undefined }}>
                                    <Text style={{ marginLeft: 16 }}>{dataElement.Position}</Text>
                                </View>
                            </Card.Body>
                            <Card.Footer
                                content={String("Package : " + dataElement.CTC)}
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
                }}>Best companies in : {this.state.data[0].Location}</Text>
                <ScrollView>
                    {this.renderCards()}
                    <View style={{padding:20}}></View>
                </ScrollView>
            </View>
        );
    }
}