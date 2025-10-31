import Facebook from './assets/socialMediaIcons/facebook.png'
import X from './assets/socialMediaIcons/X.png'
import Linkedin from './assets/socialMediaIcons/linkedin.png'
import GitHub from './assets/socialMediaIcons/github.png'
import { NavLink, useNavigate } from "react-router-dom";
import { useSnack } from './SnackBarContext.jsx';

function Footer() {
  const navigate = useNavigate();
  const {ShowSnackBar} = useSnack()

  return (
    <footer className="bg-[#131313] text-white py-10 mt-10 rounded-t-md">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h1
            onClick={() => navigate('/Home')}
            className="text-4xl font-extrabold cursor-pointer text-gray-300  hover:scale-105 transition-transform duration-200"
          >
            Quest<span className="text-[#ce7d63]">ify</span>
          </h1>

        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold">Navigate:</label>
          {["Home", "About", "Pricing", "Addtask"].map((page) => (
            <NavLink
              key={page}
              to={`/${page}`}
              className={({ isActive }) =>
                `transition-all duration-200 font-medium tracking-wide ${
                  isActive ? 'text-[#ce7d63]' : 'text-white hover:text-[#ce7d63]'
                }`
              }
            >
              {page}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <label className="text-lg font-semibold">Stay in touch:</label>
            <ul className="flex gap-4 mt-3">
              <li onClick={() => navigate("/Facebook")}><img src={Facebook} alt="Facebook" className="w-6 h-6 opacity-80 hover:opacity-100 transition" /></li>
              <li onClick={() => navigate("/X")}><img src={X} alt="X" className="w-6 h-6 opacity-80 hover:opacity-100 transition" /></li>
              <li onClick={() => navigate("/LinkedIn")}><img src={Linkedin} alt="LinkedIn" className="w-6 h-6 opacity-80 hover:opacity-100 transition" /></li>
              <li onClick={() => navigate("/GitHub")}><img src={GitHub} alt="GitHub" className="w-6 h-6 opacity-80 hover:opacity-100 transition" /></li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-lg font-semibold">Report a bug:</label>
          <div className="flex ">
            <input
              type="text"
              placeholder="Tell us what's broken..."
              className="flex-grow px-3 py-1 rounded bg-[#1f1f1f] text-white border border-gray-600 rounded-r-none focus:border-[#ce7d63] focus:outline-none"
            />
            <button onClick={() => ShowSnackBar("This service is still under construction" , "info")} className="bg-[#ce7d63] px-4 py-1 rounded text-white hover:bg-[#a8634f] transition rounded-l-none font-bold">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500 tracking-widest">
        © {new Date().getFullYear()} Questify — Built for doers.
      </div>
    </footer>
  );
}

export default Footer;
