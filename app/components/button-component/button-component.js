import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonComponent = ({
  pickupCoordinates,
  destinationCoordinates,
  active,
  onPress,
}) => {
  if (active) {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => onPress(destinationCoordinates, pickupCoordinates)}
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
  onPress: PropTypes.func.isRequired,
};

export default ButtonComponent;
