import { combineReducers } from 'redux';
import mapReducer from './map-reducer';
import destinationReducer from './destination-reducer';
import buttonReducer from './button-reducer';


// Root Reducer
const rootReducer = combineReducers({
  map: mapReducer,
  destination: destinationReducer,
  button: buttonReducer,
});

export default rootReducer;
