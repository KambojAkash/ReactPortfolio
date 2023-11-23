import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div id="Skills" className="bg-gray-100 py-16 m-auto px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="text-6xl text-blue-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
