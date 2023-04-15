import { createTheme, Theme } from '@mui/material/styles';

// Models
import { Theme as ETheme } from '../models/shared.types';

// Stores

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
    xxxl: true;
    xxxxl: true;
  }
  interface PaletteOptions {
    app: {
      pink: string;
      purple: string;
      orange: string;
      gray: {
        dark: string;
        light: string;
      };
    };
  }
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
    xxxl: 1920,
    xxxxl: 2560,
  },
};
const app = {
  pink: '#FF7767',
  purple: '#555FDA',
  orange: '#FF9E71',
  gray: {
    dark: '#444444',
    light: '#625E79',
  },
};

const typography = {
  box: {
    fontSize: 14,
  },
  fontFamily: "'OCR A', 'Montserrat'",
  fontSize: 14,
};

export const themeDark = createTheme({
  breakpoints,
  palette: { app },
  typography,
});

export const themeLight = createTheme({
  breakpoints,
  palette: { app },
  typography,
});

export const useTheme = () => {
  // Shared store state
  // const [theme] = useSharedStore((state: SharedState) => [state.theme]);
  let theme = ETheme.Light;
  /**
   * Returns active mui theme.
   * @returns Active MUI theme
   */
  const activeThemeGet = (): Theme => {
    switch (theme) {
      case ETheme.Dark:
        return themeDark;
      default:
        return themeLight;
    }
  };

  return {
    activeThemeGet,
  };
};
