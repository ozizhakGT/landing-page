import { combineReducers } from 'redux';
import languageTranslate from './translateReducer';


export default combineReducers({
    translate: languageTranslate
})