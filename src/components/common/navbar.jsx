'use client'
import Link from "next/link";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import SearchBar from "./searchbar";
import CartDrawer from "../layout/cartdrawer";
import { useState } from "react";
import { IoMdClock, IoMdClose } from "react-icons/io";

function NavBar () {
 const [drawerOpen, setDrawerOpen] = useState(true);

 const [navDrawerOpen, setNavDrawerOpen] = useState(false);


 const toggleNavDrawer = () => {
  setNavDrawerOpen(!navDrawerOpen)
 };

 const toggleCartDrawer = () => {
  setDrawerOpen(!drawerOpen);
 };

 return (
  <section>
   <nav className="container mx-auto flex items-center justify-between py-4 px-6">
    {/* Left - Logo */}
    <div>
     <Link href='/' className="text-2xl font-medium ">
     Rabbit
     </Link>
    </div>

    {/* Center - Navigation Links */}
    <div className="hidden md:flex space-x-6">
     <Link href='/collection' className="text-gray-700 hover:text-black text-sm font-medium uppercase" >
      Men
     </Link>

     <Link href='/women' className="text-gray-700 hover:text-black text-sm font-medium uppercase" >
      Women
     </Link>

     <Link href='/topwear' className="text-gray-700 hover:text-black text-sm font-medium uppercase" >
      Top Wear
     </Link>

     <Link href='/bottomwear' className="text-gray-700 hover:text-black text-sm font-medium uppercase" >
      Bottom Wear
     </Link>
    </div>
    
    {/* Right - Icons */}
    <div className="flex items-center space-x-4">
      <Link className="block bg-black px-2 py-2 rounded text-sm text-white" href={'/adminlayout'} >
      Admin
      </Link>
     <Link href={'/profile'} className="hover:text-black">
      <HiOutlineUser className="h-6 w-6 text-gray-700"/>
     </Link>

     <button onClick={toggleCartDrawer} className="relative hover:text-black">
      <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"/>
      <span className="absolute -top-1 bg-[#ea2e0e] text-xs rounded-full px-2 py-1">
       0
      </span>
     </button>

     {/* Search Icon */}
     <div className="overflow-hidden">
      <SearchBar />
     </div>

     <button onClick={toggleNavDrawer} className="md:hidden">
      <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
     </button>
    </div>
   </nav>

   <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

   {/* Mobile navigation */}
   <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
   <div className="flex justify-end p-4">
    <button onClick={toggleNavDrawer}>
     <IoMdClose className="h-6 w-6 text-gray-600"/>
    </button>
   </div>
   <div className="p-4">
     <h2 className="text-xl font-semibold mb-4 text-gray-600">Menu</h2>
     <nav className="space-y-4">
      <Link href='#' onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
      Men
      </Link>

      <Link href='#' onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
      Women
      </Link>

      <Link href='#' onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
      Top Wear
      </Link>

      <Link href='#' onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
      Bottom Wear
      </Link>
     </nav>
    </div>
   </div>
  </section>
 );
};

export default NavBar;