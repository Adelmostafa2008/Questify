import { NavLink, useNavigate } from "react-router-dom";
import { useSnack } from './SnackBarContext.jsx';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();
  const { ShowSnackBar } = useSnack()
  const [cool, setCool] = useState(false);

  const handelSnack = () => {
    setCool(true);
    ShowSnackBar("This service is still under construction", "info");
    setTimeout(() => { setCool(false); }, 5000);
  };

  return (
    <footer className="bg-[var(--headerbg)] text-white py-10 mt-10 rounded-t-md shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h1
            onClick={() => navigate('/Home')}
            className="text-4xl font-extrabold cursor-pointer text-[var(--subtext)]  hover:scale-105 transition-transform duration-200"
          >
            Quest<span className="text-[var(--text)]">ify</span>
          </h1>

        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg text-[var(--subtext)] font-semibold">Navigate:</label>
          {["Home", "About", "Pricing", "Addtask"].map((page) => (
            <NavLink
              key={page}
              to={`/${page}`}
              className={({ isActive }) =>
                `transition-all duration-200 font-medium tracking-wide ${isActive ? 'text-[var(--text)]' : 'text-[var(--tasktext)] hover:text-[var(--text)]'
                }`
              }
            >
              {page}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <label className="text-lg font-semibold text-[var(--subtext)]">Stay in touch:</label>
            <ul className="flex gap-4 mt-3">
              <li onClick={() => navigate("/Facebook")}><FaSquareFacebook className="text-[var(--text)] w-6 h-6 opacity-80 hover:opacity-100 transition" /></li>
              <li onClick={() => navigate("/X")}><FaSquareXTwitter className="text-[var(--text)] w-6 h-6 opacity-80 hover:opacity-100 transition" /></li>
              <li onClick={() => navigate("/LinkedIn")}><FaLinkedin className="text-[var(--text)] w-6 h-6 opacity-80 hover:opacity-100 transition" /></li>
              <li onClick={() => navigate("/GitHub")}><FaGithub className="text-[var(--text)] w-6 h-6 opacity-80 hover:opacity-100 transition" /></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col gap-3">
          <label className="text-lg font-semibold text-[var(--subtext)]">Report a bug:</label>
          <div className="flex ">
            <input
              type="text"
              placeholder="Tell us what's broken..."
              className="flex-grow px-3 py-1 rounded bg-[var(--cardbg)] text-[var(--subtext)] border border-r-transparent border-gray-600 rounded-r-none focus:border-[var(--text)] focus:outline-none"
            />
            <button onClick={() => cool ? null : handelSnack()} className="bg-[var(--text)] px-4 py-1 rounded text-white hover:bg-[var(--ce7hover)] transition rounded-l-none font-bold">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-[var(--subtext)] tracking-widest">
        © {new Date().getFullYear()} Questify — Built for doers.
      </div>
    </footer>
  );
}

export default Footer;
