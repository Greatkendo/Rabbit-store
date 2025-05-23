function ProductManagement () {
 const products = [
  {
   _id: 123123,
   name: 'shirt',
   price: 100,
   sku: "1234567890"
  }
 ]
 return(
  <section className="max-w-7xl mx-auto p-6">
   <h2 className="text-2xl font-bold mb-6">
    Product Management
   </h2>
   <div className="overflow-x-auto shadow-md sm:rounded-lg">
    <table className="min-w-full text-left">
     <thead className="bg-gray-100 text-xs uppercase text-gray-700">
      <tr>
       <th className="py-3 px-4">Name</th>
       <th className="py-3 px-4">Price</th>
       <th className="py-3 px-4">SKU</th>
       <th className="py-3 px-4">Actions</th>
      </tr>
     </thead>

     <tbody>
      {products.length > 0 ? (
       products.map((product) => (
        <tr key={product._id} className="border-b hover:bg-gray-50 cursor-pointer">
         <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
          {product.name}
         </td>
        </tr>
       ))
      ) : (
       <tr></tr>
      )}
     </tbody>
    </table>
   </div>
  </section>
 );
};

export default ProductManagement;