import ScrollContainer from '../../shared/components/ScrollContainer/ScrollContainer';

type SkillProps = {
  scrollTo: string;
};

const Skill = (props: SkillProps) => {
  return (
    <ScrollContainer name={props.scrollTo} bgColor="yellow.light">
      <div>Skill</div>
    </ScrollContainer>
  );
};

export default Skill;
