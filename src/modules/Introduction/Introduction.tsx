import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ContentContainer } from '../../shared/components/ContentContainer/ContentContainer';
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import {
  faUser,
  faEnvelope,
  faPen,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Introduction.module.scss';
import { UserCard } from '../../shared/components/UserCard/UserCard';

// Assets
import hjkim2 from '../../assets/hjkim2.png';

type IntroductionProps = {
  scrollTo: string;
};

const Introduction = (props: IntroductionProps) => {
  const { t } = useTranslation();
  return (
    <ScrollContainer name={props.scrollTo} bgColor="black">
      <ContentContainer
        title={t('app.introduction.title')}
        textColor="white"
        iconColor="#625E79"
      >
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
              icon={faLocationDot}
              title={t('app.introduction.address')}
              subtitle={t('app.introduction.address_detail')}
            />
          </Box>
          {/* <Box className={styles['introduction-row']}>
          
             <UserCard
              icon={faPen}
              title={t('app.introduction.education')}
              subtitle={t('app.introduction.education_detail')}
            /> 
          </Box>*/}
          <Box className={styles['introduction-profile']}>
            <img
              className={styles['introduction-profile-image']}
              src={hjkim2}
              alt="profile_logo"
            />
          </Box>
        </Box>
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Introduction;
