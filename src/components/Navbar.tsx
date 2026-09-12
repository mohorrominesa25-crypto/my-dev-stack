import Logo from "../assets/logo-text.png"
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-between container mx-auto px-25 py-5 font-semibold text-[#475569]">
            <div>
          <img src={Logo} alt="" />  
        </div>
        
            <ul className="flex justify-between gap-6  ">
                <li className="text-pink-600"><a href="">Home</a></li>
          <li className="hover:text-pink-600"><a href="">Technologies</a></li>
          <li className="hover:text-pink-600"><a href="">Projects</a></li>
          <li className="hover:text-pink-600"><a href="">About</a></li>
          <li className="hover:text-pink-600"><a href="">Contact</a></li></ul>
        
        <div className="flex justify-between gap-5"><button>Sign In</button>
          <button className="bg-pink-600 px-3 rounded-[10px] text-white">Sign Up</button></div>
        </nav>

    );
};

export default Navbar;