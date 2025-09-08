import { NavLink, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#131313] flex items-center p-5 w-full rounded-br-md rounded-bl-md shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            <h1 
              onClick={() => navigate('/Home')}
              className="w-1/3 cursor-pointer font-extrabold 
                         text-gray-300 max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl"
            >
              Quest<span className="text-[#ce7d63]">ify</span>
            </h1>

            <div className="flex items-center justify-center gap-6 max-xs:hidden w-1/3 min-w-max">
                {["Home","About","Pricing","Addtask"].map((link) => (
                    <NavLink 
                      key={link}
                      to={`/${link}`}
                      className={({ isActive }) => `
                        font-semibold uppercase tracking-wide
                        transition-all duration-200 ease-in-out
                        ${isActive ? 'text-[#ce7d63]' : 'text-white hover:text-[#ce7d63]'}
                      `}
                    >
                      {link}
                    </NavLink>
                ))}
            </div>

            <div className="flex gap-3 justify-end w-1/3 max-xs:w-1/2">
                <button 
                  className="px-3 py-2 bg-transparent text-[#ce7d63] border-2 border-[#ce7d63] 
                             rounded-md font-bold tracking-wide hover:bg-[#ce7d63]/10 transition-all"
                  onClick={() => navigate('/Registration', { state: { regtype: "login" } })}
                >
                  Login
                </button>

                <button 
                  className="text-white bg-[#ce7d63] px-3 py-2 rounded-md font-bold tracking-wide 
                             hover:bg-[#b86c55] transition-all"
                  onClick={() => navigate('/Registration', { state: { regtype: "sign-up" } })}
                >
                  Sign-up
                </button>
            </div>
        </div>
    );
}

export default Header;
