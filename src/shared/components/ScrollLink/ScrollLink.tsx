import { Link } from 'react-scroll';
import { DefaultTFuncReturn } from 'i18next';

// Components
import { TextButton } from '../TextButton/TextButton';
import { useBreakpoints } from '../../hooks/use-breakpoints.hook';

type ScrollLinkProps = {
  children: DefaultTFuncReturn | string;
  to: string;
};
const ScrollLink = (props: ScrollLinkProps) => {
  const { mdDown } = useBreakpoints();
  return (
    <Link to={props.to} spy={true} smooth={true} duration={500} offset={-64}>
      <TextButton size={mdDown ? 'small' : 'base'}>{props.children}</TextButton>
    </Link>
  );
};

export default ScrollLink;
