import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Element } from 'react-scroll';
import clsx from 'clsx';

// Styles
import styles from './ScrollContainer.module.scss';

type ScrollContainerProps = {
  bgImage?: string;
  bgColor?: string;
  children: ReactNode;
  classes?: string;
  heightClass?: string;
  name: string;
};

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <>
      <Element name={props.name}>
        <Box className="relative">
          <Box className="absolute w-full h-50 ">
            <img
              src={props.bgImage}
              alt="bakgroundImg"
              className={styles['background']}
            />
          </Box>
          <Box
            component="div"
            className={clsx(styles['scroll-container'], props.classes)}
            sx={{ backgroundColor: props.bgColor ?? undefined }}
          >
            <Box className={styles['scroll-content']}>{props.children}</Box>
          </Box>
        </Box>
      </Element>
    </>
  );
};

export default ScrollContainer;
