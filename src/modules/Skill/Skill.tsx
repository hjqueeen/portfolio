import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';

// Assets
import version_control from '../../assets/version_control.png';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import communication from '../../assets/communication.png';

// Components
import { ContentContainer } from '../../shared/components/ContentContainer/ContentContainer';
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { TextButton } from '../../shared/components/TextButton/TextButton';

import styles from './Skill.module.scss';
import { useTranslation } from 'react-i18next';
import { TextCard } from '../../shared/components/TextCard/TextCard';

type SkillProps = {
  scrollTo: string;
};

const Skill = (props: SkillProps) => {
  const { t } = useTranslation();
  const skillItem = [
    { title: t('app.skill.frontend'), img: frontend, alt: 'skill_frontend' },
    { title: t('app.skill.backend'), img: backend, alt: 'skill_backend' },
    {
      title: t('app.skill.version_control'),
      img: version_control,
      alt: 'skill_version_control',
    },
    {
      title: t('app.skill.communication'),
      img: communication,
      alt: 'skill_communication',
    },
  ];

  return (
    <ScrollContainer name={props.scrollTo} bgColor="yellow.light">
      <ContentContainer title={t('app.skill.title')}>
        <Box className={styles['skill']}>
          <Box className={styles['skill-masonry']}></Box>
          <Masonry
            columns={{ xs: 1, md: 2, lg: 3 }}
            spacing={4}
            defaultColumns={3}
            defaultHeight={300}
          >
            {skillItem.map((item, index) => {
              return (
                <TextCard
                  key={index}
                  title={item.title}
                  img={item.img}
                  imgAlt={item.alt}
                />
              );
            })}
          </Masonry>
        </Box>
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Skill;
