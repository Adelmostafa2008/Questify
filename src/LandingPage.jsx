import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useAuth } from "./AuthContext";
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
import Card from "./Card.jsx";
import howQworksLight from "./assets/sec2landinglight2.png";
import howQworksDark from "./assets/sec2landingdark.png";

export default function LandingPage() {
  const { ShowSnackBar } = useSnack();

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const { user } = useAuth();

  const [cool, setCool] = useState(false);

  const handelSnack = (msg, ty) => {
    setCool(true);
    ShowSnackBar(msg, ty);
    setTimeout(() => {
      setCool(false);
    }, 5000);
  };

  return (
    <>
      <Header />

      {/* =========================== HERO SECTION =========================== */}
      <div className="w-[90%] md:w-[80%] my-8 md:my-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        <div className="w-full md:w-[50%] flex items-start flex-col gap-4 md:gap-5">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-start leading-tight">
            Master Real-World Skills Through Practice With{" "}
            <span
              className={`${theme == "dark" ? "text-[var(--text)]" : "text-[#7D818A]"}`}
            >
              {" "}
              Questify.{" "}
            </span>
          </h1>
          <p className="w-full text-base sm:text-lg">
            Solve hands-on tasks in marketing, customer service, and other
            career paths to gain practical experience and become job-ready.
          </p>

          {!user ? (
            <div className="flex gap-4 w-full flex-wrap">
              <button
                className="px-5 py-2.5 w-full xs:w-auto sm:w-[30%] md:w-[20%] min-w-[100px] bg-transparent text-[var(--text)] border-2 border-[var(--text)] rounded-md font-bold tracking-wide hover:bg-[var(--ce7hover)] hover:border-transparent hover:text-white hover:cursor-pointer transition-all"
                onClick={() => navigate("/Registration?regtype=login")}
              >
                Login
              </button>
              <button
                className="text-white w-full xs:w-auto min-w-[130px] bg-[var(--buttonbg)] px-5 py-2.5 border-2 border-transparent rounded-md font-bold tracking-wide
                  hover:bg-transparent hover:border-[var(--text)] hover:text-[var(--text)] transition-all hover:cursor-pointer"
                onClick={() => navigate("/Registration?regtype=sign-up")}
              >
                Get started
              </button>
            </div>
          ) : (
            <div className="w-full">
              <button
                className="flex items-center gap-1 w-full sm:w-auto px-6 py-2.5 justify-center text-white bg-[var(--buttonbg)] border-2 border-transparent rounded-md font-bold tracking-wide
                  hover:bg-transparent hover:border-[var(--text)] hover:text-[var(--text)] transition-all hover:cursor-pointer"
                onClick={() => navigate("/Home")}
              >
                Continue progress <FaLongArrowAltRight className="pt-[1.9px]" />
              </button>
            </div>
          )}
        </div>

        <div className="w-full md:w-[50%] flex justify-center">
          <img
            src={theme === "dark" ? Darkhero : Lighthero}
            alt="Questify hero illustration"
            className="w-full max-w-lg md:max-w-full h-auto rounded-4xl [mask-image:radial-gradient(circle,white_50%,transparent_100%)]"
          />
        </div>
      </div>

      {/* =========================== HOW IT WORKS =========================== */}
      <div className="w-full my-8 md:my-10 flex justify-center px-4">
        <img
          src={theme == "dark" ? howQworksDark : howQworksLight}
          alt="How Questify Works"
          className="w-full max-w-5xl h-auto rounded-4xl scale-90 md:scale-85"
        />
      </div>

      {/* =========================== WHY CHOOSE QUESTIFY =========================== */}
      <div className="flex flex-col">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[4rem] text-[var(--text)] text-center font-extrabold leading-tight px-4">
          Why Choose Questify
        </h1>
        <div className="w-[90%] md:max-w-[80%] xs:max-w-[70%] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8 md:mt-10 mb-10 mx-auto items-stretch">
          <Card
            title="Real-World Challenges"
            type="sec3"
            cat="landing"
            comment="Practice tasks based on actual job scenarios."
            mypicture="bag"
          />
          <Card
            title="Instant Feedback"
            type="sec3"
            cat="landing"
            comment="Learn faster with detailed explanations after every challenge."
            mypicture="bolt"
          />
          <Card
            title="Track Your Progress"
            type="sec3"
            cat="landing"
            comment="Monitor your growth and stay motivated."
            mypicture="chart"
          />
          <Card
            title="Career-Focused Learning"
            type="sec3"
            cat="landing"
            comment="Every challenge is designed around practical job skills."
            mypicture="target"
          />
          <Card
            title="Learn Anytime"
            type="sec3"
            cat="landing"
            comment="Practice at your own pace from anywhere."
            mypicture="globe"
          />
          <Card
            title="Affordable Alternative"
            type="sec3"
            cat="landing"
            comment="Gain practical experience without spending hundreds on courses."
            mypicture="money"
          />
        </div>
      </div>

      {/* =========================== FAQS =========================== */}
      <div className="w-[90%] md:w-[80%] mx-auto my-12 md:my-16 p-6 md:p-10 rounded-2xl bg-[var(--cardbg)] border border-[var(--anyborder)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none rounded-2xl"></div>

        <div className="text-center relative z-10 mb-6 md:mb-8">
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text)] tracking-[0.04em] xs:tracking-[0.06em] md:tracking-[0.08em] uppercase leading-tight"
            style={{ fontFamily: "'Pricedown', sans-serif" }}
          >
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-3 md:mt-4 text-[var(--subtext)] text-base sm:text-lg italic">
            Read carefully so you don't ask them questions again
          </p>
        </div>

        <div className="w-full md:w-[70%] mx-auto space-y-4 relative z-10">
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

      {/* =========================== STAY UPDATED =========================== */}
      <div className="relative w-full overflow-hidden">
        {/* Background image */}
        <div
          style={{
            backgroundImage: `${theme == "dark" ? `url(${pwdark})` : `url(${pwlight})`}`,
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        ></div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40">
          {/* Left: Heading */}
          <div className="w-full md:w-[50%]">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.5rem] text-[var(--text)] font-extrabold leading-tight">
              Stay Updated
            </h2>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-[50%] flex flex-col items-start md:items-end">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text)] w-full md:w-[80%] mb-4">
              Get Questify updates delivered to your inbox. No spam, unsubscribe
              anytime.
            </p>

            <div className="w-full md:w-[80%] flex items-stretch border-b border-[var(--text)] pb-1">
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email address for newsletter"
                className="w-full py-2 px-1 border-transparent bg-transparent focus:outline-none text-[var(--text)] placeholder:text-[var(--text)] text-base"
              />
              <button
                aria-label="Subscribe to newsletter"
                className={`w-[40px] flex items-center justify-center shrink-0 ${
                  theme == "dark"
                    ? "hover:bg-[rgb(356,356,365,0.27)]"
                    : "hover:bg-[rgb(0,0,0,0.27)]"
                } transition-colors rounded-sm`}
                onClick={() =>
                  cool
                    ? null
                    : handelSnack(
                        "This service is still under construction",
                        "info",
                      )
                }
              >
                <GoArrowRight className="text-[var(--text)] text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer islanding={true} />
    </>
  );
}

// onClick={() => cool ? null : HandelMessageSend()}
