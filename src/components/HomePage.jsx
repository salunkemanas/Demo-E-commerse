import Card from './Card'
import Navbar from './Navbar'
import thankyou from '../assets/thankyou.jpg'
import SideBar from './SideBar'
import { useState } from 'react'

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Position');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // close dropdown after selection
  };

  return (
      <div>
          <div className="grid grid-cols-6 gap-4">
              <div className='col-start-2 col-span-4'>
                  <div className='mx-auto my-6'>Home / Stationery 123 / Boxed Stationery / Thank You </div>
                  <img src={thankyou} alt="" />
                  <div className="flex justify-end items-center space-x-2 pt-10 pr-5">
                      <div className="flex justify-end items-center space-x-2 pr-5">
                          <div className="text-purple-600">Sort by:</div>
                          <div className="relative">
                              <button onClick={toggleDropdown} className="bg-white border border-purple-500 text-purple-600 py-2 px-4 rounded inline-flex items-center">
                                  <span>{selectedOption}</span>
                                  <svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path d="M5.5,8.6L10,13.1l4.5-4.5l1.4,1.4L10,15.9L4.1,10L5.5,8.6z" />
                                  </svg>
                              </button>
                              {isOpen && (
                                  <ul className="absolute bg-white shadow-md z-10 mt-2 text-gray-700 w-48">
                                      <li className="">
                                          <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/" onClick={() => handleSelectOption('Position')}>Position</a>
                                      </li>
                                      <li className="">
                                          <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/" onClick={() => handleSelectOption('Low to High')}>Low to High</a>
                                      </li>
                                      <li className="">
                                          <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/" onClick={() => handleSelectOption('Name')}>Name</a>
                                      </li>
                                      <li className="">
                                          <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/" onClick={() => handleSelectOption('Color')}>Color</a>
                                      </li>
                                  </ul>
                              )}
                          </div>
                      </div>
                  </div>
                  <div className='grid grid-cols-4'>
                      <div className='col-span-1 hidden sm:block'><SideBar /></div>
                      <div className='col-span-3'><Card /></div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default HomePage