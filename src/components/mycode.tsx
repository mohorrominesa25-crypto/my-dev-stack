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
                    </div>
                </>
                
             )   
            })
            
           }
             <button onClick={() => setStack([])} className=" px-22 mt-2 py-2 border border-pink-600 rounded-2xl font-semibold text-pink-600 hover:scale-105">Remove All</button>