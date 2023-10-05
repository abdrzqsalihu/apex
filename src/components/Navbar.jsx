import { useState } from 'react';
import { logo } from '../assets';
import { navLinks } from '../constant/ContentConstants';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 bg-white w-full z-50 px-5'>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="container mx-auto lg:w-[1296px] lg:h-[50px] flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className='w-[90px] h-[37px]'
            />
          </div>

          {/* Hamburger icon for mobile */}
          <div className="lg:hidden z-20">
            <button
              onClick={toggleMenu}
              className="text-[#1B1C20] focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {isMenuOpen && (
              <div className="fixed top-[4.3rem] left-0 w-full bg-white shadow-lg px-2">
                <ul className="space-y-2 p-2">
                  {navLinks.map((nav) => (
                    <li 
                      key={nav.id}
                      className={`cursor-pointer p-1 font-primary font-medium leading-6 text-[#1b1c20] hover:bg-[#e7e6e6] mr-0}`}
                    >
                    <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                  </li>
                  ))}
                  
                </ul>
              </div>
            )}
          </div>

          {/* Navigation links */}
          <div className="hidden lg:flex space-x-6">
              <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                  {navLinks.map((nav, index) => (
                      <li 
                      key={nav.id}
                      className={`font-primary font-medium leading-6 text-[#1b1c20] hover:text-primary hover:font-semibold ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                      >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                      </li>
                  ))}    
              </ul>
          </div>

          {/* Login button on the right */}
          <div className="hidden lg:flex gap-[34px] w-[241px]">
              <button className="text-[#1b1c20] font-primary font-medium leading-[1.875rem] hover:text-primary hover:font-semibold">
                Login
              </button>
              <button className="flex-shrink-0 w-[167px] h-[50px] rounded-lg bg-[#fb8e0b] text-white font-primary font-medium">
                Get Started Free
              </button>  
          </div>
        </div>
      </nav>
    </header>
    
  );
}

export default Navbar;
