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

    <div className="About-mission">
        <Card title = "Practical Learning" 
        type = "mission"
        cat = "about"
        comment = "We believe that the best way to learn is by doing. Our platform provides hands-on challenges that simulate real-world scenarios, allowing users to apply their knowledge in practical situations."/>
        <Card title = "Community Growth"
        type = "mission"
        cat = "about"
        comment = "We foster a supportive community where professionals can learn from each other, share insights, and grow together. Collaboration and peer feedback are essential parts of the learning process."/>
        <Card title = "Continuous Improvement"
        iscomment = {true}
        type = "mission"
        cat = "about"
        comment = "We're committed to helping professionals continuously improve their skills and advance their careers. Our platform provides personalized feedback and tracks progress over time."/>
    </div>

    <div style={{
        backgroundColor : "#1f1f1f",
        height : "max-content",
        width : "95%",
        margin : "auto",
        borderRadius : "5px",
        paddingTop : "20px",
        marginBottom : "70px",
        paddingBottom : "20px",
        display : "flex",
        flexDirection : "column"
    }}>

        <div className="About-headers" >
        <h2>Meet Our Team</h2>
        <h4>The passionate individuals behind Questify who are dedicated to revolutionizing professional skill development.</h4>
        </div>
    <div className="About-team">
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

    <div className="About-whyquestify">
        <Card cat = "about" type = "why-questify" title = "Real-World Scenarios" comment = "Our challenges are based on real-world scenarios that professionals encounter in their daily work, providing practical experience that can be immediately applied."/>
        <Card cat = "about" type = "why-questify" title = "Expert Feedback" comment = "Receive detailed feedback on your solutions from industry experts and peers, helping you identify areas for improvement and refine your skills."/>
        <Card cat = "about" type = "why-questify" title = "Achievement System" comment = "Track your progress and earn badges as you complete challenges, providing motivation and recognition for your skill development."/>
        <Card cat = "about" type = "why-questify" title = "Personalized Learning Path" comment = "Our platform adapts to your skill level and interests, recommending challenges that will help you grow in the areas that matter most to you."/>
        <Card cat = "about" type = "why-questify" title = "Industry Relevance" comment = "Our challenges are designed in collaboration with industry leaders to ensure they reflect current best practices and emerging trends."/>
        <Card cat = "about" type = "why-questify" title = "Skill Certification" comment = "Earn certificates that validate your skills and can be shared with employers or on professional networking platforms."/>
    </div>

    <div style={{

        backgroundColor : "#1f1f1f",
        height : "fit-content",
        maxWidth : "95%",
        margin : "auto",
        borderRadius : "5px",
        paddingTop : "20px",
        marginBottom : "70px",
        paddingBottom : "20px",
    }}>

        <div className="About-headers">
        <h2>Our Impact</h2>
        <h4>See how Questify is making a difference in professional skill development around the world.</h4>
        </div>
    <div className="About-impact">
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

    <div className="About-touch">
    <div style={{
        backgroundColor : "#1f1f1f",
        height : "700px",
        width : "40%",
        margin : "auto",
        borderRadius : "5px",
        paddingTop : "20px",
        paddingRight : "20px",
        marginBottom : "70px"
    }}>

            <h2 className="About-headers" style={{
                marginBottom : "30px"
            }}>Contact Information</h2>
        <div className="About-contact">
            <h2 >Address</h2> <h4>123 Innovation Drive, Tech City, CA 94103, United States</h4>
            <h2>Email</h2> <h4>info@questify.com</h4>
            <h2>Phone</h2>  <h4>+1 (555) 123-4567</h4>
            <h2>Hours</h2> <h4>Monday - Friday: 9am - 6pm<br/><br/>Saturday: 10am - 4pm</h4>
        </div>
    </div>


    <div style={{
        backgroundColor : "#1f1f1f",
        height : "700px",
        width : "40%",
        margin : "auto",
        borderRadius : "5px",
        paddingTop : "20px",
        paddingRight : "20px",
        marginBottom : "70px",
        color : "aliceblue"
    }}>
            <h2 className="About-headers" style={{
                marginBottom : "30px"
            }}>Send Us a Message</h2>
            <form action="" className="About-message">
                <label>Your Name</label>
                <br/>
                <input type="text" placeholder="Enter your name..."/>
                <br/>
                <label>Email Address</label>
                <br/>
                <input type="email" placeholder="example@example.com"/>
                <br/>
                <label>Subject</label>
                <br/>
                <input type="text" placeholder="Enter subject..."/>
                <br/>
                <label>Message</label>
                <br/>
                <textarea placeholder="Enter your message..."></textarea>
                <br/>
                <button>Send Message</button>
            </form>
    </div>

    </div>    

    <Footer/>
    </>);
}
export default About;