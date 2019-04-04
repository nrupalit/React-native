import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native'

export default class PlacementBestJob extends Component {
    render() {


        return (
            <View>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>Best Job for you</Text>
                <ScrollView>
                    <View style={{ paddingTop: 30 }}>
                        <WingBlank size="lg">
                        <Card>
                            <Card.Header
                            title="Best Job"
                            thumbStyle={{ width: 30, height: 30 }}
                            />
                            <Card.Body>
                            <View style={{ height: 42 }}>
                                <Text style={{ marginLeft: 16 }}>{this.props.screenProps.predicted_company}</Text>
                            </View>
                            </Card.Body>
                            <Card.Footer
                            content="content"
                            />
                        </Card>
                        </WingBlank>
                        <WhiteSpace size="lg" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}