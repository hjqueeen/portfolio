import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/material';
import { DefaultTFuncReturn } from 'i18next';

// Styles
import styles from './UserCard.module.scss';

type UserCardProps = {
  icon: IconDefinition;
  title: DefaultTFuncReturn | string;
  subtitle: DefaultTFuncReturn | string;
};

export const UserCard = (props: UserCardProps) => {
  return (
    <Box className={styles['user-card']}>
      <FontAwesomeIcon
        className={styles['user-card-icon']}
        icon={props.icon}
        style={{ color: 'white', fontSize: '30px' }}
      />
      <Box
        className={styles['user-card-content']}
        sx={{ color: 'app.gray.light' }}
      >
        <Box className={styles['user-card-content-title']}>{props.title}</Box>
        <Box className={styles['user-card-content-subtitle']}>
          {props.subtitle}
        </Box>
      </Box>
    </Box>
  );
};
