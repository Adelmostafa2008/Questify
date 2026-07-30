import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState, useEffect, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function Header() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change / link click
  const handleNavClick = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const pageLinks = ["Home", "About", "Pricing", "Addtask"];

  //console.log(user)

  return (
    <div className="bg-[var(--headerbg)] w-full rounded-br-md rounded-bl-md">
      <div className="flex items-center p-5">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer font-extrabold text-[var(--subtext)] text-2xl sm:text-3xl md:text-3xl lg:text-4xl shrink-0"
        >
          Quest
          <span
            className={`${theme == "dark" ? "text-[var(--text)]" : "text-[#7D818A]"}`}
          >
            ify
          </span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 mx-auto">
          {pageLinks.map((link) => (
            <NavLink
              key={link}
              to={`/${link}`}
              className={({ isActive }) => `
                        font-semibold uppercase tracking-wide text-xs sm:text-sm lg:text-base whitespace-nowrap
                        transition-all duration-200 ease-in-out
                        ${isActive ? "text-[var(--text)]" : "text-[var(--tasktext)] hover:text-[var(--text)]"}
                      `}
            >
              {link}
            </NavLink>
          ))}
        </div>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center p-2 hover:bg-[var(--headermenuhover)] rounded-lg transition-colors duration-200"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <IoClose size={28} className="text-[var(--text)]" />
          ) : (
            <IoMenu size={28} className="text-[var(--text)]" />
          )}
        </button>

        <div className="flex gap-3 justify-end shrink-0 ml-auto md:ml-0">
          {!user ? (
            <>
              <button
                className="px-3 py-2 bg-transparent text-[var(--text)] border-2 border-[var(--text)] 
                rounded-md font-bold tracking-wide hover:bg-[var(--ce7hover)] hover:text-white hover:border-transparent hover:cursor-pointer transition-all"
                onClick={() => navigate("/Registration?regtype=login")}
              >
                Login
              </button>

              <button
                className="text-white bg-[var(--buttonbg)] px-3 py-2 border-2 border-transparent rounded-md font-bold tracking-wide 
                  hover:bg-transparent hover:border-[var(--text)] hover:py-0  hover:text-[var(--text)]  transition-all hover:cursor-pointer"
                onClick={() => navigate("/Registration?regtype=sign-up")}
              >
                Sign-up
              </button>
            </>
          ) : (
            <div className="relative text-[var(--tasktext)]" ref={menuRef}>
              <img
                src={
                  user?.profilePic
                    ? `${user.profilePic}`
                    : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                }
                alt="profile"
                className="w-[45px] h-[45px] rounded-full cursor-pointer border-2 border-[var(--text)] hover:scale-105 transition-transform duration-200"
                onClick={() => setOpen((prev) => !prev)}
              />

              {open && (
                <div>
                  <ul className="absolute right-0 min-w-max mt-3 bg-[var(--headerbg)] border border-[var(--anyborder)] rounded-2xl overflow-hidden z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>

                    <div className="flex items-center gap-x-3 px-4 py-3 relative z-10 border-b border-[var(--anyborder)]">
                      <img
                        src={
                          user?.profilePic
                            ? `${user.profilePic}`
                            : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        }
                        className="w-[60px] h-[60px] rounded-full border-2 border-[var(--text)]"
                      />
                      <div className="flex flex-col">
                        <h2
                          className="truncate w-[150px] text-lg font-extrabold text-[var(--text)] tracking-wide"
                          style={{ fontFamily: "'Pricedown', sans-serif" }}
                        >
                          {user.username}
                        </h2>
                        <div className="group">
                          <p
                            className="hover:cursor-pointer text-xs italic break-words max-w-[150px] relative"
                            onClick={() => navigate("/Pricing")}
                          >
                            <span className="relative z-0 text-[var(--subtext)] transition-colors duration-500 ease-in-out group-hover:text-transparent">
                              Access more features with our Premium
                              subscription!
                            </span>

                            <span
                              className="absolute inset-0 z-10 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 
                                        bg-clip-text text-transparent opacity-0 
                                        transition-opacity duration-500 ease-in-out 
                                        group-hover:opacity-100"
                            >
                              Access more features with our Premium
                              subscription!
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 ">
                      <li
                        className="px-4 py-2 hover:bg-[var(--headermenuhover)] cursor-pointer flex gap-x-2 items-center transition-colors duration-200"
                        onClick={() => navigate("/Profile")}
                      >
                        <CgProfile size={20} className="text-[var(--text)]" />{" "}
                        Profile
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-[var(--headermenuhover)] cursor-pointer flex gap-x-2 items-center transition-colors duration-200"
                        onClick={() => navigate("/Sittings")}
                      >
                        <FaGear size={20} className="text-[var(--text)]" />{" "}
                        Settings
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-[var(--headermenuhover)] cursor-pointer flex gap-x-2 items-center text-red-500 transition-colors duration-200"
                        onClick={() => {
                          (logout(), navigate("/"));
                        }}
                      >
                        <MdOutlineLogout size={20} /> Logout
                      </li>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-2 border-t border-[var(--anyborder)] bg-[var(--headerbg)]">
          <nav className="flex flex-col gap-1">
            {pageLinks.map((link) => (
              <NavLink
                key={link}
                to={`/${link}`}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `
                  block w-full text-left px-4 py-3 rounded-lg font-semibold uppercase tracking-wide text-sm
                  transition-all duration-200
                  ${
                    isActive
                      ? "text-[var(--text)] bg-[var(--headermenuhover)]"
                      : "text-[var(--tasktext)] hover:bg-[var(--headermenuhover)] hover:text-[var(--text)]"
                  }
                `}
              >
                {link}
              </NavLink>
            ))}
          </nav>

          {/* Mobile auth buttons */}
          {!user && (
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-[var(--anyborder)]">
              <button
                onClick={() => handleNavClick("/Registration?regtype=login")}
                className="w-full px-4 py-3 text-center bg-transparent text-[var(--text)] border-2 border-[var(--text)] rounded-md font-bold tracking-wide hover:bg-[var(--ce7hover)] hover:text-white hover:border-transparent transition-all"
              >
                Login
              </button>
              <button
                onClick={() => handleNavClick("/Registration?regtype=sign-up")}
                className="w-full px-4 py-3 text-center text-white bg-[var(--buttonbg)] border-2 border-transparent rounded-md font-bold tracking-wide hover:bg-transparent hover:border-[var(--text)] hover:text-[var(--text)] transition-all"
              >
                Sign-up
              </button>
            </div>
          )}

          {/* Mobile user menu */}
          {user && (
            <div className="flex flex-col gap-1 mt-3 pt-3 border-t border-[var(--anyborder)]">
              <button
                onClick={() => handleNavClick("/Profile")}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-[var(--tasktext)] hover:bg-[var(--headermenuhover)] transition-all duration-200"
              >
                <CgProfile size={20} className="text-[var(--text)]" /> Profile
              </button>
              <button
                onClick={() => handleNavClick("/Sittings")}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-[var(--tasktext)] hover:bg-[var(--headermenuhover)] transition-all duration-200"
              >
                <FaGear size={20} className="text-[var(--text)]" /> Settings
              </button>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                  setMobileOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-500 hover:bg-[var(--headermenuhover)] transition-all duration-200"
              >
                <MdOutlineLogout size={20} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
