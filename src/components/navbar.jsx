"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname()
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
            <div className="">
                <Link href="/" className="bg-slate-900 sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl rounded-full border-zinc-950 p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">J</span>
                    {/* <span className="text-black mr-1"> </span> */}
                    <span className="text-white mr-1">D.</span>
                </Link>
            </div>
            <div className="hidden md:flex gap-10 h-full items-center justify-between">
                <div className="text-lg">
                    <Link href="/" className={`${pathName === '/' && "bg-slate-800 text-xl rounded-md border-zinc-950 p-1 font-semibold flex items-center justify-center text-white"}`}>Home
                    </Link>
                </div>
                <div className="text-lg">
                    <Link href="/about" className={`${pathName === '/about' && "bg-slate-800 text-xl rounded-md border-zinc-950 p-1 font-semibold flex items-center justify-center text-white"}`}>About</Link></div>
                <div className="text-lg">
                    <Link href="/projects" className={`${pathName === '/projects' && "bg-slate-800 text-xl rounded-md border-zinc-950 p-1 font-semibold flex items-center justify-center text-white"}`}>Projects</Link></div>
                <div className="text-lg">
                    <Link href="/contact" className={`${pathName === '/contact' && "bg-slate-800 text-xl rounded-md border-zinc-950 p-1 font-semibold flex items-center justify-center text-white"}`}>Contact</Link></div>

            </div>
            <div className="hidden md:flex gap-3 h-full items-center justify-between">
                <Link href="https://www.facebook.com/jeevan.humagain.56" target="_blank">
                    <Image src="/facebook.png" alt="" height={24} width={24} />
                </Link>
                <Link href="https://np.linkedin.com/in/jiwan-humagain-89aa8b205" target="_blank">
                    <Image src="/linkedin.png" alt="" height={24} width={24} />
                </Link>
                <Link href="https://www.instagram.com/jiwan__humagain/" target="_blank">
                    <Image src="/instagram.png" alt="" height={24} width={24} />
                </Link>
                <Link href="https://github.com/jiwanhumagain" target="_blank">
                    <Image src="/github.png" alt="" height={24} width={24} />
                </Link>
            </div>
            <div className="md:hidden">
                <button id="hamburgerButton" className="h-8 w-10 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
                    <motion.div animate={open ? { backgroundColor: "white", rotate: -45, } : { rotate: 0 }} className={("w-10 h-1 bg-black rounded origin-right")}></motion.div>
                    <motion.div animate={open ? { opacity: 0 } : { opacity: 1 }} className={("w-10 h-1 bg-black rounded")}></motion.div>
                    <motion.div animate={open ? { backgroundColor: "white", rotate: 45 } : { rotate: 0 }} className={("w-10 h-1 bg-black rounded origin-right")}></motion.div>
                </button>

            </div>
            {
                open && (
                    <motion.div animate={{ x: [70, 0] }} transition={{when:"beforeChildren"}} className="md:hidden absolute text-4xl top-0 left-0 flex flex-col h-screen w-screen bg-black text-white items-center justify-center gap-20 z-40">
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2}} className="">
                            <Link href="/" className="font-semibold ">Home
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="font-semibold">
                            <Link href="/about">
                                About
                            </Link>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="font-semibold"><Link href="/projects">Projects</Link></motion.div>
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="font-semibold"><Link href="/contact">Contact</Link></motion.div>

                    </motion.div>
                )
            }

        </div>
    )
}
export default Navbar



 {/* <div className="h-52 w-52 ring ring-zinc-600 rounded p-4 hover:ring-purple-400 hover:cursor-pointer">
                        <div className="flex flex-col gap-10 items-center justify-center">
                            <Image src='/c_programming.png' width={100} height={1080} className=""></Image>
                            <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-zinc-400 to-indigo-400 inline-block text-transparent bg-clip-text">C</h1>
                        </div>

                    </div>
                    <div className="h-52 w-52 ring ring-zinc-600 rounded p-4 hover:ring-purple-400 hover:cursor-pointer">
                        <div className="flex flex-col gap-10 items-center justify-center">
                            <Image src='/cP_programming.png' width={100} height={100} className=""></Image>
                            <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-zinc-400 to-indigo-400 inline-block text-transparent bg-clip-text">C++</h1>
                        </div>

                    </div>
                    <div className="h-52 w-52 ring ring-zinc-600 rounded p-4 hover:ring-purple-400 hover:cursor-pointer">
                        <div className="flex flex-col gap-10 items-center justify-center">
                            <Image src='/javascript.png' width={100} height={100} className=""></Image>
                            <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-zinc-400 to-indigo-400 inline-block text-transparent bg-clip-text">Javascript</h1>
                        </div>

                    </div> */}