import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import CartContents from '../Cart/CartContents'

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
   
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-500 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"} `}>
        {/* close button */}
        <div className='flex justify-end p-4 '>
             <button onClick={toggleCartDrawer}> <IoMdClose className='h-6 w-6 text-gray-600'></IoMdClose>
             </button>
        </div>
       

        {/* cart-contents scrollable areas */}
        <div className='flex-grow p-4 overflow-y-auto'>
            <h2 className='text-gray-700 text-xl'>Your Cart</h2>
            {/*  component for cart content */}
            <CartContents/>

        </div>
        {/* checkOut button */}
        <div className='p-4 bg-white sticky bottom-0'>
            <button className='w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800'>Checkout</button>
            <p className='text-sm tracking-tight mr-2 text-center'>
                Shipping , taxes, and discount codes calculated at checkout.
            </p>


        </div>

    </div>
  )
}

export default CartDrawer