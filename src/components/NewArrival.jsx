import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import {
  img1, img2, img3, img4, img5, img6, img7, img8
} from '../assets/Index';

import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import wishIcon from '../assets/wishlist-icon.svg';
import compareIcon from '../assets/compare-icon.svg';
import cartIcon from '../assets/icon_cart.svg';

import special1 from '../assets/special1.svg';
import special2 from '../assets/special2.svg';
import special3 from '../assets/special3.svg';
import special4 from '../assets/special4.svg';

import Container from './Container';

export default function NewArrival() {
  const [products, setProducts] = useState([]);  // State to store fetched products
  const scrollRef = useRef(null);
  const cardWidth = 300;

  // Fetch products from a fake REST API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products'); 
        setProducts(response.data);  // Set products from the API response
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="max-w-[1920px] mx-auto w-full bg-white">
      <Container>
        <div className="w-full px-12 py-10 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">New Arrival</h2>
          </div>
          <div className="relative">
            <button
  onClick={() => scroll('left')}
  className="absolute left-0 top-[150px] -translate-y-2/2 bg-white shadow-md p-2 rounded-full z-10"
>
  <img src={leftArrow} alt="Left" className="w-8 h-8" />
</button>

<button
  onClick={() => scroll('right')}
  className="absolute right-0 top-[150px] -translate-y-2/2 bg-white shadow-md p-2 rounded-full z-10"
>
  <img src={rightArrow} alt="Right" className="w-8 h-8" />
</button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 scroll-smooth"
            >
              {products.map((product) => (
                <div key={product.id} className="w-[280px] flex-shrink-0 group">
                  <div className="relative">
                    <img
                      src={product.image || img1}  // Use the product image, or fallback to img1 if unavailable
                      alt={product.title}
                      className="rounded-md object-cover w-full h-[250px] bg-white"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-end pr-4 space-y-2 text-gray-600">
                      <div className="flex items-center gap-2 hover:text-gray-800 text-sm cursor-pointer">
                        <span>Add to Wish List</span>
                        <img src={wishIcon} alt="Wish" className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2 hover:text-gray-800 text-sm cursor-pointer">
                        <span>Compare</span>
                        <img src={compareIcon} alt="Compare" className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2 hover:text-gray-800 text-sm cursor-pointer">
                        <span>Add to Cart</span>
                        <img src={cartIcon} alt="Cart" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 px-1">
                    <span className="text-lg font-medium text-gray-800">
                      {product.title}
                    </span>
                    <span className="text-md text-gray-600">
                      ${product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Special Offers Section */}
      <div className="max-w-[1280px] mx-auto w-full bg-white">
        <div className="mx-auto px-4 sm:px-8 lg:px-16 py-10">
          <h2 className="text-[#262626] text-2xl sm:text-3xl lg:text-[39px] font-semibold mb-6">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[special1, special2, special3, special4].map((img, idx) => (
              <div
                key={idx}
                className="group bg-white shadow hover:shadow-lg rounded-md overflow-hidden relative transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={img}
                    alt={`Special Product ${idx + 1}`}
                    className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 font-semibold text-sm">
                    Special Product {idx + 1}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    ${[29.99, 49.99, 19.99, 39.99][idx]}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-2 transition duration-300">
                  <button className="bg-white text-black text-xs px-4 py-2 rounded hover:bg-black hover:text-white transition flex items-center gap-2">
                    <img src={cartIcon} alt="Cart" className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-1 rounded hover:bg-black hover:text-white transition flex items-center gap-2">
                    <img src={wishIcon} alt="Wishlist" className="w-4 h-4" />
                    <span>Wishlist</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
