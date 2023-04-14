import { useTranslation } from 'react-i18next';

import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { ContentContainer } from '../../shared/components/ContentContainer/ContentContainer';

// Assets
import github from '../../assets/GitHub_Logo.png';
import velog from '../../assets/velog.png';

// Styles
import styles from './Archive.module.scss';
import { ImageCard } from '../../shared/components/ImageCard/ImageCard';
import { Box } from '@mui/material';

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
    <ScrollContainer name={props.scrollTo} bgColor="black">
      <ContentContainer
        title={t('app.archive.title')}
        textColor="white"
        iconColor="#625E79"
      >
        <Box className={styles['archive']}>
          {archive_item.map((item, index) => (
            <ImageCard
              key={index}
              titleImg={item.titleImg}
              titleImgAlt="image_github"
            >
              <Box className={styles['archive-address']}>{item.address}</Box>
              <Box className={styles['archive-detail']}>{item.datail}</Box>
              <ul className={styles['archive-detail-ul']}>
                <li className={styles['archive-detail-li']}>{item.text1}</li>
                <li className={styles['archive-detail-li']}>{item.text2}</li>
              </ul>
            </ImageCard>
          ))}
        </Box>
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Archive;
