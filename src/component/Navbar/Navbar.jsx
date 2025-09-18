import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from "flowbite-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <nav className="px-6 lg:px-14 py-6 flex md:flex-col lg:flex-row justify-center items-center lg:justify-between bg-white">

      {/* Burger Icon - Visible on Mobile */}
      <div className="md:hidden px-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      {/* logo */}
      <div className="flex justify-center items-center">
        <div className="logo uppercase">
          <Link to="" className="text-main text-[18px] font-[800]">Tasks Management</Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex justify-center items-center gap-6">
        <ul className="flex flex-col gap-4">
              <li>
                <Dropdown label="Categories" dismissOnClick={false} className='foonr-[600] text-[17px] hover:text-gray-600 text-white bg-second p-3'>
                  {/* {categories?.map((category) => (
                    <DropdownItem key={category._id}>
                      <NavLink to={`/categories/${category.name}`} className="w-full block text-start">
                        {category.name}
                      </NavLink>
                    </DropdownItem>
                  ))} */}
                </Dropdown>
              </li>
            </ul>
      </div>
    </nav>

    {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-md px-6 py-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <Dropdown label="Categories" dismissOnClick={false} className='foonr-[600] text-[17px] hover:text-gray-600 text-black'>
                  {/* {categories?.map((category) => (
                    <DropdownItem key={category._id}>
                      <NavLink to={`/categories/${category.name}`} className="w-full block text-start">
                        {category.name}
                      </NavLink>
                    </DropdownItem>
                  ))} */}
                </Dropdown>
              </li>
            </ul>

          </motion.div>
        )}
      </AnimatePresence> 
      
  </>
}
