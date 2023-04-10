import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

// Components
import AppRouter from './router/AppRouter';
import { ThemeProvider } from '@mui/material';

// Hooks
import { useTheme } from './shared/hooks/use-theme.hook';

// Utils
import i18n from './shared/utils/i18n';

function App() {
  const { activeThemeGet } = useTheme();
  // Set language on account data change. Defaults to 'de'.
  useEffect(() => {
    if (window.navigator.language.includes('ko')) {
      console.log('ko');
      i18n.changeLanguage('ko');
      document.documentElement.setAttribute('lang', 'ko');
    } else {
      console.log('en');
      i18n.changeLanguage('en');
      document.documentElement.setAttribute('lang', 'en');
    }
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
