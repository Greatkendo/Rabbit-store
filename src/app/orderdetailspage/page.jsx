'use client'
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function OrderDetailPage () {
 const {id} = useParams();
 const [orderDetails, setOrderDetails] = useState(null);
 useEffect(() => {
  const mockOrderDetails = {
   _id: id,
   createdAt: new Date(),
   isPaid: true,
   isDelivered: false,
   paymentMethod: "PayPal",
   shippingMethod: "Standard",
   shippingAddress: {city: "New York", country: "USA"},
  orderItems: [
   {
    producId: "1",
    name: "Jacket",
    price: 120,
    quantity: 1,
    image: "https://picsum.photos/150?random=1",
   },

   {
    producId: "2",
    name: "Shirt",
    price: 150,
    quantity: 2,
    image: "https://picsum.photos/150?random=2",
   },
  ],
  };
  setOrderDetails(mockOrderDetails)
 }, [id]);
 return (
  <section className="max-w-7xl mx-auto sm:p-6">
   <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
   {!orderDetails ? <p>No Order details found</p> : <div className="p-4 sm:p-6 rounded-lg border">
    {/* Order info */}
    <div className="flex flex-col sm:flex-row justify-between mb-8">
     <div>
      <h3 className="text-lg md:text-xl font-semibold">
       Order ID: #{orderDetails._id}
      </h3>

      <p className="text-gray-600">
       {new Date(orderDetails.createdAt).toLocaleDateString()}
      </p>
     </div>

     <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
      <span className={`${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>
       {orderDetails.isPaid ? "Approved" : "Pending..."}
      </span>

      <span className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>
       {orderDetails.isDelivered ? "Delivered" : "Pending Delivery..."}
      </span>
     </div>
    </div>

    {/* customer payment, shipping info */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
     <div>
      <h4 className="text-lg font-semibold mb-2">
       Payment Info
      </h4>
      <p>Payment Method: {orderDetails.paymentMethod}</p>
      <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
     </div>

     <div>
      <h4 className="text-lg font-semibold mb-2">
       Shipping Info
      </h4>
      <p>Shipping Method: {orderDetails.shippingMethod}</p>
      <p>Address: {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}</p>
     </div>
    </div>

    {/* Product list */}
    <div className="overflow-x-auto">
     <h4 className="text-lg font-semibold mb-4">
      Products
     </h4>
     <table className="min-w-full text-gray-600 mb-4 table-auto">
      <thead className="bg-gray-100 text-left">
       <tr>
        <th className="py-3 px-4">Name</th>
        <th className="py-3 px-4">Unit Price</th>
        <th className="py-3 px-4">Quantity</th>
        <th className="py-3 px-4">Total</th>
       </tr>
      </thead>
      <tbody>
       {orderDetails.orderItems.map((item) => (
        <tr key={item.producId} className="border-b">
         <td className="py-3 px-4 flex items-center">
          <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg mr-4"/>
          <Link href={`/product/${item.productId}`} className="text-blue-500 hover:underline">
          {item.name}
          </Link>
         </td>
         <td className="py-3 px-4">${item.price}</td>
         <td className="py-3 px-4">${item.quantity}</td>
         <td className="py-3 px-4">${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>

    {/* Back to Orders Link */}
    <Link href={"/myorder"} className="textblue500 hover:underline">
    Back to Orders
    </Link>
   </div> 
   }
  </section>
 );
};

export default OrderDetailPage;