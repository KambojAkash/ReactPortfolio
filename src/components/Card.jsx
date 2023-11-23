import React from 'react';

const Card = ({ skillName, skillDescription, skillIcon }) => {
  return (
    <div className="bg-white max-w-sm h-48 w-80 flex justify-center items-center  rounded overflow-hidden  shadow-custom mx-4 my-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">{skillName}</div>
        <p className=" text-base">{skillDescription}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:scale-150 duration-150 transition-all">
          {skillIcon}
        </span>
      </div>
    </div>
  );
};

export default Card;
