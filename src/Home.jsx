import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from './Card.jsx';
import Crown from './assets/crown.png';
function Home(){
    return(<>
    <Header/>
    
    <Card title = "Welcome back , Adel"
    comment = "Ready to take on new challenges?"
    btnContent = "View Progress" 
    cat = "home"
    type = "welcomeback"
    />


    <div className="flex justify-center items-center m-auto flex-col mb-20 mt-10">
      <h2 className="text-white text-3xl max-xs:text-xl text-center mt-5 mb-5 font-semibold">Choose a Category</h2>
      <h4 className="max-w-[75%] text-[#b3b3b2] text-xl max-xs:text-lg text-center">Select a category to explore tasks and challenges designed to test and improve your skills</h4>
    </div>


    <Card title = "Unlock Premium Features" comment = "Get unlimited access to all 300+ professional tasks, feedback, and advanced analytics with our Pro subscription"
    cat = "home"
    type = "primeSub"
    mypicture = {Crown}
    features = {[
      "Good for your health",
      "Unlimited submitions",
      "Better tasks"
    ]}
    btnContent = "Subscribe Now"
    page = "Pricing"
    />


    <div className='max-w-[80%] grid grid-cols-3 gap-5 mt-10 mx-auto items-stretch max-xs:grid-cols-1'>


      <Card title = "Call Center" comment = " Customer service scenarios and problem-solving tasks "
       cat = "home"
       type = "task"
       btnContent = " Explore Tasks"
    />

      <Card title = "Marketing" comment = " Campaign creation, market analysis, and strategy tasks "
   cat = "home"
       type = "task"
    btnContent = " Explore Tasks"
    />

      <Card title = "Data Analysis" comment = " Data interpretation, visualization, and insights tasks "
  cat = "home"
       type = "task"
    btnContent = " Explore Tasks"
    />

      <Card title = "Project Management" comment = " Planning, execution, and resource allocation challenges "
 cat = "home"
       type = "task"
    btnContent = " Explore Tasks"
   
    />

      <Card title = "Software Development" comment = " Coding challenges, debugging, and algorithm tasks "
    cat = "home"
       type = "task"
    btnContent = " Explore Tasks"

    />

      <Card title = "Design" comment = " UI/UX design challenges and creative problem solving "
   cat = "home"
       type = "task"
    btnContent = " Explore Tasks"
   
    />


    </div>
    
    
    <Footer/>
    </>)
}
export default Home;