import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Akashdeep Portfolio</h3>
          <p className="text-gray-300">Thank you for visiting to my Portfolio</p>
        </div>

        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a
                href="/path-to-resume.pdf"
                download="YourResume.pdf"
                className="text-blue-500 hover:underline"
              >
                Download Resume
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://github.com/kambojakash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/contact"
                className="text-blue-500 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Follow Me</h3>
          <ul className="flex space-x-4">
      
            <li>
              <a
                href="https://www.linkedin.com/in/akashdeep-kumar-0b6628234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
