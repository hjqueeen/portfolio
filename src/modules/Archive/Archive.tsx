import ScrollContainer from '../../shared/components/ScrollContainer/ScrollContainer';

type ArchiveProps = {
  scrollTo: string;
};

const Archive = (props: ArchiveProps) => {
  return (
    <ScrollContainer name={props.scrollTo}>
      <div>Archive</div>
    </ScrollContainer>
  );
};

export default Archive;
