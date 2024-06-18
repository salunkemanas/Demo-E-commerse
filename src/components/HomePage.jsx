import Card from './Card'
import thankyou from '../assets/thankyou.jpg'
import SideBar from './SideBar'
import { useState } from 'react'

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Position');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false); 
    };

    

  return (
      <div>
          <div className="grid grid-cols-10 gap-4">
              <div className='col-start-1 col-span-10 px-5 md:col-start-2 md:col-span-8'>
                  <div className='mx-auto my-6 text-xl'>Home / Stationery 123 / Boxed Stationery / Thank You </div>
                  <img src={thankyou} alt="" className="h-1/4 w-full"/>
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
                                          <div className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer" onClick={() => handleSelectOption('Position')}>Position</div>
                                      </li>
                                      <li className="">
                                          <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => handleSelectOption('Low To High')}>Low to High</div>
                                      </li>
                                      <li className="">
                                          <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => handleSelectOption('Name')}>Name</div>
                                      </li>
                                      <li className="">
                                          <div className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => handleSelectOption('High To Low')}>High to Low</div>
                                      </li>
                                  </ul>
                              )}
                          </div>
                      </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-4'>
                      <div className='col-span-1 hidden md:block'><SideBar /></div>
                      <div className='col-span-3'><Card selectedOption={selectedOption} /></div>
                  </div>
                  
              </div>
          </div>
      </div>
  )
}

export default HomePage