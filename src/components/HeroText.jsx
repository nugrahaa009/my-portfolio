import { motion } from 'motion/react'
import { FlipWords } from './FlipWords';

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi I'm Aditya
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 1.2 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default HeroText