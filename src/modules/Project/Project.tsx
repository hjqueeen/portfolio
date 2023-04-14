import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { TextButton } from '../../shared/components/TextButton/TextButton';

// Icons
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// Assets
import spring from '../../assets/3spring.png';

// Models
import { ProjectType } from '../../shared/models/shared.types';

// Styles
import styles from './Project.module.scss';
import { useBreakpoints } from '../../shared/hooks/use-breakpoints.hook';

type ProjectProps = {
  scrollTo: string;
};

const Project = (props: ProjectProps) => {
  const { lgDown } = useBreakpoints();
  const { t } = useTranslation();
  const project_items: ProjectType[] = [
    {
      title: 'Title 제목',
      subtitle: 'subtitle 설명입니다',
      img: spring,
      imgAlt: '',
      descriptions: [
        'This is a source code repository.',
        'This is a source code repository.',
        'This is a source code repository.',
        'This is a source code repository.',
        'This is a source code repository.',
      ],
      lists: [
        {
          title: '주요기능',
          detail:
            '자주 부르는 노래의 가수명 및 제목 기록하기, 간편한 분류를 위해 각 노래에 태깅하기, 노래의 가수명 및 제목으로 검색해 보기, 가수 또는 태그에 따라 분류해 보기',
        },
        {
          title: '주요기능',
          detail: '자주 부르는 노래의 가수명 및 제목 기록하기.',
        },
        {
          title: '주요기능',
          detail: '자주 부르는 노래의 가수명 및 제목 기록하기.',
        },
        {
          title: '주요기능',
          detail: '자주 부르는 노래의 가수명 및 제목 기록하기.',
        },
      ],
    },
  ];
  return (
    <ScrollContainer
      name={props.scrollTo}
      bgColor="app.purple"
      heightFit
      title={t('app.intro.title')}
      textColor="white"
      iconColor="white"
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
                color: 'gray_.light',
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
            <Box
              component="img"
              className={styles['content-image']}
              sx={{
                '::selection': {
                  color: 'white',
                  bgcolor: 'app.orange',
                },
              }}
              src={item.img}
              alt={item.imgAlt}
            />

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
                <TextButton preset="pink" size={lgDown ? 'small' : 'medium'}>
                  Learn more
                </TextButton>
                <Box
                  className={styles['content-main-description-divider']}
                  sx={{ borderColor: 'gray_.dark' }}
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
                          fontSize: lgDown ? 'medium' : 'large',
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
                        '::selection': {
                          color: 'white',
                          bgcolor: 'app.orange',
                        },
                      }}
                    >
                      {list.detail}
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
