import React, { Component } from 'react';
import { translate } from 'react-i18next';

import Layout from 'components/layout/layout';
import LanguageSwitch from 'components/languageSwitch/languageSwitch';
import Counter from 'components/counter/counter';

class Homepage extends Component<Props> {
  render() {
    const { switchLanguage, t, language } = this.props;

    return (
      <Layout>
        <h1> { t('helloWord') } </h1>
        <p> { t('introTexts.text1') } </p>
        <p> { t('introTexts.text2') } </p>

        <Counter />
        <LanguageSwitch switchLanguage={switchLanguage} language={language} />
        <img src="../static/img/timothy_doggo.jpg" />
      </Layout>
    );
  }
}

export default translate(['intro'])(Homepage);