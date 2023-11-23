import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const[toggleNavCount,settoggleNavCount]=useState(0);
  const navRef=useRef(null);
  function handleClick(){
   
   if(toggleNavCount==1){
    // alert(toggleNavCount)
    navRef.current.style.left="100%"
    settoggleNavCount(toggleNavCount-1);
   }
  else{
    // alert(toggleNavCount)
    navRef.current.style.left="0px"
    settoggleNavCount(toggleNavCount+1);
  }
  
  }
  return (
    <>
    <div ref={navRef} className='w-screen h-screen  lg:h-10 lg:flex-row md:left-0 lg:justify-center bg-[rgba(0,0,0,0.8)] flex items-center flex-col justify-evenly z-40 py-2 absolute top-0 left-[100%] lg:left-0 transition-all duration-75 ease-in-out
      '>

     <a href="#" className=' z-10 py-2 px-5 text-white hover:border-2 border-white transition-all rounded-full duration-200  hover:underline lg:border-none'><FontAwesomeIcon icon={faHome} className='mr-2'/>Home</a>
     <a href="#Projects" className='z-10 py-2 px-5 text-white hover:border-2 border-white transition-all duration-200 hover:text-white hover:rounded-full hover:scale-[1.1] lg:border-none'><FontAwesomeIcon icon={faSmile}  className='mr-2'/>Projects</a>
     <a href="#Skills" className='z-10 py-2 text-white px-5 hover:border-2 border-white transition-all duration-200 hover:text-white hover:rounded-full hover:scale-[1.1] lg:border-none'><FontAwesomeIcon icon={faChartBar}  className='mr-2' />Skills</a>
     <a href="#AboutMe" className='z-10 py-2 px-5 text-white hover:border-2 border-white transition-all duration-200 hover:text-white hover:rounded-full hover:scale-[1.1] lg:border-none'><FontAwesomeIcon icon={faUser}  className='mr-2'/>About</a>
     <a href="#ContactForm" className='z-10 py-2 px-4 text-white hover:border-2 border-white transition-all duration-200  hover:rounded-full hover:text-white hover:scale-[1.1] lg:border-none'><FontAwesomeIcon icon={faEnvelope}  className='mr-2'/>Contact</a>

  
    </div>
    <span className='lg:hidden text-blue-800 flex justify-end mr-10 mt-5 bg-none z-50 fixed top-3 left-[90vw] ' onClick={handleClick}>
    <FontAwesomeIcon icon={faBars}  />
    </span>
    </>
  )
}

export default Navbar