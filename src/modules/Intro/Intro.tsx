import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
// Assets
import developer from '../../assets/programmiererin.png';

// Components
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';
import { TextButton } from '../../shared/components/TextButton/TextButton';

// Styles
import styles from './Intro.module.scss';
import ScrollLink from '../../shared/components/ScrollLink/ScrollLink';
import { Link } from 'react-scroll';

type IntroProps = {
  scrollTo: string;
};
const Intro = (props: IntroProps) => {
  const { t } = useTranslation();
  return (
    <Box className="relative">
      <ScrollContainer
        name={props.scrollTo}
        bgColor="app.purple"
        // bgImage={bakgroundImg}
        textColor="white"
        title={t('app.intro.title')}
        subtitle={t('app.intro.subtitle')}
        disableIcon
        disableTitleUnderline
      >
        <Box
          component="img"
          className={styles['intro-image']}
          src={developer}
          alt="developer"
          sx={{
            '::selection': {
              color: 'white',
              bgcolor: 'white',
            },
          }}
        />
        <Box className={styles['intro-text-button']}>
          <Link
            to="AboutMe"
            spy={true}
            smooth={true}
            duration={500}
            offset={-64}
          >
            <TextButton size="medium" preset="pink">
              Learn more
            </TextButton>
          </Link>
        </Box>
      </ScrollContainer>
    </Box>
  );
};

export default Intro;
