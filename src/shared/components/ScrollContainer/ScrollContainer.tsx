import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Element } from 'react-scroll';
import clsx from 'clsx';

// Styles
import styles from './ScrollContainer.module.scss';

type ScrollContainerProps = {
  bgColor?: string;
  children: ReactNode;
  heightClass?: string;
  name: string;
};

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <>
      <Element name={props.name}>
        <Box
          component="div"
          className={clsx(styles['scroll-container'])}
          sx={{ backgroundColor: props.bgColor ?? undefined }}
        >
          <Box className={styles['scroll-content']}>{props.children}</Box>
        </Box>
      </Element>
    </>
  );
};

export default ScrollContainer;
