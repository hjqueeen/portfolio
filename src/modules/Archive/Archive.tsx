import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

// Components
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { ImageCard } from '../../shared/components/ImageCard/ImageCard';

// Assets
import github from '../../assets/GitHub_Logo.png';
import velog from '../../assets/velog.png';

// Styles
import styles from './Archive.module.scss';

type ArchiveProps = {
  scrollTo: string;
};

const Archive = (props: ArchiveProps) => {
  const { t } = useTranslation();
  const archive_item = [
    {
      titleImg: github,
      address: t('app.archive.github.address'),
      datail: t('app.archive.github.description.detail'),
      text1: t('app.archive.github.description.text1'),
      text2: t('app.archive.github.description.text2'),
    },
    {
      titleImg: velog,
      address: t('app.archive.website.address'),
      datail: t('app.archive.website.description.detail'),
      text1: t('app.archive.website.description.text1'),
      text2: t('app.archive.website.description.text2'),
    },
  ];
  return (
    <ScrollContainer
      name={props.scrollTo}
      bgColor="black"
      title={t('app.archive.title')}
      textColor="white"
      iconColor="#625E79"
      selectionColor="app.purple"
    >
      <Box className={styles['archive-container']}>
        <Box className={styles['archive']}>
          {archive_item.map((item, index) => (
            <ImageCard
              key={index}
              titleImg={item.titleImg}
              titleImgAlt="image_github"
            >
              <Box
                className={styles['archive-address']}
                sx={{
                  '::selection': {
                    color: 'white',
                    bgcolor: 'app.purple',
                  },
                }}
              >
                {item.address}
              </Box>
              <Box
                className={styles['archive-detail']}
                sx={{
                  color: 'app.pink',
                  '::selection': {
                    color: 'white',
                    bgcolor: 'app.purple',
                  },
                }}
              >
                {item.datail}
              </Box>
              <Box
                component="ul"
                className={styles['archive-detail-ul']}
                sx={{
                  '::selection': {
                    color: 'white',
                    bgcolor: 'app.purple',
                  },
                }}
              >
                <Box
                  component="li"
                  className={styles['archive-detail-li']}
                  sx={{
                    listStyleType: 'disc',
                    '::selection': {
                      color: 'white',
                      bgcolor: 'app.purple',
                    },
                  }}
                >
                  {item.text1}
                </Box>
                <Box
                  component="li"
                  className={styles['archive-detail-li']}
                  sx={{
                    listStyleType: 'disc',
                    '::selection': {
                      color: 'white',
                      bgcolor: 'app.purple',
                    },
                  }}
                >
                  {item.text2}
                </Box>
              </Box>
            </ImageCard>
          ))}
        </Box>
      </Box>
    </ScrollContainer>
  );
};

export default Archive;
