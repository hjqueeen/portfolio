import { useEffect, useState } from 'react';
import { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import { DefaultTFuncReturn } from 'i18next';
import clsx from 'clsx';

// Styles
import styles from './TextButton.module.scss';

type TextButtonProps = {
  children: DefaultTFuncReturn | string;
  classes?: string;
  preset?: 'primary' | 'pink';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

export const TextButton = (props: TextButtonProps) => {
  const [sx, setSx] = useState<SxProps<Theme> | undefined>(undefined);
  console.log('sx', sx);

  useEffect(() => {
    let sxPreset: SxProps<Theme> = {};
    let sxSize: SxProps<Theme> = {};

    if (props.preset) {
      switch (props.preset) {
        case 'primary':
          sxPreset = {
            color: 'white',
            bgColor: '#010101',
            '&:hover': {
              color: 'white',
              bgColor: '#010101',
            },
          };
          break;
        case 'pink':
          sxPreset = {
            color: 'white',
            bgcolor: 'app.purple',
            border: 'white 2px solid',
            '&:hover': {
              color: 'app.purple',
              bgcolor: 'white',
            },
          };
          break;
        default:
      }
    } else {
      sxPreset = { color: 'gray_.dark', fontFamily: 'OCR A' };
    }

    if (props.size) {
      switch (props.size) {
        case 'small':
          sxSize = { fontSize: 'small', padding: '5px 10px' };

          break;
        case 'medium':
          sxSize = { fontSize: 'medium', padding: '10px 25px' };

          break;
        case 'large':
          sxSize = { fontSize: '30px', padding: '15px 30px' };

          break;
        default:
      }
    } else {
      sxSize = { fontSize: 'small', padding: '3px 6px' };
    }
    setSx({ ...sxSize, ...sxPreset });
  }, [props.preset, props.size]);

  return (
    <Button
      className={clsx(styles['textbutton'], props.classes)}
      variant="text"
      sx={{ ...sx }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
