import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Header() {
  return (
    <Navbar expand="md" light>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink disabled href="#">
            Inactive Link
          </NavLink>
        </NavItem>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle caret className="nav-link" tag="a">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem active href="#" tag="a">
              Link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;
