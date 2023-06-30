import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai";
import '../stylesheets/backtoTopButton.css'

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () =>
    setVisible(document.documentElement.scrollTop > 300);
  ;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="arrowUp">
      <AiOutlineArrowUp onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }} />
    </div>
  );
}

export default ScrollButton;