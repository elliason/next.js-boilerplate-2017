import React from 'react';

const LanguageSwitch = ({ switchLanguage, language }) => {
  return (
    <div className="language-switch row">
      <div className="languages">
        <a className={`czech ${language === 'cz' ? 'active' : ''}`} onClick={() => switchLanguage('cz') }>
          <span>CZ</span>
        </a>
        <span>|</span>
        <a className={`english ${language === 'en' ? 'active' : ''}`} onClick={() => switchLanguage('en') }>
          <span>EN</span>
        </a>
      </div>
    </div>
  );
};

export default LanguageSwitch;