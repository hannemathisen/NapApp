import React from 'react';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import CarListContainer from '../../containers/car-list-container/car-list-container';


class MapComponent extends React.Component {
  componentWillMount() {
    this.props.getLocation();
    this.props.getCars();
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

        <CarListContainer />

      </MapView>
    );
  }
}
// <Image
//   style={{ width: 20, height: 20 }}
//   source={require('./car.png')}
//   onLayout={() => this.forceUpdate()}
// />
// {this.props.availableCars.map(car => (
//   <CarComponent />
// ))}

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
  availableCars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    regNr: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  })),
  onRegionChange: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
  getCars: PropTypes.func.isRequired,
};

export default MapComponent;
