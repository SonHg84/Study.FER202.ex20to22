import { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
export default function CustomNavbar() {
  // 1. State: open quyết định Collapse của navbar ở viewport nhỏ.
  const [open, setOpen] = useState(false);

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/exercises/22">
        Logo
      </NavbarBrand>
      <NavbarToggler
        onClick={() => setOpen(!open)}
        aria-label="Mở navigation"
        aria-expanded={open}
        aria-controls="optional-navbar"
      />
      <Collapse id="optional-navbar" isOpen={open} navbar>
        <Nav className="ms-auto" navbar>
          {[
            ['', 'Home'],
            ['/about', 'About'],
            ['/contact', 'Contact'],
            ['/profile', 'Profile'],
          ].map(([path, name]) => (
            <NavItem key={name}>
              <NavLink
                tag={RouterNavLink}
                to={`/exercises/22${path}`}
                end={path === ''}
                onClick={() => setOpen(false)}
              >
                {name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
