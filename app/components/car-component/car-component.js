import React from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';


const CarComponent = ({ coordinates, regNr }) => (
  <Marker
    coordinate={coordinates}
    title={regNr}
  >
    <Image
      style={{ width: 20, height: 20 }}
      source={require('./car.png')}
    />
  </Marker>
);

CarComponent.propTypes = {
  coordinates: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  regNr: PropTypes.string.isRequired,
};

export default CarComponent;
