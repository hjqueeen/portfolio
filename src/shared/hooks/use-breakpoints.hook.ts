import { useMediaQuery, useTheme } from '@mui/material';

declare module '@mui/material' {
  interface BreakpointOverrides {
    xxl: true;
    xxxl: true;
  }
}

/**
 * Custom hook to get current used breakpoint.
 * @returns Theme breakpoints with current usage status
 */
export const useBreakpoints = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const xsUp = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.between('xl', 'xxl'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));
  const xlUp = useMediaQuery(theme.breakpoints.up('xl'));
  const xxl = useMediaQuery(theme.breakpoints.between('xxl', 'xxxl'));
  const xxlDown = useMediaQuery(theme.breakpoints.down('xxl'));
  const xxlUp = useMediaQuery(theme.breakpoints.up('xxl'));
  const xxxl = useMediaQuery(theme.breakpoints.up('xxxl'));
  const xxxlDown = useMediaQuery(theme.breakpoints.down('xxxl'));
  const xxxlUp = useMediaQuery(theme.breakpoints.up('xxxl'));

  return {
    xs,
    xsUp,
    sm,
    smDown,
    smUp,
    md,
    mdDown,
    mdUp,
    lg,
    lgDown,
    lgUp,
    xl,
    xlDown,
    xlUp,
    xxl,
    xxlDown,
    xxlUp,
    xxxl,
    xxxlDown,
    xxxlUp,
  };
};
