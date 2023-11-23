import React from 'react';

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'Todo List App',
      description: 'A simple to-do list application for managing tasks and keeping track of your daily chores.',
      image: 'https://img.freepik.com/free-vector/list-concept-illustration_114360-2498.jpg?size=626&ext=jpg&ga=GA1.1.963098512.1695664941&semt=ais',
      link: 'https://your-todo-list-app-link.com',
    },
    {
      title: 'Zomato Clone',
      description: 'A clone of the Zomato food delivery platform, allowing users to order food from their favorite restaurants.',
      image: 'https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?size=626&ext=jpg&ga=GA1.1.963098512.1695664941&semt=sph',
      link: 'https://your-zomato-clone-link.com',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application that allows users to communicate with each other via text messages.',
      image: 'https://img.freepik.com/free-vector/messages-concept-illustration_114360-583.jpg?size=626&ext=jpg&ga=GA1.2.963098512.1695664941&semt=ais',
      link: 'https://your-chat-app-link.com',
    },
  ];
  

  return (
    <section id='Projects' className=" w-screen bg-gray-100 py-16 m-auto px-5">
      <div className=" z-2 container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className=" z-0 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="z-2 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
