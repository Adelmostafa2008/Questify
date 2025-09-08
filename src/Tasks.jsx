import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { BatteryFull, BatteryLow, BatteryMedium } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Tasks() {
   const location = useLocation();
   const taskCat = location.state?.Tcategory;
   const [arr, SetArr] = useState([]);
   const [isTask, SetIsTask] = useState(false);
   const [query , SetQuery] = useState({
      SortBySolveRate : "",
      SortByDifficulty : "",
      TaskName : "",
      SortByCategory : taskCat,
   });
   let Tcomment = "";
  
   const SStask = async () => {
      try {
         const res = await axios.get("http://localhost:5226/tasks" , {params : query});
         SetArr(res.data);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      const checkTask = async () => {
      try {
         const res = await axios.get("http://localhost:5226/tasks" , {params : query});
         SetArr(res.data);
         SetIsTask(res.data.length > 0);
      } catch (error) {
         console.log(error);
      }
   };
   checkTask();
   } , [query.SortByCategory])

   useEffect(() => {
   SStask();
   }, [query.SortByDifficulty , query.SortBySolveRate]);

   switch(query.SortByCategory){

      case "design":
         Tcomment = "Sharpen your skills. Complete tasks. Build your legacy.";
      break;
      case "software-development":
         Tcomment = "Forge the code. Command the machine. Rewrite their reality."
      break;
      case"project-management":
         Tcomment = "Control the clock. Exploit the hands. Deliver at any cost."
      break;
      case "data-analysis":
         Tcomment = "Mine their secrets. Predict their downfall. Let the data decide.";
      break;
      case "marketing":
         Tcomment = "Sell dreams, not products — even lies need good packaging";
      break;
      case "call-center":
         Tcomment = "Absorb the anger. Mask the truth. Turn pain into profit.";
      break;
   }
   
   
   return (
      <>
         <Header />
         {isTask ? (
            <>
               <Card
                  cat="taskCard"
                  comment= {`" ${Tcomment}"`}
               />

               <div className="bg-[#1f1f1f] flex flex-wrap md:flex-nowrap w-[80%] mx-auto text-white px-5 py-4 rounded-lg justify-center items-center gap-20 mt-6 shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
  <div className="flex items-center gap-3">
    <label className="tracking-wide whitespace-nowrap">Solving rate:</label>
    <select onChange={(e) => SetQuery(prev => ({...prev , SortBySolveRate : e.target.value}))} className="border border-[#333333] bg-[#1f1f1f] px-3 py-2 rounded-md focus:border-[#ce7d63] focus:outline-none">
      <option value={""}>Default</option>
      <option value={"highFirst"}>High first</option>
      <option value={"lowFirst"}>Low first</option>
    </select>
  </div>

  <div className="flex items-center gap-3">
    <label className="tracking-wide whitespace-nowrap">Difficulty:</label>
    <select onChange={(e) => SetQuery(prev => ({...prev , SortByDifficulty : e.target.value}))} className="border border-[#333333] bg-[#1f1f1f] px-3 py-2 rounded-md focus:border-[#ce7d63] focus:outline-none">
      <option value={""}>All</option>
      <option className="text-green-400" value={"Easy"}>Easy</option>
      <option className="text-yellow-400" value={"Medium"}>Medium</option>
      <option className="text-red-600" value={"Hard"}>Hard</option>
    </select>
  </div>

  <div className="flex items-center  w-full md:w-auto">
    <label className="tracking-wide whitespace-nowrap mr-2">Search:</label>
    <input
      type="text"
      placeholder="Enter task name..."
      onChange={ (e) => SetQuery(prev => ({...prev , TaskName : e.target.value}))}
      className="border border-[#333333] pl-2 py-2 rounded-l-md bg-[#1f1f1f] rounded-r-none focus:border-[#ce7d63] focus:outline-none flex-grow md:flex-grow-0"
    />
    <button onClick={() => SStask()} className="bg-[#ce7d63] px-4 py-2 rounded-r-md font-semibold rounded-l-none hover:bg-[#b86c55] transition-all">
      Search
    </button>
  </div>

</div>


               <div className="flex flex-col justify-center bg-[#1f1f1f] w-[80%] mx-auto text-white mt-10 text-center rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                  <div className="w-full flex mt-5 font-bold text-[#ce7d63]">
                     <label className="w-1/4">ID</label>
                     <label className="w-1/4">Name</label>
                     <label className="w-1/4">Solve Rate</label>
                     <label className="w-1/4">Difficulty</label>
                  </div>
                  <div className="w-full flex mt-5 bg-[#131313] py-3 flex-col">
                     { arr.length > 0 ? 
                     
                     arr.map((task) => (
                        <div className="flex border-b border-[#333333] last:border-none py-2">
                           <label className="w-1/4">{task.taskid}</label>
                           <label className="w-1/4">{task.taskname}</label>
                           <label className="w-1/4">{task.solverate}</label>
                           <label className="w-1/4">
                              {task.taskdefficulty === "Hard" ? (
                                 <BatteryFull size={20} color="red" className="mx-auto" />
                              ) : task.taskdefficulty === "Easy" ? (
                                 <BatteryLow size={20} color="green" className="mx-auto" />
                              ) : task.taskdefficulty === "Medium" ? (
                                 <BatteryMedium size={20} color="yellow" className="mx-auto" />
                              ) : null}
                           </label>
                        </div>
                     ))
                  :
                     <div className="flex border-b border-[#333333] last:border-none py-2 mx-auto text-xl font-semibold">
                        No tasks available with the filters you've chosen
                     </div>
                  }
                  </div>
               </div>
            </>
         ) : (
            <div className="w-[80%] mx-auto my-[20%] px-6 py-8 rounded-xl text-center font-semibold text-lg text-gray-300 bg-[#1f1f1f]/60 border border-[#333333] shadow-[0_0_20px_rgba(206,125,99,0.1)] relative overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/5 via-transparent to-black/20 pointer-events-none"></div>
  <div className="absolute -top-6 -left-6 w-[120px] h-[120px] rounded-full bg-[#ce7d63]/10 blur-2xl"></div>

  <p className="relative z-10">
    No tasks available at the moment — check back soon.
  </p>
</div>

         )}

         <Footer />
      </>
   );
}

   