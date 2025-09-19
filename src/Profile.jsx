import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useAuth } from "./AuthContext.jsx";
import { IoPencilSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./AxiosHelper.jsx";
import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaClock, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "react-calendar-heatmap/dist/styles.css";
import { BatteryFull, BatteryLow, BatteryMedium } from "lucide-react";
import null_dark from "./assets/null_dark.png"
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Profile() {
  const navigate = useNavigate();
  const { user , logout} = useAuth();
  const [oldUser, setOldUser] = useState({});
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activity, setActivity] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteModal2, setShowDeleteModal2] = useState(false);
  const [deleteInput, setDeleteInput] = useState("");
  const requiredPhrase = "I Am Gay";
  const visibleSubs = submissions.slice(0, visibleCount);

  const fetchUser = async () => {
    try {
      const res = await api.get(`/regesteration/${user.id}`);
      setOldUser(res.data);
      setPreview(
        res.data.profilePic
          ? `http://localhost:5226/${res.data.profilePic}`
          : null
      );
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  useEffect(() => {
    if (user?.id) fetchUser();
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/submission/${user.id}`);
        const submissions = res.data;
        const grouped = submissions.reduce((acc, item) => {
          const formattedDate = item.submissionDate.split("T")[0];
          acc[formattedDate] = (acc[formattedDate] || 0) + 1;
          return acc;
        }, {});
        const formatted = Object.entries(grouped).map(([date, count]) => ({
          date,
          count,
        }));
        setActivity(formatted);
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.id) fetchData();
  }, [user]);

  useEffect(() => {
    const fetchlatestsubs = async () => {
      try {
        const res = await api.get(`/submission/latest/${user.id}`);
        setSubmissions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.id) fetchlatestsubs();
  }, [user]);


    function slugify(text) {
  return text
    .toLowerCase()                 
    .trim()                        
    .replace(/\s+/g, '-')          
    .replace(/[^\w\-]+/g, '');     
   }

   
   const handleDelete = async () => {
    if (deleteInput.trim() !== requiredPhrase) {
      alert("The phrase does not match. Please type exactly: " + requiredPhrase);
      return;
    }

    try {
      await api.delete(`/regesteration/${user.id}`); 
    } catch (err) {
      console.error("Error deleting account:", err);
      alert("Something went wrong. Try again later.");
    }
   
  };

  const handleReset = async () => {
    try {
      await api.delete(`/submission/${user.id}`); 
    } catch (err) {
      console.error("Error Resetting Record:", err);
      alert("Something went wrong. Try again later.");
    }
   
  };

  return (
    <>
      <Header />

      <div className="flex justify-center items-start my-16">
        <div className="w-[70%] rounded-xl bg-[#181818] border border-[#2a2a2a] shadow-[0_0_25px_rgba(0,0,0,0.6)] relative overflow-hidden px-7 py-10">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/60 via-transparent to-[#111]/90 pointer-events-none"></div>
          <div className="absolute -top-16 -left-16 w-[250px] h-[250px] rounded-full bg-[#ce7d63]/5 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 w-[250px] h-[250px] rounded-full bg-[#ce7d63]/5 blur-3xl"></div>

          <div className="mb-5 flex justify-end">
             <button
                onClick={() => navigate("/Profile/Edit")}
                className="relative bg-[#1f1f1f] border border-[#333333] text-gray-300 
                          font-semibold px-6 py-2 rounded-lg 
                          flex
                          justify-center
                          items-center gap-x-2
                          hover:border-gray-400 hover:text-gray-200
                          hover:shadow-[0_0_10px_rgba(192,192,192,0.5)]
                          transition-all duration-300"
              >
                <IoPencilSharp size={17} className="mb-1"/> Edit Profile
              </button>
          </div>

          <div className="relative z-10 flex items-center gap-x-8 border-b border-[#2a2a2a] pb-8">
            <div className="flex-shrink-0">
                <img
                src={preview || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                alt="ProfilePic"
                className="w-64 border-2 border-[#2a2a2a] rounded-full"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{oldUser.userName}</h3>
                <p className="text-gray-400 italic mt-2 text-lg">
                "{oldUser.description || "No description yet..."}"
                </p>
            </div>
            </div>

          {/* Activity Heatmap */}
          <div className="relative z-10 my-12">
            <h3 className="text-lg font-bold text-gray-200 mb-4">
              Activity Rate
            </h3>
            <div className="rounded-xl border border-[#333] bg-[#1a1a1a] p-4 shadow-inner">
              <CalendarHeatmap
                startDate={new Date("2025-01-01")}
                endDate={new Date("2025-12-31")}
                values={activity}
                gutterSize={2}
                classForValue={(value) => {
                  if (!value) return "fill-[#2b1b17]";
                  if (value.count < 2) return "fill-[#f8e0d8]";
                  if (value.count < 4) return "fill-[#f0bca8]";
                  if (value.count < 6) return "fill-[#e89b84]";
                  if (value.count < 8) return "fill-[#ce7d63]";
                  if (value.count < 10) return "fill-[#a95546]";
                  return "fill-[#7d3e34]";
                }}
                tooltipDataAttrs={(value) => {
                  if (!value || !value.date) return null;
                  const d = new Date(value.date);
                  const formatted = d
                    .toISOString()
                    .split("T")[0]
                    .replace(/-/g, "/")
                    .slice(2);
                  return {
                    "data-tooltip-id": "heatmap-tooltip",
                    "data-tooltip-content": `${value.count} submissions on ${formatted}`,
                  };
                }}
              />
              <ReactTooltip id="heatmap-tooltip" place="top" />
            </div>
          </div>

          {/* Latest Submissions */}
          <div className="relative z-10 mb-12">
            <div className="flex justify-between items-center mb-3">

            <h3 className="text-lg font-bold text-gray-200">
              Latest Submissions
            </h3>
            <div className="flex relative z-10 justify-end">
  <button
    onClick={() => {submissions.length > 0 ? setShowDeleteModal2(true) : null}}
    className={`py-2 px-4  rounded-lg  font-bold
              ${submissions.length == 0 ? "text-red-900/50 border-2 border-red-900/50 invalidCursor  " : "text-red-700 font-bold border-2 border-red-700  hover:bg-red-700 hover:text-white transition-colors duration-200shadow-[0_0_12px_rgba(255,0,0,0.3)]"} `}
  >
    Reset Record
  </button>
</div>

{/* Delete Modal */}
{showDeleteModal2 && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    onClick={() => setShowDeleteModal2(false)}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Modal box */}
    <div
      className="relative bg-[#1f1f1f] border border-[#333] p-8 rounded-2xl shadow-lg 
                 z-10 w-[90%] max-w-md text-center transition-transform duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold text-red-500 mb-4">Confirm Record Resettion</h2>
      <p className="text-gray-300 mb-4">
        Are you sure you wanna reset your record
      </p>

      <div className="flex justify-end gap-x-3">
        <button
          onClick={async () => {
            if (loading || success) return;
            setLoading(true);
            try {
              await handleReset()
              setSuccess(true);
              setShowDeleteModal2(false);
              window.location.reload();
            } catch (err) {
              console.error(err);
            } finally {
              setLoading(false);
            }
          }}
          disabled={loading || success}
          className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md w-full
                      transition-colors duration-200
                      ${
                           success
                          ? "text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white"
                          : "text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white"
                      }`}
        >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                    />
                  </svg>
                  Resetting...
                </>
              ) : success ? (
                "Done!"
              ) : (
                "Reset"
              )}
            </button>
          </div>
        </div>
      </div>
    )}

            </div>
            <ul className="flex flex-col gap-y-3 rounded-xl border border-[#333] bg-[#1a1a1a] p-4 shadow-inner">
              {visibleSubs.length > 0 ? ( visibleSubs.map((s, i) => (
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
                      className={`px-2 py-1 text-xs rounded-full flex items-center ${
                        s.taskdefficulty === "Easy"
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
              ))) : <img src={null_dark} className="w-[200px] h-[167px] mx-auto my-5"/>}
            </ul>
            {visibleCount < submissions.length ? (
              <button className="relative bg-[#1f1f1f] border border-[#333333] text-gray-300 
                          font-semibold px-6 py-2 rounded-lg 
                          hover:border-gray-400 hover:text-gray-200
                          hover:shadow-[0_0_10px_rgba(192,192,192,0.5)]
                          w-full
                          mt-5
                          flex
                          justify-center
                          items-center gap-x-2
                          transition-all duration-300"
                          onClick={() => navigate("/Profile/Solvedtasks")}
                          >
                Show All <MdKeyboardDoubleArrowRight size={17}/>
              </button>
            ):null}
          </div>

     
          {/* Delete button */}
<div className="flex relative z-10 justify-end">
  <button
    onClick={() => setShowDeleteModal(true)}
    className="py-2 px-4 text-red-700 font-bold border-2 border-red-700 rounded-lg 
               hover:bg-red-700 hover:text-white transition-colors duration-200
               shadow-[0_0_12px_rgba(255,0,0,0.3)]"
  >
    Delete Account
  </button>
</div>

{/* Delete Modal */}
{showDeleteModal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    onClick={() => setShowDeleteModal(false)}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Modal box */}
    <div
      className="relative bg-[#1f1f1f] border border-[#333] p-8 rounded-2xl shadow-lg 
                 z-10 w-[90%] max-w-md text-center transition-transform duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold text-red-500 mb-4">Confirm Deletion</h2>
      <p className="text-gray-300 mb-4">
        To permanently delete your account, please type: <br />
        <span className="font-bold text-red-400">"{requiredPhrase}"</span>
      </p>

      <input
        type="text"
        value={deleteInput}
        onChange={(e) => setDeleteInput(e.target.value)}
        className="w-full px-3 py-2 mb-4 bg-[#111] border border-[#444] text-white 
                   rounded-lg focus:outline-none focus:border-red-500"
        placeholder="Type the phrase here"
      />

      <div className="flex justify-end gap-x-3">
        <button
          onClick={async () => {
            if (deleteInput.trim() !== requiredPhrase) return;
            if (loading || success) return;
            setLoading(true);
            try {
              await handleDelete();
              setSuccess(true);
              setTimeout(() => navigate("/Home"), 1000);
              await logout();
            } catch (err) {
              console.error(err);
            } finally {
              setLoading(false);
            }
          }}
          disabled={deleteInput.trim() !== requiredPhrase || loading || success}
          className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md w-full
                      transition-colors duration-200
                      ${
                        deleteInput.trim() !== requiredPhrase
                          ? "text-red-900/50 border-2 border-red-900/50 invalidCursor"
                          : success
                          ? "text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white"
                          : "text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white"
                      }`}
        >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                    />
                  </svg>
                  Deleting...
                </>
              ) : success ? (
                "Thank you for using our website!"
              ) : (
                "Delete Account"
              )}
            </button>
          </div>
        </div>
      </div>
    )}

          </div>
        </div>
      

      <Footer />
    </>
  );
}