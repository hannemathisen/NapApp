import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const InfoComponent = ({
  active, type, destinationAddress, pickupAddress, time,
}) => {
  let address = destinationAddress;
  if (type === 'Pickup') {
    address = pickupAddress;
  }
  if (active) {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.labelText}>
            {type}:{' '}
          </Text>
          {address}{'\n'}
          <Text style={styles.labelText}>
            Estimated time of {type.toLowerCase()}: {time}
          </Text>
        </Text>

        <TouchableHighlight
          style={styles.button}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require('./edit.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
  return null;
};

InfoComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  destinationAddress: PropTypes.string.isRequired,
  pickupAddress: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default InfoComponent;
