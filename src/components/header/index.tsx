import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Button,
} from 'reactstrap';
import { User } from '../../types/user';

interface Props {
  user: User;
}

function Header(props: Props) {
  const { user } = props;
  return (
    <Navbar expand="md" light>
      <Nav className="ms-auto" navbar>
        <button id="popover1" type="button">
          {user.firstName} {user.lastName}
        </button>

        <UncontrolledPopover placement="bottom" target="popover1" trigger="focus">
          <PopoverBody>Logout</PopoverBody>
        </UncontrolledPopover>
      </Nav>
    </Navbar>
  );
}

export default Header;
