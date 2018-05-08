import { combineReducers } from 'redux';
import mapReducer from './map-reducer';
import destinationReducer from './destination-reducer';
import carListReducer from './car-list-reducer';
import carReducer from './car-reducer';
import directionsReducer from './directions-reducer';


// Root Reducer
const rootReducer = combineReducers({
  map: mapReducer,
  destination: destinationReducer,
  carList: carListReducer,
  car: carReducer,
  directions: directionsReducer,
});

export default rootReducer;
