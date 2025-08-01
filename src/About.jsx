import Header from "./Header.jsx";
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import adel from './assets/team members/adel.png';
import hus from './assets/team members/hussain.png';
import sewedy from './assets/team members/el-sewedy.png';
import sara from './assets/team members/sara.png';
import hadeel from './assets/team members/hadeel.png';
import Facebook from './assets/socialMediaIcons/facebook.png'
import Linkedin from './assets/socialMediaIcons/linkedin.png'
import GitHub from './assets/socialMediaIcons/github.png'
import {Lightbulb} from "lucide-react";
function About(){
    return (<>
    <Header/>

    <Card title = "Transforming Learning Through Challenges"
    comment = "Questify is a revolutionary platform that helps professionals develop their skills through real-world scenarios and practical challenges."
    btnContent = "Join Questify Today"
    cat = "about"
    type = "what-is-questify"
    />

    <div className="About-headers">
    <h2>
        Our Mission
    </h2>
    <h4>
        We're on a mission to transform how professionals learn and develop their skills through practical, real-world challenges.
    </h4>
    </div>

    <div className="flex w-[80%] mx-auto gap-[5%] items-stretch justify-strech">
        <Card title = "Practical Learning" 
        type = "mission"
        cat = "about"
        comment = "We believe that the best way to learn is by doing. Our platform provides hands-on challenges that simulate real-world scenarios, allowing users to apply their knowledge in practical situations."
        mypicture = "bulb"/>
        <Card title = "Community Growth"
        type = "mission"
        cat = "about"
        comment = "We foster a supportive community where professionals can learn from each other, share insights, and grow together. Collaboration and peer feedback are essential parts of the learning process."
        mypicture = "community"/>
        <Card title = "Continuous Improvement"
        iscomment = {true}
        type = "mission"
        cat = "about"
        comment = "We're committed to helping professionals continuously improve their skills and advance their careers. Our platform provides personalized feedback and tracks progress over time."
        mypicture = "chart"/>
    </div>

    <div className="bg-[#1a1a1a] flex flex-col w-[80%] mx-auto my-10 rounded-md pb-10 mt-25">

        <div className="About-headers" >
        <h2>Meet Our Team</h2>
        <h4>The passionate individuals behind Questify who are dedicated to revolutionizing professional skill development.</h4>
        </div>
    <div className="flex gap-2 justify-around">
        <Card title= "Adel Mostafa"  cat = "about" type = "team" mypicture = {adel} pics = {[Linkedin , Facebook , GitHub]}/>
        <Card title ="Hussein Mohamed" cat = "about" type = "team" mypicture = {hus}  pics = {[Linkedin , Facebook , GitHub]}/>
        <Card title = "Ahmed Elsewedy" cat = "about" type = "team" mypicture = {sewedy}  pics = {[Linkedin , Facebook , GitHub]}/>
        <Card title = "Hadel samer" cat = "about" type = "team" mypicture = {hadeel}  pics = {[Linkedin , Facebook , GitHub]}/>
        <Card title = "Sara Omar" cat = "about" type = "team" mypicture = {sara}  pics = {[Linkedin , Facebook , GitHub]}/>
    </div>
    </div>

    <div className="About-headers">
    <h2>Why Choose Questify</h2>
    <h4>Discover the unique features that make Questify the leading platform for skill development through practical challenges.</h4>
    </div>

    <div className="grid grid-cols-2 w-[80%] mx-auto gap-y-10 mb-20 items-stretch">
        <Card cat = "about" type = "why-questify" mypicture = "features" title = "Real-World Scenarios" comment = "Our challenges are based on real-world scenarios that professionals encounter in their daily work, providing practical experience that can be immediately applied."/>
        <Card cat = "about" type = "why-questify" mypicture = "chat" title = "Expert Feedback" comment = "Receive detailed feedback on your solutions from industry experts and peers, helping you identify areas for improvement and refine your skills."/>
        <Card cat = "about" type = "why-questify" mypicture = "medal" title = "Achievement System" comment = "Track your progress and earn badges as you complete challenges, providing motivation and recognition for your skill development."/>
        <Card cat = "about" type = "why-questify" mypicture = "graduate" title = "Personalized Learning Path" comment = "Our platform adapts to your skill level and interests, recommending challenges that will help you grow in the areas that matter most to you."/>
        <Card cat = "about" type = "why-questify" mypicture = "bag" title = "Industry Relevance" comment = "Our challenges are designed in collaboration with industry leaders to ensure they reflect current best practices and emerging trends."/>
        <Card cat = "about" type = "why-questify" mypicture = "badge" title = "Skill Certification" comment = "Earn certificates that validate your skills and can be shared with employers or on professional networking platforms."/>
    </div>

    <div className="bg-[#1a1a1a] w-[80%] mx-auto flex flex-col rounded-md pb-10">

        <div className="About-headers">
        <h2>Our Impact</h2>
        <h4>See how Questify is making a difference in professional skill development around the world.</h4>
        </div>
    <div className="flex gap-2 justify-around">
        <Card cat = "about" type = "impact" title = "50K+" comment = "Active Users"/>
        <Card cat = "about" type = "impact" title = "1000+" comment = "Challenges Created"/>
        <Card cat = "about" type = "impact" title = "25+" comment = "Industry Categories"/>
        <Card cat = "about" type = "impact" title = "92%" comment = "User Satisfaction"/>
    </div>    

    </div>


    <div className="About-headers">
    <h2>Get In Touch</h2>
    <h4>Have questions or want to learn more about Questify? We'd love to hear from you!</h4>
    </div>

    <div className="flex w-[80%] gap-20 mx-auto items-stretch">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-40 ">
    
    <div className="bg-[#1f1f1f] px-5 py-5 rounded-md">

      <h2 className="text-3xl font-bold text-white mb-6">📞 Contact Information</h2>
      <div className="space-y-6 text-white">
        <div>
          <h3 className="text-xl font-semibold">📍 Address</h3>
          <p>123 Innovation Drive, Tech City, CA 94103, United States</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">✉️ Email</h3>
          <p>info@questify.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">📞 Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">⏰ Hours</h3>
          <p>
            Monday - Friday: 9am - 6pm<br />
            Saturday: 10am - 4pm
          </p>
        </div>
      </div>
    </div>


    <div className="bg-[#1f1f1f] shadow-lg rounded-md p-8 ">
      <h2 className="text-3xl font-bold text-white mb-6">📬 Send Us a Message</h2>
      <form className="space-y-5">
        <div>
          <label className="block text-white font-semibold mb-1">Your Name</label>
          <input type="text" placeholder="Enter your name..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ce7d63]  placeholder:text-gray-500"/>
        </div>
        <div>
          <label className="block text-white font-semibold mb-1">Email Address</label>
          <input type="email" placeholder="example@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ce7d63] placeholder:text-gray-500" />
        </div>
        <div>
          <label className="block text-white font-semibold mb-1">Subject</label>
          <input type="text" placeholder="Enter subject..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ce7d63] placeholder:text-gray-500" />
        </div>
        <div>
          <label className="block text-white font-semibold mb-1">Message</label>
          <textarea rows="4" placeholder="Enter your message..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ce7d63] placeholder:text-gray-500"></textarea>
        </div>
        <button type="submit" className="w-full bg-[#ce7d63] text-white font-semibold py-2 rounded-lg hover:bg-[#ad6d58] transition duration-300">Send Message</button>
      </form>
    </div>
  </div>
</div>


    <Footer/>
    </>);
}
export default About;