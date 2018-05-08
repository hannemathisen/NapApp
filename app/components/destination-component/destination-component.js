import React from 'react';
import { View, TextInput, TouchableHighlight, Text, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const DestinationComponent = ({
  address, pickup, active, cars, mustGetNewCar, getCoordinates, getCar, chooseOnMap,
}) => {
  let adr = address;
  function setAddress(newAdr) {
    adr = newAdr;
  }

  if (active) {
    return (
      <View style={styles.container}>
        { mustGetNewCar &&
          <View style={styles.topContainer}>
            <TextInput
              placeholder="Where to?"
              style={styles.addressInput}
              onSubmitEditing={event => getCoordinates(event.nativeEvent.text, pickup) &&
                              getCar(cars, pickup)}
              onChangeText={text => setAddress(text)}
            />
            <TouchableHighlight
              style={styles.okButton}
              onPress={() => getCoordinates(adr, pickup) &&
                      getCar(cars, pickup) &&
                      Keyboard.dismiss()}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableHighlight>
          </View>
        }
        { !mustGetNewCar &&
          <View style={styles.topContainer}>
            <TextInput
              placeholder="Where to?"
              style={styles.addressInput}
              onSubmitEditing={event => getCoordinates(event.nativeEvent.text, pickup)}
              onChangeText={text => setAddress(text)}
            />
            <TouchableHighlight
              style={styles.okButton}
              onPress={() => getCoordinates(adr, pickup) && Keyboard.dismiss()}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableHighlight>
          </View>
        }
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
  pickup: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    regNr: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  })),
  mustGetNewCar: PropTypes.bool.isRequired,
  getCoordinates: PropTypes.func.isRequired,
  getCar: PropTypes.func.isRequired,
  chooseOnMap: PropTypes.func.isRequired,
};

export default DestinationComponent;
