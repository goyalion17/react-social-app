import { NavLink } from 'react-router-dom';

const links = [
  { to: '/profile', label: 'Profile' },
  { to: '/messages', label: 'Messages' },
  { to: '/news', label: 'News' },
  { to: '/music', label: 'Music' },
  { to: '/settings', label: 'Settings' },
];

const navLinkClass = ({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link');

const Navbar = () => {
  return (
    <nav className="nav">
      {links.map((link) => (
        <div key={link.to} className="nav__item">
          <NavLink to={link.to} className={navLinkClass}>
            {link.label}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
