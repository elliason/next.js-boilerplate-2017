// ACTION TYPES
export const languageActionTypes = {
  CHANGE: 'CHANGE'
};

// ACTION CREATORS
export const changeLanguage = (language, i18nInstance) => dispatch => {
  i18nInstance.changeLanguage(language);
  return dispatch(
    {type: languageActionTypes.CHANGE, language: language }
  );
};
