import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import configureStore from './store/configureStore';
import MapContainer from './containers/map-container/map-container';
import AddressContainer from './containers/address-container/address-container';

const store = configureStore({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const app = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <MapContainer />
      <AddressContainer />
    </View>
  </Provider>
);

export default app;
