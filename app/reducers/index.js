import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import swagger from './swagger';

export default combineReducers({ swagger, form: formReducer });
