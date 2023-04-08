import { ReactNode, forwardRef } from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';

// Styles
import styles from './ContentContainer.module.scss';

type ContentContainerProps = {
  bgColor?: string;
  component: ReactNode;
  heightClass?: string;
};

const ContentContainer = forwardRef((props: ContentContainerProps, ref) => {
  return (
    <Box
      component="div"
      className={clsx(styles['main-container'])}
      ref={ref}
      sx={{ backgroundColor: props.bgColor ?? undefined }}
    >
      <Box className={styles['main-content']}>{props.component}</Box>
    </Box>
  );
});

export default ContentContainer;
