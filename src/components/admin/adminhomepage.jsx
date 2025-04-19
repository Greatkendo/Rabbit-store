import Link from "next/link";

function AdminHomePage () {
 const orders = [
  {
   _id: 123123,
   user: {
    name: "Kenneth Ugwu"
   },
   total: 110,
   status: "Processing"
  },

  {
   _id: 123124,
   user: {
    name: "Kenneth Ugwu"
   },
   total: 110,
   status: "Processing"
  },

  {
   _id: 123125,
   user: {
    name: "Kenneth Ugwu"
   },
   total: 110,
   status: "Processing"
  },

  {
   _id: 123126,
   user: {
    name: "Kenneth Ugwu"
   },
   total: 110,
   status: "Processing"
  },

  {
   _id: 123127,
   user: {
    name: "Kenneth Ugwu"
   },
   total: 110,
   status: "Processing"
  },

  {
   _id: 123128,
   user: {
    name: "Kenneth Ugwu"
   },
   total: 110,
   status: "Processing"
  },

  {
   _id: 123129,
   user: {
    name: "Kenneth Ugwu"
   },
   total: 110,
   status: "Processing"
  },

  {
   _id: 1231210,
   user: {
    name: "Kenneth Ugwu"
   },
   total: 110,
   status: "Processing"
  },
 ]
 return (
  <section className="max-w-7xl mx-auto p-6">
   <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-4 shadow rounded-lg">
     <h2 className="text-xl font-semibold">Revenue</h2>
     <p className="text-2xl">$10000</p>
    </div>

    <div className="p-4 shadow rounded-lg">
     <h2 className="text-xl font-semibold">Total Orders</h2>
     <p className="text-2xl">200</p>
     <Link href={"/admin/orders"} className="text-blue-500 hover:underline">
     Manage Orders
     </Link>
    </div>

    <div className="p-4 shadow rounded-lg">
     <h2 className="text-xl font-semibold">Total Products</h2>
     <p className="text-2xl">100</p>
     <Link href={"/admin/products"} className="text-blue-500 hover:underline">
     Manage Products
     </Link>
    </div>
   </div>

   <div className="mt-6">
    <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
    <div className="overflow-x-auto">
     <table className="min-w-full text-left text-gray-500">
      <thead className="bg-gray-100 text-xs uppercase text-gray-700">
       <tr>
        <th className="py-3 px-4">Order ID</th>
        <th className="py-3 px-4">User</th>
        <th className="py-3 px-4">Total Price</th>
        <th className="py-3 px-4">Status</th>
       </tr>
      </thead>

      <tbody>
       {
        orders.length > 0 ? (
         orders.map((order) => (
          <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
           <td className="p-4">{order._id}</td>
           <td className="p-4">{order.user.name}</td>
           <td className="p-4">{order.total}</td>
           <td className="p-4">{order.status}</td>
           <td className="p-4"></td>
          </tr>
         ))
        ) : (
         <tr>
          <td colSpan={4} className="p-4 text-center text-gray-500">
           No recent orders found.
          </td>
         </tr>
        )
       }
      </tbody>
     </table>
    </div>
   </div>
  </section>
 );
};

export default AdminHomePage;