'use client'
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function SortOptions () {
 const searchParams = useSearchParams();
 const router = useRouter();
 const pathname = usePathname();
 
 const handleSortChange = (e) => {
  const sortBy = e.target.value;
  const params = new URLSearchParams(searchParams.toString());
  router.push(`${pathname}?${params.toString()}`);
 }
 return(
  <section className="mb-4 flex items-center justify-end">
   <select name="sort" id="sort" onChange={handleSortChange} value={searchParams.get("sortBy") || ""} className="border p-2 rounded-md focus:outline-none">
    <option value="">Default</option>
    <option value="priceAsc">Price: Low to High</option>
    <option value="priceDesc">Price: High to Low</option>
    <option value="popularity">Popularity</option>
   </select>
  </section>
 );
};

export default SortOptions;