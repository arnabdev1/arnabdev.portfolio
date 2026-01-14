"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { memo } from "react"

const StairTransition = memo(() => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div 
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-40" 
          initial={{ opacity: 1 }} 
          animate={{ 
            opacity: 0,
            transition: { delay: 0.3, duration: 0.3, ease: "easeOut" }
          }}
        />
      </div>
    </AnimatePresence>
  )
});

StairTransition.displayName = 'StairTransition';

export default StairTransition;