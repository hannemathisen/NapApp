import React from 'react';
import { Polyline } from 'react-native-maps';
import PropTypes from 'prop-types';


const DirectionsComponent = ({ directions }) => (
  <Polyline
    coordinates={directions}
    strokeWidth={2}
    strokeColor="red"
  />
);

DirectionsComponent.propTypes = {
  directions: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  })).isRequired,
};

export default DirectionsComponent;
