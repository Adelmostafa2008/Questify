import { Check, Info } from "lucide-react";
import {useNavigate , useLocation} from "react-router-dom";
function Reg(props){
    const location = useLocation();
    const regtype = location.state?.regtype;
    const page = location.state?.page || null;
    const navigate = useNavigate();
    switch(regtype){
        case "login":
            return(
                <>
            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl max:xs:w-1/2 lg:text-4xl text-center w-full mt-5">Quest<span className="text-[#ce7d63]">ify</span></h1>
                <div className="flex flex-col justify-center w-[25%] my-7 mx-auto bg-[#1a1a1a] rounded-lg">
                    <div className="bg-[linear-gradient(to_right,rgba(206,125,99,0.05),rgba(206,125,99,0.1))] border-b-[1px] border-[#333333] text-center text-white rounded-tr-lg rounded-tl-lg flex flex-col ">
                        <h2 className="text-2xl font-semibold mt-6">Welcome Back</h2>
                        <h4 className="text-md text-[#b3b3b2] mt-2 mb-6">Sign in to continue to your account</h4>
                    </div>
                    <div className="flex justify-center mt-5 gap-x-3">
                        <button className="flex w-[40%] text-white border-1 rounded-lg border-[#333333] justify-center py-3 font-semibold"><svg className="max-w-5 max-h-5 fill-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Google</button>
                        <button className="flex w-[40%] text-white border-1 rounded-lg border-[#333333] justify-center py-3 font-semibold"><svg className="max-w-5 max-h-5 fill-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>Facebook</button>
                    </div>

                    <div className="flex items-center justify-center text-gray-400 text-sm my-4 px-6">
                    <hr className="flex-1 border-t border-gray-700" />
                    <span className="mx-3">Or login with email</span>
                    <hr className="flex-1 border-t border-gray-700" />
                    </div>
            
                    <div className="w-[80%] mx-auto ">
                        <form action="">
                            <div className="my-5">

                            <label className="text-md font-semibold text-[#b3b3b2] mt-2">Email Address</label>
                            <br/>
                            <input type="email" required placeholder="Enter your e-mail" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                            </div>
                            <div className="my-5">

                            <label className="text-md font-semibold text-[#b3b3b2]">Password</label>
                            <br/>
                            <input type="password" required placeholder="Enter your password" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                            </div>
                            <a onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "1"}})} className="float-right mt-2 text-[#ce7d63] text-sm font-semibold hover:underline">Forget password?</a>
                            <br/>
                            <div className="mt-2">

                            <input type="checkbox" className="accent-[#ce7d63] mr-1"/>
                            <label className="text-sm font-semibold text-[#b3b3b2] mb-2">Remember me</label>
                            <br/>
                            </div>
                            <button onClick={() => navigate('/Home')} className="bg-[#ce7d63] text-white border-none text-lg font-semibold rounded-lg text-center w-full  py-[6px] px-3 my-5">Login</button>
                            <br/>

                        </form>
                    </div>
                    <div className="bg-[#1a1a1a] border-t-[1px] border-[#333333] py-7 rounded-b-lg">
                        <h4 className="text-white text-center font-semibold">Don't have an account? <a onClick={() => navigate('/Registration' , {state : {regtype : "sign-up"}})} style={{color : "#ce7d63"}}>Sign Up</a></h4>
                    </div>
                </div>
                </>
            );
        break;

        case "sign-up":
             return(
                <>
            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl max:xs:w-1/2 lg:text-4xl text-center w-full mt-5">Quest<span className="text-[#ce7d63]">ify</span></h1>
                <div className="flex flex-col justify-center w-[25%] my-7 mx-auto bg-[#1a1a1a] rounded-lg">
                    <div className="bg-[linear-gradient(to_right,rgba(206,125,99,0.05),rgba(206,125,99,0.1))] border-b-[1px] border-[#333333] text-center text-white rounded-tr-lg rounded-tl-lg flex flex-col ">
                        <h2 className="text-2xl font-semibold mt-6">Create Account</h2>
                        <h4 className="text-md text-[#b3b3b2] mt-2 mb-6">Join our platform to access tasks and challenges</h4>
                    </div>
                     <div className="flex justify-center mt-5 gap-x-3">
                        <button className="flex w-[40%] text-white border-1 rounded-lg border-[#333333] justify-center py-3 font-semibold"><svg className="max-w-5 max-h-5 fill-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Google</button>
                        <button className="flex w-[40%] text-white border-1 rounded-lg border-[#333333] justify-center py-3 font-semibold"><svg className="max-w-5 max-h-5 fill-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>Facebook</button>
                    </div>

                    <div className="flex items-center justify-center text-gray-400 text-sm my-4 px-6">
                    <hr className="flex-1 border-t border-gray-700" />
                    <span className="mx-3">Or sign-up with email</span>
                    <hr className="flex-1 border-t border-gray-700" />
                    </div>
            
                    <div className="w-[80%] mx-auto ">
                        <form action="">
                            <div className="my-5">

                            <label className="text-md font-semibold text-[#b3b3b2] mt-2">Full name</label>
                            <br/>
                            <input type="text" required placeholder="Enter your full name" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                            </div>
                             <div className="my-5">

                            <label className="text-md font-semibold text-[#b3b3b2] mt-2">Email Address</label>
                            <br/>
                            <input type="email" required placeholder="Enter your e-mail" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                            </div>
                            <div className="my-5">

                            <label className="text-md font-semibold text-[#b3b3b2]">Password</label>
                            <br/>
                            <input type="password" required placeholder="Enter your password" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                            </div>
                            <label className="text-md font-semibold text-[#b3b3b2] mt-2">Confirm Password</label>
                            <br/>
                            <input type="password" required placeholder="Confirm your password" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                            <input type="checkbox" className="accent-[#ce7d63] mt-7 mr-2 h-3"/>
                            <label className="text-sm font-bold text-[#b3b3b2]">I agree to the <a href="#terms of service" className="hover:underline"  style={{color : "#ce7d63"}}>Terms of Service</a> and <a href="#privacy policy" className="hover:underline" style={{color : "#ce7d63" }}>Privacy Policy</a></label>
                            <br/>
                            <button onClick={() => navigate('/Home')} className="bg-[#ce7d63] text-white border-none text-lg font-semibold rounded-lg text-center w-full  py-[6px] px-3 my-5">Create Account</button>
                            <br/>

                        </form>
                    </div>
                    <div className="bg-[#1a1a1a] border-t-[1px] border-[#333333] py-7 rounded-b-lg">
                        <h4 className="text-white text-center font-semibold">Already have an account? <a onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} style={{color : "#ce7d63" }}>Login</a></h4>
                    </div>
                </div>
                </>
            );
        break;
        case "forgetPass" :
            switch(page){
                    case "1":
                return(
                    <>
            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl max:xs:w-1/2 lg:text-4xl text-center w-full mt-5">Quest<span className="text-[#ce7d63]">ify</span></h1>
                <div className="flex flex-col justify-center w-[25%] my-7 mx-auto bg-[#1a1a1a] rounded-lg">
                    <div className="bg-[linear-gradient(to_right,rgba(206,125,99,0.05),rgba(206,125,99,0.1))] border-b-[1px] border-[#333333] text-center text-white rounded-tr-lg rounded-tl-lg flex flex-col ">
                        <h2 className="text-2xl font-semibold mt-6">Forgot Password</h2>
                        <h4 className="text-md text-[#b3b3b2] mt-2 mb-6 max-w-[80%] mx-auto">Enter your email address and we'll send you a verification code</h4>
                    </div>

                        <div className="flex items-center justify-center my-5">
                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "1" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center">
                            1
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "2" } })}
                            className="w-12 h-12 rounded-full bg-transparent border-2 text-[#333333] border-[#333333] text-sm flex items-center justify-center">
                            2
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "3" } })}
                            className="w-12 h-12 rounded-full bg-transparent border-2 border-[#333333] text-[#333333] text-sm flex items-center justify-center">
                            3
                        </button>
                        </div>


                    <div className="flex w-[80%] mx-auto bg-[#ce7d631a] border-l-4 border-[#ce7d63] rounded-lg text-md text-[#b3b3b2] py-2 px-3">
                    <p className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-fit mt-1 fill-[#b3b3b2]" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                        We'll send a password reset link to your email address. Please make sure to check your spam folder if you don't see it in your inbox.
                    
                    
                    </p>
                    </div>
              
            
                    <div className="w-[80%] mx-auto mt-3 mb-5">
                        <form action="">
                           
                            <div className="my-5">

                            <label className="text-md font-semibold text-[#b3b3b2] mt-2">Email Address</label>
                            <br/>
                            <input type="email" required placeholder="Enter your e-mail" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                            </div>
                            
                            <button onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "2"}})} className="bg-[#ce7d63] text-white border-none text-lg font-semibold rounded-lg text-center w-full  py-[6px] px-3 mt-1">Send Verification Code</button>
                            <br/>

                        </form>
                    </div>
                    <div  className="bg-[#1a1a1a] border-t-[1px] border-[#333333] py-7 rounded-b-lg">
                        <h4  className="text-white text-center font-semibold">Remember your password? <a onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} style={{color : "#ce7d63" }} className=" hover:underline">Back to Login</a></h4>
                    </div>
                </div>
                </>
            );
            break;
             case "2":
                return(
                    <>
            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl max:xs:w-1/2 lg:text-4xl text-center w-full mt-5">Quest<span className="text-[#ce7d63]">ify</span></h1>
                <div className="flex flex-col justify-center w-[25%] my-7 mx-auto bg-[#1a1a1a] rounded-lg">
                    <div className="bg-[linear-gradient(to_right,rgba(206,125,99,0.05),rgba(206,125,99,0.1))] border-b-[1px] border-[#333333] text-center text-white rounded-tr-lg rounded-tl-lg flex flex-col ">
                        <h2 className="text-2xl font-semibold mt-6">Verification Code</h2>
                        <h4 className="text-md text-[#b3b3b2] mt-2 mb-6 max-w-[80%] mx-auto">Check your balls , i mean your inbox 😏</h4>
                    </div>

                        <div className="flex items-center justify-center my-5">
                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "1" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center">
                            1
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "2" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white border-[#333333] text-sm flex items-center justify-center">
                            2
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "3" } })}
                            className="w-12 h-12 rounded-full bg-transparent border-2 border-[#333333] text-[#333333] text-sm flex items-center justify-center">
                            3
                        </button>
                        </div>

                   <div className="w-30 h-30 rounded-full text-[#3ebf8f] flex items-center justify-center bg-[#3ebf8f1a] mx-auto my-5">
                        <Check size={50}/> 
                    </div>
                    <div className="text-center text-md font-semibold text-white flex flex-col gap-y-5 mt-3 w-[80%] mx-auto">
                        <p>We've sent a verification code to your email address.</p>
                    <p className="text-sm">Didn't recive any Code? <a className="text-[#ce7d63] hover:underline"> Resend</a></p>
                    </div>
            
                    <div className="w-[80%] mx-auto mt-7 mb-5">
                        <form action="">
                           
                            <label className="text-md font-semibold text-[#b3b3b2] mt-2">Verification Code</label>
                            <br/>
                            <input type="text" required placeholder="Enter The Verification Code" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                            
                            <button className="bg-[#ce7d63] text-white border-none text-lg font-semibold rounded-lg text-center w-full  py-[6px] px-3 mt-4" onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "3"}})} >Check</button>
                            <br/>

                        </form>
                    </div>
                    <div  className="bg-[#1a1a1a] border-t-[1px] border-[#333333] py-7 rounded-b-lg">
                        <h4  className="text-white text-center font-semibold">Remember your password? <a onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} style={{color : "#ce7d63" }} className=" hover:underline">Back to Login</a></h4>
                    </div>
                </div>
                </>
            );
            break;
             case "3":
                return(
                    <>
            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl max:xs:w-1/2 lg:text-4xl text-center w-full mt-5">Quest<span className="text-[#ce7d63]">ify</span></h1>
                <div className="flex flex-col justify-center w-[25%] my-7 mx-auto bg-[#1a1a1a] rounded-lg">
                    <div className="bg-[linear-gradient(to_right,rgba(206,125,99,0.05),rgba(206,125,99,0.1))] border-b-[1px] border-[#333333] text-center text-white rounded-tr-lg rounded-tl-lg flex flex-col ">
                        <h2 className="text-2xl font-semibold mt-6">Make new password</h2>
                        <h4 className="text-md text-[#b3b3b2] mt-2 mb-6 max-w-[80%] mx-auto">Memorize it or write it down bitch</h4>
                    </div>

                                            <div className="flex items-center justify-center my-5">
                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "1" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center">
                            1
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "2" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center">
                            2
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "3" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center">
                            3
                        </button>
                        </div>

            
                    <div className="w-[80%] mx-auto mt-7 mb-5">
                        <form action="">
                           <div>

                             <label className="text-md font-semibold text-[#b3b3b2] mt-2">New Password</label>
                            <br/>
                            <input type="password" required placeholder="Create a password" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                           </div>
                           <div className="mt-5">

                            <label className="text-md font-semibold text-[#b3b3b2] mt-2">Confirm New Password</label>
                            <br/>
                            <input type="password" required placeholder="Confirm your password" className="border-[0.5px] border-[#333333] mt-1 rounded-md text-white px-2 py-2 w-full focus:outline-[#ce7d63] focus:outline-[0.5px]"/>
                            <br/>
                           </div>
                            
                            <button className="bg-[#ce7d63] text-white border-none text-lg font-semibold rounded-lg text-center w-full  py-[6px] px-3 mt-5" onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} >Done!</button>
                            <br/>

                        </form>
                    </div>
                    <div  className="bg-[#1a1a1a] border-t-[1px] border-[#333333] py-7 rounded-b-lg">
                        <h4  className="text-white text-center font-semibold">Remember your password? <a onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} style={{color : "#ce7d63" }} className=" hover:underline">Back to Login</a></h4>
                    </div>
                </div>
                </>
            );
            break;
        }
        break;
        default:
            return(<h2>NONE</h2>);
        break;
    }
}

export default Reg;