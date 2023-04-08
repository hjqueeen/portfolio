import { Box, Button, SxProps, Theme } from '@mui/material';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

type TextButtonProps = {
  children: string;
  classes?: string;
  preset?: string;
  onClick?: () => void;
};

const TextButton = (props: TextButtonProps) => {
  const [preset, setPreset] = useState<SxProps<Theme> | undefined>(undefined);
  useEffect(() => {
    if (props.preset) {
      switch (props.preset) {
        case 'primary':
          setPreset({
            color: 'gray',
          });
          break;
        default:
          setPreset({ color: 'black', bgcolor: 'white' });
      }
    }
    setPreset({
      color: 'black',
      '&:hover': {
        color: 'white',
      },
    });
  }, []);

  return (
    // <Box className="flex m-1">
    <Button
      className={clsx('px-3', props.classes)}
      sx={preset}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
    // </Box>
  );
};

export default TextButton;
