import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const links = [
  { path: '/', text: 'Home' },
  { path: '/sub', text: 'Subscriptions' },
  { path: '/basket', text: 'Basket' },
];

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <div className="md:hidden">
      
      <button
        className="text-3xl absolute top-4 right-4 close"
        onClick={handleToggleMenu}
      >
        <FaBars />
      </button>

      {isMenuOpen &&
        <div className="bg-secondary absolute top-0 right-0 left-0 p-5">
          <div className="flex justify-between w-full py-4 text-3xl ">
            <BsPersonBoundingBox className="profile" />
            <AiOutlineCloseCircle
              className="close"
              onClick={handleToggleMenu}
            />
          </div>
          <ul className="flex flex-col gap-4">
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
        </div>
      }

    </div>
  )
}

export default MobileNav;
