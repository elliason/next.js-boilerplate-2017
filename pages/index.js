// @flow

import React, { Component } from 'react';
import type {Node} from 'react'; // import type Node - for flow type checking

// localization libs
import { I18nextProvider } from 'react-i18next';
import startI18n from '../utils/startI18n';
import { getTranslation } from '../utils/translationHelpers';
// localization config
import localizationConfig from '../config/localization.json';
// redux related
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store.js';
import { bindActionCreators } from 'redux';
// redux actions
import { changeLanguage } from 'components/languageSwitch/languageSwitch.actions';

// components
import Homepage from 'components/homepage';

/* type checking Props object */
type Props = {
  children?: Node
}

/* Redux binding for page's I18N wrapper */
const mapStateToProps = (state) => {
  return {
    language: state.language.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: bindActionCreators(changeLanguage, dispatch)
  };
};

@withRedux(initStore,  mapStateToProps, mapDispatchToProps) // withRedux HOC has to be used only on top page level, nested components should use connect function to map actions and state to props
class I18PageWrapper extends Component<Props> {
  static async getInitialProps() {
    const translationCz = {
      cz: {
        intro: await getTranslation(
          'cz',
          'intro',
          'http://localhost:3000/static/locales/'
        )
      }
    };
    const translationEn = {
      en: {
        intro: await getTranslation(
          'en',
          'intro',
          'http://localhost:3000/static/locales/'
        )
      }
    };

    const translations = Object.assign({}, translationCz, translationEn);
    const defaultLanguage = localizationConfig.defaultLang;

    return { translations, defaultLanguage };
  }

  constructor(props) {
    super(props);

    this.state = {
      language: props.defaultLanguage
    };

    this.i18n = startI18n(props.translations, this.state.language);
    this.switchLanguage = this.switchLanguage.bind(this);
  }

  switchLanguage(lng) {
    this.props.changeLanguage(lng, this.i18n);
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Homepage switchLanguage={ this.switchLanguage } language={this.state.language} />
      </I18nextProvider>
    );
  }
}

export default I18PageWrapper;
