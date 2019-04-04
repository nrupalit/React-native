import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {
  Button,
  WhiteSpace,
  WingBlank,
  Card
} from '@ant-design/react-native';
import { ScrollView } from "react-native-gesture-handler";

export default class MastersBestCollege extends Component {
  state = {
    data: this.props.screenProps.predicted_college
  }
 
  render() {
        
    return (
      <View>
        <Text style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
        }}>College Best for You</Text>
        <ScrollView>
          <View style={{ paddingTop: 30 }}>
            <WingBlank size="lg">
              <Card>
                <Card.Header
                  title={this.state.data}
                  thumbStyle={{ width: 30, height: 30 }}
                />
              </Card>
            </WingBlank>
            <WhiteSpace size="lg" />
          </View>
        </ScrollView>
      </View>
    )
  }
}
