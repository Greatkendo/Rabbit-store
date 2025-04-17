'use client'
import FilterSideBar from "@/components/products/filtersidebar";
import SortOptions from "@/components/products/sortoptions";
import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProductGrid from "@/components/products/productgrid";

function Collection () {
 const [products, setProducts] = useState([]);

 const sidebarRef = useRef(null);

 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
 };

 const handleClickOutside = (e) => {
  // close the sidebar if clicked out side
  if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
   setIsSidebarOpen(false);
  }
 }

 useEffect(() => {
  // Add Event Listener for click
  document.addEventListener("mousedown", handleClickOutside);
  // clean event listener
  return () => {
   document.removeEventListener("mousedown", handleClickOutside)
  };
 }, [])

 useEffect(() => {
  setTimeout(() => {
   const fetchProducts = [
    {
     _id: 1,
     name: "Product 1",
     price: 100,
     images: [
      {url: "https://picsum.photos/500/500?random=1"},
     ],
    },

    {
     _id: 2,
     name: "Product 2",
     price: 100,
     images: [
      {url: "https://picsum.photos/500/500?random=2"},
     ],
    },

    {
     _id: 3,
     name: "Product 3",
     price: 100,
     images: [
      {url: "https://picsum.photos/500/500?random=3"},
     ],
    },

    {
     _id: 4,
     name: "Product 4",
     price: 100,
     images: [
      {url: "https://picsum.photos/500/500?random=4"},
     ],
    },

    {
     _id: 5,
     name: "Product 5",
     price: 100,
     images: [
      {url: "https://picsum.photos/500/500?random=5"},
     ],
    },

    {
     _id: 6,
     name: "Product 6",
     price: 100,
     images: [
      {url: "https://picsum.photos/500/500?random=6"},
     ],
    },
   ]; setProducts(fetchProducts)
  }, 1000);
 }, [])
 return(
  <section className="flex flex-col lg:flex-row">
   {/* mobile filter button */}
   <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
    <FaFilter className="mr-2"/> Filters
   </button>

   {/* Filter sidbar */}
   <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
    <FilterSideBar />
   </div>

   <div className="grow p-4">
    <h2 className="text-2xl uppercase mb-4">
     All Collection
    </h2>
    {/* sort options */}
    <SortOptions />

    {/* product grid */}
    <ProductGrid products={products}/>
   </div>
  </section>
 );
};

export default Collection;