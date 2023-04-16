import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/material';
import { DefaultTFuncReturn } from 'i18next';

// Hooks
import { useBreakpoints } from '../../hooks/use-breakpoints.hook';

// Styles
import styles from './UserCard.module.scss';

type UserCardProps = {
  icon: IconDefinition;
  title: DefaultTFuncReturn | string;
  subtitle: DefaultTFuncReturn | string;
};

export const UserCard = (props: UserCardProps) => {
  const { lgDown } = useBreakpoints();
  return (
    <Box className={styles['user-card']}>
      <FontAwesomeIcon
        className={styles['user-card-icon']}
        icon={props.icon}
        style={{ color: 'white', fontSize: lgDown ? '20px' : '25px' }}
      />
      <Box className={styles['user-card-content']} sx={{ color: 'white' }}>
        <Box
          className={styles['user-card-content-title']}
          sx={{
            '::selection': {
              color: 'white',
              bgcolor: 'app.purple',
            },
          }}
        >
          {props.title}
        </Box>
        <Box
          className={styles['user-card-content-subtitle']}
          sx={{
            '::selection': {
              color: 'white',
              bgcolor: 'app.purple',
            },
          }}
        >
          {props.subtitle}
        </Box>
      </Box>
    </Box>
  );
};
