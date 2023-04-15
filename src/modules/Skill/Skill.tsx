import { Box, Grid } from '@mui/material';
import { Masonry } from '@mui/lab';
import { useTranslation } from 'react-i18next';

// Components
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { TextCard } from '../../shared/components/TextCard/TextCard';

// Hooks
import { useBreakpoints } from '../../shared/hooks/use-breakpoints.hook';

// Styles
import styles from './Skill.module.scss';
import { SkillButton } from '../../shared/components/TextButton/TextButton';

type SkillProps = {
  scrollTo: string;
};

const Skill = (props: SkillProps) => {
  const { lgDown } = useBreakpoints();
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
    <ScrollContainer
      name={props.scrollTo}
      bgColor="app.purple"
      heightFit={lgDown ? true : false}
      title={t('app.skill.title')}
      textColor="white"
      iconColor="white"
    >
      <Box className={styles['skill']}>
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
    </ScrollContainer>
  );
};

export default Skill;
