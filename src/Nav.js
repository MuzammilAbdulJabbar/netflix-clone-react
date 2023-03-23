import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
  const[show,handleShow]=useState(false)
//   useEffect(()=>{
//     window.addEventListener("scroll",()=>{
// if(window.scrollY > 100){
//    handleShow(true);
// }else handleShow(false);
//     });
//     return ()=>{
//       window.removeEventListener("scroll");
//     };
//   },[]);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        handleShow(true);
      }else handleShow(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img  className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='Netflix logo'/>
      
      <img className='nav-avatar' src='http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg'alt='Smiley logo'/>
    </div>
    
  )
}

export default Nav
