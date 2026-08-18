import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import useFadeIn from '../hooks/useFadeIn'

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
}

export default function Home() {
  useFadeIn()

  return (
    <motion.div className="max-w-[960px] mx-auto px-6" {...pageTransition}>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </motion.div>
  )
}
