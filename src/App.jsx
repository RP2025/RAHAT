import { useState } from 'react';
import './App.css';
import {FaGithub ,FaLinkedinIn , FaMedium , FaTwitter} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import CircularImage from './functions/CircularImage';

function App() {
 
  return (
    <div className="background">
      
      {/* Top Center Heading */}
      <div className="top-heading">
      
          <h1>RAAHAT</h1>
          <h2>Your Mental Wellness Redefined</h2>
        
      </div>

    <div className="center-textbox">

      

      {/* Left Aligned Text Box Below the Heading */}
      {/* <div className="right-textbox">

        <TypeAnimation sequence={[
              'Developer' , 
              2000, 
              'Coder', 
              2000 ,
              'ML enthusiast', 
              2000 ,
              'Philomath' , 
              2000]
              }
             speed={30} 
             className='text-accent'
             wrapper='span'
             repeat={Infinity}
            />
        </div> */}
      

      {/* Right Aligned Image */}
      <div className="left-textbox">
     
          <CircularImage 
            src="src\assets\mental-health.jpg"  // Add the path to your image here
            alt="Profile Picture"
            size={400}  // You can change the size here
          />
       
      </div>



    </div>
  </div>

  
  );
}

  

export default App;
