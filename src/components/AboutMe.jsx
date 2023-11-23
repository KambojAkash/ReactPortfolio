import React from 'react';

const AboutMe = () => {
  return (
    <section id="AboutMe" className="w-screen bg-gray-100 py-16 m-auto px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-gray-600">
              I am a BCA (Bachelor of Computer Applications) graduate with a strong foundation in computer science and programming. My educational background has provided me with valuable problem-solving skills and a passion for technology.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Internship Experience</h3>
            <p className="text-gray-600">
              During my internship at Cubics Logic, I had the opportunity to work on various web development projects. I gained hands-on experience in front-end development, working with technologies such as HTML, CSS, JavaScript, and React. This experience allowed me to apply my knowledge in a real-world setting and enhance my skills as a web developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
