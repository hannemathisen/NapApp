import React from 'react';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import CarListContainer from '../../containers/car-list-container/car-list-container';
import DirectionsContainer from '../../containers/directions-container/directions-container';


class MapComponent extends React.Component {
  componentWillMount() {
    this.props.getCars();
    this.props.getLocation();
  }

  render() {
    return (
      <MapView
        region={this.props.region}
        showsUserLocation
        style={styles.map}
        onRegionChangeComplete={reg => this.props.onRegionChange(reg)}
      >
        {this.props.destination &&
        <Marker
          coordinate={this.props.destination}
        />
        }
        <DirectionsContainer />
        <CarListContainer />
      </MapView>
    );
  }
}

MapComponent.propTypes = {
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }).isRequired,
  destination: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  onRegionChange: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
  getCars: PropTypes.func.isRequired,
};

export default MapComponent;
