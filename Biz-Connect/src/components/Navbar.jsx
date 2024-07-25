import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from 'react-router-dom';
const Navbar = () => {
 
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg py-3 ">
      <div className="container  mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-1">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          <span className="text-xl tracking-tight dark:text-white">Biz-Connect</span>
          </div>
          
          <div className="flex justify-center ml-4"></div>
          <ul className="hidden lg:flex space-x-10  "style={{ marginRight: '-80px' }}>
            {navItems.map((item, index) => (
              <li key={index}>
               <Link to={item.to} className="text-lg dark:text-white">
               <i className={item.icon  }></i> 
               {item.label}

               </Link>

              </li>
            ))}
            <ThemeToggle/>
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
         </div>
          
           
          
         
        </div>
{mobileDrawerOpen && (
          <div className="  fixed right-0 z-20  flex justify-center items-center bg-white dark:bg-gray-800">
            <ul className="flex flex-row space-x-4 p-5  ">
              {navItems.map((item, index) => (
                <li key={index}>
                <Link to={item.to} className="text-lg dark:text-white">
                <i className={item.icon  }></i> 
                {item.label}
 
                </Link>
 
               </li>
              ))}
            </ul>
           
          </div>
        )}


         
        
      
    </nav>
  );
};

export default Navbar;