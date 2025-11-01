import Header from "./Header.jsx";
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import adel from './assets/team members/adel.png';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosAlarm, IoIosSend } from "react-icons/io";
import { useAuth } from "./AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { useSnack } from "./SnackBarContext.jsx";
import { useState } from "react";

function About() {
  const { ShowSnackBar } = useSnack();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [cool, setCool] = useState(false);


  const HandelMessageSend = () => {
    setCool(true);
    ShowSnackBar("This service is still under construction", "info");
    setTimeout(() => { setCool(false); }, 5000);
  }
  return (
    <>
      <Header />

      <Card
        title="Transforming Learning Through Challenges"
        comment="Questify is a revolutionary platform that helps professionals develop their skills through real-world scenarios and practical challenges."
        btnContent={`${user ? "Start Making Your Legacy" : "Join Questify Today"}`}
        cat="about"
        type="what-is-questify"
        GoTo={user ? () => navigate("/Home") : () => navigate("/Registration", { state: { regtype: "login" } })}
      />

      <div className="text-center text-white my-20">
        <h2 className="text-5xl font-extrabold bg-[linear-gradient(135deg,_#ce7d63,_#ffa07a)] bg-clip-text text-transparent">The Mission</h2>
        <h4 className="text-xl text-[#b3b3b2] max-w-[60%] mx-auto mt-5">
          The mission is to transform how professionals learn and develop their skills through practical, real-world challenges.
        </h4>
      </div>

      <div className="flex w-[80%] mx-auto gap-[5%] justify-center my-20">
        <Card title="Practical Learning" type="mission" cat="about" comment="We believe that the best way to learn is by doing. Our platform provides hands-on challenges that simulate real-world scenarios, allowing users to apply their knowledge in practical situations." mypicture="bulb" />
        <Card title="Community Growth" type="mission" cat="about" comment="We foster a supportive community where professionals can learn from each other, share insights, and grow together. Collaboration and peer feedback are essential parts of the learning process." mypicture="community" />
        <Card title="Continuous Improvement" type="mission" cat="about" comment="We're committed to helping professionals continuously improve their skills and advance their careers. Our platform provides personalized feedback and tracks progress over time." mypicture="chart" />
      </div>

      <div className="bg-[#111] w-[80%] mx-auto my-20 rounded-xl pb-16">
        <div className="text-center text-white py-10">
          <h2 className="text-5xl font-extrabold bg-[linear-gradient(135deg,_#ce7d63,_#ffa07a)] bg-clip-text text-transparent">Meet The Creator</h2>
          <h4 className="text-lg text-[#b3b3b2] mt-4">The passionate individual behind Questify who are dedicated to revolutionizing professional skill development.</h4>
        </div>
        <div className="flex flex-wrap pl-4 justify-center gap-x-[5%]">

          <img src={adel} className="border-[#ce7d73a2] border-2 rounded-xl max-w-[50%]" />
          <div className="text-[#dedede] max-w-[50%] mt-10">
            <h2 className="flex gap-x-2 p-2 text-xl"><IoMdPerson size={33} className="text-[#ce7d63] mt-[-4px]" />  Adel Mostafa Saber Mohamed</h2>
            <h2 className="flex gap-x-2 p-2 text-xl"> <MdOutlineAlternateEmail size={33} className="text-[#ce7d63] mt-[-4px]" /> adel.0523035@gmail.com</h2>
            <h2 className="flex gap-x-2 p-2 text-xl"><FaGithub size={33} className="text-[#ce7d63] mt-[-4px]" /><a href="https://github.com/Adelmostafa2008" target="_blank" className="text-[#ce7d63] text-decoration-line: underline hover:text-[#ce7e63cc]">Github</a></h2>
            <h2 className="flex gap-x-2 p-2 text-xl"><FaLinkedin size={33} className="text-[#ce7d63] mt-[-4px]" /> <a href="https://linkedin.com/in/adel-moatafa-saber-mohamed-7a2705332" target="_blank" className="text-[#ce7d63] text-decoration-line: underline hover:text-[#ce7e63cc]">LinkedIn</a></h2>
            <div className="flex gap-x-2 p-2">
              <div>
                <IoDocumentText size={35} className="text-[#ce7d63] w-[35px] h-[35px]" />
              </div>
              <h2 className="pt-2 italic max-w-[80%]">'' Passionate Full-Stack Developer
                eager to build impactful and scalable
                applications using .NET and React. Skilled in problem solving and driven by a strong passion for coding,
                I'm committed to continuous learning and delivering high-quality software.  ''</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white my-20">
        <h2 className="text-5xl font-extrabold bg-[linear-gradient(135deg,_#ce7d63,_#ffa07a)] bg-clip-text text-transparent">Why Choose Questify</h2>
        <h4 className="text-lg text-[#b3b3b2] mt-4 max-w-[60%] mx-auto">Discover the unique features that make Questify the leading platform for skill development through practical challenges.</h4>
      </div>

      <div className="grid grid-cols-2 w-[80%] mx-auto gap-y-12 gap-x-10 my-16">
        <Card cat="about" type="why-questify" mypicture="features" title="Real-World Scenarios" comment="Our challenges are based on real-world scenarios that professionals encounter in their daily work, providing practical experience that can be immediately applied." />
        <Card cat="about" type="why-questify" mypicture="chat" title="Expert Feedback" comment="Receive detailed feedback on your solutions from industry experts and peers, helping you identify areas for improvement and refine your skills." />
        <Card cat="about" type="why-questify" mypicture="medal" title="Achievement System" comment="Track your progress and earn badges as you complete challenges, providing motivation and recognition for your skill development." />
        <Card cat="about" type="why-questify" mypicture="graduate" title="Personalized Learning Path" comment="Our platform adapts to your skill level and interests, recommending challenges that will help you grow in the areas that matter most to you." />
        <Card cat="about" type="why-questify" mypicture="bag" title="Industry Relevance" comment="Our challenges are designed in collaboration with industry leaders to ensure they reflect current best practices and emerging trends." />
        <Card cat="about" type="why-questify" mypicture="badge" title="Skill Certification" comment="Earn certificates that validate your skills and can be shared with employers or on professional networking platforms." />
      </div>

      <div className="bg-[#111] w-[80%] mx-auto rounded-xl my-20 pb-14">
        <div className="text-center text-white py-10">
          <h2 className="text-5xl font-extrabold bg-[linear-gradient(135deg,_#ce7d63,_#ffa07a)] bg-clip-text text-transparent">Our Impact</h2>
          <h4 className="text-lg text-[#b3b3b2] mt-4">See how Questify is making a difference in professional skill development around the world.</h4>
        </div>
        <div className="flex gap-6 justify-around flex-wrap">
          <Card cat="about" type="impact" title="50K+" comment="Active Users" />
          <Card cat="about" type="impact" title="1000+" comment="Challenges Created" />
          <Card cat="about" type="impact" title="25+" comment="Industry Categories" />
          <Card cat="about" type="impact" title="92%" comment="User Satisfaction" />
        </div>
      </div>

      <div className="text-center text-white my-20">
        <h2 className="text-5xl font-extrabold bg-[linear-gradient(135deg,_#ce7d63,_#ffa07a)] bg-clip-text text-transparent">Get In Touch</h2>
        <h4 className="text-lg text-[#b3b3b2] mt-4">Have questions or want to learn more about Questify? We'd love to hear from you!</h4>
      </div>

      <div className="flex w-[80%] gap-20 mx-auto items-stretch mb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-40">


          <div className="relative bg-[#1f1f1f] px-8 py-10 rounded-2xl border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

            <h2 className="text-3xl font-extrabold text-white mb-8 flex gap-x-3 justify-center relative z-10">
              <FaPhone size={30} className="text-[#ce7d63]" /> Contact Information
            </h2>

            <div className="space-y-6 text-white relative z-10">
              <div>
                <h3 className="text-xl font-semibold flex gap-x-2">
                  <FaLocationDot size={20} className="text-[#ce7d63]" /> Address
                </h3>
                <p className="text-[#c5c5c5]">123 Innovation Drive, Tech City, CA 94103, United States</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex gap-x-2">
                  <MdEmail size={20} className="text-[#ce7d63]" /> Email
                </h3>
                <p className="text-[#c5c5c5]">info@questify.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex gap-x-2">
                  <FaPhone size={20} className="text-[#ce7d63]" /> Phone
                </h3>
                <p className="text-[#c5c5c5]">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex gap-x-2">
                  <IoIosAlarm size={20} className="text-[#ce7d63]" /> Hours
                </h3>
                <p className="text-[#c5c5c5]">
                  Monday - Friday: 9am - 6pm<br />
                  Saturday: 10am - 4pm
                </p>
              </div>
            </div>
          </div>


          <div className="relative bg-[#1f1f1f] rounded-2xl p-10 border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-[220px] h-[220px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

            <h2 className="text-3xl font-extrabold text-white mb-8 flex gap-x-3 justify-center relative z-10">
              <IoIosSend size={30} className="text-[#ce7d63]" /> Send Us a Message
            </h2>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-white font-semibold mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full text-white px-4 py-2 border border-[#333333] rounded-lg bg-transparent focus:outline-none focus:border-[#ce7d63] placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  className="w-full px-4 py-2 text-white border border-[#333333] rounded-lg bg-transparent focus:outline-none focus:border-[#ce7d63] placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject..."
                  className="w-full px-4 py-2 border text-white border-[#333333] rounded-lg bg-transparent focus:outline-none focus:border-[#ce7d63] placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message..."
                  className="w-full px-4 py-2 border resize-none text-white border-[#333333] max-h-40 min-h-40 rounded-lg bg-transparent focus:outline-none focus:border-[#ce7d63] placeholder:text-gray-500"
                ></textarea>
              </div>
              <button
                onClick={() => cool ? null :HandelMessageSend()}
                className="w-full bg-[#ce7d63] text-white font-semibold py-2 rounded-lg hover:bg-[#b86c55] transition duration-300 shadow-[0_4px_20px_rgba(206,125,99,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
}
export default About;
