import { useCallback, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

// Components
import AppRouter from './router/AppRouter';
import { ThemeProvider } from '@mui/material';

// Hooks
import { useTheme } from './shared/hooks/use-theme.hook';

// Utils
import i18n from './shared/utils/i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const { activeThemeGet } = useTheme();

  // Set document title on application init
  useEffect(() => {
    document.title = t('app.title');
  }, [t]);

  // Set language on account data change. Defaults to 'en'.
  useEffect(() => {
    // if (window.navigator.language.includes('ko')) {
    //   console.log('ko');
    //   i18n.changeLanguage('ko');
    //   document.documentElement.setAttribute('lang', 'ko');
    // } else {
    console.log('en');
    i18n.changeLanguage('en');
    document.documentElement.setAttribute('lang', 'en');
    // }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setVhfunction();
    }, 1000);

    window.addEventListener('resize', () => {
      setVhfunction();
    });
    window.addEventListener('touchend', () => {
      setVhfunction();
    });

    return () => {
      window.removeEventListener('resize', () => {
        setVhfunction();
      });
      window.removeEventListener('touchend', () => {
        setVhfunction();
      });
    };
    // eslint-disable-next-line
  }, []);

  // Set height
  const setVhfunction = useCallback(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <ThemeProvider theme={activeThemeGet()}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
