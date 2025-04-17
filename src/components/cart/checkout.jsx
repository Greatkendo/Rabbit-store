'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import PaypalButton from "./paypalbutton";
const cart = {
 products: [
  {
   name: "Stylish Jacket",
   size: "M",
   color: "Black",
   price: 120,
   image: "https://picsum.photos/150?random=1",
  },
  {
   name: "Casual Sneakers",
   size: "42",
   color: "White",
   price: 75,
   image: "https://picsum.photos/150?random=2",
  },
 ],
 totalPrice: 195
};

function CheckOut () {
 const router = useRouter();
 const [checkoutId, setCheckoutId] = useState(null);
 const [shippingAddress, setShippingAddress] = useState({
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  postalCode: "",
  country: "",
  phone: "",
 });

 const handleCreateCheckout = (e) => {
  e.preventDefault();
  setCheckoutId(123);
 };

 const handlePaymentSuccess = (details) => {
  console.log("Payment Successful", details);
  router.push("/orderconfirmation")
 }
 return (
  <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
  {/* left section */}
  <div className="bg-white rounded-lg p-6">
   <h2 className="text-2xl uppercase mb-6">
    Checkout
   </h2>

   <form onSubmit={handleCreateCheckout}>
    <h3 className="text-lg mb-4">
     Contact Details
    </h3>
    <div className="mb-4">
     <label className="block text-gray-700">Email</label>
     <input type="email" name="email" value="user@email.com" className="w-full p-2 border rounded" disabled />
    </div>

    <h3 className="text-lg mb-4">Delivery</h3>

    <div className="mb-4 grid grid-cols-2 gap-4">
     <div>
      <label className="block text-gray-700">First Name</label>
      <input type="text" name="firstName" className="w-full p-2 border rounded" required value={shippingAddress.firstName} onChange={(e) => setShippingAddress({
       ...shippingAddress,
       firstName: e.target.value,
      })} />
     </div>

     <div>
      <label className="block text-gray-700">Last Name</label>
      <input type="text" name="lastName" className="w-full p-2 border rounded" required value={shippingAddress.lastName} onChange={(e) => setShippingAddress({
       ...shippingAddress,
       lastName: e.target.value,
      })} />
     </div>
    </div>

    <div className="mb-4">
     <label className="block text-gray-700">
      Address
     </label>
     <input type="text" name="address" className="w-full p-2 border rounded" value={shippingAddress.address} onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})} required/>
    </div>

    <div className="mb-4 grid grid-cols-2 gap-4">
     <div>
      <label className="block text-gray-700">City</label>
      <input type="text" name="city" className="w-full p-2 border rounded" required value={shippingAddress.city} onChange={(e) => setShippingAddress({
       ...shippingAddress,
       city: e.target.value,
      })} />
     </div>

     <div>
      <label className="block text-gray-700">Postal Code</label>
      <input type="text" name="postalcode" className="w-full p-2 border rounded" required value={shippingAddress.postalCode} onChange={(e) => setShippingAddress({
       ...shippingAddress,
       postalCode: e.target.value,
      })} />
     </div>
    </div>

    <div className="mb-4">
     <label className="block text-gray-700">
      Country
     </label>
     <input type="text" name="country" className="w-full p-2 border rounded" value={shippingAddress.country} onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})} required/>
    </div>

    <div className="mb-4">
     <label className="block text-gray-700">
      Phone Number
     </label>
     <input type="tel" name="phoneNumber" className="w-full p-2 border rounded" value={shippingAddress.phone} onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})} required/>
    </div>

    <div className="mt-6">
     {!checkoutId ? (
      <button type="submit" className="w-full bg-black text-white py-3 rounded">Continue to Payment</button>
     ) : (
      <div>
       <h3 className="text-lg mb-4">Pay with Paypal</h3>
       {/* Paypaln Component */}
       <PaypalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err) => alert("Payment failed. Try again.")} />
      </div>
     )}
    </div>
   </form>
  </div>

  {/* Right section */}
  <div className="bg-gray-50 p-6 rounded-lg">
   <h3 className="text-lg mb-4">Order Summary</h3>
   <div className="border-t py-4 mb-4">
    {
     cart.products.map((product, index) => (
      <div className="flex items-start justify-between py-2 border-b" key={index}>
       <div className="flex items-start">
       <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4"/>
       <div>
        <h3 className="text-md">
         {product.name}
        </h3>
        <p className="text-gray-500">Size: {product.size}</p>
        <p className="text-gray-500">Color: {product.color}</p>
       </div>
       </div>
       <p className="text-xl">${product.price?.toLocaleString()}</p>
      </div>
     ))
    }
   </div>
   <div className="flex justify-between items-center text-lg mb-4">
    <p>Subtotal</p>
    <p>${cart.totalPrice?.toLocaleString()}</p>
   </div>

   <div className="flex justify-between items-center text-lg">
    <p>Shipping</p>
    <p>Free</p>
   </div>

   <div className="flex justify-between items-center text-lg mb-4 border-t pt-4">
    <p>Total</p>
    <p>${cart.totalPrice?.toLocaleString()}</p>
   </div>
  </div>
  </section>
 );
};

export default CheckOut;