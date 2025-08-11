import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Reg from './Registration.jsx';
import Payment from './Pricing.jsx';
import Addtask from './Addtask.jsx';

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
    </Routes>

    </Router>
    </>
  );
}

export default App;
