import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser,HiOutlineShoppingBag, HiBars3BottomRight} from "react-icons/hi2"
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {

 const [drawerOpen,setDrawerOpen] = useState(true);
    const toggleCartDrawer = ()=>{
        setDrawerOpen(!drawerOpen)
    }
  return (
    <>
    <nav className=' container  max-auto items-center flex justify-between py-2 px-6'>

        <div className=''>
            <Link to="/" className='text-2xl font-medium'>Rabbit</Link>

        </div>

        {/* center navigation link */}

<div className='hidden md:flex items-center gap-x-6 py-6 px-6'>
  <Link className="text-gray-300 font-medium hover:text-black text-sm uppercase">men</Link>
  <Link className="text-gray-300 font-medium hover:text-black text-sm uppercase">women</Link>
  <Link className="text-gray-300 font-medium hover:text-black text-sm uppercase">top wear</Link>
  <Link className="text-gray-300 font-medium hover:text-black text-sm uppercase">bottom wear</Link>
</div>

        {/* right -icons */}

        <div className='flex items-center space-x-3'>
            <Link  to ="/profile" className='hover:text-black'><HiOutlineUser className='h-5 w-5 text-gray-700'></HiOutlineUser></Link>

            <button onClick={toggleCartDrawer} type="button" className='relative hover:text-black'><HiOutlineShoppingBag className='h-5 w-5'></HiOutlineShoppingBag>
            <span className=' absolute  -top-1 bg-red-600 text-white text-sm rounded-full px-2 py-0.5' >4</span>
            </button>

                {/* {Search } */}
          <SearchBar/>

        <button className='md:hidden'> <HiBars3BottomRight className=' h-6 w-6'></HiBars3BottomRight></button>

        </div>

    

    </nav>
    <CartDrawer drawerOpen= {drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    </>
  )
}

export default Navbar