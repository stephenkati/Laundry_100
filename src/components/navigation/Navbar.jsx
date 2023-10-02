import React from 'react'
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-secondary px-10 py-4 text-white w-full flex gap-1 items-center">
      <h1 className="text-2xl font-bold w-1/4">Laundry 100</h1>
      <MobileNav className="w-1/2" />
      <DesktopNav className="w-1/2" />
      <FaBars className="mx-2 sm:hidden" />
      <BsPersonBoundingBox className="text-3xl" />
    </div>
  )
}

export default Navbar;
