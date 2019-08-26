import { combineReducers } from 'redux';
import languageTranslate from './translateReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    translate: languageTranslate,
    form: formReducer
})