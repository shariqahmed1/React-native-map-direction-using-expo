import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import AccelerometerSensor from './screens/animateScreen';
import MapV from './screens/map';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.mapContainer}>
        <MapV />
      // </View>
      // <View style={styles.gameContainer}>
      //   <AccelerometerSensor />
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   mapContainer: {
//     flex: 1,
//   },
//   gameContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
