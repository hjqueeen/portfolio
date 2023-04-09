import { Link } from 'react-scroll';
import TextButton from '../TextButton/TextButton';

type ScrollLinkProps = {
  children: string;
  to: string;
};
const ScrollLink = (props: ScrollLinkProps) => {
  return (
    <Link to={props.to} spy={true} smooth={true} duration={500} offset={-64}>
      <TextButton>{props.children}</TextButton>
    </Link>
  );
};

export default ScrollLink;
