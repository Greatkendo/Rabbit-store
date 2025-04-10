import Link from "next/link";

function GenderCollectionSection () {
 return(
  <section className="py-16 px-4 lg:px-0">
   <div className="container mx-auto flex flex-col md:flex-row gap-8">
    {/* Women's Collection */}
    <div className="relative flex-1">
     <img src="/woman.jpg" alt="women's collection" className="w-full h-[700px] object-cover" />
     <div className="absolute bottom-8 left-8 bg-white opacity-90 p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
       Women's Collection
      </h2>
      <Link href={'/collections/all?gender=women'} className="text-gray-900 underline">
      Shop Now
      </Link>
     </div>
    </div>

    {/* Men's Collection */}
     <div className="relative flex-1">
     <img src="/man.jpg" alt="men's collection" className="w-full h-[700px] object-cover" />
     <div className="absolute bottom-8 left-8 bg-white opacity-90 p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
       Men's Collection
      </h2>
      <Link href={'/collections/all?gender=men'} className="text-gray-900 underline">
      Shop Now
      </Link>
     </div>
    </div>
   </div>
  </section>
 );
};

export default GenderCollectionSection;