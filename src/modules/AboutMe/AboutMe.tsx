import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  faUser,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

// Components
import { UserCard } from '../../shared/components/UserCard/UserCard';
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';

// Assets
import hjkim2 from '../../assets/hjkim2.png';

// Styles
import styles from './AboutMe.module.scss';
import { useBreakpoints } from '../../shared/hooks/use-breakpoints.hook';

type AboutMeProps = {
  scrollTo: string;
};

const AboutMe = (props: AboutMeProps) => {
  const { smDown } = useBreakpoints();
  const { t } = useTranslation();

  const profile_texts = [
    t('app.introduction.profile.text2'),
    t('app.introduction.profile.text3'),
  ];
  return (
    <ScrollContainer
      name={props.scrollTo}
      bgColor="black"
      title={t('app.introduction.title')}
      textColor="white"
      iconColor="#625E79"
      selectionColor="app.purple"
    >
      <Box className={styles['introduction-profile']}>
        <Box className={styles['introduction-profile-detail']}>
          <Box
            className={styles['introduction-profile-detail-text']}
            sx={{
              color: 'app.pink',
              fontSize: smDown ? '18px' : '25px',
              fontWeight: 700,
              '::selection': {
                color: 'white',
                bgcolor: 'app.purple',
              },
            }}
          >
            {t('app.introduction.profile.text1')}
          </Box>
          {profile_texts.map((text) => (
            <Box
              className={styles['introduction-profile-detail-text']}
              sx={{
                color: 'white',
                fontSize: smDown ? '12px' : '18px',
                '::selection': {
                  color: 'white',
                  bgcolor: 'app.purple',
                },
              }}
            >
              {text}
            </Box>
          ))}
        </Box>
        {!smDown && (
          <Box
            component="img"
            className={styles['introduction-profile-image']}
            src={hjkim2}
            alt="profile_logo"
            sx={{
              '::selection': {
                color: 'app.purple',
                bgcolor: 'white',
              },
            }}
          />
        )}
      </Box>
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
      </Box>
    </ScrollContainer>
  );
};

export default AboutMe;
