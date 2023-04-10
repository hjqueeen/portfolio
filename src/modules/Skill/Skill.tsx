import { Box } from '@mui/material';

// Assets
import spring from '../../assets/3spring.png';

// Components
import ContentContainer from '../../shared/components/ContentContainer/ContentContainer';
import ScrollContainer from '../../shared/components/ScrollContainer/ScrollContainer';
import TextButton from '../../shared/components/TextButton/TextButton';

import styles from './Skill.module.scss';
import { useTranslation } from 'react-i18next';
import { DefaultTFuncReturn } from 'i18next';
import { TextCard } from '../../shared/components/TextCard/TextCard';

type SkillProps = {
  scrollTo: string;
};

const Skill = (props: SkillProps) => {
  const { t } = useTranslation();
  return (
    <ScrollContainer name={props.scrollTo} bgColor="yellow.light">
      <ContentContainer title={t('app.skill.title')}>
        <Box className={styles['skill']}>
          <Box className={styles['skill-col']}>
            <TextCard
              title={t('app.skill.frontend')}
              img={spring}
              imgAlt="skill_frontend"
            />
          </Box>
          <Box className={styles['skill-col']}>
            <TextCard
              title={t('app.skill.backend')}
              img={spring}
              imgAlt="skill_frontend"
            />
          </Box>
          <Box className={styles['skill-col']}>
            <TextCard
              title={t('app.skill.version_control')}
              img={spring}
              imgAlt="skill_frontend"
            />
            <TextCard
              title={t('app.skill.communication')}
              img={spring}
              imgAlt="skill_frontend"
            />
          </Box>
        </Box>
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Skill;
