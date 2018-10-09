import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer, // state object will have a key of libraries. and the value of the list of libraries produced by our reducer
  selectedLibraryId: SelectionReducer
});