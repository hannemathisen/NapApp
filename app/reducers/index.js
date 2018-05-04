import { combineReducers } from 'redux';
import mapReducer from './map-reducer';
import addressReducer from './address-reducer';


// Root Reducer
const rootReducer = combineReducers({
  map: mapReducer,
  address: addressReducer,
});

export default rootReducer;
