// 'use client'
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// function NewArrivals () {
//  const scrollRef = useRef(null);
//  const [isDragging, setIsDragging] = useState(false);
//  const [startX, setStartX] = useState(0);
//  const [scrollLeft, setScrollLeft] = useState(false);
//  const [canScrollRight, setCanScrollRight] = useState(true);
//  const [canScrollLeft, setCanScrollLeft] = useState(false);
//  const newArrivals = [
//   {
//    _id: "1",
//   name: "Stylish Jacket",
//   price: 120,
//   images: [
//    {
//     url: 'https://picsum.photos/500/500?random=1',
//     alt: "Stylish Jacket",
//    },
//   ],
//   },

//   {
//    _id: "2",
//   name: "Stylish Jacket",
//   price: 120,
//   images: [
//    {
//     url: 'https://picsum.photos/500/500?random=2',
//     alt: "Stylish Jacket",
//    }
//   ],
//   },

//   {
//    _id: "3",
//   name: "Stylish Jacket",
//   price: 120,
//   images: [
//    {
//     url: 'https://picsum.photos/500/500?random=3',
//     alt: "Stylish Jacket",
//    }
//   ],
//   },

//   {
//    _id: "4",
//   name: "Stylish Jacket",
//   price: 120,
//   images: [
//    {
//     url: 'https://picsum.photos/500/500?random=4',
//     alt: "Stylish Jacket",
//    }
//   ],
//   },

//   {
//    _id: "5",
//   name: "Stylish Jacket",
//   price: 120,
//   images: [
//    {
//     url: 'https://picsum.photos/500/500?random=5',
//     alt: "Stylish Jacket",
//    }
//   ],
//   },

//   {
//    _id: "6",
//   name: "Stylish Jacket",
//   price: 120,
//   images: [
//    {
//     url: 'https://picsum.photos/500/500?random=6',
//     alt: "Stylish Jacket",
//    }
//   ],
//   },

//   {
//    _id: "7",
//   name: "Stylish Jacket",
//   price: 120,
//   images: [
//    {
//     url: 'https://picsum.photos/500/500?random=7',
//     alt: "Stylish Jacket",
//    }
//   ],
//   },

//   {
//    _id: "8",
//   name: "Stylish Jacket",
//   price: 120,
//   images: [
//    {
//     url: 'https://picsum.photos/500/500?random=8',
//     alt: "Stylish Jacket",
//    }
//   ],
//   },
//  ];

//  const scroll = (direction) => {
//   const scrollAmount = direction === "left ? -300 : 300";
//   scrollRef.current.scrollBy({left: scrollAmount, behaviour: "Smooth"})
//  }

//  // Update scroll buttons
//  const updateScrollButtons = () => {
//   const container = scrollRef.current;

//   if (container)  {
//    const leftScroll = container.scrollLeft;
//    const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

//    setCanScrollLeft(scrollLeft > 0);
//    setCanScrollRight(rightScrollable);
//   }
//   console.log({
//    scrollLeft: container.scrollLeft,
//    clientWidth: container.clientWidth,
//    containerScrollWidth: container.containerScrollWidth,
//   });
  
//  }

//  useEffect(() => {
//   const container = scrollRef.current;
//   if(container) {
//    container.addEventListener("scroll", updateScrollButtons)
//   }
//  })
//  return(
//   <section>
//    <div className="container mx-auto text-center mb-10 relative">
//     <h2 className="text-3xl font-bold mb-4">
//      Explore New Arrivals
//     </h2>
    
//     <p className="text-lg text-gray-600 mb-8">
//      Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion
//     </p>

//     {/* Scroll buttons */}
//     <div className="absolute right-0 bottom-[-30px] flex space-x-2">
//      <button onClick={() => scroll(left)} disabled={!canScrollLeft} className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
//       <FiChevronLeft className="text-2xl"/>
//      </button>

//      <button className="p-2 rounded border bg-white text-black">
//       <FiChevronRight className="text-2xl cursor-pointer"/>
//      </button>
//     </div>
//    </div>

//    {/* scrollable content */}
//    <div className="container mx-auto overflow-x-scroll flex space-x-6 relative">
//   {newArrivals.map((product) => {
//     return (
//       <div ref={scrollLeft} key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
//         <img
//           src={product.images[0]?.url}
//           alt={product.images[0]?.altText || product.name}
//           className="w-full h-[500px] object-cover rounded-lg"
//         />

//         <div className="absolute bottom-0 left-0 right-0 opacity-50 backdrop-blur-md text-white p4 rounded-b-lg">
//         <Link href={`/product/${product._id}`} className="block p-2">
//         <h4 className="font-medium">
//          {product.name}
//         </h4>
//         <p className="mt-1">
//          $ {product.price}
//         </p>
//         </Link>
//         </div>
//       </div>
//     );
//   })}
// </div>

//   </section>
//  );
// };

// export default NewArrivals;

'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function NewArrivals() {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
     {
   _id: "1",
  name: "Stylish Jacket",
  price: 120,
  images: [
   {
    url: 'https://picsum.photos/500/500?random=1',
    alt: "Stylish Jacket",
   },
  ],
  },

  {
   _id: "2",
  name: "Stylish Jacket",
  price: 120,
  images: [
   {
    url: 'https://picsum.photos/500/500?random=2',
    alt: "Stylish Jacket",
   }
  ],
  },

  {
   _id: "3",
  name: "Stylish Jacket",
  price: 120,
  images: [
   {
    url: 'https://picsum.photos/500/500?random=3',
    alt: "Stylish Jacket",
   }
  ],
  },

  {
   _id: "4",
  name: "Stylish Jacket",
  price: 120,
  images: [
   {
    url: 'https://picsum.photos/500/500?random=4',
    alt: "Stylish Jacket",
   }
  ],
  },

  {
   _id: "5",
  name: "Stylish Jacket",
  price: 120,
  images: [
   {
    url: 'https://picsum.photos/500/500?random=5',
    alt: "Stylish Jacket",
   }
  ],
  },

  {
   _id: "6",
  name: "Stylish Jacket",
  price: 120,
  images: [
   {
    url: 'https://picsum.photos/500/500?random=6',
    alt: "Stylish Jacket",
   }
  ],
  },

  {
   _id: "7",
  name: "Stylish Jacket",
  price: 120,
  images: [
   {
    url: 'https://picsum.photos/500/500?random=7',
    alt: "Stylish Jacket",
   }
  ],
  },

  {
   _id: "8",
  name: "Stylish Jacket",
  price: 120,
  images: [
   {
    url: 'https://picsum.photos/500/500?random=8',
    alt: "Stylish Jacket",
   }
  ],
  },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // check scroll state on mount
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto text-center mb-15 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>

        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion
        </p>

        {/* Scroll buttons */}
        <div className="absolute right-0 bottom-[-50px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div ref={scrollRef} className="container mx-auto overflow-x-scroll flex space-x-6 relative">
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.alt || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link href={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
