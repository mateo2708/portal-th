// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './style.css';

/**
 * @author Sebastian Botero
 * @component Home
 * @description Default Home container.
 */
function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (code) => i18n.changeLanguage(code);

  return (
    <div className="Home">
      <header className="Home-header">
        <p>{t('Home.welcome')}</p>
        <a className="Home-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('Home.learnReact')}
        </a>
        <div className="Home-button-container">
          <button onClick={() => changeLanguage('en')}>{t('Home.tryEnglish')}</button>
          <button onClick={() => changeLanguage('es')}>{t('Home.trySpanish')}</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
