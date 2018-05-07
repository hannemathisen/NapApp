import React from 'react';
import { View, TextInput, TouchableHighlight, Text, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const DestinationComponent = ({
  address, active, onPress, chooseOnMap,
}) => {
  let adr = address;
  function setAddress(newAdr) {
    adr = newAdr;
  }

  if (active) {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TextInput
            placeholder="Where to?"
            style={styles.addressInput}
            onSubmitEditing={event => onPress(event.nativeEvent.text)}
            onChangeText={text => setAddress(text)}
          />
          <TouchableHighlight
            style={styles.okButton}
            onPress={() => onPress(adr) && Keyboard.dismiss()}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={styles.longButton}
          onPress={() => chooseOnMap()}
        >
          <Text>Choose destination on map</Text>
        </TouchableHighlight>
      </View>
    );
  }
  return null;
};

DestinationComponent.propTypes = {
  address: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  chooseOnMap: PropTypes.func.isRequired,
};

export default DestinationComponent;
