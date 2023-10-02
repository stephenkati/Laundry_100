import React from 'react'
import { Link } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/sub', text: 'Subscriptions' },
  { path: '/basket', text: 'Basket' },
];

const DesktopNav = () => {

  return (
    <ul className="hidden md:flex p-1 w-full justify-center gap-4">
      {
        links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="slide-in"
            >
              {link.text}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default DesktopNav;
