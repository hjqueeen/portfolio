import { ReactNode } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import { Box } from '@mui/material';
import { Element } from 'react-scroll';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from './ScrollContainer.module.scss';

type ScrollContainerProps = {
  bgColor?: string;
  children: ReactNode;
  classes?: string;
  heightClass?: string;
  name: string;
  disableIcon?: boolean;
  disableTitleUnderline?: boolean;
  textColor?: string;
  iconColor?: string;
  selectionColor?: string;
  title: string | DefaultTFuncReturn;
  subtitle?: string | DefaultTFuncReturn;
};

export const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <>
      <Element name={props.name}>
        <Box
          component="div"
          className={clsx(styles['scroll-container'], props.classes)}
          sx={{ backgroundColor: props.bgColor ?? undefined }}
        >
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
                    color: props.textColor ? props.textColor : 'app.gray.dark',
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
                    '::selection': {
                      color: props.selectionColor ? 'white' : 'app.pink',
                      bgcolor: props.selectionColor
                        ? props.selectionColor
                        : 'white',
                    },
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
                  color: props.textColor ? props.textColor : 'app.gray.dark',
                  '::selection': {
                    color: props.selectionColor ? 'white' : 'app.pink',
                    bgcolor: props.selectionColor
                      ? props.selectionColor
                      : 'white',
                  },
                }}
              >
                {props.subtitle}
              </Box>
            </Box>

            {/* <Box
                sx={{ borderColor: 'app.gray.dark' }}
                className={styles['content-container-divider']}
              ></Box> */}

            {props.children}
          </Box>
        </Box>
      </Element>
    </>
  );
};
