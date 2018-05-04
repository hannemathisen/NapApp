import { combineReducers } from 'redux';
import mapReducer from './map-reducer';
import destinationReducer from './destination-reducer';
import buttonReducer from './button-reducer';
import carListReducer from './car-list-reducer';
import carReducer from './car-reducer';


// Root Reducer
const rootReducer = combineReducers({
  map: mapReducer,
  destination: destinationReducer,
  button: buttonReducer,
  carList: carListReducer,
  car: carReducer,
});

export default rootReducer;
