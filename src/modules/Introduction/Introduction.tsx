import ScrollContainer from '../../shared/components/ScrollContainer/ScrollContainer';

type IntroductionProps = {
  scrollTo: string;
};

const Introduction = (props: IntroductionProps) => {
  return (
    <ScrollContainer name={props.scrollTo} bgColor="white">
      <div>Introduction</div>
    </ScrollContainer>
  );
};

export default Introduction;
