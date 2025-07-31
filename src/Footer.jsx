import Facebook from './assets/socialMediaIcons/facebook.png'
import X from './assets/socialMediaIcons/X.png'
import Linkedin from './assets/socialMediaIcons/linkedin.png'
import GitHub from './assets/socialMediaIcons/github.png'
import { NavLink, useNavigate } from "react-router-dom";

function footer(){
    const navigate = useNavigate();
    return(
      <>
      <div className='foot'>
       
        <h1 className="questify"><a onClick={() => navigate('/Home')}>Quest<span className="ify">ify</span></a></h1>
        <div className="pages-links-footer">
            <NavLink to={'/Home'} className='nav-link'>Home</NavLink>
            <NavLink to={'/About'} className='nav-link'>About</NavLink>  
            <NavLink to={'/Pricing'} className='nav-link'>Pricing</NavLink>
            <NavLink to={'/MyTasks'} className='nav-link'>My Tasks</NavLink> 
        </div>
        <div className='social-media-icons-footer'>
            <label>
                Follow us on these platforms :
            </label>
            <ul>
                <li><img src={Facebook}/></li>
                <li><img src={X}/></li>
                <li><img src={Linkedin}/></li>
                <li><img src={GitHub}/></li>

            </ul>
        </div>
        <div className='langs-footer'>
            <label>
                Language :
            </label>
            <select>
                <option>English</option>
                <option>Arabic</option>
                <option>German</option>
                <option>Russian</option>
            </select>
        </div>
        <div>
            <label style={{
                fontWeight:'bold',
                marginRight:"10px"
            }}>
                Report issues or bugs  :
            </label>
            <input type='text' placeholder='Enter your problem...'/>
            
            <button>╰┈➤</button>
        </div>
        
        <h3 className='rights'>&copy; {new Date().getFullYear()} Questify, All rights reserved</h3>
      </div>
      
      </>
    );
}
export default footer;