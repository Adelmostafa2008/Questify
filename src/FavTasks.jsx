import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import { FaClock, FaStar } from "react-icons/fa6";
import api from "./AxiosHelper.jsx"
import { BatteryFull, BatteryLow, BatteryMedium } from "lucide-react";
import null_dark from "./assets/null_dark.png"
import { useState, useEffect } from "react";

export default function FavTasks() {
    const { user } = useAuth();
    const [fav, setFav] = useState([]);
    const [query, SetQuery] = useState({
        SortByDifficulty: "",
        TaskName: "",
        SortByCategory: "",
    });

    const GetAllFavs = async () => {
        try {
            const res = await api.get(`/favourites/GetAllFav/${user.id}`, { params: query });
            setFav(res.data ?? []);
        } catch (error) {
            console.log(error);
            setFav([]);
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
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '');
    }
    return (
        <>
            <Header />
            <div className="flex justify-center items-start my-16">
                <div className="w-[70%] rounded-xl bg-[#181818] border border-[#2a2a2a] shadow-[0_0_25px_rgba(0,0,0,0.6)] relative overflow-hidden px-7 py-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/60 via-transparent to-[#111]/90 pointer-events-none"></div>
                    <div className="absolute -top-16 -left-16 w-[250px] h-[250px] rounded-full bg-[#ce7d63]/5 blur-3xl"></div>
                    <div className="absolute -bottom-16 -right-16 w-[250px] h-[250px] rounded-full bg-[#ce7d63]/5 blur-3xl"></div>

                    <div className="relative z-10 mb-12">

                        <h3 className="text-xl font-bold text-gray-200 mb-4">
                            Favourite Tasks
                        </h3>
                        <div className="bg-[#1f1f1f] flex flex-wrap md:flex-nowrap w-[100%] mx-auto text-white px-5 py-4 rounded-lg justify-center items-center gap-x-10 my-6 shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                            <div className="flex items-center gap-3">
                                <label className="tracking-wide whitespace-nowrap">Category:</label>
                                <select onChange={(e) => SetQuery(prev => ({ ...prev, SortByCategory: e.target.value }))} className="border border-[#333333] bg-[#1f1f1f] px-3 py-2 rounded-md focus:border-[#ce7d63] focus:outline-none">
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
                                <select onChange={(e) => SetQuery(prev => ({ ...prev, SortByDifficulty: e.target.value }))} className="border border-[#333333] bg-[#1f1f1f] px-3 py-2 rounded-md focus:border-[#ce7d63] focus:outline-none">
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
                                            GetAllFavs();
                                        }
                                    }}
                                    className="border border-[#333333] pl-2 py-2 rounded-l-md bg-[#1f1f1f] rounded-r-none focus:border-[#ce7d63] focus:outline-none flex-grow md:flex-grow-0"
                                />
                                <button
                                    onClick={() => GetAllFavs()}
                                    className="bg-[#ce7d63] px-4 py-2 rounded-r-md font-semibold rounded-l-none hover:bg-[#b86c55] transition-all"
                                >
                                    Search
                                </button>
                            </div>

                        </div>
                        <ul className="flex flex-col gap-y-3 rounded-xl border border-[#333] bg-[#1a1a1a] p-4 shadow-inner relative">
                            {fav.length > 0 ? (fav.map((s, i) => (
                                <Link
                                    to={`/Tasks/${s.id}/${slugify(s.taskname)}`}
                                    key={s.id}
                                >
                                    <li
                                        key={i}
                                        className="p-4 rounded-lg border border-[#333] bg-[#1a1a1a] hover:bg-[#222] transition shadow-[0_0_10px_rgba(206,125,99,0.15)]"

                                    >
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-lg font-semibold text-white">
                                                {s.taskname}
                                            </h4>
                                            <span
                                                className={`px-2 py-1 text-xs rounded-full flex items-center ${s.taskdefficulty === "Easy"
                                                        ? "bg-[#3a241f] text-[#ce7d63]"
                                                        : s.taskdefficulty === "Medium"
                                                            ? "bg-[#4a2e26] text-[#e89b84]"
                                                            : "bg-[#5a352c] text-[#f0bca8]"
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
                                        <p className="mt-2 text-sm text-gray-400">
                                            {s.taskdescription}
                                        </p>
                                        <div className="flex justify-between mt-3 text-sm text-gray-500">
                                            <span className="px-2 py-1 rounded bg-[#222] text-[#ce7d63]">
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
                            ))) : <img src={null_dark} className="w-[200px] h-[167px] mx-auto my-5" />}
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}