import { useTranslation } from 'react-i18next';

import ScrollContainer from '../../shared/components/ScrollContainer/ScrollContainer';
import ContentContainer from '../../shared/components/ContentContainer/ContentContainer';

// Assets
import spring from '../../assets/3spring.png';

// Styles
import styles from './Archive.module.scss';
import { ImageCard } from '../../shared/components/ImageCard/ImageCard';
import { Box } from '@mui/material';

type ArchiveProps = {
  scrollTo: string;
};

const Archive = (props: ArchiveProps) => {
  const { t } = useTranslation();
  return (
    <ScrollContainer name={props.scrollTo}>
      <ContentContainer title={t('app.archive.title')}>
        <Box className={styles['archive']}>
          <ImageCard titleImg={spring} titleImgAlt="image_github">
            <Box className={styles['']}>
              <Box className={styles['']}>{t('app.archive.title')}</Box>
              <Box className={styles['']}> </Box>
              <Box className={styles['']}> </Box>
              <Box className={styles['']}> </Box>
              <Box className={styles['']}> </Box>
            </Box>
          </ImageCard>
          <ImageCard titleImg={spring} titleImgAlt="image_github">
            <Box className={styles['']}>
              <Box className={styles['']}>{t('app.archive.title')}</Box>
              <Box className={styles['']}> </Box>
              <Box className={styles['']}> </Box>
              <Box className={styles['']}> </Box>
              <Box className={styles['']}> </Box>
            </Box>
          </ImageCard>
        </Box>
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Archive;
