import { NavLink } from 'react-router-dom';
const base = '/exercises/20';
export default function NavigationMenu() {
  return (
    <nav className="demo-nav" aria-label="Bài 20 navigation">
      {[
        ['', 'Home'],
        ['/products', 'Products'],
        ['/about', 'About'],
        ['/contact', 'Contact'],
        ['/users', 'Users (không ID)'],
        ['/users/42', 'User 42'],
      ].map(([path, label]) => (
        <NavLink key={path} end to={`${base}${path}`}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
