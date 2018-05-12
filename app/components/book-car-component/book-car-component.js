import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BookCarcomponent = ({ active, cancelRide, bookRide }) => {
  if (!active) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => cancelRide()}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => bookRide()}
      >
        <Text style={styles.buttonText}>Book car</Text>
      </TouchableHighlight>
    </View>
  );
};

BookCarcomponent.propTypes = {
  active: PropTypes.bool.isRequired,
  cancelRide: PropTypes.func.isRequired,
  bookRide: PropTypes.func.isRequired,
};

export default BookCarcomponent;
