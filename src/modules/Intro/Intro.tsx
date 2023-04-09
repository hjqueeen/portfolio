import { Box, Typography } from '@mui/material';
import ScrollContainer from '../../shared/components/ScrollContainer/ScrollContainer';
import Card from '../../shared/components/Card/Card';
import ContentContainer from '../../shared/components/ContentContainer/ContentContainer';
import TextButton from '../../shared/components/TextButton/TextButton';

type IntroProps = {
  scrollTo: string;
};
const Intro = (props: IntroProps) => {
  return (
    <ScrollContainer name={props.scrollTo}>
      <ContentContainer
        title="Hyejin Kim"
        subtitle="Web Developer Portfolio"
        disableIcon
      >
        <TextButton size="medium" preset="pink">
          Learn more
        </TextButton>
      </ContentContainer>
    </ScrollContainer>
  );
};

export default Intro;
