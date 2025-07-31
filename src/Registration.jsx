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
                <h1 className="webname-login"><a>Quest<span className="ify">ify</span></a></h1>
                <div className="login">
                    <div className="login-welcome">
                        <h2>Welcome Back</h2>
                        <h4>Sign in to continue to your account</h4>
                    </div>
                    <div className="login-buttons">
                        <button><svg className="btn-google" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Google</button>
                        <button><svg className="btn-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>Facebook</button>
                    </div>
                    <div className="or">
                    <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                      <span style={{margin:" 0 10px"}}>or login with email</span>
                    <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                    </div>
            
                    <div className="login-actual-login">
                        <form action="">
                            <label>Email Address</label>
                            <br/>
                            <input type="email" required placeholder="Enter your e-mail" className="regmail"/>
                            <br/>
                            <label>Password</label>
                            <br/>
                            <input type="password" required placeholder="Enter your password"/>
                            <br/>
                            <a onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "1"}})} className="forget-pass">Forget password?</a>
                            <br/>
                            <input type="checkbox"/>
                            <label>Remember me</label>
                            <br/>
                            <button onClick={() => navigate('/Home')} >Login</button>
                            <br/>

                        </form>
                    </div>
                    <div className="sign-up-nav">
                        <h4>Don't have an account? <a onClick={() => navigate('/Registration' , {state : {regtype : "sign-up"}})} style={{color : "#ce7d63"}}>Sign Up</a></h4>
                    </div>
                </div>
                </>
            );
        break;

        case "sign-up":
             return(
                <>
                <h1 className="webname-login"><a>Quest<span className="ify">ify</span></a></h1>
                <div className="login">
                    <div className="login-welcome">
                        <h2>Create Account</h2>
                        <h4>Join our platform to access tasks and challenges</h4>
                    </div>
                    <div className="login-buttons">
                        <button><svg className="btn-google" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Google</button>
                        <button><svg className="btn-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>Facebook</button>
                    </div>
                    <div className="or">
                    <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                      <span style={{margin:" 0 10px"}}>or sign up with email</span>
                    <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                    </div>
            
                    <div className="login-actual-login">
                        <form action="">
                            <label>Full name</label>
                            <br/>
                            <input type="text" required placeholder="Enter your full name"/>
                            <br/>
                            <label>Email Address</label>
                            <br/>
                            <input type="email" required placeholder="Enter your e-mail" className="regmail"/>
                            <br/>
                            <label>Password</label>
                            <br/>
                            <input type="password" required placeholder="Create a password"/>
                            <br/>
                            <label>Confirm Password</label>
                            <br/>
                            <input type="password" required placeholder="Confirm your password"/>
                            <br/>
                            <a onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "1"}})} className="forget-pass">Forget password?</a>
                            <br/>
                            <input type="checkbox"/>
                            <label>I agree to the <a href="#terms of service" style={{color : "#ce7d63"}}>Terms of Service</a> and <a href="#privacy policy" style={{color : "#ce7d63" }}>Privacy Policy</a></label>
                            <br/>
                            <button onClick={() => navigate('/Home')} >Create Account</button>
                            <br/>

                        </form>
                    </div>
                    <div className="sign-up-nav">
                        <h4>Already have an account? <a onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} style={{color : "#ce7d63" }}>Login</a></h4>
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
                <h1 className="webname-login"><a>Quest<span className="ify">ify</span></a></h1>
                <div className="forgetPass">
                    <div className="login-welcome">
                        <h2>Forgot Password</h2>
                        <h4>Enter your email address and we'll send you a verification code</h4>
                    </div>

                    <div className="forgetPass-pages-num">
                        <button style={{backgroundColor : "#ce7d63"}} onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "1"}})}>1</button>
                        <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                        <button onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "2"}})}>2</button>
                        <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                        <button onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "3"}})}>3</button>
                    </div>

                    <div className="forgetPass-filler">
                    <p>
                        <svg className="forgetPass-info-ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>

                        We'll send a password reset link to your email address. Please make sure to check your spam folder if you don't see it in your inbox.
                    
                    
                    </p>
                    </div>
              
            
                    <div className="login-actual-login">
                        <form action="">
                           
                            <label>Email Address</label>
                            <br/>
                            <input type="email" required placeholder="Enter your e-mail" className="regmail"/>
                            <br/>
                            
                            <button onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "2"}})} >Send Reset Code</button>
                            <br/>

                        </form>
                    </div>
                    <div className="sign-up-nav">
                        <h4>Remember your password? <a onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} style={{color : "#ce7d63" }}>Back to Login</a></h4>
                    </div>
                </div>
                </>
            );
            break;
             case "2":
                return(
                    <>
                <h1 className="webname-login"><a>Quest<span className="ify">ify</span></a></h1>
                <div className="forgetPass">
                    <div className="login-welcome">
                        <h2>Verification Code</h2>
                        <h4>Check your balls , i mean your inbox 😏</h4>
                    </div>

                    <div className="forgetPass-pages-num">
                        <button style={{backgroundColor : "#ce7d63"}} onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "1"}})}>1</button>
                        <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                        <button style={{backgroundColor : "#ce7d63"}} onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "2"}})}>2</button>
                        <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                        <button onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "3"}})}>3</button>
                    </div>

                   <div className="successCircle">
                        <svg
                            className="forgetPass-check"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>                   
                    </div>
                    <div className="resend-code">
                        <p>We've sent a verification code to your email address.</p>
                    <p>Didn't recive any Code? <a> Resend</a></p>
                    </div>
            
                    <div className="login-actual-login">
                        <form action="">
                           
                            <label>Verification Code</label>
                            <br/>
                            <input type="text" required placeholder="Enter The Verification Code" className="regmail"/>
                            <br/>
                            
                            <button onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "3"}})} >Check</button>
                            <br/>

                        </form>
                    </div>
                    <div className="sign-up-nav">
                        <h4>Remember your password? <a onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} style={{color : "#ce7d63" }}>Back to Login</a></h4>
                    </div>
                </div>
                </>
            );
            break;
             case "3":
                return(
                    <>
                <h1 className="webname-login"><a>Quest<span className="ify">ify</span></a></h1>
                <div className="forgetPass">
                    <div className="login-welcome">
                        <h2>Make new password</h2>
                        <h4>Memorize it or write it down bitch</h4>
                    </div>

                    <div className="forgetPass-pages-num">
                        <button style={{backgroundColor : "#ce7d63"}} onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "1"}})}>1</button>
                        <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                        <button style={{backgroundColor : "#ce7d63"}} onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "2"}})}>2</button>
                        <hr style={{flex: "1", border: "none", borderTop:" 1px solid #333333"}}/>
                        <button style={{backgroundColor : "#ce7d63"}} onClick={() => navigate('/Registration' , {state : {regtype : "forgetPass" , page : "3"}})}>3</button>
                    </div>

            
                    <div className="login-actual-login">
                        <form action="" style={{marginTop : "30px"}}>
                           
                             <label>New Password</label>
                            <br/>
                            <input type="password" required placeholder="Create a password"/>
                            <br/>
                            <label>Confirm New Password</label>
                            <br/>
                            <input type="password" required placeholder="Confirm your password"/>
                            <br/>
                            
                            <button onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} >Done!</button>
                            <br/>

                        </form>
                    </div>
                    <div className="sign-up-nav">
                        <h4>Remember your password? <a onClick={() => navigate('/Registration' , {state : {regtype : "login"}})} style={{color : "#ce7d63" }}>Back to Login</a></h4>
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