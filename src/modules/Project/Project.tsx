import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { TextButton } from '../../shared/components/TextButton/TextButton';

// Icons
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// Assets
import portfolio1 from '../../assets/project/portfolio1/portfolio1.png';
import portfolio2 from '../../assets/project/portfolio1/portfolio2.png';
import portfolio3 from '../../assets/project/portfolio1/portfolio3.png';
import portfolio4 from '../../assets/project/portfolio1/portfolio4.png';

import project2_1 from '../../assets/project/project2/project2_1.png';
import project2_2 from '../../assets/project/project2/project2_2.png';
import project2_3 from '../../assets/project/project2/project2_3.png';
import project2_4 from '../../assets/project/project2/project2_4.png';
import project2_5 from '../../assets/project/project2/project2_5.png';

// Models
import { ProjectType } from '../../shared/models/shared.types';

// Styles
import styles from './Project.module.scss';
import { useBreakpoints } from '../../shared/hooks/use-breakpoints.hook';

type ProjectProps = {
  scrollTo: string;
};

const Project = (props: ProjectProps) => {
  const { smDown } = useBreakpoints();
  const { t } = useTranslation();
  const project_items: ProjectType[] = [
    {
      title: t('app.project1.title'),
      subtitle: t('app.project1.subtitle'),
      imgs: [
        {
          src: portfolio1,
          alt: 'portfolio1',
        },
        {
          src: portfolio2,
          alt: 'portfolio2',
        },
        {
          src: portfolio3,
          alt: 'portfolio3',
        },
        {
          src: portfolio4,
          alt: 'portfolio4',
        },
      ],
      descriptions: [
        t('app.project1.descriptions.text1'),
        t('app.project1.descriptions.text2'),
      ],
      lists: [
        {
          title: t('app.project1.list1.title'),
          detail: t('app.project1.list1.detail'),
        },
        {
          title: t('app.project1.list2.title'),
          detail: t('app.project1.list2.detail'),
        },
        {
          title: t('app.project1.list3.title'),
          detail: t('app.project1.list3.detail'),
          link: true,
        },
        {
          title: t('app.project1.list4.title'),
          detail: t('app.project1.list4.detail'),
          link: true,
        },
      ],
    },
    {
      title: t('app.project2.title'),
      subtitle: t('app.project2.subtitle'),
      imgs: [
        {
          src: project2_1,
          alt: 'project2_1',
        },
        {
          src: project2_2,
          alt: 'project2_2',
        },
        {
          src: project2_3,
          alt: 'project2_3',
        },
        {
          src: project2_4,
          alt: 'project2_4',
        },
        {
          src: project2_5,
          alt: 'project2_5',
        },
      ],
      descriptions: [
        t('app.project2.descriptions.text1'),
        // t('app.project2.descriptions.text2'),
        // t('app.project2.descriptions.text3'),
      ],
      lists: [
        {
          title: t('app.project2.list1.title'),
          detail: t('app.project2.list1.detail'),
        },
        {
          title: t('app.project2.list2.title'),
          detail: t('app.project2.list2.detail'),
        },
        {
          title: t('app.project2.list3.title'),
          detail: t('app.project2.list3.detail'),
        },
        {
          title: t('app.project2.list4.title'),
          detail: t('app.project2.list4.detail'),
          link: true,
        },
        {
          title: t('app.project2.list5.title'),
          detail: t('app.project2.list5.detail'),
          link: true,
        },
        {
          title: t('app.project2.list6.title'),
          detail: t('app.project2.list6.detail'),
          link: true,
        },
      ],
    },
  ];

  return (
    <ScrollContainer
      name={props.scrollTo}
      bgColor="app.purple"
      title={t('app.project.title')}
      textColor="white"
      iconColor="white"
      classes="gap-10"
    >
      {project_items.map((item, index) => (
        <Box
          key={index}
          className={styles['project-card']}
          sx={{ bgcolor: 'white' }}
        >
          <Box className={styles['project-card-header']}>
            <Box
              className={styles['project-card-header-title']}
              sx={{
                fontFamily: 'Montserrat',
                '::selection': {
                  color: 'white',
                  bgcolor: 'app.orange',
                },
              }}
            >
              {item.title}
            </Box>
            <Box
              className={styles['project-card-header-subtitle']}
              sx={{
                color: 'app.gray.light',
                '::selection': {
                  color: 'white',
                  bgcolor: 'app.orange',
                },
              }}
            >
              {item.subtitle}
            </Box>
          </Box>
          <Box className={styles['content']}>
            <Box className={styles['content-slider']}>
              <Box
                component="img"
                className={styles['content-image']}
                sx={{
                  '::selection': {
                    color: 'white',
                    bgcolor: 'white',
                  },
                }}
                src={item.imgs[0].src}
                alt={item.imgs[0].alt}
              />
            </Box>
            <Box className={styles['content-main']}>
              <Box className={styles['content-main-description']}>
                {item.descriptions.map((description, index) => (
                  <Box
                    key={index}
                    className={styles['content-main-description-text']}
                    sx={{
                      '::selection': {
                        color: 'white',
                        bgcolor: 'app.orange',
                      },
                    }}
                  >
                    {description}
                  </Box>
                ))}
              </Box>
              <Box className={styles['content-main-description-button']}>
                <TextButton preset="pink" size={smDown ? 'small' : 'medium'}>
                  Learn more
                </TextButton>
                <Box
                  className={styles['content-main-description-divider']}
                  sx={{ borderColor: 'app.gray.dark' }}
                ></Box>
                {item.lists.map((list, index) => (
                  <Box
                    key={index}
                    className={styles['content-main-description-list']}
                  >
                    <Box
                      className={styles['content-main-description-list-title']}
                      sx={{
                        '::selection': {
                          color: 'white',
                          bgcolor: 'app.orange',
                        },
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: '#5B6A7B',
                          fontSize: smDown ? 'medium' : 'large',
                        }}
                      />
                      <Box
                        className={
                          styles['content-main-description-list-title-text']
                        }
                        sx={{
                          '::selection': {
                            color: 'white',
                            bgcolor: 'app.orange',
                          },
                        }}
                      >
                        {list.title}
                      </Box>
                    </Box>
                    <Box
                      className={styles['content-main-description-list-detail']}
                      sx={{
                        textDecoration: list.link ? 'underline' : undefined,
                        color: list.link ? 'app.pink' : undefined,
                        '::selection': {
                          color: 'white',
                          bgcolor: 'app.orange',
                        },
                      }}
                    >
                      {list.link && (
                        <a
                          href={list.detail?.toString()}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {list.detail}
                        </a>
                      )}
                      {!list.link && list.detail}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </ScrollContainer>
  );
};

export default Project;
