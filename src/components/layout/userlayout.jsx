import Footer from "../common/footer";
import Header from "../common/header";
import GenderCollectionSection from "../products/gendercollectionsection";
import NewArrivals from "../products/newarrivals";
import Hero from "./hero";

function UserLayout () {
 return (
  <>
  {/* Header */}
  <Header />
  {/* Main content */}
  <main className="container mx-auto py-4 px-6">
   <Hero />
   <GenderCollectionSection />
   <NewArrivals />
  </main>
  {/* Footer */}
  <Footer />
  </>
 );
};

export default UserLayout;