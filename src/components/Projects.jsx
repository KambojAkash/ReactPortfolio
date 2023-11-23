import React from 'react'
import ProjectCard from './ProjectShowcase';
import ProjectShowcase from './ProjectShowcase';
const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio debitis culpa nesciunt doloribus reiciendis esse rem, excepturi soluta natus expedita, eveniet magni! Unde magnam recusandae hic expedita at optio quas!',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 2',
      link: 'https://example.com/project2',
    },
  ];
const Projects = () => {
  return (
    <div >
    <ProjectShowcase />
    </div>
  )
}

export default Projects