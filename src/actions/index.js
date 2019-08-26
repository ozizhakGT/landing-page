export const locateAction = (lp) => {
    let lang = window.navigator.language.split('-')[0];
    return {
        type: 'FETCH_TRANSLATE',
        payload: {lp, lang}
    }
}