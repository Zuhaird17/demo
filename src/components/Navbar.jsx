// Navbar.jsx
import { useState, useRef } from 'react';
import UserIcon from '../assets/Shape.svg';
import DownArrowIcon from '../assets/Path.svg';
import CartIcon from '../assets/icon_cart.svg';
import CloseIcon from '../assets/CloseIcon.svg';
import SearchIcon from '../assets/Search.svg';
import Container from './Container';

const Navbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const profileDropdownRef = useRef(null);
  const cartRef = useRef(null);

  return (
    <div className="max-w-[1920px] mx-auto w-full bg-gray-100 relative">
      <Container>
        <nav className="w-full px-6 py-4 flex items-center justify-between bg-gray-100">
          {/* Shop by Category label (non-interactive placeholder) */}
          <div className="text-gray-700 font-medium">Shop by Category</div>

          {/* Desktop Search Bar */}
          <div className="relative flex-1 mx-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 bg-white rounded-md text-sm focus:outline-none"
            />
            <img
              src={SearchIcon}
              alt="Search"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center gap-6">
            <button className="text-gray-700 hover:text-black transition">
              <img src={UserIcon} alt="User" className="w-5 h-5" />
            </button>
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => setIsProfileDropdownOpen((prev) => !prev)}
                className="flex items-center text-gray-700 hover:text-black transition"
              >
                <img src={DownArrowIcon} alt="Dropdown" className="w-4 h-4 ml-2" />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-30">
                  <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Account
                  </button>
                  <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200">
                    Log Out
                  </button>
                </div>
              )}
            </div>

            <div className="relative" ref={cartRef}>
              <button
                id="cart-icon"
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-black transition"
              >
                <img src={CartIcon} alt="Cart" className="w-5 h-5" />
              </button>
              {isCartOpen && (
                <div className="absolute top-full right-0 mt-4 w-80 rounded-md shadow-xl z-20 bg-white">
                  <div className="p-4 flex items-start relative">
                    <div className="w-16 h-16 bg-gray-200 rounded-md mr-4" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-800">
                        Product Name
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">$44.00</p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-black"
                    >
                      <img src={CloseIcon} alt="Close" className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="bg-gray-50 p-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-800 mb-4">
                      Subtotal: $44.00
                    </p>
                    <div className="flex flex-col gap-2">
                      <button className="w-full border border-gray-700 text-gray-800 px-4 py-2 text-sm rounded hover:bg-gray-700 hover:text-white transition">
                        View Cart
                      </button>
                      <button className="w-full border border-black text-black px-4 py-2 text-sm rounded hover:bg-black hover:text-white transition">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
