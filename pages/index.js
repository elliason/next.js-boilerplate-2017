// @flow

import React, { Component } from 'react';
import type {Node} from 'react'; // import type Node - for flow type checking

import { I18nextProvider } from 'react-i18next';
import startI18n from '../utils/startI18n';
import { getTranslation } from '../utils/translationHelpers';

import localizationConfig from '../config/localization.json';

import Homepage from 'components/homepage';

/* type checking Props object */
type Props = {
  children?: Node
}

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
    this.i18n.changeLanguage(lng);
    this.setState({
      language: lng
    });
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
