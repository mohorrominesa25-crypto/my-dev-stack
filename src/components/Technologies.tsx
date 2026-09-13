import { use } from "react";
import type { Itechnology } from "../types/technology";

interface ItechnologyProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: ItechnologyProps) => {
  const technology = use(technologyPromise);

  return (
    <section className="container mx-auto px-25">

    
      <div>
        <h2 className="text-3xl font-bold">
          Explore the
          <span className="text-pink-400"> Technologies</span>
        </h2>

        <p className="text-[#475569] text-[18px] pb-5">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      
      <div className="grid grid-cols-12 gap-5">

        
        <div className="col-span-9 grid grid-cols-3 gap-5">

          {technology.map((tech) => (
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

              
              <p className="text-sm leading-5 text-slate-500 min-h-[60px]">
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

            </div>
          ))}

        </div>

        
        <div className="col-span-3 rounded-2xl p-5">
           <h2>Your Stack</h2>

        </div>

      </div>

    </section>
  );
};

export default Technologies;
