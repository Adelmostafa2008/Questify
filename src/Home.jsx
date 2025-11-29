import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from './Card.jsx';
import Crown from './assets/crown.png';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (<div className="bg-[var(--bg)]">
    <Header />
    {user ?
      <Card title={`Welcome back , ${user.username}`}
        comment="Ready to take on new challenges?"
        btnContent="View Progress"
        cat="home"
        type="welcomeback"
        GoTo={() => navigate("/Profile/Solvedtasks")}
      />
      : null}


    <div className="text-center my-20">
      <h2 className="text-[50px] font-extrabold text-[var(--text)] bg-[linear-gradient(135deg,_#ce7d63,_#ffa07a)] bg-clip-text ">Choose a Category</h2>
      <h4 className="text-xl text-[var(--subtext)] max-w-[60%] mx-auto mt-2">
        Select a category to explore tasks and challenges designed to test and improve your skills.
      </h4>
    </div>


    <Card title="Unlock Premium Features" comment="Get unlimited access to all 300+ professional tasks, feedback, and advanced analytics with our Pro subscription"
      cat="home"
      type="primeSub"
      mypicture={Crown}
      features={[
        "Good for your health",
        "Unlimited submitions",
        "Better tasks"
      ]}
      btnContent="Subscribe Now"
      page="Pricing"
    />


    <div className='max-w-[80%] grid grid-cols-3 gap-5 mt-10 mb-50 mx-auto items-stretch max-xs:grid-cols-1'>


      <Card title="Call Center" comment=" Customer service scenarios and problem-solving tasks "
        cat="home"
        GoTo={() => navigate("/Tasks", { state: { Tcategory: "call-center" } })}
        type="task"
        btnContent=" Explore Tasks"
        mypicture="callcenter" />

      <Card title="Marketing" comment=" Campaign creation, market analysis, and strategy tasks "
        cat="home"
        GoTo={() => navigate("/Tasks", { state: { Tcategory: "marketing" } })}
        type="task"
        btnContent=" Explore Tasks"
        mypicture="marketing" />

      <Card title="Data Analysis" comment=" Data interpretation, visualization, and insights tasks "
        cat="home"
        type="task"
        GoTo={() => navigate("/Tasks", { state: { Tcategory: "data-analysis" } })}
        btnContent=" Explore Tasks"
        mypicture="data" />

      <Card title="Project Management" comment=" Planning, execution, and resource allocation challenges "
        cat="home"
        type="task"
        btnContent=" Explore Tasks"
        mypicture="projectmanagement"
        GoTo={() => navigate("/Tasks", { state: { Tcategory: "project-management" } })}
      />

      <Card title="Software Development" comment=" Coding challenges, debugging, and algorithm tasks "
        cat="home"
        type="task"
        btnContent=" Explore Tasks"
        mypicture="code"
        GoTo={() => navigate("/Tasks", { state: { Tcategory: "software-development" } })}
      />

      <Card title="Design" comment=" UI/UX design challenges and creative problem solving "
        cat="home"
        type="task"
        btnContent="Explore Tasks"
        mypicture="design"
        GoTo={() => navigate("/Tasks", { state: { Tcategory: "design" } })}
      />


    </div>


    <Footer />
  </div>)
}
export default Home;