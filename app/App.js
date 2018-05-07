import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import configureStore from './store/configureStore';
import MapContainer from './containers/map-container/map-container';
import DestinationContainer from './containers/destination-container/destination-container';
import FakeMarkerContainer from './containers/fake-marker-container/fake-marker-container';
import ButtonContainer from './containers/button-container/button-container';

const store = configureStore({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    padding: 30,
  },
});

const app = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Image source={require('./components/car-component/car.png')} style={{ width: 0, height: 0 }} />
      <MapContainer />
      <View style={styles.topContainer}>
        <DestinationContainer />
      </View>
      <FakeMarkerContainer />
      <View style={styles.bottomContainer}>
        <ButtonContainer />
      </View>
    </View>
  </Provider>
);

export default app;
