import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { TextCard } from '../../shared/components/TextCard/TextCard';

// Hooks
import { useBreakpoints } from '../../shared/hooks/use-breakpoints.hook';

// Styles
import styles from './Skill.module.scss';

type SkillProps = {
  scrollTo: string;
};

const Skill = (props: SkillProps) => {
  const { mdDown } = useBreakpoints();
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
      title: t('app.skill.communication'),
      skills: ['Jira Software', 'Adobe XD'],
    },
    {
      title: t('app.skill.version_control'),
      skills: ['git', 'Github', 'GitLab'],
    },
  ];

  return (
    <ScrollContainer
      name={props.scrollTo}
      bgColor="app.purple"
      heightFit={mdDown ? true : false}
      title={t('app.skill.title')}
      textColor="white"
      iconColor="white"
    >
      <Box className={styles['skill']}>
        <Box className={styles['skill-left']}>
          <Box className={styles['skill-left-box']}>
            <TextCard title={skillItem[0].title} skills={skillItem[0].skills} />
          </Box>
          <Box className={styles['skill-left-box']}>
            <TextCard title={skillItem[1].title} skills={skillItem[1].skills} />
          </Box>
        </Box>
        <Box className={styles['skill-right']}>
          <Box className={styles['skill-right-box']}>
            <TextCard title={skillItem[2].title} skills={skillItem[2].skills} />
          </Box>
          <Box className={styles['skill-right-box']}>
            <TextCard title={skillItem[3].title} skills={skillItem[3].skills} />
          </Box>
        </Box>
        {/* <Masonry
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
        </Masonry> */}
      </Box>
    </ScrollContainer>
  );
};

export default Skill;
