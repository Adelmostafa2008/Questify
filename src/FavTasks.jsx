import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import { FaClock, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import api from "./AxiosHelper.jsx";
import { BatteryFull, BatteryLow, BatteryMedium } from "lucide-react";
import null_dark from "./assets/null_dark.png";
import { useState, useEffect } from "react";

export default function FavTasks() {
  const { user } = useAuth();
  const [fav, setFav] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [query, SetQuery] = useState({
    SortByDifficulty: "",
    TaskName: "",
    SortByCategory: "",
  });

  const GetAllFavs = async () => {
    try {
      const res = await api.get(`/favourites/GetAllFav/${user.id}`, {
        params: query,
      });
      setFav(res.data ?? []);
    } catch (error) {
      setFav([]);
      throw error;
    }
  };

  useEffect(() => {
    if (user?.id) {
      GetAllFavs();
    }
  }, [user, query]);

  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-start my-10 md:my-16 px-3 sm:px-4">
        <div className="w-full md:w-[85%] lg:w-[78%] xl:w-[70%] rounded-xl bg-[var(--cardbg)] border border-[var(--anyborder)] relative overflow-hidden px-4 sm:px-5 md:px-7 py-6 md:py-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>

          <div className="relative z-10 mb-8 md:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--tasktext)] mb-4">
              Favourite Tasks
            </h3>

            {/* Search bar — always visible */}
            <div className="bg-[var(--cardbg)] flex flex-col sm:flex-row w-full mx-auto text-[var(--text)] px-3 sm:px-4 py-3 rounded-lg border border-[var(--anyborder)] my-5 gap-2 sm:gap-3">
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
                      GetAllFavs();
                    }
                  }}
                  className="border border-[var(--anyborder)] pl-2 py-2 rounded-l-md bg-[var(--cardbg)] rounded-r-none focus:border-[var(--text)] focus:outline-none flex-1 min-w-0 text-sm"
                />
                <button
                  onClick={() => GetAllFavs()}
                  className="bg-[var(--buttonbg)] px-3 sm:px-4 py-[9px] text-gray-100 rounded-r-md font-semibold rounded-l-none hover:bg-[var(--ce7hover)] transition-all text-sm"
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
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                showFilters ? "max-h-48 opacity-100 mb-5" : "max-h-0 opacity-0 mb-0"
              }`}
            >
              <div className="bg-[var(--cardbg)] flex flex-col sm:flex-row w-full mx-auto text-[var(--text)] px-3 sm:px-4 py-3 rounded-lg border border-[var(--anyborder)] gap-3">
                <div className="flex items-center gap-2 flex-1">
                  <label className="tracking-wide whitespace-nowrap text-sm">
                    Category:
                  </label>
                  <select
                    value={query.SortByCategory}
                    onChange={(e) =>
                      SetQuery((prev) => ({
                        ...prev,
                        SortByCategory: e.target.value,
                      }))
                    }
                    className="border border-[var(--anyborder)] bg-[var(--cardbg)] px-2.5 py-2 rounded-md focus:border-[var(--text)] focus:outline-none flex-1 text-sm"
                  >
                    <option value={""}>All</option>
                    <option value={"call-center"}>Call Center</option>
                    <option value={"marketing"}>Marketing</option>
                    <option value={"data-analysis"}>Data Analysis</option>
                    <option value={"project-management"}>Project Mgmt</option>
                    <option value={"software-development"}>Software Dev</option>
                    <option value={"design"}>Design</option>
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

            <ul className="flex flex-col gap-y-2.5 md:gap-y-3 rounded-xl border border-[var(--anyborder)] bg-[var(--cardbg)] p-3 md:p-4 relative">
              {fav.length > 0 ? (
                fav.map((s, i) => (
                  <Link to={`/Tasks/${s.id}/${slugify(s.taskname)}`} key={s.id}>
                    <li
                      key={i}
                      className="p-3 md:p-4 rounded-lg border border-[var(--anyborder)] bg-[var(--cardbg)] hover:bg-[var(--taskpreveiw)] transition"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm md:text-base font-semibold text-[var(--tasktext)] truncate">
                          {s.taskname}
                        </h4>
                        <span className="px-1.5 py-1 text-xs rounded-full flex items-center bg-[var(--text)]/10 text-[var(--text)] shrink-0">
                          {s.taskdefficulty === "Easy" ? (
                            <BatteryFull size={14} />
                          ) : s.taskdefficulty === "Medium" ? (
                            <BatteryMedium size={14} />
                          ) : (
                            <BatteryLow size={14} />
                          )}
                        </span>
                      </div>
                      <p className="mt-1.5 md:mt-2 text-xs md:text-sm text-[var(--subtext)] truncate">
                        {s.taskdescription}
                      </p>
                      <div className="flex flex-wrap items-center justify-between mt-2 md:mt-3 gap-2 text-xs md:text-sm text-[var(--subtext)]">
                        <span className="px-2 py-0.5 rounded bg-[var(--text)]/10 text-[var(--text)] truncate text-xs">
                          {s.taskcategory}
                        </span>
                        <div className="flex gap-x-3 md:gap-x-4">
                          <span className="flex items-center gap-x-1 whitespace-nowrap">
                            <FaClock size={12} /> {s.tasktime} min
                          </span>
                          <span className="flex items-center gap-x-1 whitespace-nowrap">
                            <FaStar size={12} /> {s.taskpoints} pts
                          </span>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))
              ) : (
                <img
                  src={null_dark}
                  className="w-[140px] sm:w-[180px] h-auto mx-auto my-6"
                  alt="No favourites"
                />
              )}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
