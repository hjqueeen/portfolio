import { Box } from '@mui/material';
import { Link } from 'react-scroll';

// Components
import Intro from '../../../modules/Intro/Intro';
import Introduction from '../../../modules/Introduction/Introduction';
import ScrollLink from '../../components/ScrollLink/ScrollLink';
import Skill from '../../../modules/Skill/Skill';
import Archive from '../../../modules/Archive/Archive';
import Career from '../../../modules/Career/Career';
import Project from '../../../modules/Project/Project';

// Styles
import styles from './MainPage.module.scss';

type MainPageProps = {
  bgColor?: string;
};

const MainPage = (props: MainPageProps) => {
  return (
    <Box className="relative">
      {/* Header */}
      <Box className={styles['header']}>
        <Box className={styles['header-content']}>
          <Box
            className={styles['header-title']}
            sx={{
              color: 'pink.dark',
              fontSize: '1.75rem',
              fontWeight: '600',
              fontFamily: 'Montserrat',
            }}
          >
            <Link to="intro" spy={true} offset={-100}>
              HJK's Portfolio
            </Link>
          </Box>

          <Box className="flex flex-row items-center">
            <ScrollLink to="introduction">About me</ScrollLink>
            <ScrollLink to="skill">Skills</ScrollLink>
            <ScrollLink to="Archive">Archiving</ScrollLink>
            <ScrollLink to="project">Projects</ScrollLink>
            <ScrollLink to="career">Career</ScrollLink>
          </Box>
        </Box>
      </Box>

      {/* Background Image */}

      {/* Main Content */}
      <Box className="flex h-full overflow-y-auto ">
        <Intro scrollTo="intro" />
        <Introduction scrollTo="introduction" />
        <Skill scrollTo="skill" />
        <Archive scrollTo="Archive" />
        <Project scrollTo="project" />
        <Career scrollTo="career" />
      </Box>
    </Box>
  );
};

export default MainPage;
