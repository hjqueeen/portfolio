import { Box } from '@mui/material';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

// Components
import Intro from '../../../modules/Intro/Intro';
import AboutMe from '../../../modules/AboutMe/AboutMe';
import ScrollLink from '../../components/ScrollLink/ScrollLink';
import Skill from '../../../modules/Skill/Skill';
import Archive from '../../../modules/Archive/Archive';
// import Career from '../../../modules/Career/Career';
import Project from '../../../modules/Project/Project';

//Hooks
import { useBreakpoints } from '../../hooks/use-breakpoints.hook';

// Styles
import styles from './MainPage.module.scss';

type MainPageProps = {
  bgColor?: string;
};

const MainPage = (props: MainPageProps) => {
  const { t } = useTranslation();
  const { smUp } = useBreakpoints();

  return (
    <Box className={styles['main-page']}>
      {/* Header */}
      <Box className={styles['header']}>
        <Box className={styles['header-content']}>
          <Box
            className={styles['header-title']}
            sx={{
              color: 'app.pink',
              // fontSize: '1.75rem',
              fontWeight: '600',
              fontFamily: 'Montserrat',
            }}
          >
            <Link to="intro" spy={true} offset={-100}>
              {t('app.title')}
            </Link>
          </Box>
          {smUp && (
            <Box className="flex flex-row items-center">
              <ScrollLink to="AboutMe">About me</ScrollLink>
              <ScrollLink to="skill">Skills</ScrollLink>
              <ScrollLink to="Archive">Archiving</ScrollLink>
              <ScrollLink to="project">Projects</ScrollLink>
              {/* <ScrollLink to="career">Career</ScrollLink> */}
            </Box>
          )}
        </Box>
      </Box>

      {/* Background Image */}

      {/* Main Content */}
      <Box className="flex h-full">
        <Intro scrollTo="intro" />
        <AboutMe scrollTo="AboutMe" />
        <Skill scrollTo="skill" />
        <Archive scrollTo="Archive" />
        <Project scrollTo="project" />
        {/* <Career scrollTo="career" /> */}
      </Box>
    </Box>
  );
};

export default MainPage;
