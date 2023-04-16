// Styles
import { DefaultTFuncReturn } from 'i18next';
import styles from './TextCard.module.scss';
import { Box } from '@mui/material';
import { SkillButton } from '../SkillButton/SkillButton';

type TextCardProps = {
  title: DefaultTFuncReturn | string;
  skills: string[];
};

export const TextCard = (props: TextCardProps) => {
  return (
    <Box className={styles['text-card']} sx={{ bgcolor: 'white' }}>
      <Box className={styles['text-card-title']}>
        <SkillButton preset="orange" size="medium">
          {props.title}
        </SkillButton>
      </Box>
      <Box className={styles['skill-items']}>
        {props.skills.map((skill, index) => (
          <Box key={index} className={styles['skill-items-button']}>
            <SkillButton preset="white_purple">{skill}</SkillButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
