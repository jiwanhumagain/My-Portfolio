"use client"
import { motion } from "framer-motion"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const ContactPage = () => {
    const text = "Let's Talk...";
    const form = useRef();
    const[success,setSuccess]=useState(false)
    const[error,setError]=useState(false)


    const sendEmail = (e) => {
        e.preventDefault();
        setError(false)
        setSuccess(false)

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                () => {
                   setSuccess(true)
                   form.current.reset()
                },
                (error) => {
                    setError(true)
                    console.log('FAILED...', error.text);
                },
            );}

        return (

            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <div
                    className="h-1/3 flex justify-center items-center text-6xl lg:h-full lg:w-1/2"
                >
                    {text.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ delay: index * 0.1, duration: 4, repeat: Infinity }}
                            className="bg-gradient-to-r from-orange-700 via-rose-700 to-cyan-700 inline-block text-transparent bg-clip-text"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                <div className="h-2/3 w-full lg:h-full lg:w-1/2">
                    <form ref={form} onSubmit={sendEmail} className="bg-red-50 h-full flex flex-col gap-8 rounded-xl px-24 py-10 lg:gap-10 lg:p-10 lg:justify-center">
                        <span className="text-2xl">
                            Full Name
                        </span>
                        <input type="text" placeholder="Your Good Name" name="user_name" className="bg-transparent outline-none border-b-2 border-black " />
                        <span className="text-2xl">
                            Email
                        </span>
                        <input type="text" placeholder="example@example.com" name="user_email" className="bg-transparent outline-none border-b-2 border-black " />
                        <span className="text-2xl">
                            Message
                        </span>
                        <textarea rows={3} placeholder="Leave a Message Here" name="user_message" className="bg-transparent outline-none resize-none border-b-2 border-black"></textarea>
                        <button class="bg-black px-8 py-3 rounded text-white w-fit text-xl font-semibold ">
                            Send
                        </button>
                        {success&& <span className="text-green-400 font-semibold">Message Sent Successfully!</span>}
                        {error&& <span className="text-red-400 font-semibold">Error in sending message!</span>}



                    </form>
                    {/* <form className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl  flex flex-col gap-4 justify-center p-24 ">
                    <span>
                        Full Name
                    </span>
                    <input type="text" placeholder="Your Good Name" className="bg-transparent border-b-2 border-black decoration-transparent outline-none" />
                    <span>
                        Full Name
                    </span>
                    <input type="text" placeholder="Your Good Name" className="bg-transparent border-b-2 border-black" />
                    <span>
                        Full Name
                    </span>
                    <input type="text" placeholder="Your Good Name" className="bg-transparent border-b-2 border-black" />
                    <button>
                        Send
                    </button>
                </form> */}
                </div>

            </div>
        )
    }

    export default ContactPage