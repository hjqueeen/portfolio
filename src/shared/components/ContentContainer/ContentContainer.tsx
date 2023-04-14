import { Box } from '@mui/material';
import { DefaultTFuncReturn } from 'i18next';
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from './ContentContainer.module.scss';

type ContentContainerProps = {
  children: ReactNode;
  disableIcon?: boolean;
  disableTitleUnderline?: boolean;
  textColor?: string;
  iconColor?: string;
  title: string | DefaultTFuncReturn;
  subtitle?: string | DefaultTFuncReturn;
};

export const ContentContainer = (props: ContentContainerProps) => {
  return (
    <Box className={styles['content-container']}>
      <Box className={styles['content-container-header']}>
        <Box className={styles['content-container-title']}>
          {!props.disableIcon && (
            <FontAwesomeIcon
              className={styles['content-container-icon']}
              icon={faLink}
              style={{
                color: props.iconColor ? props.iconColor : '#5B6A7B',
                // color: '#FF7767',
                fontSize: 'large',
              }}
            />
          )}
          <Box
            className={styles['content-container-title-text']}
            component="h1"
            sx={{
              fontFamily: 'Montserrat',
              color: props.textColor ? props.textColor : 'gray_.dark',
              textDecoration: !props.disableTitleUnderline
                ? 'underline'
                : undefined,
              textUnderlineOffset: !props.disableTitleUnderline
                ? '15px'
                : undefined,
              textDecorationColor: props.textColor
                ? props.textColor
                : '#5B6A7B',
              textDecorationThickness: '1px',
            }}
          >
            {props.title}
          </Box>
        </Box>
        <Box
          className={styles['content-container-subtitle']}
          component="h2"
          sx={{
            fontFamily: 'OCR A',
            color: props.textColor ? props.textColor : 'gray_.dark',
          }}
        >
          {props.subtitle}
        </Box>
      </Box>

      {/* <Box
        sx={{ borderColor: 'gray_.dark' }}
        className={styles['content-container-divider']}
      ></Box> */}
      {props.children}
    </Box>
  );
};
