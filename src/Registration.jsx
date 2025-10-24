import { Check } from "lucide-react";
import {useNavigate , useLocation} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthContext.jsx"; // adjust path if needed
import api from "./AxiosHelper.jsx";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash} from "react-icons/fa";
function Reg(props){
    const location = useLocation();
    const regtype = location.state?.regtype;
    const page = location.state?.page || null;
    const navigate = useNavigate();
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [isChecked , SetIsChecked]  = useState(false);
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState({ username: "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showMainPassword, setShowMainPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loadingSign, setLoadingSign] = useState(false);
    const [successSign, setSuccessSign] = useState(false);
    
    const handleLogin = async () => {
    try {
        const res = await api.post("/regesteration/login", {
        userName: username,
        password: password
        });

         localStorage.setItem("user", JSON.stringify(res.data));

        // save user + token to context
        login(res.data);


    } catch (err) {
        alert(err.response?.data || "Login failed");
        throw err;
    }
    };


    const handleSignup = async () => {

        try {
        const res = await api.post("/regesteration", {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
        });

    } catch (err) {
        alert(err.response?.data || "Signup failed");
        throw err;
    }
    };
    

    switch(regtype){
        case "login":
    return (
        <>
            {/* Logo */}
            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center w-full mt-5">
                Quest<span className="text-[#ce7d63]">ify</span>
            </h1>

            {/* GTA Styled Login Card */}
            <div className="w-[28%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[85%] my-7 mx-auto rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden">
                
                {/* Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
                <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[150px] h-[150px] rounded-full bg-[#ce7d63]/10 blur-2xl"></div>

                <div className="relative z-10 px-7">
                    {/* Header */}
                    <div className="py-6 border-b border-[#333333] text-center">
                        <h2 className="text-2xl font-semibold text-white">Welcome Back</h2>
                        <h4 className="text-md text-[#b3b3b2] mt-2">Login to continue</h4>
                    </div>

                    {/* Social Login */}
                    <div className="flex justify-center mt-6 gap-x-4">
                        <button className="flex items-center justify-center gap-2 w-[45%] text-white border border-[#333333] rounded-md py-3 font-semibold hover:border-[#ce7d63] hover:shadow-[0_0_6px_#ce7d63aa] transition">
                            <svg className="w-5 h-5 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 w-[45%] text-white border border-[#333333] rounded-md py-3 font-semibold hover:border-[#ce7d63] hover:shadow-[0_0_6px_#ce7d63aa] transition">
                            <svg className="w-5 h-5 fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                            Facebook
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center text-gray-400 text-sm my-5">
                        <hr className="flex-1 border-t border-gray-700" />
                        <span className="mx-3">Or login with email</span>
                        <hr className="flex-1 border-t border-gray-700" />
                    </div>

                    {/* Form */}
                    <div className="w-[85%] mx-auto">
                        <form>
                        <div className="mb-5">
                            <label className="text-sm font-semibold text-[#b3b3b2]">Username</label>
                            <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-400" />
                            <input
                                type="text"
                                required
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-2 w-full rounded-md border border-[#333333] bg-transparent text-white pl-10 pr-3 py-2 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] outline-none transition"
                            />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mb-5">
                            <label className="text-sm font-semibold text-[#b3b3b2]">Password</label>
                            <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-2 w-full rounded-md border border-[#333333] bg-transparent text-white pl-10 pr-10 py-2 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] outline-none transition"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/3 text-gray-400 hover:text-gray-200"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-between items-center mt-4">

                        

                        {/* Remember Me */}
                        <div className=" flex items-center w-max">
                            <input
                            type="checkbox"
                            className="accent-[#ce7d63] mr-2 cursor-pointer"
                            />
                            <label className="text-sm font-semibold text-[#b3b3b2]">
                            Remember me
                            </label>
                        </div>
                        <a
                            onClick={() =>
                                navigate("/Registration", { state: { regtype: "forgetPass", page: "1" } })
                            }
                            className="float-right text-[#ce7d63] text-sm font-semibold hover:underline cursor-pointer"
                            >
                            Forgot password?
                        </a>
                        </div>

                        {/* Login Button */}
                        </form>
                                    <button
                        onClick={async () => {
                            if (loading || success) return; 
                            if (!username.trim() || !password.trim()) {
                            alert("Please enter both username and password.");
                            return;
                            }
                            setLoading(true);
                            try {
                                await handleLogin(); 
                                setSuccess(true);
                                setTimeout(() => navigate('/Home'), 500); // Redirect after 1.5s
                            } catch (err) {
                                console.error(err);
                            } finally {
                                setLoading(false);
                            }
                        }}
                        disabled={loading || success}
                        className={`flex items-center justify-center gap-2 px-4 py-2 text-sm w-[100%] mt-5 font-semibold rounded-md  transition-colors duration-300
                        ${success
                            ? "bg-green-600 text-white shadow-[0_0_4px_#16A34A] "
                            : "bg-[#ce7d63] border border-[#ce7d63] text-white shadow-[0_0_4px_#ce7d63aa]"
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
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                                    />
                                </svg>
                                Logging...
                            </>
                        ) : success ? (
                            "Done!"
                        ) : (
                            "Login"
                        )}
                    </button>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#333333] py-6 mt-6 text-center">
                        <h4 className="text-white text-sm">
                            Don’t have an account?{" "}
                            <a 
                                onClick={() => navigate('/Registration', { state: { regtype: "sign-up" } })} 
                                className="text-[#ce7d63] font-semibold hover:underline cursor-pointer"
                            >
                                Sign Up
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );

        break;

       case "sign-up":
            return (
                <>
                {/* Title */}
                <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center w-full mt-5">
                    Quest<span className="text-[#ce7d63]">ify</span>
                </h1>

                {/* Panel */}
                <div className="relative flex flex-col justify-center w-[28%] max-lg:w-[50%] max-sm:w-[90%] my-7 mx-auto bg-[#1a1a1a] rounded-2xl border border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] overflow-hidden">

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
                    <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

                    {/* Header */}
                    <div className="py-6 border-b border-[#333333] text-center">
                    <h2 className="text-2xl font-semibold text-white">Create Account</h2>
                    <h4 className="text-md text-[#b3b3b2] mt-2">Join our platform to access tasks and challenges</h4>
                    </div>

                    {/* Social Login */}
                    <div className="relative z-10 flex justify-center mt-5 gap-x-3">
                    <button className="flex w-[40%] text-white border rounded-lg border-[#333333] justify-center py-3 font-semibold hover:border-[#ce7d63] hover:shadow-[0_0_6px_#ce7d63aa] transition-all">
                        <svg className="max-w-5 max-h-5 fill-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                        Google
                    </button>
                    <button className="flex w-[40%] text-white border rounded-lg border-[#333333] justify-center py-3 font-semibold hover:border-[#ce7d63] hover:shadow-[0_0_6px_#ce7d63aa] transition-all">
                        <svg className="max-w-5 max-h-5 fill-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        Facebook
                    </button>
                    </div>

                    {/* Divider */}
                    <div className="relative z-10 flex items-center justify-center text-gray-400 text-sm my-4 px-6">
                    <hr className="flex-1 border-t border-gray-700" />
                    <span className="mx-3">Or sign up with email</span>
                    <hr className="flex-1 border-t border-gray-700" />
                    </div>

                    {/* Form */}
                    <div className="relative z-10 w-[80%] mx-auto">
                   <form>
                    {/* Username */}
                    <div className="my-5">
                        <label className="text-md font-semibold text-[#b3b3b2]">Username</label>
                        <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            value={newUser.username}
                            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                            required
                            placeholder="Enter your username"
                            className="border border-[#333333] mt-1 rounded-md text-white pl-10 pr-3 py-2 w-full bg-transparent focus:outline-0 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] transition-all"
                        />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="my-5">
                        <label className="text-md font-semibold text-[#b3b3b2]">Email Address</label>
                        <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input
                            type="email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            required
                            placeholder="Enter your e-mail"
                            className="border border-[#333333] mt-1 rounded-md text-white pl-10 pr-3 py-2 w-full bg-transparent focus:outline-0 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] transition-all"
                        />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="my-5">
                        <label className="text-md font-semibold text-[#b3b3b2]">Password</label>
                        <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type={showMainPassword ? "text" : "password"}
                            value={newUser.password}
                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            required
                            placeholder="Enter your password"
                            className="border border-[#333333] mt-1 rounded-md text-white pl-10 pr-12 py-2 w-full bg-transparent focus:outline-0 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowMainPassword(!showMainPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-gray-200"
                        >
                            {showMainPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="my-5">
                        <label className="text-md font-semibold text-[#b3b3b2]">Confirm Password</label>
                        <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            placeholder="Confirm your password"
                            className="border border-[#333333] mt-1 rounded-md text-white pl-10 pr-12 py-2 w-full bg-transparent focus:outline-0 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-gray-200"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start mt-5">
                        <input
                        type="checkbox"
                        className="accent-[#ce7d63] mt-1 mr-2 h-4 w-4 cursor-pointer"
                        onChange={(e) => SetIsChecked(e.target.checked)}
                        />
                        <label className="text-sm font-bold text-[#b3b3b2]">
                        I agree to the{" "}
                        <a href="#terms" className="hover:underline text-[#ce7d63]">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#privacy" className="hover:underline text-[#ce7d63]">
                            Privacy Policy
                        </a>
                        </label>
                    </div>

                    {/* Button */}
                    
                    </form>


                      <button
                        onClick={isChecked ? async () => {
                            if (loadingSign || successSign) return; 
                            if (!newUser.username.trim() || !newUser.email.trim() || !newUser.password.trim() || !isChecked) {
                                alert("Please fill all fields and accept Terms of Service.");
                                return;
                            }
                            setLoadingSign(true);
                            try {
                                await handleSignup(); 
                                setSuccessSign(true);
                                setTimeout(() => navigate('/Registration', { state: { regtype: "login" } }), 500); // Redirect after 1.5s
                            } catch (err) {
                                console.error(err);
                            } finally {
                                setLoadingSign(false);
                            }
                        } : null}
                        disabled={loadingSign || successSign}
                        className={` ${
                        isChecked
                            ? "bg-[#ce7d63] text-white hover:shadow-[0_0_6px_#ce7d63aa]"
                            : "bg-gray-700 text-gray-500 invalidCursor"
                        } flex items-center justify-center gap-2 px-4 py-2 text-sm w-[100%] mt-5 font-semibold rounded-md  transition-colors duration-300
                        ${successSign
                            ? "bg-green-600 text-white shadow-[0_0_4px_#16A34A] "
                            : ""
                        }`}
                    >
                        {loadingSign ? (
                            <>
                                <svg
                                    className="animate-spin h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                                    />
                                </svg>
                                Signing-up...
                            </>
                        ) : successSign ? (
                            "Done!"
                        ) : (
                            "Sign-up"
                        )}
                    </button>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#333333] py-6 mt-6 text-center">
                    <h4 className="text-white text-center font-semibold">
                        Already have an account?{" "}
                        <a onClick={() => navigate('/Registration', { state: { regtype: "login" } })} className="text-[#ce7d63] hover:underline cursor-pointer">
                        Login
                        </a>
                    </h4>
                    </div>
                </div>
                </>
            );

        break;
        case "forgetPass" :
            switch(page){
                    case "1":
    return (
        <>
            {/* Logo */}
            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center w-full mt-5">
                Quest<span className="text-[#ce7d63]">ify</span>
            </h1>

            {/* GTA Styled Forgot Password Card */}
            <div className="w-[28%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[85%] my-7 mx-auto rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden">
                
                {/* Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
                <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[150px] h-[150px] rounded-full bg-[#ce7d63]/10 blur-2xl"></div>

                <div className="relative z-10 px-7">
                    {/* Header */}
                    <div className="py-6 border-b border-[#333333] text-center">
                        <h2 className="text-2xl font-semibold text-white">Forgot Password</h2>
                        <h4 className="text-md text-[#b3b3b2] mt-2">
                            Enter your email and we'll send you a verification code
                        </h4>
                    </div>

                    {/* Steps */}
                    <div className="flex items-center justify-center my-6">
                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "1" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center shadow-[0_0_8px_#ce7d63aa]"
                        >
                            1
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "2" } })}
                            className="w-12 h-12 rounded-full border-2 border-[#333333] text-[#333333] text-sm flex items-center justify-center hover:border-[#ce7d63] hover:text-[#ce7d63] transition"
                        >
                            2
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "3" } })}
                            className="w-12 h-12 rounded-full border-2 border-[#333333] text-[#333333] text-sm flex items-center justify-center hover:border-[#ce7d63] hover:text-[#ce7d63] transition"
                        >
                            3
                        </button>
                    </div>

                    {/* Info Box */}
                    <div className="flex w-[85%] mx-auto bg-[#ce7d631a] border-l-4 border-[#ce7d63] rounded-lg text-sm text-[#b3b3b2] py-3 px-4 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mt-1 mr-3 fill-[#b3b3b2]" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                        <p>
                            We'll send a password reset link to your email. Check your spam folder if you don’t see it.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="w-[85%] mx-auto">
                        <form>
                            <div className="mb-5">
                                <label className="text-sm font-semibold text-[#b3b3b2]">Email Address</label>
                                <input 
                                    type="email" 
                                    required 
                                    placeholder="Enter your e-mail"
                                    className="mt-2 w-full rounded-md border border-[#333333] bg-transparent text-white px-3 py-2 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] outline-none transition"
                                />
                            </div>

                            <button
                                onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "2" } })}
                                className="w-full py-2 bg-[#ce7d63] text-white text-lg font-semibold rounded-md shadow-[0_0_6px_#ce7d63aa] hover:shadow-[0_0_10px_#ce7d63] transition"
                            >
                                Send Verification Code
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#333333] py-6 mt-6 text-center">
                        <h4 className="text-white text-sm">
                            Remember your password?{" "}
                            <a
                                onClick={() => navigate('/Registration', { state: { regtype: "login" } })}
                                className="text-[#ce7d63] font-semibold hover:underline cursor-pointer"
                            >
                                Back to Login
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );

            break;
            case "2":
    return (
        <>
            {/* Logo */}
            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center w-full mt-5">
                Quest<span className="text-[#ce7d63]">ify</span>
            </h1>

            {/* GTA Styled Verification Code Card */}
            <div className="w-[28%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[85%] my-7 mx-auto rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden">
                
                {/* Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
                <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[150px] h-[150px] rounded-full bg-[#ce7d63]/10 blur-2xl"></div>

                <div className="relative z-10 px-7">
                    {/* Header */}
                    <div className="py-6 border-b border-[#333333] text-center">
                        <h2 className="text-2xl font-semibold text-white">Verification Code</h2>
                        <h4 className="text-md text-[#b3b3b2] mt-2">
                            Check your balls , i mean your inbox 😏
                        </h4>
                    </div>

                    {/* Steps */}
                    <div className="flex items-center justify-center my-6">
                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "1" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center shadow-[0_0_8px_#ce7d63aa]"
                        >
                            1
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "2" } })}
                            className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center shadow-[0_0_8px_#ce7d63aa]"
                        >
                            2
                        </button>

                        <div className="w-[20%] h-px bg-[#333333]"></div>

                        <button
                            onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "3" } })}
                            className="w-12 h-12 rounded-full border-2 border-[#333333] text-[#333333] text-sm flex items-center justify-center hover:border-[#ce7d63] hover:text-[#ce7d63] transition"
                        >
                            3
                        </button>
                    </div>

                    {/* Success Icon */}
                    <div className="w-28 h-28 rounded-full text-[#3ebf8f] flex items-center justify-center bg-[#3ebf8f1a] mx-auto my-5 shadow-[0_0_20px_#3ebf8faa]">
                        <Check size={50} />
                    </div>

                    {/* Info */}
                    <div className="text-center text-md font-semibold text-white flex flex-col gap-y-5 mt-3 w-[85%] mx-auto">
                        <p>We've sent a verification code to your email address.</p>
                        <p className="text-sm">
                            Didn’t receive any code?{" "}
                            <a className="text-[#ce7d63] hover:underline cursor-pointer">Resend</a>
                        </p>
                    </div>

                    {/* Form */}
                    <div className="w-[85%] mx-auto mt-7">
                        <form>
                            <div className="mb-5">
                                <label className="text-sm font-semibold text-[#b3b3b2]">
                                    Verification Code
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter the verification code"
                                    className="mt-2 w-full rounded-md border border-[#333333] bg-transparent text-white px-3 py-2 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] outline-none transition"
                                />
                            </div>

                            <button
                                onClick={() => navigate('/Registration', { state: { regtype: "forgetPass", page: "3" } })}
                                className="w-full py-2 bg-[#ce7d63] text-white text-lg font-semibold rounded-md shadow-[0_0_6px_#ce7d63aa] hover:shadow-[0_0_10px_#ce7d63] transition"
                            >
                                Check
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#333333] py-6 mt-6 text-center">
                        <h4 className="text-white text-sm">
                            Remember your password?{" "}
                            <a
                                onClick={() => navigate('/Registration', { state: { regtype: "login" } })}
                                className="text-[#ce7d63] font-semibold hover:underline cursor-pointer"
                            >
                                Back to Login
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );

            break;
             case "3":
  return (
    <>
      {/* Logo */}
      <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center w-full mt-5">
        Quest<span className="text-[#ce7d63]">ify</span>
      </h1>

      {/* GTA Styled Card */}
      <div className="w-[28%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[85%] my-7 mx-auto rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
        <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[150px] h-[150px] rounded-full bg-[#ce7d63]/10 blur-2xl"></div>

        {/* Card Content */}
        <div className="relative z-10 px-7">
          {/* Header */}
          <div className="py-6 border-b border-[#333333] text-center">
            <h2 className="text-2xl font-semibold text-white">Make New Password</h2>
            <h4 className="text-md text-[#b3b3b2] mt-2">
              Memorize it or write it down bitch 😏
            </h4>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-center my-6 ">
            <button
              onClick={() =>
                navigate("/Registration", {
                  state: { regtype: "forgetPass", page: "1" },
                })
              }
              className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center shadow-[0_0_6px_#ce7d63aa]"
            >
              1
            </button>
            <div className="w-[20%] h-px bg-[#333333]"></div>
            <button
              onClick={() =>
                navigate("/Registration", {
                  state: { regtype: "forgetPass", page: "2" },
                })
              }
              className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center shadow-[0_0_6px_#ce7d63aa]"
            >
              2
            </button>
            <div className="w-[20%] h-px bg-[#333333]"></div>
            <button
              onClick={() =>
                navigate("/Registration", {
                  state: { regtype: "forgetPass", page: "3" },
                })
              }
              className="w-12 h-12 rounded-full bg-[#ce7d63] text-white text-sm flex items-center justify-center shadow-[0_0_6px_#ce7d63aa]"
            >
              3
            </button>
          </div>

          {/* Form */}
          <div className="w-[85%] mx-auto mt-5">
            <form>
              <div className="mb-5">
                <label className="text-sm font-semibold text-[#b3b3b2]">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Create a password"
                  className="mt-2 w-full rounded-md border border-[#333333] bg-transparent text-white px-3 py-2 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] outline-none transition"
                />
              </div>

              <div className="mb-5">
                <label className="text-sm font-semibold text-[#b3b3b2]">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Confirm your password"
                  className="mt-2 w-full rounded-md border border-[#333333] bg-transparent text-white px-3 py-2 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] outline-none transition"
                />
              </div>

              <button
                onClick={() =>
                  navigate("/Registration", {
                    state: { regtype: "login" },
                  })
                }
                className="mt-6 w-full py-2 bg-[#ce7d63] text-white text-lg font-semibold rounded-md shadow-[0_0_6px_#ce7d63aa] hover:shadow-[0_0_10px_#ce7d63] transition"
              >
                Done!
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="border-t border-[#333333] py-6 mt-6 text-center">
            <h4 className="text-white text-sm">
              Remember your password?{" "}
              <a
                onClick={() =>
                  navigate("/Registration", { state: { regtype: "login" } })
                }
                className="text-[#ce7d63] font-semibold hover:underline cursor-pointer"
              >
                Back to Login
              </a>
            </h4>
          </div>
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