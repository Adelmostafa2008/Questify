import { NavLink, useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
   
    return(
        <>
        <div className="bg-[#131313] flex items-center p-5 w-[100%] rounded-br-md rounded-bl-md">

       
            <h1 className="text-gray-300 w-1/3 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl max:xs:w-1/2 lg:text-4xl"><a onClick={() => navigate('/Home')}>Quest<span className="text-[#ce7d63]">ify</span></a></h1>
            
            
            <div className="flex items-center justify-center gap-2 max-xs:hidden w-1/3 min-w-max">
                <NavLink to="/Home" className={({ isActive }) => `font-semibold transition-all duration-200 ease-in-out ${isActive ? 'text-[#ce7d63]' : 'text-white hover:text-[#ce7d63]'}`}>Home</NavLink>
                <NavLink to="/About" className={({ isActive }) => `font-semibold transition-all duration-200 ease-in-out ${isActive ? 'text-[#ce7d63]' : 'text-white hover:text-[#ce7d63]'}`}>About</NavLink>
                <NavLink to="/Pricing" className={({ isActive }) => `font-semibold transition-all duration-200 ease-in-out ${isActive ? 'text-[#ce7d63]' : 'text-white hover:text-[#ce7d63]'}`}>Pricing</NavLink>
                <NavLink to="/MyTasks" className={({ isActive }) => `font-semibold transition-all duration-200 ease-in-out ${isActive ? 'text-[#ce7d63]' : 'text-white hover:text-[#ce7d63]'}`}>My Tasks</NavLink>
            </div>

            <div className=" p-0 flex gap-2 items-stretch justify-end  w-1/3 max-xs:w-1/2">

            <button className="px-3 py-2 bg-transparent text-[#ce7d63] border-2 rounded-md font-bold max-lg:px-1.5 max-lg:py-1.5 max-lg:font-[600] max-sm:px-1 max-sm:py-1 max-sm:text-sm" onClick={() => navigate('/Registration' , {state : {regtype : "login"}})}>Login</button>
            <button className="text-white bg-[#ce7d63] px-3 py-2 rounded-md font-semibold max-lg:px-1.5 max-lg:py-1.5 max-lg:font-[600] max-sm:px-1 max-sm:py-1 max-sm:text-sm" onClick={() => navigate('/Registration' , {state : {regtype : "sign-up"}})}>Sign-up</button>   

            </div>
            
        
        </div>

        </>
    );
}

export default Header;