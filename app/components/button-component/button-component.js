import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonComponent = ({ text, coordinates, onPress }) => (
  <TouchableHighlight
    style={styles.button}
    onPress={() => onPress(coordinates)}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableHighlight>
);

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  coordinates: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  onPress: PropTypes.func.isRequired,
};

export default ButtonComponent;
