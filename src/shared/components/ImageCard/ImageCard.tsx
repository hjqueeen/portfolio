import { Box } from '@mui/material';
import { ReactNode } from 'react';

// Styles
import styles from './ImageCard.module.scss';

type ImageCardProps = {
  children: ReactNode;
  titleImg: string;
  titleImgAlt: string;
};

export const ImageCard = (props: ImageCardProps) => {
  return (
    <Box className={styles['img-card']} sx={{ bgcolor: 'pink.light' }}>
      <Box className={styles['img-card-title']}>
        <img
          className={styles['img-card-image']}
          src={props.titleImg}
          alt={props.titleImgAlt}
        />
      </Box>
      <Box sx={{ color: 'gray_.dark' }}>{props.children}</Box>
    </Box>
  );
};
