import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { ContentContainer } from '../../shared/components/ContentContainer/ContentContainer';
import { TextButton } from '../../shared/components/TextButton/TextButton';

// Icons
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// Assets
import git from '../../assets/frontend.png';
import spring from '../../assets/3spring.png';

// Styles
import styles from './Project.module.scss';
import { ProjectType } from '../../shared/components/models/shared.type';

type ProjectProps = {
  scrollTo: string;
};

const Project = (props: ProjectProps) => {
  const { t } = useTranslation();
  const project_items: ProjectType[] = [
    {
      title: 'Title 제목',
      subtitle: 'subtitle 설명입니다',
      img: git,
      imgAlt: '',
      descriptions: [
        'hi',
        'hello',
        'This is a source code repository.',
        'This is a source code repository.',
        'This is a source code repository.',
        'This is a source code repository.',
        'This is a source code repositdfepositd fadfagdadeposit dfadfag dade positdfad fagdadeposit dfadfagdadfd agdadfd agdadfd  agdadfd agdadfd agd adadf agdadfd dfadfadf s is ',
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
    {
      title: t(''),
      subtitle: t(''),
      img: spring,
      imgAlt: '',
      descriptions: [t(''), t(''), 'hi', 'hello'],
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
      ],
    },
  ];
  return (
    <ScrollContainer name={props.scrollTo} bgColor="yellow.light">
      <ContentContainer title={t('app.intro.title')}>
        {project_items.map((item, index) => (
          <Box
            key={index}
            className={styles['project-card']}
            sx={{ bgcolor: 'white' }}
          >
            <Box className={styles['project-card-header']}>
              <Box
                className={styles['project-card-header-title']}
                sx={{ fontFamily: 'Montserrat' }}
              >
                {item.title}
              </Box>
              <Box
                className={styles['project-card-header-subtitle']}
                sx={{ color: 'gray_.light' }}
              >
                {item.subtitle}
              </Box>
            </Box>
            <Box className={styles['content']}>
              <Box className={styles['content-image']}>
                <img src={item.img} alt={item.imgAlt} />
              </Box>{' '}
              <Box className={styles['content-main']}>
                <Box className={styles['content-main-description']}>
                  {item.descriptions.map((description, index) => (
                    <Box
                      key={index}
                      className={styles['content-main-description-text']}
                    >
                      {description}
                    </Box>
                  ))}
                </Box>
                <Box className={styles['content-main-description-button']}>
                  <TextButton preset="pink" size="medium">
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
                        className={
                          styles['content-main-description-list-title']
                        }
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: '#5B6A7B', fontSize: 'large' }}
                        />
                        <Box
                          className={
                            styles['content-main-description-list-title-text']
                          }
                        >
                          {list.title}
                        </Box>
                      </Box>
                      <Box
                        className={
                          styles['content-main-description-list-detail']
                        }
                      >
                        {list.detail}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box className={styles['']}></Box>
            <Box className={styles['']}></Box>
          </Box>
        ))}
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Project;
