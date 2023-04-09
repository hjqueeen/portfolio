import { Box, Button, SxProps, Theme } from '@mui/material';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './TextButton.module.scss';

type TextButtonProps = {
  children: string;
  classes?: string;
  preset?: 'primary' | 'pink';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

const TextButton = (props: TextButtonProps) => {
  const [sxPreset, setSxPreset] = useState<SxProps<Theme> | undefined>(
    undefined
  );
  const [sx, setSx] = useState<SxProps<Theme> | undefined>(undefined);
  const [padding, setPadding] = useState<string>('');

  useEffect(() => {
    if (props.preset) {
      switch (props.preset) {
        case 'primary':
          setSxPreset({ color: 'gray' });
          break;
        case 'pink':
          setSxPreset({
            color: 'white',
            bgcolor: '#CE5663',
            '&:hover': {
              color: 'white',
              bgcolor: '#CE5663',
            },
          });
          break;
        default:
          setSxPreset({ color: 'gray.dark', fontFamily: 'OCR A' });
      }
    }
  }, [props]);

  useEffect(() => {
    if (props.size) {
      switch (props.size) {
        case 'small':
          setSx({ ...sxPreset, fontSize: 'small' });
          setPadding('px-3');
          break;
        case 'medium':
          setSx({ ...sxPreset, fontSize: 'medium' });
          setPadding('p-6 px-9');
          break;
        case 'large':
          setSx({ ...sxPreset, fontSize: 'large' });
          setPadding('p-9 px-12');
          break;
        default:
          setSx({ ...sxPreset });
      }
    }
  }, [props]);

  return (
    // <Box className="flex m-1">
    <Button
      className={clsx(styles['textbutton'], props.classes)}
      sx={{ ...sx }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
    // </Box>
  );
};

export default TextButton;
