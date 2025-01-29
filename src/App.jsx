import { useState } from 'react';
import './App.css';
import {FaGithub ,FaLinkedinIn , FaMedium , FaTwitter} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'

function App() {
 
  return (
    <div className="background">
      <div>
      {/* Top Center Heading */}
      <div className="top-heading">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>RAAHAT</h1>
          <h2>Your Mental Wellness Redefined</h2>
        </motion.div>
      </div>

      {/* Left Aligned Text Box Below the Heading */}
      <div className="left-textbox">
        <TypeAnimation
          sequence={['Anxiety', 2000, 'Depression', 2000, 'Stress', 2000, 'Mental Health', 2000]}
          wrapper="span"
          cursor={true}
          repeat={100}
          speed={50}
        />
      </div>
    </div>
    </div>
  );
}

  

export default App;
