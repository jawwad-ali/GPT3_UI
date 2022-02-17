import React, { useState } from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/logo.svg" 

const Menu = () => (    
  <>  
    <p><a href="#home">Home</a></p>  
    <p><a href="#wpt3">What is GPT3?</a></p>
    <p><a href="#openai">Open AI</a></p>
    <p><a href="#possibility">Possibility</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#blog">Library</a></p> 
  </> 
)  

const Navbar = () => {
  const [toggle, setToggle] = useState(false); 
   
  return ( 
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className='gpt3__navbar-links_logo' >
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign Up</button>
      </div>
 
      {/* mobile menu */}
      <div className="gpt3__navbar-menu">
        {toggle ?
          <>
            <RiCloseLine color="white" size={27} onClick={() => setToggle(false)} />
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button>Sign Up</button>  
                </div>
              </div>
            </div>
          </>
          :
          <RiMenu3Line color="white" size={27} onClick={() => setToggle(true)} />
        }
      </div>
    </div>
  )
}
export default Navbar   