"use client"
import Image from "next/image";
import Link from "next/link";
import { color, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
const texts = ['Frontend Developer', 'Backend Developer', 'Mobile App Developer'];
const bgColor=['green','orange','#2596be']
const variants = {
  enter: direction => {
    return {
      y: 20,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      opacity: 0
    };
  }
};


const Homepage = (url) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <div className="h-full flex lg:flex-row-reverse sm:flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className='h-1/2 lg:w-1/2 lg:h-full relative' >
        <Image src='/hero.png' fill className="object-contain"></Image>
      </div>

      <div className="h-1/2 flex flex-col gap-20 lg:w-1/2 lg:h-full lg:justify-center ">
        <h1 className="font-mono pt-10 text-4xl md:text-5xl lg:6xl ">
          <b className="text-black">Hello!</b> This is <b className="text-black">Jiwan Humagain</b>
        </h1>


        <span className="text-4xl">
          I am a：
          <AnimatePresence>
            <motion.span className="p-1 rounded-md"
              style={{ position: "absolute", backgroundColor:bgColor[index] }}
              variants={variants}
              key={index}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "tween", stiffness: 300, damping: 200 },
                opacity: { duration: 0.5 }
              }}
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </span>
        <div className="flex gap-4">

          <a href="assets/CV.pdf" download="Jiwan-Humagain-CV.pdf">
            <button className="bg-black ring-2 ring-black text-white p-2 rounded-md font-times font-medium text-xl" >Download CV</button>
          </a>
          <Link href={'/contact'}>
            <button className="ring-4 ring-white text-black p-2 rounded-md font-times font-medium text-xl" >Hire Me Now</button>
          </Link>
        </div>
      </div>

    </div>
  )

};

export default Homepage;


