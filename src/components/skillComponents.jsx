import React from 'react';
import Image from "next/image"


const DynamicElement = ({ imageUrl, heading }) => {
  return (
    <div className="ring ring-zinc-600 rounded h-52 w-52 flex flex-col gap-5 p-4 items-center justify-center hover:ring-purple-400 hover:cursor-pointer">
      <div className="w-30 h-30">
        <Image src={imageUrl} alt={heading} width={100} height={100} className="" />
      </div>
      <div className="font-bold text-4xl ">
        <h1 className="bg-gradient-to-r from-blue-600 via-zinc-400 to-indigo-400 inline-block text-transparent bg-clip-text">{heading}</h1>
      </div>
    </div>
  );
};

export default DynamicElement;
