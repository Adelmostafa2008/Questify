import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Reg from './Registration.jsx';
import Payment from './Pricing.jsx';
import Addtask from './Addtask.jsx';
import Tasks from "./Tasks.jsx";
import SelectedPlan from './SelectedPlan.jsx';
import SelectedTask from './SelectedTask.jsx';
import Profile from "./Profile.jsx";
import EditProfile from './EditProfile.jsx';
import TaskEdit from "./TaskEdit.jsx";
import SolvedTasks from "./SolvedTasks.jsx"
import SryBro from './StillUnderConstruction.jsx';

function App() {
  return(
    <>
  <Router>

    <Routes>
      <Route path='/About' element={<About/>}/> 
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Registration' element = {<Reg/>}/>
      <Route path = '/Pricing' element = {<Payment/>}/>
      <Route path = '/Addtask' element = {<Addtask/>}/>
      <Route path = "/Tasks" element = {<Tasks/>}/>
      <Route path = "/Profile" element = {<Profile/>}/>
      <Route path='/SelectedPlan' element = {<SelectedPlan/>}/>
      <Route path='/Tasks/:taskid/:taskName' element = {<SelectedTask/>}/>
      <Route path='/Tasks/:taskid/:taskName/Edit' element = {<TaskEdit/>}/>
      <Route path = "/Profile/Edit" element = {<EditProfile/>}/>
      <Route path = "/Profile/Solvedtasks"  element = {<SolvedTasks/>}/>


      <Route path = "*"  element = {<SryBro/>}/>
    </Routes>

    </Router>
    </>
  );
}

export default App;
