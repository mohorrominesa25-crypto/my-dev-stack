import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 container mx-auto px-5 md:px-25 py-5 font-semibold text-[#475569]">

      
      <div className="flex items-center justify-between md:hidden">
        
        
        <button className="text-xl">
          <FaBars />
        </button>

        
        <div>
          <img src={Logo} alt="Logo" className="w-24" />
        </div>

        
        <div className="flex gap-2">
          <button className="hover:scale-105">
            Sign In
          </button>

          <button className="hover:scale-105 bg-pink-600 px-3 py-2 rounded-[10px] text-white">
            Sign Up
          </button>
        </div>

      </div>


      
      <div className="hidden md:flex items-center justify-between">

        
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        
        <ul className="flex gap-6">
          <li className="text-pink-600">
            <a href="">Home</a>
          </li>

          <li className="hover:text-pink-600">
            <a href="">Technologies</a>
          </li>

          <li className="hover:text-pink-600">
            <a href="">Projects</a>
          </li>

          <li className="hover:text-pink-600">
            <a href="">About</a>
          </li>

          <li className="hover:text-pink-600">
            <a href="">Contact</a>
          </li>
        </ul>

        
        <div className="flex gap-5">
          <button className="hover:scale-105">
            Sign In
          </button>

          <button className="hover:scale-105 bg-pink-600 px-3.5 py-2 rounded-[10px] text-white">
            Sign Up
          </button>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;