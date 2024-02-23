import React from 'react';
import Image from "next/image"
import { motion } from 'framer-motion'

const boxVariants = {
    initial: {
        opacity: 1,
    },

    animate: {
        opacity: 0,
        transition: {
            duration: .75,
            delay: 0.03,
            type: "tween",

        }

    }

}

const imageVariants = {
    animate: {
        scale: 1.1,
        opacity: 1,
        boxShadow: "0px 0px 8px rgb(255,255,255)",
    }
}


const DynamicElement = ({ imageUrl, heading }) => {
    return (
        <motion.div 
            className=" relative bg-transparent ring ring-rose-100 rounded h-full w-full flex flex-col gap-5 p-4 items-center justify-center hover:ring-purple-400 hover:cursor-pointer"
            variants={imageVariants}
            whileHover='animate'
            >
            <div className="w-96 h-96 flex sm:justify-center sm:items-center">
                <Image src={imageUrl} alt={heading} width={300} height={120} className="" />
            </div>
            <hr className='border-black  border-b w-full' />
            <div className="font-bold text-4xl md:text-6xl">
                <h1 className="bg-gradient-to-r from-blue-600 via-zinc-400 to-indigo-400 inline-block text-transparent bg-clip-text">{heading}</h1>
            </div>
            <motion.div
                className='w-full h-full top-0 left-0 absolute bg-gradient-to-b from-slate-100 to-rose-200 flex justify-center gap-2 items-center rounded'
                variants={boxVariants}
                initial="initial"
                whileHover='animate'

            >
                <h1 className='ring-2 ring-white rounded-lg p-2 font-semibold text-5xl bg-gradient-to-r from-orange-400 via-rose-400 to-cyan-500 inline-block text-transparent bg-clip-text'>
                    Touch Me
                </h1>
                <h1 className='text-5xl'>😉</h1>
            </motion.div>
        </motion.div>
    );
};

export default DynamicElement;
