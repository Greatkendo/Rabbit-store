import Footer from "../common/footer";
import Header from "../common/header";
import GenderCollectionSection from "../products/gendercollectionsection";
import NewArrivals from "../products/newarrivals";
import ProductDetails from "../products/productdetails";
import Hero from "./hero";

function UserLayout () {
 return (
  <>
  {/* Header */}
  <Header />
  {/* Main content */}
  <main>
   <Hero />
   <GenderCollectionSection />
   <NewArrivals />

   {/* best seller section */}
   <h2 className="text-3xl text-center font-bold mb-4 ">
    Best Seller
   </h2>
   <ProductDetails />
  </main>
  {/* Footer */}
  <Footer />
  </>
 );
};

export default UserLayout;