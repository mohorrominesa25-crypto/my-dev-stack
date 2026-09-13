import { FaRegCopyright } from "react-icons/fa";
import footerImg from "../assets/logo-text.png"
const Footer = () => {

    return (
        
        <footer className="mt-5 bg-linear-to-br from-orange-100 via-pink-100 to-orange-200 container mx-auto px-25 py-5">
            <section className=" grid grid-cols-4 gap-5" >

            <div className="grid grid-cols-1 space-y-3 pr-20">
                <img src={footerImg} alt="" className="h-8 w-27" />
                <h2 className="text-[15px] text-slate-500  font-thin">Curated tools, technologies, and resources for developers building
                    modern software.</h2>
                    <span>
                        <ul  className=" grid grid-cols-3 gap-1 font-semibold text-[14px]">
                            <li><a href="">Github</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">LinkedIn</a></li>
                        </ul>
                    </span>
            </div>

            <div className="grid grid-cols-1 ">
                <h2 className="space-y-2 font-semibold text-[18px]">Product</h2>
                <ul className="space-y-1 text-slate-500 font-thin">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href=""> Project</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1">
                <h2 className="space-y-2 font-semibold text-[18px]">Company</h2>
                <ul className="space-y-1 text-slate-500 font-thin" >
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href=""> Careers</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 ">
                <h2 className="space-y-2 font-semibold text-[18px]">Legal</h2>
                <ul className="space-y-1 text-slate-500 font-thin">
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms Of Service</a></li>
                    
                </ul>
            </div>
        </section>

        <hr className="  mt-5 w-full border-slate-300" />

        <section className="  flex justify-between">
        <div className="flex gap-2">
            <FaRegCopyright className="text-slate-400 mt-1"/>
            <h2 className="text-slate-400 font-thin">2026 DevStack All Rights Reserved</h2>
        </div>

        <div className="flex gap-4 text-slate-400 font-thin">
            <h2>Privacy </h2>
            <h2>Terms</h2>
        </div>
        </section>
        </footer>
    );
};

export default Footer;