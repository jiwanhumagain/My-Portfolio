"use client"
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PagesTransitionLayout = ({ children }) => {
    const pathName=usePathname()
    return (
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-slate-100 to-purple-300">
                <motion.div className="" animate={{ y: [-70, 0] }} transition={{when:"beforeChildren", duration:.45}} >
                    <motion.div className="h-24" ><Navbar /></motion.div>
                    <motion.div className="h-[calc(100vh-6rem)]" initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} transition={{ease:'easeInOut', duration:1}}>{children}</motion.div>
                </motion.div>
            </div>
    )
}

export default PagesTransitionLayout