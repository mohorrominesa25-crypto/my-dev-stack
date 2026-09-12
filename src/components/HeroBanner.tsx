import Banner from "../assets/banner-stack.png"
const HeroBanner = () => {
    return (
        <section className="container mx-auto px-25 grid grid-cols-2 items-center gap-35 ">
            <div className=" py-10 space-y-6">
            <h2 className="text-5xl font-bold">Build Your Ideal  <br /><span className="bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h2>
            <p className="text-[#475569] text-[20px]">Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.</p>
             <span className="flex gap-4">
                <button className="bg-linear-to-r from-orange-500 to-pink-600 border p-1.5 text-white font-semibold border-gray-50 rounded-[5px]">Explore Technologies </button> 
             <button className="border rounded-[5px] px-6 border-gray-50">Learn More</button>
                </span>  
        </div>

        <div>
            <img src={Banner} alt="" />
        </div>
        </section>
    );
};

export default HeroBanner;