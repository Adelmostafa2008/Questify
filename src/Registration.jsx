import { Check } from "lucide-react";
import { useNavigate, useLocation, data } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthContext.jsx"; // adjust path if needed
import api from "./AxiosHelper.jsx";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useSnack } from "./SnackBarContext.jsx";
import { useSearchParams } from "react-router-dom";
import { GoogleLogin  } from "@react-oauth/google";


function Reg(props) {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("regtype");
    const location = useLocation();
    const page = location.state?.page || null;
    const navigate = useNavigate();
    const [confirmPass, setConfirmPass] = useState();
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [isChecked, SetIsChecked] = useState(false);
    const [cool, setCool] = useState(false);
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState({ username: "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showMainPassword, setShowMainPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loadingSign, setLoadingSign] = useState(false);
    const [successSign, setSuccessSign] = useState(false);
    // const [snackbar, setSnackbar] = useState({ message: "", type: "" });
    const { ShowSnackBar } = useSnack();

    const handleLogin = async () => {
        try {
            const res = await api.post("/regesteration/login", {
                userName: username,
                password: password
            });

            //console.log(res.data);
            // localStorage.setItem("user", JSON.stringify(res.data));
            // save user + token to context
            login(res.data);


        } catch (err) {
           // console.log(res.data);
           //console.log(err.response.data["error"]);
            if(err.response.data["error"] != null && err.response.data["error"] == "google_account"){
                {cool ? null : 

                    handelSnack(
                        "This account uses Google Sign-In.\n Please continue with Google.",
                        "warn"
                    );
                }
            }
            else {
                console.log(err)
                   {cool ? null : 
                    
                    handelSnack(err.response.data, "error");
                }
            }
            throw err;
        }
    };

    const handelGoogleLogin = async (creds) => {
        try {
            const res = await api.post("/regesteration/google" , {Credintial : creds})
            login(res.data);
            navigate("/Home");
        } catch (error) {
            throw error;
        }
    }

    const handleSignup = async () => {

        try {
            const res = await api.post("/regesteration", {
                username: newUser.username,
                email: newUser.email,
                password: newUser.password
            });


        } catch (err) {
            //console.log(err.response.data.errors.email.length);
            if (err.response?.data?.errors?.email?.length > 0) {
                   {cool ? null : 
                    
                    handelSnack("Email address is not vaild", "error");
                }
            } else {
                   {cool ? null : 
                    
                    handelSnack(err.response.data, "error");
                }
            }
            throw err;
        }
    };

  const handelSnack = (msg , ty) => {
    setCool(true);
    ShowSnackBar(msg, ty);
    setTimeout(() => { setCool(false); }, 5000);
  };

    switch (type) {
        case "login":
            return (
                <>
                    {/* Logo */}
                    <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center w-full mt-5">
                        Quest<span className="text-[var(--text)]">ify</span>
                    </h1>

                    {/* GTA Styled Login Card */}
                    <div className="w-[28%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[85%] my-7 mx-auto rounded-2xl bg-[var(--cardbg)] border-2 border-[var(--anyborder)] relative overflow-hidden">

                        {/* Background Layers */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>

                        <div className="relative z-10 px-7">
                            {/* Header */}
                            <div className="py-6 border-b border-[var(--anyborder)] text-center">
                                <h2 className="text-2xl font-semibold text-[var(--tasktext)]">Welcome Back</h2>
                                <h4 className="text-md text-[var(--subtext)] mt-2">Login to continue</h4>
                            </div>

                            {/* Social Login */}
                            <div className="flex justify-center mt-6 gap-x-4 relative">
                                 <div className="absolute inset-0 opacity-0">
        <GoogleLogin
            onSuccess={(cred) => handelGoogleLogin(cred.credential)}
            onError={() => handelSnack("Google Login Failed" , "error")}
        />
    </div>
                                 <button  className="flex items-center justify-center gap-2 w-full text-[var(--tasktext)] border border-[var(--anyborder)] rounded-md py-3 font-semibold hover:border-[var(--text)] transition">
                                    <svg className="w-5 h-5 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                                    Countinue With Google
                                </button>
                                
                              
                            </div>

                            {/* Divider */}
                            <div className="flex items-center justify-center text-[var(--subtext)] text-sm my-5">
                                <hr className="flex-1 border-t border-gray-700" />
                                <span className="mx-3">Or login with email</span>
                                <hr className="flex-1 border-t border-gray-700" />
                            </div>

                            {/* Form */}
                            <div className="w-[85%] mx-auto">
                                <form>
                                    <div className="mb-5">
                                        <label className="text-sm font-semibold text-[var(--subtext)]">Username</label>
                                        <div className="relative">
                                            <FaUser className="absolute left-3 top-1/2 -translate-y-1/3 text-[var(--subtext)]" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                className="mt-2 w-full rounded-md border border-[var(--textfieldboarder)] bg-transparent text-[var(--tasktext)] pl-10 pr-3 py-2 focus:border-[var(--text)] outline-none transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="mb-5">
                                        <label className="text-sm font-semibold text-[var(--subtext)]">Password</label>
                                        <div className="relative">
                                            <FaLock className="absolute left-3 top-1/2 -translate-y-1/3 text-[var(--subtext)]" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                required
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="mt-2 w-full rounded-md border border-[var(--textfieldboarder)] bg-transparent text-[var(--tasktext)] pl-10 pr-10 py-2 focus:border-[var(--text)] outline-none transition"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/3  "
                                            >
                                                {showPassword ? <FaEyeSlash className="text-[var(--subtext)]" /> : <FaEye className="text-[var(--text)]" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Forgot Password */}
                                    <div className="flex justify-between items-center mt-4">



                                        {/* Remember Me */}
                                        <div className=" flex items-center w-max">
                                            <input
                                                type="checkbox"
                                                className="accent-[var(--text)] mr-2 cursor-pointer"
                                            />
                                            <label className="text-sm font-semibold text-[var(--subtext)]">
                                                Remember me
                                            </label>
                                        </div>
                                        <a
                                            onClick={() =>
                                                navigate("/Registration?regtype=forgetPass", { state: { page: "1" } })
                                            }
                                            className="float-right text-[var(--text)] text-sm font-semibold hover:underline cursor-pointer"
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
                                               {cool ? null : 
                    
                                                handelSnack("Please enter both username and password.", "info");
                                            }
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
                                    className={`flex items-center justify-center gap-2 px-4 hover:bg-[var(--ce7hover)] py-2 text-sm w-[100%] mt-5 font-semibold rounded-md  transition-colors duration-300
                        ${success
                                            ? "bg-green-600 text-white"
                                            : "bg-[var(--buttonbg)] border border-[var(--buttonbg)] text-white"
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="animate-spin h-4 w-4 text-[var(--tasktext)]"
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
                            <div className="border-t border-[var(--anyborder)] py-6 mt-6 text-center">
                                <h4 className="text-[var(--tasktext)] text-sm">
                                    Don’t have an account?{" "}
                                    <a
                                        onClick={() => navigate('/Registration?regtype=sign-up')}
                                        className="text-[var(--text)] font-semibold hover:underline cursor-pointer"
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
                        Quest<span className="text-[var(--text)]">ify</span>
                    </h1>

                    {/* Panel */}
                    <div className="relative flex flex-col justify-center w-[28%] max-lg:w-[50%] max-sm:w-[90%] my-7 mx-auto bg-[var(--cardbg)] rounded-2xl border border-[var(--anyborder)] overflow-hidden">

                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>

                        {/* Header */}
                        <div className="py-6 border-b border-[var(--anyborder)] text-center">
                            <h2 className="text-2xl font-semibold text-[var(--tasktext)]">Create Account</h2>
                            <h4 className="text-md text-[var(--subtext)] mt-2">Join our platform to access tasks and challenges</h4>
                        </div>

                        {/* Social Login */}
                  <div className="flex justify-center mt-6 gap-x-4 relative">
                                 <div className="absolute inset-0 opacity-0">
        <GoogleLogin
            onSuccess={(cred) => handelGoogleLogin(cred.credential)}
            onError={() => handelSnack("Google Login Failed" , "error")}
        />
    </div>
                                 <button  className="flex items-center justify-center gap-2 w-full mx-5 text-[var(--tasktext)] border border-[var(--anyborder)] rounded-md py-3 font-semibold hover:border-[var(--text)] transition">
                                    <svg className="w-5 h-5 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                                    Countinue With Google
                                </button>
                                
                              
                            </div>

                        {/* Divider */}
                        <div className="relative z-10 flex items-center justify-center text-[var(--subtext)] text-sm my-4 px-6">
                            <hr className="flex-1 border-t border-gray-700" />
                            <span className="mx-3">Or sign up with email</span>
                            <hr className="flex-1 border-t border-gray-700" />
                        </div>

                        {/* Form */}
                        <div className="relative z-10 w-[80%] mx-auto">
                            <form>
                                {/* Username */}
                                <div className="my-5">
                                    <label className="text-md font-semibold text-[var(--subtext)]">Username</label>
                                    <div className="relative">
                                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--subtext)]" />
                                        <input
                                            type="text"
                                            value={newUser.username}
                                            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                                            required
                                            placeholder="Enter your username"
                                            className="border border-[var(--textfieldboarder)] mt-1 rounded-md text-[var(--tasktext)] pl-10 pr-3 py-2 w-full bg-transparent focus:outline-0 focus:border-[var(--text)] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="my-5">
                                    <label className="text-md font-semibold text-[var(--subtext)]">Email Address</label>
                                    <div className="relative">
                                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--subtext)]" />
                                        <input
                                            type="email"
                                            value={newUser.email}
                                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                            required
                                            placeholder="Enter your e-mail"
                                            className="border border-[var(--textfieldboarder)] mt-1 rounded-md text-[var(--tasktext)] pl-10 pr-3 py-2 w-full bg-transparent focus:outline-0 focus:border-[var(--text)] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="my-5">
                                    <label className="text-md font-semibold text-[var(--subtext)]">Password</label>
                                    <div className="relative">
                                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--subtext)]" />
                                        <input
                                            type={showMainPassword ? "text" : "password"}
                                            value={newUser.password}
                                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                            required
                                            placeholder="Enter your password"
                                            className="border border-[var(--textfieldboarder)] mt-1 rounded-md text-[var(--tasktext)] pl-10 pr-12 py-2 w-full bg-transparent focus:outline-0 focus:border-[var(--text)] transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowMainPassword(!showMainPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm "
                                        >
                                            {showMainPassword ? <FaEyeSlash className="text-[var(--subtext)]" /> : <FaEye className="text-[var(--text)]" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="my-5">
                                    <label className="text-md font-semibold text-[var(--subtext)]">Confirm Password</label>
                                    <div className="relative">
                                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--subtext)]" />
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            required
                                            placeholder="Confirm your password"
                                            onChange={(e) => setConfirmPass(e.target.value)}
                                            className="border border-[var(--textfieldboarder)] mt-1 rounded-md text-[var(--tasktext)] pl-10 pr-12 py-2 w-full bg-transparent focus:outline-0 focus:border-[var(--text)] transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm "
                                        >
                                            {showConfirmPassword ? <FaEyeSlash className="text-[var(--subtext)]" /> : <FaEye className="text-[var(--text)]" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-start mt-5">
                                    <input
                                        type="checkbox"
                                        className="accent-[var(--text)] mt-1 mr-2 h-4 w-4 cursor-pointer"
                                        onChange={(e) => SetIsChecked(e.target.checked)}
                                    />
                                    <label className="text-sm font-bold text-[var(--subtext)]">
                                        I agree to the{" "}
                                        <a href="#terms" className="hover:underline text-[var(--text)]">
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a href="#privacy" className="hover:underline text-[var(--text)]">
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
                                           {cool ? null : 
                    
                                            handelSnack("Please fill all fields and accept Terms of Service.", "info");
                                        }
                                        return;
                                    }
                                    if (confirmPass !== newUser.password) {
                                           {cool ? null : 
                    
                                            handelSnack("Password and Confirm password are not equal", "error");
                                        }
                                        return;
                                    }
                                    setLoadingSign(true);
                                    try {
                                        await handleSignup();
                                        setSuccessSign(true);
                                        setTimeout(() => navigate('/Registration?regtype=login'), 500); // Redirect after 1.5s
                                    } catch (err) {
                                        console.error(err);
                                    } finally {
                                        setLoadingSign(false);
                                    }
                                } : null}
                                disabled={loadingSign || successSign}
                                className={` ${isChecked
                                    ? "bg-[var(--buttonbg)] text-white hover:bg-[var(--ce7hover)]"
                                    : "bg-transparent text-gray-500 border border-gray-600 invalidCursor"
                                    } flex items-center justify-center gap-2 px-4 py-2 text-sm w-[100%] mt-5 font-semibold rounded-md  transition-colors duration-300
                        ${successSign
                                        ? "bg-green-600 text-white"
                                        : ""
                                    }`}
                            >
                                {loadingSign ? (
                                    <>
                                        <svg
                                            className="animate-spin h-4 w-4 text-[var(--tasktext)]"
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
                        <div className="border-t border-[var(--anyborder)] py-6 mt-6 text-center">
                            <h4 className="text-[var(--tasktext)] text-sm">
                                Already have an account?{" "}
                                <a onClick={() => navigate('/Registration?regtype=login')} className="text-[var(--text)] hover:underline font-semibold cursor-pointer">
                                    Login
                                </a>
                            </h4>
                        </div>
                    </div>
                </>
            );

            break;
        case "forgetPass":
            switch (page) {
                case "1":
                    return (
                        <>
                            {/* Logo */}
                            <h1 className="text-gray-300 font-bold m-0 max-sm:text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center w-full mt-5">
                                Quest<span className="text-[var(--text)]">ify</span>
                            </h1>

                            {/* GTA Styled Forgot Password Card */}
                            <div className="w-[28%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[85%] my-7 mx-auto rounded-2xl bg-[var(--cardbg)] border-2 border-[var(--anyborder)] relative overflow-hidden">

                                {/* Background Layers */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>


                                <div className="relative z-10 px-7">
                                    {/* Header */}
                                    <div className="py-6 border-b border-[var(--anyborder)] text-center">
                                        <h2 className="text-2xl font-semibold text-[var(--tasktext)]">Forgot Password</h2>
                                        <h4 className="text-md text-[var(--subtext)] mt-2">
                                            Enter your email and we'll send you a verification code
                                        </h4>
                                    </div>

                                    {/* Steps */}
                                    <div className="flex items-center justify-center my-6">
                                        <button
                                            onClick={() => navigate('/Registration?regtype=forgetPass', { state: { page: "1" } })}
                                            className="w-12 h-12 rounded-full bg-[var(--buttonbg)] text-white text-sm flex items-center justify-center"
                                        >
                                            1
                                        </button>

                                        <div className="w-[20%] h-px bg-[var(--anyborder)]"></div>

                                        <button
                                            onClick={() => navigate('/Registration?regtype=forgetPass', { state: { page: "2" } })}
                                            className="w-12 h-12 rounded-full border-2 border-[var(--anyborder)] text-[var(--subtext)] text-sm flex items-center justify-center hover:border-[var(--text)] hover:text-[var(--text)] transition"
                                        >
                                            2
                                        </button>

                                        <div className="w-[20%] h-px bg-[var(--anyborder)]"></div>

                                        <button
                                            onClick={() => navigate('/Registration?regtype=forgetPass', { state: { page: "3" } })}
                                            className="w-12 h-12 rounded-full border-2 border-[var(--anyborder)] text-[var(--subtext)] text-sm flex items-center justify-center hover:border-[var(--text)] hover:text-[var(--text)] transition"
                                        >
                                            3
                                        </button>
                                    </div>

                                    {/* Info Box */}
                                    <div className="flex w-[85%] mx-auto bg-[var(--text)]/10 border-l-4 border-[var(--text)] rounded-lg text-sm text-[var(--subtext)] py-3 px-4 mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mt-1 mr-3 fill-[var(--subtext)]" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>
                                        <p>
                                            We'll send a password reset link to your email. Check your spam folder if you don’t see it.
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <div className="w-[85%] mx-auto">
                                        <form>
                                            <div className="mb-5">
                                                <label className="text-sm font-semibold text-[var(--subtext)]">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Enter your e-mail"
                                                    className="mt-2 w-full rounded-md border border-[var(--textfieldboarder)] bg-transparent text-[var(--tasktext)] px-3 py-2 focus:border-[var(--text)] outline-none transition"
                                                />
                                            </div>

                                            <button
                                                onClick={() => navigate('/Registration?regtype=forgetPass', { state: { page: "2" } })}
                                                className="w-full py-2 bg-[var(--buttonbg)] text-white text-lg font-semibold rounded-md transition"
                                            >
                                                Send Verification Code
                                            </button>
                                        </form>
                                    </div>

                                    {/* Footer */}
                                    <div className="border-t border-[var(--anyborder)] py-6 mt-6 text-center">
                                        <h4 className="text-[var(--tasktext)] text-sm">
                                            Remember your password?{" "}
                                            <a
                                                onClick={() => navigate('/Registration?regtype=login')}
                                                className="text-[var(--text)] font-semibold hover:underline cursor-pointer"
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
                                Quest<span className="text-[var(--text)]">ify</span>
                            </h1>

                            {/* GTA Styled Verification Code Card */}
                            <div className="w-[28%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[85%] my-7 mx-auto rounded-2xl bg-[var(--cardbg)] border-2 border-[var(--anyborder)] relative overflow-hidden">

                                {/* Background Layers */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>


                                <div className="relative z-10 px-7">
                                    {/* Header */}
                                    <div className="py-6 border-b border-[var(--anyborder)] text-center">
                                        <h2 className="text-2xl font-semibold text-[var(--tasktext)]">Verification Code</h2>
                                        <h4 className="text-md text-[var(--subtext)] mt-2">
                                            Check your....inbox 😏
                                        </h4>
                                    </div>

                                    {/* Steps */}
                                    <div className="flex items-center justify-center my-6">
                                        <button
                                            onClick={() => navigate('/Registration?regtype=forgetPass', { state: { page: "1" } })}
                                            className="w-12 h-12 rounded-full bg-[var(--buttonbg)] text-white text-sm flex items-center justify-center"
                                        >
                                            1
                                        </button>

                                        <div className="w-[20%] h-px bg-[var(--anyborder)]"></div>

                                        <button
                                            onClick={() => navigate('/Registration?regtype=forgetPass', { state: { page: "2" } })}
                                            className="w-12 h-12 rounded-full bg-[var(--buttonbg)] text-white text-sm flex items-center justify-center"
                                        >
                                            2
                                        </button>

                                        <div className="w-[20%] h-px bg-[var(--anyborder)]"></div>

                                        <button
                                            onClick={() => navigate('/Registration?regtype=forgetPass', { state: { page: "3" } })}
                                            className="w-12 h-12 rounded-full border-2 border-[var(--anyborder)] text-[var(--subtext)] text-sm flex items-center justify-center hover:border-[var(--text)] hover:text-[var(--text)] transition"
                                        >
                                            3
                                        </button>
                                    </div>

                                    {/* Success Icon */}
                                    <div className="w-28 h-28 rounded-full text-[#3ebf8f] flex items-center justify-center bg-[#3ebf8f1a] mx-auto my-5">
                                        <Check size={50} />
                                    </div>

                                    {/* Info */}
                                    <div className="text-center text-md font-semibold text-[var(--tasktext)] flex flex-col gap-y-5 mt-3 w-[85%] mx-auto">
                                        <p>We've sent a verification code to your email address.</p>
                                        <p className="text-sm">
                                            Didn’t receive any code?{" "}
                                            <a className="text-[var(--text)] hover:underline cursor-pointer">Resend</a>
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <div className="w-[85%] mx-auto mt-7">
                                        <form>
                                            <div className="mb-5">
                                                <label className="text-sm font-semibold text-[var(--subtext)]">
                                                    Verification Code
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Enter the verification code"
                                                    className="mt-2 w-full rounded-md border border-[var(--textfieldboarder)] bg-transparent text-[var(--tasktext)] px-3 py-2 focus:border-[var(--text)] outline-none transition"
                                                />
                                            </div>

                                            <button
                                                onClick={() => navigate('/Registration?regtype=forgetPass', { state: { page: "3" } })}
                                                className="w-full py-2 bg-[var(--buttonbg)] text-white text-lg font-semibold rounded-md transition"
                                            >
                                                Check
                                            </button>
                                        </form>
                                    </div>

                                    {/* Footer */}
                                    <div className="border-t border-[var(--anyborder)] py-6 mt-6 text-center">
                                        <h4 className="text-[var(--tasktext)] text-sm">
                                            Remember your password?{" "}
                                            <a
                                                onClick={() => navigate('/Registration?regtype=login')}
                                                className="text-[var(--text)] font-semibold hover:underline cursor-pointer"
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
                                Quest<span className="text-[var(--text)]">ify</span>
                            </h1>

                            {/* GTA Styled Card */}
                            <div className="w-[28%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[85%] my-7 mx-auto rounded-2xl bg-[var(--cardbg)] border-2 border-[var(--anyborder)] relative overflow-hidden">
                                {/* Background Layers */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none"></div>


                                {/* Card Content */}
                                <div className="relative z-10 px-7">
                                    {/* Header */}
                                    <div className="py-6 border-b border-[var(--anyborder)] text-center">
                                        <h2 className="text-2xl font-semibold text-[var(--tasktext)]">Make New Password</h2>
                                        <h4 className="text-md text-[var(--subtext)] mt-2">
                                            Memorize it or write it down 😏
                                        </h4>
                                    </div>

                                    {/* Steps */}
                                    <div className="flex items-center justify-center my-6 ">
                                        <button
                                            onClick={() =>
                                                navigate('/Registration?regtype=forgetPass', { state: { page: "1" } })
                                            }
                                            className="w-12 h-12 rounded-full bg-[var(--buttonbg)] text-white text-sm flex items-center justify-center"
                                        >
                                            1
                                        </button>
                                        <div className="w-[20%] h-px bg-[var(--anyborder)]"></div>
                                        <button
                                            onClick={() =>
                                                navigate('/Registration?regtype=forgetPass', { state: { page: "2" } })
                                            }
                                            className="w-12 h-12 rounded-full bg-[var(--buttonbg)] text-white text-sm flex items-center justify-center"
                                        >
                                            2
                                        </button>
                                        <div className="w-[20%] h-px bg-[var(--anyborder)]"></div>
                                        <button
                                            onClick={() =>
                                                navigate('/Registration?regtype=forgetPass', { state: { page: "3" } })
                                            }
                                            className="w-12 h-12 rounded-full bg-[var(--buttonbg)] text-white text-sm flex items-center justify-center"
                                        >
                                            3
                                        </button>
                                    </div>

                                    {/* Form */}
                                    <div className="w-[85%] mx-auto mt-5">
                                        <form>
                                            <div className="mb-5">
                                                <label className="text-sm font-semibold text-[var(--subtext)]">
                                                    New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    required
                                                    placeholder="Create a password"
                                                    className="mt-2 w-full rounded-md border border-[var(--textfieldboarder)] bg-transparent text-[var(--tasktext)] px-3 py-2 focus:border-[var(--text)] outline-none transition"
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label className="text-sm font-semibold text-[var(--subtext)]">
                                                    Confirm New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    required
                                                    placeholder="Confirm your password"
                                                    className="mt-2 w-full rounded-md border border-[var(--textfieldboarder)] bg-transparent text-[var(--tasktext)] px-3 py-2 focus:border-[var(--text)] outline-none transition"
                                                />
                                            </div>

                                            <button
                                                onClick={() =>
                                                    navigate('/Registration?regtype=login')
                                                }
                                                className="mt-6 w-full py-2 bg-[var(--buttonbg)] text-white text-lg font-semibold rounded-md transition"
                                            >
                                                Done!
                                            </button>
                                        </form>
                                    </div>

                                    {/* Footer */}
                                    <div className="border-t border-[var(--anyborder)] py-6 mt-6 text-center">
                                        <h4 className="text-[var(--tasktext)] text-sm">
                                            Remember your password?{" "}
                                            <a
                                                onClick={() =>
                                                    navigate('/Registration?regtype=login')
                                                }
                                                className="text-[var(--text)] font-semibold hover:underline cursor-pointer"
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
            return (<h2>NONE</h2>);
            break;
    }
}

export default Reg;