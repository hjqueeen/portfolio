// Styles
import { DefaultTFuncReturn } from 'i18next';
import styles from './TextCard.module.scss';
import { Box } from '@mui/material';
import { SkillButton } from '../TextButton/TextButton';

type TextCardProps = {
  title: DefaultTFuncReturn | string;
  skills: string[];
};

export const TextCard = (props: TextCardProps) => {
  return (
    <Box className={styles['text-card']} sx={{ bgcolor: 'white' }}>
      <Box
        className={styles['text-card-title']}
        // sx={{
        //   color: 'app.purple',
        //   fontFamily: 'Montserrat',
        // }}
      >
        <SkillButton preset="orange" size="medium">
          {props.title}
        </SkillButton>
      </Box>
      <Box className={styles['skill-items']}>
        {props.skills.map((skill, index) => (
          <SkillButton key={index} preset="white_purple" size="small">
            {skill}
          </SkillButton>
        ))}
      </Box>
    </Box>
  );
};
