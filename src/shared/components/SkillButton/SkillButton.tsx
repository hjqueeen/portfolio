import { useEffect, useState } from 'react';
import { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import { DefaultTFuncReturn } from 'i18next';
import clsx from 'clsx';

// Styles
import styles from './SkillButton.module.scss';

type SkillButtonProps = {
  children: DefaultTFuncReturn | string;
  classes?: string;
  preset?: 'gray' | 'pink' | 'white_purple' | 'purple' | 'orange';
  fontFamily?: 'OCR A';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};
export const SkillButton = (props: SkillButtonProps) => {
  const [sx, setSx] = useState<SxProps<Theme> | undefined>(undefined);

  useEffect(() => {
    let sxPreset: SxProps<Theme> = {};
    let sxSize: SxProps<Theme> = {};

    if (props.preset) {
      switch (props.preset) {
        case 'gray':
          sxPreset = {
            color: 'white',
            bgcolor: 'app.gray.light',
            border: 'white 2px solid',
            '&:hover': {
              color: 'white',
              bgcolor: 'app.orange',
            },
          };
          break;
        case 'pink':
          sxPreset = {
            color: 'white',
            bgcolor: 'app.pink',
            border: 'white 2px solid',
            '&:hover': {
              color: 'app.pink',
              bgcolor: 'white',
            },
          };
          break;
        case 'orange':
          sxPreset = {
            color: 'white',
            bgcolor: 'app.orange',
            border: 'white 2px solid',
            fontFamily: 'OCR A',
            '&:hover': {
              color: 'app.orange',
              bgcolor: 'white',
            },
          };
          break;
        case 'purple':
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
        case 'white_purple':
          sxPreset = {
            color: 'app.purple',
            bgcolor: 'white',
            border: '#555FDA 1px solid',
            '&:hover': {
              color: 'white',
              bgcolor: 'app.purple',
            },
          };
          break;
        default:
      }
    } else {
      sxPreset = { color: 'app.gray.dark', fontFamily: 'OCR A' };
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
      className={clsx(styles['skillbutton'], props.classes)}
      variant="text"
      sx={{ ...sx }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
