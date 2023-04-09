import { useRef } from 'react';
import { Box } from '@mui/material';

// Components

// Styles
import styles from './MainPage.module.scss';
import ContentContainer from '../../shared/ContentContainer/ContentContainer';
import TextButton from '../../shared/components/TextButton/TextButton';
import { Link } from 'react-scroll';

type MainPageProps = {
  bgColor?: string;
};

const MainPage = (props: MainPageProps) => {
  const firstScrollRef = useRef<null | HTMLDivElement>(null);
  const secondScrollRef = useRef<null | HTMLDivElement>(null);
  const thirdScrollRef = useRef<null | HTMLDivElement>(null);
  const fourthScrollRef = useRef<null | HTMLDivElement>(null);
  const fifthScrollRef = useRef<null | HTMLDivElement>(null);

  const scrollToTarget = (
    ref: React.MutableRefObject<null | HTMLDivElement>
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box className={styles['header']}>
        <Box className={styles['header-content']}>
          <Box
            sx={{
              fontSize: '1.5rem',
              fontWeight: '600',
              '&:hover': {
                color: 'white',
              },
            }}
            // className="text-xl font-bold"
          >
            HJ's Portfolio
          </Box>
          <Box className="flex flex-row items-center">
            <TextButton onClick={() => scrollToTarget(firstScrollRef)}>
              About me
            </TextButton>
            <TextButton onClick={() => scrollToTarget(secondScrollRef)}>
              Skills
            </TextButton>
            <Link to="/chapter3" spy={true} smooth={true}>
              <TextButton
              // onClick={() => scrollToTarget(thirdScrollRef)}
              >
                Archiving
              </TextButton>
            </Link>

            <TextButton onClick={() => scrollToTarget(fourthScrollRef)}>
              Projects
            </TextButton>
            <TextButton onClick={() => scrollToTarget(fifthScrollRef)}>
              Career
            </TextButton>
          </Box>
        </Box>
      </Box>
      {/* Main Content */}
      <Box className="h-full">
        <ContentContainer
          component={<Box>CHPATER 1 </Box>}
          bgColor="burlywood"
          ref={firstScrollRef}
        />
        <ContentContainer
          component={<Box>CHPATER 2 </Box>}
          bgColor="beige"
          ref={secondScrollRef}
        />
        <ContentContainer
          component={<Box>CHPATER 3 </Box>}
          bgColor="gray"
          ref={thirdScrollRef}
          id="/chater3"
        />
        <ContentContainer
          component={<Box>CHPATER 4 </Box>}
          bgColor="burlywood"
          ref={fourthScrollRef}
        />
        <ContentContainer
          component={<Box>CHPATER 5 </Box>}
          bgColor="beige"
          ref={fifthScrollRef}
        />
      </Box>
    </Box>
  );
};

export default MainPage;
