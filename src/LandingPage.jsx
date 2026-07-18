import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useAuth } from "./AuthContext"
import Darkhero from "./assets/darkHero.png";
import Lighthero from "./assets/lightHero.png";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSnack } from "./SnackBarContext.jsx";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import pwlight from "./assets/pwLight.png";
import pwdark from "./assets/pwDark.png";
import Card from './Card.jsx';
import howQworksLight from "./assets/sec2landinglight2.png"
import howQworksDark from "./assets/sec2landingdark.png"

export default function LandingPage(){

    const { ShowSnackBar } = useSnack();

    const {theme} = useContext(ThemeContext);

    const navigate = useNavigate();

    const { user } = useAuth();

    const [cool, setCool] = useState(false);
    
    
      const HandelMessageSend = () => {
        setCool(true);
        ShowSnackBar("This service is still under construction", "info");
        setTimeout(() => { setCool(false); }, 5000);
      }
    

    return (<>
    <Header/>


    {/* hero */}
    <div className="w-[80%] my-12 mx-auto  flex items-center justify-between">
        
        <div className="flex items-start flex-col w-[50%] gap-5">

        <h1 className="text-6xl font-extrabold text-start ">Master Real-World Skills Through Practice With <span className={`${theme == "dark" ? "text-[var(--text)]" : "text-[#7D818A]"}`}> Questify. </span> </h1>
        <h3 className="w-[90%]">Solve hands-on tasks in marketing, customer service, and other career paths to gain practical experience and become job-ready.</h3>
        { !user ?

        <div className="flex gap-4 w-full">

        <button  className="px-3 py-2 w-[20%] bg-transparent text-[var(--text)] border-2 border-[var(--text)] rounded-md font-bold tracking-wide hover:bg-[var(--ce7hover)] hover:border-transparent hover:text-white hover:cursor-pointer transition-all" 
        onClick={() => navigate('/Registration?regtype=login')}>Login</button>
        <button  className="text-white w-[20%] min-w-max bg-[var(--buttonbg)] px-3 py-2 border-2 border-transparent rounded-md font-bold tracking-wide 
                  hover:bg-transparent hover:border-[var(--text)] hover:py-0  hover:text-[var(--text)]  transition-all hover:cursor-pointer"
              onClick={() => navigate('/Registration?regtype=sign-up')}>Get started</button>
        </div>
        :
        <div className="w-full">

        <button
         className="flex items-center gap-1 w-[40%] justify-center text-white bg-[var(--buttonbg)] px-3 py-2 border-2 border-transparent rounded-md font-bold tracking-wide 
                  hover:bg-transparent hover:border-[var(--text)] hover:text-[var(--text)]  transition-all hover:cursor-pointer"
              onClick={() => navigate('/Home')}>Continue progress <FaLongArrowAltRight className="pt-[1.9px]"/></button>
        
        </div>
        }

    </div>

    <div className="w-[50%]">
        <img src={theme === "dark" ? Darkhero : Lighthero} alt="Questify hero illustration" className="rounded-4xl [mask-image:radial-gradient(circle,white_50%,transparent_100%)]"/>
    </div>

    </div>
        {/*section 2 */}
    <div className="w-full my-10 flex justify-center">
      <img src={theme == "dark" ? howQworksDark: howQworksLight} alt="How Questify Works" className="scale-85 rounded-4xl"/>
    </div>




    {/*section 3 */}
<div className="flex flex-col ">
        <h1 className="text-[4rem] text-[var(--text)] text-center font-extrabold ">Why Choose Questify</h1>
    <div className="max-w-[80%] grid grid-cols-3 gap-5 mt-10 mb-10 mx-auto items-stretch">
      <Card title="Real-World Challenges" type="sec3" cat="landing" comment="Practice tasks based on actual job scenarios." mypicture="bag"/>
      <Card title="Instant Feedback" type="sec3" cat="landing" comment="Learn faster with detailed explanations after every challenge." mypicture="bolt"/>
      <Card title="Track Your Progress" type="sec3" cat="landing" comment="Monitor your growth and stay motivated." mypicture="chart"/>
      <Card title="Career-Focused Learning" type="sec3" cat="landing" comment="Every challenge is designed around practical job skills." mypicture="target"/>
      <Card title="Learn Anytime" type="sec3" cat="landing" comment="Practice at your own pace from anywhere." mypicture="globe"/>
      <Card title="Affordable Alternative" type="sec3" cat="landing" comment="Gain practical experience without spending hundreds on courses." mypicture="money"/>
    </div>
</div>

        {/* FAQs*/}

        <div className="w-[80%] mx-auto my-16 p-10 rounded-2xl bg-[var(--cardbg)] border border-[var(--anyborder)] relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none rounded-2xl"></div>
  <div className="text-center relative z-10 mb-8">
    <h2
      className="text-4xl md:text-5xl font-extrabold text-[var(--text)] tracking-[0.08em] uppercase"
      style={{ fontFamily: "'Pricedown', sans-serif" }}
    >
      Frequently Asked Questions (FAQs)
    </h2>
    <p className="mt-4 text-[var(--subtext)] text-lg italic">
      Read carefully so you don't ask them questions again
    </p>
  </div>

  <div className="w-[70%] mx-auto space-y-4 relative z-10">
    <Card
      cat="piano-shii"
      title="What is Questify?"
      comment="Questify is a hands-on learning platform where you build real-world skills by completing practical challenges instead of just watching videos. Every learning path is designed to help you gain experience, improve your abilities, and become more confident in your chosen career."
    />
    <Card
      cat="piano-shii"
      title="Who is Questify for?"
      comment="Questify is for students, beginners, career changers, and anyone who wants to develop practical skills. Whether you're starting from scratch or looking to sharpen your knowledge, Questify provides structured, real-world practice at your own pace."
    />
    <Card
      cat="piano-shii"
      title="Do I need any previous experience?"
      comment="No. Most learning paths are designed to guide beginners from the fundamentals to more advanced challenges. You'll build your skills step by step through practical experience."
    />
    <Card
      cat="piano-shii"
      title="What careers can I learn on Questify?"
      comment="Questify offers learning paths for a variety of careers, including marketing, customer support, sales, content creation, and more. New career paths will continue to be added as the platform grows."
    />
    <Card
      cat="piano-shii"
      title="How are Questify challenges different from traditional courses?"
      comment="Instead of spending hours watching lectures, you'll learn by solving realistic tasks similar to the work professionals do every day. This approach helps you develop practical skills that are easier to apply in real situations."
    />
    <Card
      cat="piano-shii"
      title="Can I learn at my own pace?"
      comment="Absolutely. There are no deadlines or fixed schedules. You can complete challenges whenever it fits your routine and continue exactly where you left off."
    />
    <Card
      cat="piano-shii"
      title="Will Questify help me get a job?"
      comment="Questify is designed to help you build the practical skills employers look for. While no platform can guarantee a job, completing real-world challenges gives you valuable experience and confidence that can strengthen your portfolio and job applications."
    />
  </div>
</div>




    {/* stay updated */}

    <div className="w-full  flex justify-around p-70 relative overflow-hidden" >

        <div style={{backgroundImage : `${theme == "dark" ? `url(${pwdark})`:`url(${pwlight})` }`}}
    className="absolute inset-0  w-full  bg-cover bg-center bg-no-repeat "
  ></div>

        <div className="text-[3.5rem] text-[var(--text)] w-[50%] flex items-start justify-start absolute left-8 top-6">Stay Updated</div>


        <div className="w-[50%] flex flex-col items-end justify-end p-5 absolute right-3 bottom-2 text-[var(--text)]">
            <div className=" text-2xl w-[80%]">Get Questify updates delivered to your inbox. No spam, unsubscribe anytime</div>
            
              <div className="w-[80%] my-4 border border-b-[var(--text)] border-transparent flex items-stretch">
                {/* <label className="block text-[var(--tasktext)]  font-semibold mb-1">Email Address</label> */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full py-2   px-1 
                   border-transparent bg-transparent focus:outline-none 
                   placeholder:text-[var(--text)]"
                />
                <button className={`w-[40px] items-center flex justify-center ${theme == "dark" ? "hover:bg-[rgb(356,356,365,0.27)]" : "hover:bg-[rgb(0,0,0,0.27)]"} `}  onClick={() => cool ? null : HandelMessageSend()}  ><GoArrowRight className="text-[var(--text)]"/></button>
              </div>
             
             
            
        </div>

    </div>

    <Footer islanding = {true}/>
    </>)


};

// onClick={() => cool ? null : HandelMessageSend()}