import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import { FaClock, FaStar } from "react-icons/fa6";
import api from "./AxiosHelper.jsx"
import { BatteryFull, BatteryLow, BatteryMedium } from "lucide-react";
import null_dark from "./assets/null_dark.png"
import { useState , useEffect } from "react";
export default function SolvedTasks(){
    const {user} = useAuth();
    const [submissions, setSubmissions] = useState([]);
    const [query , SetQuery] = useState({
          SortByDifficulty : "",
          TaskName : "",
          SortByCategory : "",
       });

       const fetchlatestsubsQuery = async () => {
          try {
            const res = await api.get(`/submission/latest/${user.id}` , {params : query});
            setSubmissions(res.data ?? []);
          } catch (error) {
            throw error;
            setSubmissions([]);
          }
        };

        useEffect(() => {
        if (user?.id) {
          fetchlatestsubsQuery();
        }
      }, [user, query]);
    
    
        function slugify(text) {
      return text
        .toLowerCase()                 
        .trim()                        
        .replace(/\s+/g, '-')          
        .replace(/[^\w\-]+/g, '');     
       }
    return(
        <>
        <Header/>
         <div className="flex justify-center items-start my-16">
        <div className="w-[70%] rounded-xl bg-[var(--cardbg)] border border-[var(--anyborder)] relative overflow-hidden px-7 py-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>

          <div className="relative z-10 mb-12">

        <h3 className="text-xl font-bold text-[var(--tasktext)] mb-4">
              All The Submissions
            </h3>
            <div className="bg-[var(--cardbg)] flex flex-wrap md:flex-nowrap w-[100%] mx-auto text-[var(--text)] px-5 py-4 rounded-lg justify-center items-center gap-x-10 my-6">
              <div className="flex items-center gap-3">
                <label className="tracking-wide whitespace-nowrap">Category:</label>
                <select onChange={(e) => SetQuery(prev => ({...prev , SortByCategory : e.target.value}))} className="border border-[var(--anyborder)] bg-[var(--cardbg)] px-3 py-2 rounded-md focus:border-[var(--text)] focus:outline-none">
                  <option value={""}>Mix</option>
                  <option value={"call-center"}>Call Center</option>
                  <option value={"marketing"}>Marketing</option>
                  <option value={"data-analysis"}>Data Analysis</option>
                  <option value={"project-management"}>Project Management</option>
                  <option value={"software-development"}>Software Development</option>
                  <option value={"design"}>Design</option> 
                </select>
              </div>

              <div className="flex items-center gap-3">
                <label className="tracking-wide whitespace-nowrap">Difficulty:</label>
                <select onChange={(e) => SetQuery(prev => ({...prev , SortByDifficulty : e.target.value}))} className="border border-[var(--anyborder)] bg-[var(--cardbg)] px-3 py-2 rounded-md focus:border-[var(--text)] focus:outline-none">
                  <option value={""}>All</option>
                  <option className="text-green-400" value={"Easy"}>Easy</option>
                  <option className="text-yellow-400" value={"Medium"}>Medium</option>
                  <option className="text-red-600" value={"Hard"}>Hard</option>
                </select>
              </div>

              <div className="flex items-center w-full md:w-auto">
            <label className="tracking-wide whitespace-nowrap mr-2">Search:</label>
            <input
              type="text"
              placeholder="Enter task name..."
              onChange={(e) =>
                SetQuery((prev) => ({ ...prev, TaskName: e.target.value }))
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchlatestsubsQuery();
                }
              }}
              className="border border-[var(--anyborder)] pl-2 py-2 rounded-l-md bg-[var(--cardbg)] rounded-r-none focus:border-[var(--text)] focus:outline-none flex-grow md:flex-grow-0"
            />
            <button
              onClick={() => fetchlatestsubsQuery()}
              className="bg-[var(--buttonbg)] px-4 py-[9px] rounded-r-md text-gray-100 font-semibold rounded-l-none hover:bg-[var(--ce7hover)] transition-all"
            >
              Search
            </button>
          </div>

            </div>
        <ul className="flex flex-col gap-y-3 rounded-xl border border-[var(--anyborder)] bg-[var(--cardbg)] p-4 relative">
              {submissions.length > 0 ? ( submissions.map((s, i) => (
                  <Link
                to={`/Tasks/${s.id}/${slugify(s.taskname)}`}
                key={s.id} 
                >
                <li
                  key={i}
                  className="p-4 rounded-lg border border-[var(--anyborder)] bg-[var(--cardbg)] hover:bg-[var(--taskpreveiw)] transition"
                  
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-[var(--tasktext)] truncate">
                      {s.taskname}
                    </h4>
                    <span
                      className={`px-2 py-1 text-xs rounded-full flex items-center ${
                        s.taskdefficulty === "Easy"
                          ? "bg-[var(--text)]/10 text-[var(--text)]"
                          : s.taskdefficulty === "Medium"
                          ? "bg-[var(--text)]/10 text-[var(--text)]"
                          : "bg-[var(--text)]/10 text-[var(--text)]"
                      }`}
                    >
                      {s.taskdefficulty === "Easy" ? (
                        <BatteryFull />
                      ) : s.taskdefficulty === "Medium" ? (
                        <BatteryMedium />
                      ) : (
                        <BatteryLow />
                      )}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--subtext)] truncate">
                    {s.taskdescription}
                  </p>
                  <div className="flex justify-between mt-3 text-sm text-[var(--subtext)]">
                    <span className="px-2 py-1 rounded bg-[var(--text)]/10 text-[var(--text)]">
                      {s.taskcategory}
                    </span>
                    <div className="flex gap-x-4">
                      <span className="flex items-center gap-x-1">
                        <FaClock /> {s.tasktime} min
                      </span>
                      <span className="flex items-center gap-x-1">
                        <FaStar /> {s.taskpoints} pts
                      </span>
                    </div>
                  </div>
                </li>
                  </Link>
              )) ): <img src={null_dark} className="w-[200px] h-[167px] mx-auto my-5"/>}
            </ul>
        </div>
              </div>
          </div>

        <Footer/>
        </>
    );
}