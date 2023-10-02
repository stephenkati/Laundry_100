import React from 'react'

const links = [
  { path: '/', text: 'Home' },
  { path: '/sub', text: 'Subscriptions' },
  { path: '/basket', text: 'Basket' },
];

const MobileNav = () => {

  return (
    <div className="md:hidden">
      {/* <ul className="flex flex-col gap-4">
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
      </ul> */}
    </div>
  )
}

export default MobileNav;
