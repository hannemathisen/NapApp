import React from 'react';
import { Polyline } from 'react-native-maps';
import PropTypes from 'prop-types';


const DirectionsComponent = ({
  active, directions,
}) => {
  if (!active) {
    return null;
  }
  return (
    <Polyline
      coordinates={directions}
      strokeWidth={2}
      strokeColor="red"
    />
  );
};

DirectionsComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  directions: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  })).isRequired,
};

export default DirectionsComponent;
