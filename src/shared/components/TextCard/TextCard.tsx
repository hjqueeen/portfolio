// Styles
import { DefaultTFuncReturn } from 'i18next';
import styles from './TextCard.module.scss';
import { Box } from '@mui/material';

type TextCardProps = {
  title: DefaultTFuncReturn | string;
  img: string;
  imgAlt: string;
};

export const TextCard = (props: TextCardProps) => {
  return (
    <Box className={styles['text-card']} sx={{ bgcolor: 'white' }}>
      <Box className={styles['text-card-title']} sx={{ color: 'yellow.dark' }}>
        {props.title}
      </Box>
      <Box>
        <img
          className={styles['text-card-image']}
          src={props.img}
          alt={props.imgAlt}
        />
      </Box>
    </Box>
  );
};
