'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function FilterSideBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy", "purple", "magenta"];
  const size = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
  const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: parseInt(params.minPrice) || 0,
      maxPrice: parseInt(params.maxPrice) || 100,
    });

    setPriceRange([0, parseInt(params.maxPrice) || 100]);
  }, [searchParams]);

  // const handleCategoryChange = (category) => {
  //   const newParams = new URLSearchParams(searchParams.toString());
  //   newParams.set("category", category);
  //   router.push(`${pathname}?${newParams.toString()}`);
  // };

  const handleFilterChange = (e) => {
    const {name, value, checked, type} = e.target;
    let newFilters = {...filter};
    if (type === "checkbox"){
      if(checked){
        newFilters[name] = [...(newFilters[name] || []), value];
      } else{
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else{
      newFilters[name] = value
    }
    setFilter(newFilters); 
    updateURLParams(newFilters)
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    //{catergory: "top wear", size: ["XS", "S"]}
    Object.keys(newFilters).forEach((key) => {
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
        params.append(key, newFilters[key].join(","));
      } else if(newFilters[key]){
        params.append(key, newFilters[key]);
      }
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice])
    const newFilters = {...FilterSideBar, minPrice: 0, maxPrice: newPrice};
    setFilter(filter);
    updateURLParams(newFilters)
  }

  return (
    <section className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filter.category === category}
              // onChange={() => handleCategoryChange(category)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label className="text-sm text-gray-700">{category}</label>
          </div>
        ))}
      </div>

        {/* Gender Filter */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input type="radio" name="gender" value={gender} checked={filter.gender === gender}
            // onChange={() => handleCategoryChange(gender)} 
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" onChange={handleFilterChange}/>
            <label className="text-sm text-gray-700">{gender}</label>
          </div>
        ))}
        </div>

      {/* color filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button key={color} name="color" value={color} onClick={handleFilterChange} className={`w-8 h-8 rounded-full border-gray-900 cursor-pointer transition hover:scale-105 ${filter.color === color ? "ring-2 ring-blue-500" : ""}`} style={{backgroundColor: color.toLowerCase()}}></button>
          ))}
        </div>
      </div>

      {/* size filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {size.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input type="checkbox" name="size" value={size} checked={filter.size.includes(size)} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-r-gray-300"/>
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* material filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input type="checkbox" name="material" value={material} checked={filter.material.includes(material)} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-r-gray-300"/>
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* brand filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input type="checkbox" name="brand" value={brand} checked={filter.brand.includes(brand)} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-r-gray-300"/>
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price range filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input type="range" name="priceRange" max={100} value={priceRange[1]} onChange={handlePriceChange} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
        <div className="flex justify-between text-gray-800 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </section>
  );
}

export default FilterSideBar;
