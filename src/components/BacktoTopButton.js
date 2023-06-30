import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai";
import '../stylesheets/BacktoTopButton.css'

const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'      
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <div className="arrowUp">
       <AiOutlineArrowUp onClick={scrollToTop} 
       style={{display: visible ? 'inline' : 'none'}} />
      </div>
    );
  }
    
  export default ScrollButton;