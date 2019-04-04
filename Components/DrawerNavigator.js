import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  drawer: {
  	
  	flex: 1,
  	textAlign: 'center',
  	borderRadius:20,
  	marginTop:10,
  	marginBottom:10,
  	fontSize:16,
  	color:"blue",
    
  	  },
});
export default class DrawerNavigator extends React.Component {
  
  render() {
    const sidebar = (
      <ScrollView style={[styles.container]}>
        <List ><Text style={[styles.drawer]}>Placement Predictor</Text></List>
        <List ><Text style={[styles.drawer]}>Masters Prediction</Text></List>
        <List ><Text style={[styles.drawer]}>CGPA Estimator</Text></List>
        <Button style={[styles.drawer]}
                  type="primary"
                  size="small"
                  onPress={() => this.drawer.closeDrawer()}
                >
                  Exit
                </Button>
      </ScrollView>
    );
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#8ca6d1"
      >
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
            Open drawer
          </Button>
          <WhiteSpace />
        </View>
      </Drawer>
    );
  }
}
