import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import { BatteryFull, BatteryLow, BatteryMedium } from "lucide-react";
import { FaClock, FaStar, FaChartLine, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "./AxiosHelper.jsx";

export default function Tasks() {
  const location = useLocation();
  const taskCat = location.state?.Tcategory;
  const [arr, SetArr] = useState([]);
  const [isTask, SetIsTask] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [query, SetQuery] = useState({
    SortBySolveRate: "",
    SortByDifficulty: "",
    TaskName: "",
    SortByCategory: taskCat,
  });
  let Tcomment = "";

  const SStask = async () => {
    try {
      const res = await api.get("/tasks", { params: query });
      SetArr(res.data);
    } catch (error) {
      SetArr([]);
      throw error;
    }
  };

  useEffect(() => {
    const checkTask = async () => {
      try {
        const res = await api.get("/tasks", { params: query });
        SetArr(res.data);
        SetIsTask(res.data.length > 0);
      } catch (error) {
        throw error;
      }
    };
    checkTask();
  }, [query.SortByCategory]);

  useEffect(() => {
    SStask();
  }, [query.SortByDifficulty, query.SortBySolveRate]);

  switch (query.SortByCategory) {
    case "design":
      Tcomment = "Sharpen your skills. Complete tasks. Build your legacy.";
      break;
    case "software-development":
      Tcomment = "Forge the code. Command the machine. Rewrite their reality.";
      break;
    case "project-management":
      Tcomment = "Control the clock. Exploit the hands. Deliver at any cost.";
      break;
    case "data-analysis":
      Tcomment =
        "Mine their secrets. Predict their downfall. Let the data decide.";
      break;
    case "marketing":
      Tcomment = "Sell dreams, not products — even lies need good packaging";
      break;
    case "call-center":
      Tcomment = "Absorb the anger. Mask the truth. Turn pain into profit.";
      break;
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
  }

  return (
    <div className="bg-[var(--bg)]">
      <Header />
      {isTask ? (
        <>
          <Card cat="taskCard" comment={`" ${Tcomment}"`} />

          {/* Search bar — always visible */}
          <div className="bg-[var(--cardbg)] flex flex-col sm:flex-row w-[90%] md:w-[85%] lg:w-[80%] mx-auto text-[var(--subtext)] px-3 sm:px-4 py-3 rounded-lg border border-[var(--anyborder)] mt-6 gap-2 sm:gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <label className="tracking-wide whitespace-nowrap text-sm">
                Search:
              </label>
              <input
                type="text"
                placeholder="Enter task name..."
                value={query.TaskName}
                onChange={(e) =>
                  SetQuery((prev) => ({ ...prev, TaskName: e.target.value }))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    SStask();
                  }
                }}
                className="border border-[var(--anyborder)] pl-2 py-2 rounded-l-md bg-[var(--cardbg)] rounded-r-none focus:border-[var(--text)] focus:outline-none flex-1 min-w-0 text-sm"
              />
              <button
                onClick={() => SStask()}
                className="bg-[var(--buttonbg)] px-3 sm:px-4 py-[9px] rounded-r-md text-white font-semibold rounded-l-none hover:bg-[var(--ce7hover)] transition-all text-sm"
              >
                Search
              </button>
            </div>
            <button
              onClick={() => setShowFilters((prev) => !prev)}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border transition-all text-sm whitespace-nowrap ${
                showFilters
                  ? "bg-[var(--text)]/10 border-[var(--text)]/50 text-[var(--text)]"
                  : "bg-[var(--cardbg)] border-[var(--anyborder)] text-[var(--subtext)] hover:border-[var(--text)]/50 hover:text-[var(--text)]"
              }`}
            >
              {showFilters ? (
                <>
                  <FaChevronUp size={12} /> Hide Filters
                </>
              ) : (
                <>
                  <FaChevronDown size={12} /> Filters
                </>
              )}
            </button>
          </div>

          {/* Collapsible filter section */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out w-[90%] md:w-[85%] lg:w-[80%] mx-auto ${
              showFilters ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[var(--cardbg)] flex flex-col sm:flex-row w-full mx-auto text-[var(--subtext)] px-3 sm:px-4 py-3 rounded-lg border border-[var(--anyborder)] mt-3 gap-3">
              <div className="flex items-center gap-2 flex-1">
                <label className="tracking-wide whitespace-nowrap text-sm">
                  Solving Rate:
                </label>
                <select
                  value={query.SortBySolveRate}
                  onChange={(e) =>
                    SetQuery((prev) => ({
                      ...prev,
                      SortBySolveRate: e.target.value,
                    }))
                  }
                  className="border border-[var(--anyborder)] bg-[var(--cardbg)] px-2.5 py-2 rounded-md focus:border-[var(--text)] focus:outline-none flex-1 text-sm"
                >
                  <option value={""}>Default</option>
                  <option value={"highFirst"}>High first</option>
                  <option value={"lowFirst"}>Low first</option>
                </select>
              </div>

              <div className="flex items-center gap-2 flex-1">
                <label className="tracking-wide whitespace-nowrap text-sm">
                  Difficulty:
                </label>
                <select
                  value={query.SortByDifficulty}
                  onChange={(e) =>
                    SetQuery((prev) => ({
                      ...prev,
                      SortByDifficulty: e.target.value,
                    }))
                  }
                  className="border border-[var(--anyborder)] bg-[var(--cardbg)] px-2.5 py-2 rounded-md focus:border-[var(--text)] focus:outline-none flex-1 text-sm"
                >
                  <option value={""}>All</option>
                  <option className="text-green-400" value={"Easy"}>
                    Easy
                  </option>
                  <option className="text-yellow-400" value={"Medium"}>
                    Medium
                  </option>
                  <option className="text-red-600" value={"Hard"}>
                    Hard
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Task Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-4 w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-6 md:mt-8 lg:mt-10">
            {arr.length > 0 ? (
              arr.map((task) => (
                <Link
                  to={`/Tasks/${task.id}/${slugify(task.taskname)}`}
                  key={task.id}
                  className="bg-[var(--cardbg)] border border-[var(--anyborder)] rounded-2xl p-4 sm:p-5 lg:p-4 xl:p-5 transition-all duration-300 flex flex-col justify-between hover:border-[var(--text)]/40"
                >
                  <div className="flex justify-between items-start mb-2 sm:mb-3 gap-2">
                    <h2 className="text-[var(--tasktext)] font-semibold text-sm sm:text-base lg:text-sm xl:text-base truncate">
                      {task.taskname}
                    </h2>
                    <span className="px-2 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs bg-[var(--text)]/10 text-[var(--text)] shrink-0">
                      {task.taskcategory}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    {task.taskdefficulty === "Easy" && (
                      <span className="flex items-center gap-1 text-green-500 text-xs sm:text-sm font-medium">
                        <BatteryLow size={14} className="sm:w-[18px]" /> Easy
                      </span>
                    )}
                    {task.taskdefficulty === "Medium" && (
                      <span className="flex items-center gap-1 text-yellow-400 text-xs sm:text-sm font-medium">
                        <BatteryMedium size={14} className="sm:w-[18px]" /> Medium
                      </span>
                    )}
                    {task.taskdefficulty === "Hard" && (
                      <span className="flex items-center gap-1 text-red-500 text-xs sm:text-sm font-medium">
                        <BatteryFull size={14} className="sm:w-[18px]" /> Hard
                      </span>
                    )}
                  </div>

                  <p className="text-[var(--subtext)] text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4">
                    {task.taskdescription}
                  </p>

                  <div className="flex justify-between text-[var(--subtext)] text-[11px] sm:text-sm gap-1">
                    <span className="flex items-center gap-1">
                      <FaClock size={12} className="sm:w-[14px]" /> {task.tasktime} min
                    </span>
                    <span className="flex items-center gap-1">
                      <FaStar size={12} className="sm:w-[14px]" /> {task.taskpoints} pts
                    </span>
                    <span className="flex items-center gap-1">
                      <FaChartLine size={12} className="sm:w-[14px]" /> {task.solverate}%
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-[var(--subtext)] py-8 text-base sm:text-lg font-semibold">
                No tasks available with the filters you've chosen
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="w-[90%] md:w-[80%] mx-auto my-[15%] md:my-[20%] px-4 sm:px-6 py-6 sm:py-8 rounded-xl text-center font-semibold text-sm sm:text-base md:text-lg text-[var(--tasktext)] bg-[var(--cardbg)] border border-[var(--anyborder)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>

          <p className="relative z-10">
            No tasks available at the moment — check back soon.
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
}
