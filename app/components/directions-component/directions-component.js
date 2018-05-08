import React from 'react';
import { Polyline } from 'react-native-maps';
import PropTypes from 'prop-types';


const DirectionsComponent = ({ directions, color }) => (
  <Polyline
    coordinates={directions}
    strokeWidth={2}
    strokeColor={color}
  />
);

DirectionsComponent.propTypes = {
  directions: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  })).isRequired,
  color: PropTypes.string.isRequired,
};

export default DirectionsComponent;
