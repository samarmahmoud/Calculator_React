import React from 'react';
import {View} from 'react-native';
import MainScreen from './src/components/MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <MainScreen/>
      </View>
    );
  }
}
const styles = {
  container:{
    flex:1,
    justifyContent: 'center',
    
  },
};