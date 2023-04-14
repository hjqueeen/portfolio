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
    <Box className={styles['img-card']} sx={{ bgcolor: 'white' }}>
      <Box className={styles['img-card-title']}>
        <Box
          component="img"
          className={styles['img-card-image']}
          src={props.titleImg}
          alt={props.titleImgAlt}
          sx={{
            '::selection': {
              color: 'white',
              bgcolor: 'app.purple',
            },
          }}
        />
      </Box>
      <Box
        sx={{
          color: 'app.gray.dark',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};
