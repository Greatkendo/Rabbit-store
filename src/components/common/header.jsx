import TopBar from "../layout/topbar";
import NavBar from "./navbar";

function Header () {
 return(
  <header className="border-b border-gray-200">
   {/* Topbar */}
   <TopBar />
   {/* Navbar */}
   <NavBar />
   {/* Cart Drawer */}
  </header>
 );
};

export default Header;