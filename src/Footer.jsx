import Facebook from './assets/socialMediaIcons/facebook.png';
import X from './assets/socialMediaIcons/X.png';
import Linkedin from './assets/socialMediaIcons/linkedin.png';
import GitHub from './assets/socialMediaIcons/github.png';
import { NavLink, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#131313] text-white py-10 mt-10 rounded-t-md">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        
        <div>
          <h1
            onClick={() => navigate('/Home')}
            className="text-4xl font-bold cursor-pointer text-gray-300"
          >
            Quest<span className="text-[#ce7d63]">ify</span>
          </h1>
        </div>

     
        <div className="flex flex-col gap-2">
          <label className="text-lg">Pages:</label>
          {["Home", "About", "Pricing", "Addtask"].map((page) => (
            <NavLink
              key={page}
              to={`/${page}`}
              className={({ isActive }) =>
                `transition-colors duration-200 font-semibold ${
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
            <label className="text-lg">Follow us:</label>
            <ul className="flex gap-4 mt-2">
              <li><img src={Facebook} alt="Facebook" className="w-6 h-6" /></li>
              <li><img src={X} alt="X" className="w-6 h-6" /></li>
              <li><img src={Linkedin} alt="LinkedIn" className="w-6 h-6" /></li>
              <li><img src={GitHub} alt="GitHub" className="w-6 h-6" /></li>
            </ul>
          </div>
          <div className="flex items-center">
            <label className="mr-2">Language:</label>
            <select className="bg-[#1f1f1f] p-1 rounded">
              <option>English</option>
              <option>Arabic</option>
              <option>German</option>
              <option>Russian</option>
            </select>
          </div>
        </div>

      
        <div className="flex flex-col gap-3">
          <label className="text-lg">Report issues or bugs:</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your problem..."
              className="flex-grow px-3 py-1 rounded bg-[#1f1f1f] text-white border border-gray-600"
            />
            <button className="bg-[#ce7d63] px-4 py-1 rounded text-white hover:bg-[#a8634f] transition">
              ╰┈➤
            </button>
          </div>
        </div>
      </div>

    
      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Questify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
