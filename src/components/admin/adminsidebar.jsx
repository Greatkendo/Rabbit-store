'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBoxOpen, FaClipboardList, FaSignInAlt, FaStore, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

function NavLink({ href, children }) {
 const pathname = usePathname();
 const isActive = pathname === href;

 const baseClass = "py-3 px-4 rounded flex items-center space-x-2";
 const activeClass = "bg-gray-700 text-white";
 const inactiveClass = "text-gray-300 hover:bg-gray-700 hover:text-white";

 return (
  <Link href={href} className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}>
   {children}
  </Link>
 );
}


function AdminSidebar () {
 const router = useRouter();
 const handleLogout = () => {
  router.push('/');
 }
 return(
  <section className="p-6">
   <div className="mb-6">
    <Link className="text-2xl font-medium" href={'/adminlayout'}>
    Rabbit
    </Link>
   </div>

   <h2 className="text-xl font-medium mb-6 text-center">
    Admin Dashboard
   </h2>

   <nav className="flex flex-col space-y-2">
    <NavLink href={'/adminlayout/users'} className={({isActive}) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
     <FaUser />
     <span>Users</span>
    </NavLink>

    <NavLink href={'/adminlayout/products'} className={({isActive}) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
     <FaBoxOpen />
     <span>Products</span>
    </NavLink>

    <NavLink href={'/adminlayout/orders'} className={({isActive}) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
     <FaClipboardList />
     <span>Orders</span>
    </NavLink>

    <NavLink href={'/adminlayout/shop'} className={({isActive}) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
     <FaStore />
     <span>Shop</span>
    </NavLink>
   </nav>

   <div className="mt-6">
    <button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"> 
     <FaSignInAlt />
    <span>Logout</span>
    </button>
   </div>
  </section>
 );
};

export default AdminSidebar;