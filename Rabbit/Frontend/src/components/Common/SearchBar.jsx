import React, { useState } from 'react'
import {  HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isOpen,setIsOpen] = useState(false)

    const handleSearchToggle = ()=>{
        setIsOpen(!isOpen)
        console.log("hi")

    }

    const handleSearch = (e)=>{
      e.preventDefault();

      console.log("search:",searchTerm);

      setIsOpen(false)

    }
  return (
    <div className={`flex items-center  w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-blue-500 h-24 z-50" : "w-auto"}`}>
      {isOpen ? (
        <form className='relative flex items-center justify-center w-full' onSubmit={handleSearch}> 

        <div className=' relative w-1'>
        <input type="text" placeholder='search' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}  className='bg-gray-100 px-4 pl-2 pr-12 rounded-lg focus:outline-none'/>

              <button type= "submit" className='absolute right-2 top-2'> <HiMagnifyingGlass className='h-6 w-6'></HiMagnifyingGlass></button>

        </div>
        {/* close button */}

        <button type='button' className='absolute right-1 top-1/4' onClick={handleSearchToggle}>
        <HiMiniXMark className='h-6 w-6'></HiMiniXMark>
        </button>

      </form> ) : 
      (
      <button onClick={handleSearchToggle}> <HiMagnifyingGlass className='h-6 w-6'></HiMagnifyingGlass></button>

      )}
    </div>
  )
}

export default SearchBar