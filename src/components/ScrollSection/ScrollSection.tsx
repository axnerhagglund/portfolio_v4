import  { useEffect } from "react"
import type { ReactNode } from "react"

import { motion, useAnimation } from "framer-motion"

import { useInView } from "react-intersection-observer"

type ScrollSectionProps = {
    children: ReactNode
}
function ScrollSection({children}: ScrollSectionProps) {
    const controls = useAnimation()
    const [ref, inView] = useInView({threshold: 0.6})

    useEffect(() => {
        if(inView) {
            controls.start("visible")
        }
    },[controls,inView])
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10},
      }}
      transition={{ duration: 0.9, ease : "easeInOut" }}
      
      
    >
      {children}
    </motion.div>
  )
}

export default ScrollSection