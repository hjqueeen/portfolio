import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ContentContainer } from '../../shared/components/ContentContainer/ContentContainer';
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import {
  IconDefinition,
  faUser,
  faEnvelope,
  faPen,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Introduction.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DefaultTFuncReturn } from 'i18next';
import { UserCard } from '../../shared/components/UserCard/UserCard';

type IntroductionProps = {
  scrollTo: string;
};

const Introduction = (props: IntroductionProps) => {
  const { t } = useTranslation();
  return (
    <ScrollContainer name={props.scrollTo} bgColor="white">
      <ContentContainer title={t('app.introduction.title')}>
        <Box className={styles['introduction']}>
          <Box className={styles['introduction-row']}>
            <UserCard
              icon={faUser}
              title={t('app.introduction.name')}
              subtitle={t('app.introduction.name_detail')}
            />
            <UserCard
              icon={faEnvelope}
              title={t('app.introduction.email')}
              subtitle={t('app.introduction.email_detail')}
            />
            <UserCard
              icon={faPen}
              title={t('app.introduction.education')}
              subtitle={t('app.introduction.education_detail')}
            />
          </Box>

          <Box className={styles['introduction-row']}>
            <UserCard
              icon={faLocationDot}
              title={t('app.introduction.address')}
              subtitle={t('app.introduction.address_detail')}
            />
          </Box>
        </Box>
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Introduction;
