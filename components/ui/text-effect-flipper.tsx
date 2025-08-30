import React from "react"
import { motion } from "framer-motion"

const DURATION = 0.25
const STAGGER = 0.025

interface FlipLinkProps {
  children: string
  href: string
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl text-[#D9D9D9] font-semibold uppercase sm:text-7xl md:text-6xl"
      style={{
        lineHeight: 0.75,
        cursor: "default", // optional, to indicate non-clickable
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block "
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.span>
  )
}

export default FlipLink

