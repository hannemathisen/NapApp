import React from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const AddressComponent = ({ address, onPress }) => {
  let adr = address;
  function setAddress(newAdr) {
    adr = newAdr;
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Where to?"
        style={styles.addressInput}
        onSubmitEditing={event => onPress(event.nativeEvent.text)}
        onChangeText={text => setAddress(text)}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => onPress(adr)}
      >
        <Text style={styles.buttonText}>OK</Text>
      </TouchableHighlight>
    </View>
  );
};

AddressComponent.propTypes = {
  address: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AddressComponent;
