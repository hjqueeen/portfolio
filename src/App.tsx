import { BrowserRouter } from 'react-router-dom';
import './App.scss';

// Components
import AppRouter from './router/AppRouter';
import { ThemeProvider } from '@mui/material';

// Hooks
import { useTheme } from './shared/hooks/use-theme.hook';

function App() {
  const { activeThemeGet } = useTheme();

  return (
    <ThemeProvider theme={activeThemeGet()}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
