import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data";
import { useState } from "react";
import { Menu } from "lucide-react";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link
            to="/"
            className="self-center text-2xl font-extrabold whitespace-nowrap text-black font-sans">
            <img src="/assets/logo.png"/>
          </Link>
        </a>
        <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
          <ul className="flex flex-col text-black mt-4 font-medium font-sans md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            
              <li>
                <NavLink to={'/'}>Ana Səhifə</NavLink>
              </li>
              <li>
                <NavLink to={'/haqqimizda'}>Biz Kimik</NavLink>
              </li>
              <li>
                <NavLink to={'/kurslar'}>Kurslar</NavLink>
              </li>
              <li>
                <NavLink to={'/dersler'}>Nümunə Dərslər</NavLink>
              </li>
              <li>
                <NavLink to={'/elaqe'}>Əlaqə</NavLink>
              </li>
            
          </ul>
        </div>

        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}>
          <Menu />
        </button>
      </div>
      <div
        id="mobile-menu" style={{position:"absolute"}}
        className={`items-center justify-between w-full md:hidden ${
          isOpen ? "flex" : "hidden"
        } bg-white shadow-md`}>
        <ul className="flex flex-col gap-y-3 py-3 text-black mt-4 font-medium font-sans">
           
            <li >
              <NavLink to={'/'} className="py-2 px-4">
               Ana Səhifə
              </NavLink>
            </li>
            <li >
              <NavLink to={'/haqqimizda'} className="py-2 px-4">
              Biz Kimik
              </NavLink>
            </li>
            <li >
              <NavLink to={'/kurslar'} className="py-2 px-4">
              Kurslar
              </NavLink>
            </li>
            <li >
              <NavLink to={'/dersler'} className="py-2 px-4">
               Nümunə Dərslər
              </NavLink>
            </li>
            <li >
              <NavLink to={'/elaqe'} className="py-2 px-4">
              Əlaqə
              </NavLink>
            </li>
     
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
