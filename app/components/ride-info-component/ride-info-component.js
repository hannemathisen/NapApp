import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RideInfoComponent = ({ active, pickupTime, destinationTime }) => {
  if (!active) {
    return null;
  }
  return (
    <Text style={styles.infoText}>
      Estimated pickup time: {pickupTime}{'\n'}
      Estimated arrival at destination: {destinationTime}
    </Text>
  );
};

RideInfoComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  pickupTime: PropTypes.string,
  destinationTime: PropTypes.string,
};

export default RideInfoComponent;
