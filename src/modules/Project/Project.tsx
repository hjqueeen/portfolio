import ScrollContainer from '../../shared/components/ScrollContainer/ScrollContainer';

type ProjectProps = {
  scrollTo: string;
};

const Project = (props: ProjectProps) => {
  return (
    <ScrollContainer name={props.scrollTo} bgColor="yellow.light">
      <div>Project</div>
    </ScrollContainer>
  );
};

export default Project;
