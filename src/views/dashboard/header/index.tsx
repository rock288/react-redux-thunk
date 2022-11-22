import { Nav, Navbar, PopoverBody, UncontrolledPopover } from 'reactstrap';
import { Image } from '../../../components';
import { User } from '../../../types/user';
import avatarImage from '../../../assets/images/avatar.svg';
import logoutIcon from '../../../assets/images/logout.svg';
import { logout } from '../../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../store/user/userReducer';
import './index.scss';

interface Props {
  user: User | null;
}

function Header(props: Props) {
  const { user } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await logout();
      dispatch(userLogout());
      navigate('/login');
    } catch (_) {
      alert('Logout failed');
    }
  };

  return (
    <Navbar className="header-top" expand="md" light>
      <Nav className="ms-auto" navbar>
        <button
          id="popover1"
          type="button"
          className="user-info d-flex flex-row align-items-center justify-content-center"
        >
          <div className="d-flex flex-column align-items-end">
            <span className="user-name">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="user-active">Available</span>
          </div>
          <div>
            <Image src={avatarImage} alt="avatar" isAvatar />
          </div>
        </button>

        <UncontrolledPopover placement="bottom" target="popover1" trigger="focus">
          <PopoverBody>
            <div className="cursor-pointer" onClick={onLogout}>
              Logout <Image imgClass="pb-1" src={logoutIcon} alt="logout" />
            </div>
          </PopoverBody>
        </UncontrolledPopover>
      </Nav>
    </Navbar>
  );
}

export default Header;
