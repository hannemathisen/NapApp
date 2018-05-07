import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonComponent = ({ coordinates, active, onPress }) => {
  if (active) {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => onPress(coordinates)}
      >
        <Text style={styles.buttonText}>OK!</Text>
      </TouchableHighlight>
    );
  }
  return null;
};

ButtonComponent.propTypes = {
  coordinates: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ButtonComponent;
