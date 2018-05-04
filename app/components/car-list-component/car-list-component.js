import React from 'react';
// import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import CarComponent from '../car-component/car-component';


const CarListComponent = ({ cars }) => {
  console.log(cars);
  return (
    cars.map(car => (
      <CarComponent
        coordinates={car.coordinate}
        id={car.id}
        regNr={car.regNr}
        {...car}
        key={car.id}
      />
    ))
  );
};

CarListComponent.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    regNr: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  })),
};

export default CarListComponent;
