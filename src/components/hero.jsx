// src/components/Hero.jsx
import { Link } from 'react-router';
import BlurText from './UI/blurText';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/hero_background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-black/70"></div>

      {/* Animated Content */}
      <div className="relative z-10 text-white px-6">
        {/* Animated Heading */}
        <BlurText
          text="Hi, I'm Dalia Aly"
          animateBy="words"
          direction="top"
          delay={150}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -40 }}
          animationTo={[
            { filter: 'blur(4px)', opacity: 0.7, y: 5 },
            { filter: 'blur(0px)', opacity: 1, y: 0 },
          ]}
          easing="easeOut"
          stepDuration={0.4}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-100 max-w-3xl mb-8 mx-auto"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}
        >
          Senior Software Developer passionate about building clean, responsive web apps.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.8, staggerChildren: 0.2, delayChildren: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="#projects"
            className="inline-block bg-white text-indigo-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-indigo-300 text-indigo-100 font-bold py-3 px-8 rounded-lg hover:bg-indigo-300 hover:text-indigo-900 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;