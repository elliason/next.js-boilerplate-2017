import { defaultLang } from '../../config/localization.json';
import { languageActionTypes } from 'components/languageSwitch/languageSwitch.actions';

// INITIAL STATE
const languageInitialState = {
  language: defaultLang
};

// REDUCER
export const language = (state = languageInitialState, action ) => {
  switch(action.type) {
  case languageActionTypes.CHANGE:
    return { ...state, language: action.language};
  default:
    return state;
  }
};
