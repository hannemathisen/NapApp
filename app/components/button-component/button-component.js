import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonComponent = ({ text, fetchLocation }) => (
  <TouchableHighlight
    style={styles.button}
    onPress={fetchLocation}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableHighlight>
);

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  fetchLocation: PropTypes.func.isRequired,
};

export default ButtonComponent;
