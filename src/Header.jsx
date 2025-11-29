import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState, useEffect, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { FaGear } from "react-icons/fa6";


function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  return (
    <div className="bg-[var(--headerbg)] flex items-center p-5 w-full rounded-br-md rounded-bl-md shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
      <h1
        onClick={() => navigate('/Home')}
        className="w-1/3 cursor-pointer font-extrabold 
                         text-[var(--subtext)] max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl"
      >
        Quest<span className="text-[var(--text)]">ify</span>
      </h1>

      <div className="flex items-center justify-center gap-6 max-xs:hidden w-1/3 min-w-max ">
        {["Home", "About", "Pricing", "Addtask"].map((link) => (
          <NavLink
            key={link}
            to={`/${link}`}
            className={({ isActive }) => `
                        font-semibold uppercase tracking-wide
                        transition-all duration-200 ease-in-out
                        
                        ${isActive ? 'text-[var(--text)]' : 'text-[var(--tasktext)] hover:text-[var(--text)]'}
                      `}
          >
            {link}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-3 justify-end w-1/3 max-xs:w-1/2">
        {!user ?
          <>
            <button
              className="px-3 py-2 bg-transparent text-[var(--text)] border-2 border-[var(--text)] 
                rounded-md font-bold tracking-wide hover:bg-[var(--ce7hover)] hover:text-white hover:cursor-pointer transition-all"
              onClick={() => navigate('/Registration', { state: { regtype: "login" } })}
            >
              Login
            </button>

            <button
              className="text-white bg-[#ce7d63] px-3 py-2 border-2 border-transparent rounded-md font-bold tracking-wide 
                  hover:bg-transparent hover:border-[var(--text)] hover:py-0  hover:text-[var(--text)]  transition-all hover:cursor-pointer"
              onClick={() => navigate('/Registration', { state: { regtype: "sign-up" } })}
            >
              Sign-up
            </button>
          </>
          : <div className="relative text-[var(--tasktext)]" ref={menuRef}>
            <img
              src={user?.profilePic ? `http://localhost:5226/${user.profilePic}` : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
              alt="profile"
              className="w-[45px] h-[45px] rounded-full cursor-pointer border-2 border-[var(--text)] shadow-[0_0_15px_rgba(206,125,99,0.6)] hover:scale-105 transition-transform duration-200"
              onClick={() => setOpen((prev) => !prev)}
            />

            {open && (
              <div>
                <ul className="absolute right-0 min-w-max mt-3 bg-[var(--headerbg)] border border-[#333] rounded-2xl shadow-[0_0_30px_rgba(206,125,99,0.25)] overflow-hidden z-20">

                  <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
                  <div className="absolute -top-10 -left-10 w-[150px] h-[150px] rounded-full bg-[#ce7d63]/20 blur-2xl"></div>

                  <div className="flex items-center gap-x-3 px-4 py-3 relative z-10 border-b border-[#333]">
                    <img
                      src={user?.profilePic ? `http://localhost:5226/${user.profilePic}` : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                      className="w-[60px] h-[60px] rounded-full border-2 border-[var(--text)] shadow-[0_0_10px_rgba(206,125,99,0.6)]"
                    />
                    <div className="flex flex-col">
                      <h2
                        className="truncate w-[150px] text-lg font-extrabold text-[var(--text)] tracking-wide drop-shadow-[0_0_8px_rgba(206,125,99,0.8)]"
                        style={{ fontFamily: "'Pricedown', sans-serif" }}
                      >
                        {user.username}
                      </h2>
                      <div className="group">
                        <p className="hover:cursor-pointer text-xs italic break-words max-w-[150px] relative" onClick={() => navigate("/Pricing")}>
                          <span className="relative z-0 text-[var(--subtext)] transition-colors duration-500 ease-in-out group-hover:text-transparent">
                            Access more features with our Premium subscription!
                          </span>

                          <span className="absolute inset-0 z-10 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 
                                        bg-clip-text text-transparent opacity-0 
                                        transition-opacity duration-500 ease-in-out 
                                        group-hover:opacity-100 drop-shadow-[0_0_8px_rgba(255,215,0,0.9)]">
                            Access more features with our Premium subscription!
                          </span>
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="relative z-10 ">

                    <li className="px-4 py-2 hover:bg-[var(--headermenuhover)] cursor-pointer flex gap-x-2 items-center transition-colors duration-200" onClick={() => navigate("/Profile")}>
                      <CgProfile size={20} className="text-[var(--text)]" /> Profile
                    </li>

                    <li className="px-4 py-2 hover:bg-[var(--headermenuhover)] cursor-pointer flex gap-x-2 items-center transition-colors duration-200" onClick={() => navigate("/Sittings")}>
                      <FaGear size={20} className="text-[var(--text)]" /> Settings
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-[var(--headermenuhover)] cursor-pointer flex gap-x-2 items-center text-red-500 transition-colors duration-200"
                      onClick={() => { logout(), navigate("/Home") }}
                    >
                      <MdOutlineLogout size={20} /> Logout
                    </li>
                  </div>
                </ul>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
}

export default Header;
