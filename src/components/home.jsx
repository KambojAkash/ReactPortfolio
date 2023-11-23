import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Typewriter from "typewriter-effect";
import "../App.css";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Skills from "./Skills";
import ProjectShowcase from "./ProjectShowcase";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
const allSkills = [
  {
    name: 'HTML',
    description: 'Creating the structure of web pages.',
    icon: '🌐',
  },
  {
    name: 'CSS',
    description: 'Styling web pages for a visually appealing design.',
    icon: '🎨',
  },
  {
    name: 'JavaScript',
    description: 'Adding interactivity and functionality to websites.',
    icon: '🚀',
  },
  {
    name: 'React',
    description: 'Building dynamic and responsive web applications.',
    icon: '⚛️',
  },
  {
    name: 'Tailwind CSS',
    description: 'Efficiently styling web components with utility classes.',
    icon: '🎩',
  },
  {
    name: 'Bootstrap',
    description: 'Creating responsive and visually appealing websites.',
    icon: '🅱️',
  },
  // Add more skills here
];

// In your component where you use SkillsComponent:


const Home = () => {
  return (
    <>
    <div
      style={{ fontFamily: "Poppins" }}
      className="lg:h-screen h-[calc(100vh-20px)] w-screen  flex flex-col-reverse  justify-around  items-center lg:flex-row lg:justify-center lg:items-center overflow-hidden"
      >
      <div className="h-3/6  flex flex-col justify-center items-start lg:justify-start lg:items-start gap-5 p-5 lg:p-20">
        <div className="flex ">
          <h1 className="text-3xl lg:text-6xl font-bold ">
            {" "}
            Hi There,
            <br /> I'm Akashdeep
          </h1>
          {/* <h1 className='text-6xl font-bold '> I'm Akashdeep</h1> */}
        </div>
        <div className="text-3xl">
          <Typewriter
            options={{
              strings: ["Web Developer", "Freelancer", "Youtuber"],
              autoStart: true,
              loop: true,
            }}
            style={{
              fontSize: "34px", // Change the font size here
            }}
          />
        </div>
        <button className="group text-2xl bg-blue-800 duration-300 text-white px-4 py-2 rounded-md hover:bg-blue-900">
          About Me{" "}
          <span className="relative group-hover:left-2 ">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
      <div className="">
       
        <img
        src="https://img.freepik.com/premium-photo/cartoon-man-with-glasses-beard-blue-shirt-generative-ai_958165-24562.jpg?size=626&ext=jpg&ga=GA1.2.963098512.1695664941&semt=ais"
        alt="Portfolio"
        className="w-full h-auto "
      />
    
      </div>
    </div>
    <div>
      <AboutMe />
    </div>
    <div>
    <Skills skills={allSkills} />
    </div>
    <div  className="z-1">
      <ProjectShowcase />
    </div>
    <div>
      <ContactForm />

    </div>
          </>
  );
};

export default Home;
