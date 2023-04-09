import { Box, Divider, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import styles from './ContentContainer.module.scss';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

type ContentContainerProps = {
  children: ReactNode;
  disableIcon?: boolean;
  title: string;
  subtitle: string;
};

const ContentContainer = (props: ContentContainerProps) => {
  return (
    <Box className={styles['content-container']}>
      <Box className={styles['content-container-title']}>
        {!props.disableIcon && (
          <FontAwesomeIcon
            className={styles['content-container-icon']}
            icon={faLink}
            style={{ color: '#5B6A7B', fontSize: 'medium' }}
          />
        )}
        <Box
          className={styles['content-container-title-text']}
          component="h1"
          sx={{
            // fontFamily: 'OCR A',
            color: 'gray.dark',
          }}
        >
          {props.title}
        </Box>
      </Box>
      <Box
        className={styles['content-container-subtitle']}
        component="h2"
        sx={{ fontFamily: 'OCR A', color: 'gray.dark' }}
      >
        {props.subtitle}
      </Box>
      <Box
        sx={{ borderColor: 'pink.medium' }}
        className={styles['content-container-divider']}
      ></Box>
      {props.children}
    </Box>
  );
};

export default ContentContainer;
