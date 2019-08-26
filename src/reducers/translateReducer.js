import translates from '../locale';


export default (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TRANSLATE':
            const {lp, lang} = action.payload;
            const currentTranslate = translates[lp][lang] ? {...translates[lp][lang]} : {...translates[lp]['en']}
            return  {...state, ...currentTranslate}
        default:
            return state;
    }
}