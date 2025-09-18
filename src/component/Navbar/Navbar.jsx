import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownItem } from "flowbite-react";
import { AnimatePresence, motion } from "framer-motion";
import axios from 'axios';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  function getAllCategories() {
    axios.get(`https://kbybdtacoqvgcijrkzkv.supabase.co/rest/v1/categories?order=name.asc`, {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtieWJkdGFjb3F2Z2NpanJremt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzUwNjAsImV4cCI6MjA3MTYxMTA2MH0.SAF_9jupuaVLHq0l7Zbew7t6avUdg_UkdVGqLZmHTQE",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtieWJkdGFjb3F2Z2NpanJremt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzUwNjAsImV4cCI6MjA3MTYxMTA2MH0.SAF_9jupuaVLHq0l7Zbew7t6avUdg_UkdVGqLZmHTQE`,
      },
    })
      .then((request) => {
        setCategories(request.data);
        console.log(categories);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return <>
    <nav className="px-6 lg:px-14 py-6 flex md:flex-col lg:flex-row justify-center items-center lg:justify-between bg-white">

      {/* Burger Icon - Visible on Mobile */}
      <div className="md:hidden px-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars text-2xl text-main"></i>
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
              {categories?.map((category) => (
                    <DropdownItem key={category.id}>
                      <Link to={`/category/${category.id}`} className="w-full block text-start">
                        {category.name}
                      </Link>
                    </DropdownItem>
                  ))}
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
              <Dropdown label="Categories" dismissOnClick={false} className='foonr-[600] text-[17px] hover:text-gray-600 text-white bg-second p-3'>
              {categories?.map((category) => (
                    <DropdownItem key={category.id}>
                      <Link to={`/category/${category.id}`} className="w-full block text-start">
                        {category.name}
                      </Link>
                    </DropdownItem>
                  ))}
            </Dropdown>
            </li>
          </ul>

        </motion.div>
      )}
    </AnimatePresence>

  </>
}
