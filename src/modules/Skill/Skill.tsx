import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';

// Assets
// import version_control from '../../assets/version_control.png';
// import frontend from '../../assets/frontend.png';
// import backend from '../../assets/backend.png';
// import communication from '../../assets/communication.png';

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
    {
      title: t('app.skill.frontend'),
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Sass',
        'React',
        'tailwind',
        'Mui',
        'Zustand',
      ],
    },
    {
      title: t('app.skill.backend'),
      skills: ['NestJs', 'PostgresSQL', 'TypeOrm'],
    },
    {
      title: t('app.skill.version_control'),
      skills: ['git', 'Github', 'GitLab'],
    },
    {
      title: t('app.skill.communication'),
      skills: ['Jira Software'],
    },
  ];

  return (
    <ScrollContainer name={props.scrollTo} bgColor="app.purple">
      <ContentContainer
        title={t('app.skill.title')}
        textColor="white"
        iconColor="white"
      >
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
                <TextCard key={index} title={item.title} skills={item.skills} />
              );
            })}
          </Masonry>
        </Box>
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Skill;
