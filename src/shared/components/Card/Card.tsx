import { ReactNode } from 'react';
import { Box } from '@mui/material';

import styles from './Card.module.scss';

type CardProps = {
  children: ReactNode;
  bgColor?: string;
};

const Card = (props: CardProps) => {
  return (
    <Box sx={{ bgcolor: props.bgColor }} className={styles['card']}>
      {props.children}
    </Box>
  );
};

export default Card;
