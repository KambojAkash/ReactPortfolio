import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane  } from '@fortawesome/free-solid-svg-icons';
const ContactForm = () => {
  return (
    <div id="ContactForm" className="flex justify-center items-center h-screen flex-col lg:flex-row">
      {/* Left-side image */}
      <div className="w-1/2 p-8  hidden lg:flex">
        <img
          src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?size=626&ext=jpg&ga=GA1.1.963098512.1695664941&semt=sph"
          alt="Contact"
          className="w-full h-auto"
        />
      </div>

      {/* Right-side contact form */}
      <div className="w-screen lg:w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full border rounded-md px-3 py-2 h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit" 
            className="group bg-blue-500 duration-300 text-white px-8 py-2 rounded-md hover:bg-blue-600"
          >
            Submit <span  className='relative group-hover:left-2 '><FontAwesomeIcon icon={faPaperPlane } /></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
