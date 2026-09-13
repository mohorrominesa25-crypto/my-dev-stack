import { use, useState } from "react";
import type { Itechnology } from "../types/technology";
import { Bounce, toast } from "react-toastify";

interface ItechnologyProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: ItechnologyProps) => {
  const technology = use(technologyPromise);
  const[Stack,setStack]=useState<Itechnology[]>([]);

  const handleStack=(techno:Itechnology)=>{
    // console.log(techno);
    setStack([...Stack,techno]);
    toast(`${techno.name} added to stack`, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

  }

  
  return (
    <section className="container mx-auto px-25 bg-linear-to-br from-orange-50 via-pink-50 to-orange-100 py-4">

    
      <div>
        <h2 className="text-3xl font-bold">
          Explore the
          <span className="text-pink-400"> Technologies</span>
        </h2>

        <p className="text-[#475569] text-[18px] pt-1 pb-5">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      
      <div className="grid grid-cols-12 gap-5">

        
        <div className="col-span-12 md:col-span-12 lg:col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-5">

          {technology.map((tech:Itechnology) => (
            <div
              key={tech.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >

              
              <div className="flex items-center justify-between mb-5">

                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-10 object-contain"
                />

                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-500 border border-orange-100">
                  {tech.badge}
                </span>

              </div>

              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {tech.name}
              </h3>

              
              <p className="text-sm leading-5 text-slate-500 min-h-15">
                {tech.description}
              </p>

              
              <div className="border-t border-slate-100 my-4"></div>

              
              <div className="flex items-center justify-between text-sm">

                <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                  {tech.category}
                </span>

                <span className="text-slate-500">
                  {tech.difficulty}
                </span>

                <span className="text-slate-700">
                  <span className="text-yellow-400">★</span>{" "}
                  {tech.rating}
                </span>
                
              </div>
                {/* <button  onClick={()=>{handleStack(tech)}} className="bg-pink-500 px-22 mt-2 py-2 border border-slate-200 rounded-2xl font-semibold text-white hover:scale-105">Add to Stack</button> */}
            <button
  onClick={() => handleStack(tech)}
  disabled={Stack.some((item) => item.id === tech.id)}
  className="bg-pink-500 px-22 mt-2 py-2 border border-slate-200 rounded-2xl font-semibold text-white hover:scale-105 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:scale-100"
>
  {Stack.some((item) => item.id === tech.id)
    ? "✓ Added to Stack"
    : "Add to Stack"}
</button>
            </div>
          ))}

        </div>

        
        <div className="col-span-12 md:col-span-12 lg:col-span-3  self-start p-5 border border-slate-200 rounded-[5px] px-5 py-2">
           
           <h2 className="text-2xl font-semibold ">Your Stack</h2>
             {Stack.length ==0 ? (<>
             <h1 className="text-slate-400">No technology Selected Yet</h1>
             <h1 className="text-slate-400 my-6 border border-dotted border-slate-300  rounded-lg text-center px-10 py-5">Your Stack is empty.</h1>
             </>) :  (<>
             <h1 className="text-slate-400 mb-3 text-[18px]">{Stack.length} Technology is Selected</h1>
           {
            Stack.map((technolog :Itechnology)=>{
               
                 
             return(
                <>
                   
                    <div className="flex gap-4 border border-slate-200 p-2 mb-2 rounded-[10px] ">
                        <img src={technolog.icon} alt=""  className="h-10 w-10 object-contain" />
               <div>
                 <h2 className="text-[16px] font-semibold">{technolog.name}</h2>
              
                <span className="text-[8px] rounded bg-slate-100 px-2 py-1 text-slate-600">
                  {technolog.category}
                </span>
               </div>
               <button
  onClick={() => {
    setStack(Stack.filter((item) => item.id !== technolog.id));
    toast.success(`${technolog.name} removed successfully!`);
  }}
  className="text-red-500 text-xl font-bold pl-15 hover:text-red-700 hover:scale-105"
>
  ×
</button>
                    </div>
                </>
                
             )   
            })
            
           }
             <button
  onClick={() => {
    setStack([]);
    toast.success("All stack items are removed!");
  }}
  className="px-22 mt-2 py-2 border border-pink-600 rounded-2xl font-semibold text-pink-600 hover:scale-105"
>
  Remove All
</button>
             </>)    }
        </div>

      </div>

    </section>
  );
};

export default Technologies;
