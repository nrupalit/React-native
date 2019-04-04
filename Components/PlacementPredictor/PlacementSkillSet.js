import React, { Component } from "react";
import { View, Text, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, WingBlank } from '@ant-design/react-native';

export default class PlacementSkillSet extends Component {
    state = {
        data: JSON.parse(this.props.screenProps.skills)
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
                                <View style={{ height: 42 }}>
                                    <Text style={{ marginLeft: 16 }}>{dataElement.Position}</Text>
                                </View>
                            </Card.Body>
                            <Card.Footer
                                content={String("Package : "+ dataElement.CTC )}
                            />
                        </Card>
                    </WingBlank>
                </View>
            )
        }
        return cards
    }
    render() {
        console.log(this.state.data[0]);
        
        return (
            <View>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>Company according to your skill set</Text>
                <ScrollView>
                    {this.renderCards()}
                </ScrollView>
            </View>
        );
    }
}