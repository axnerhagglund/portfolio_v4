import React from 'react'
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
function SectionOne() {
    const {scrollY }= useScroll()

    const opacity: MotionValue<number> = useTransform(scrollY, [0, 300], [1, 0])
  return (
   
    <section className="h-screen flex flex-col items-center justify-center text-[#94DBB2] bg-[#112D29] ">
         <motion.div
                    style={{opacity}}
                 initial="hidden"
                animate="visible"
                 variants={{
                    visible: {opacity: 1, y: [0, -24, 0]},
                    hidden: {opacity: 1, y: 0}
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                    
                }}>
        <h1 className="text-5xl font-[Poppins] font-bold">Scroll or</h1>
        <p className="text-2xl">don't</p>
        </motion.div>
    </section>
    
  )
}

export default SectionOne