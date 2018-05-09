import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BookCarcomponent = ({ active }) => {
  if (!active) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
      >
        <Text style={styles.buttonText}>Book car</Text>
      </TouchableHighlight>
    </View>
  );
};

BookCarcomponent.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default BookCarcomponent;
