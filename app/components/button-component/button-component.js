import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonComponent = ({
  pickupCoordinates,
  destinationCoordinates,
  active,
  cars,
  mustGetNewCar,
  getAddress,
  getCar,
}) => {
  if (active && mustGetNewCar) {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => getAddress(destinationCoordinates, pickupCoordinates) &&
                getCar(cars, pickupCoordinates)}
      >
        <Text style={styles.buttonText}>OK!</Text>
      </TouchableHighlight>
    );
  } else if (active) {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => getAddress(destinationCoordinates, pickupCoordinates)}
      >
        <Text style={styles.buttonText}>OK!</Text>
      </TouchableHighlight>
    );
  }
  return null;
};

ButtonComponent.propTypes = {
  pickupCoordinates: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  destinationCoordinates: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  active: PropTypes.bool.isRequired,
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    regNr: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  })),
  mustGetNewCar: PropTypes.bool.isRequired,
  getAddress: PropTypes.func.isRequired,
  getCar: PropTypes.func.isRequired,
};

export default ButtonComponent;
