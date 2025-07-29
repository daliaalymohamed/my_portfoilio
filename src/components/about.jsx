// src/components/About.jsx
import { useRef } from "react";
import TextType from "./UI/textType"; // Adjust path as needed

const About = () => {
  const aboutRef = useRef(null);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-20 px-4 max-w-4xl mx-auto text-center bg-white"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>

      {/* Typing Effect – Starts only when in view */}
      <div className="text-2xl md:text-3xl font-medium text-indigo-600 mb-8 min-h-[3.5em] flex items-center justify-center">
        <TextType
          text={[
            "Senior Software Developer",
            "With over 9 years of experience in software development, I specialize in building scalable, maintainable, and high-performance web applications",
            "I'm proficient in modern JavaScript frameworks, cloud architecture, and UI/UX best practices — always focused on delivering value to users",
            "I thrive in collaborative environments and enjoy mentoring teams, leading projects, and solving complex technical challenges",
            "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing technical blogs",
          ]}
          typingSpeed={60}
          deletingSpeed={30}
          pauseDuration={1500}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
          cursorBlinkDuration={0.8}
          initialDelay={300}
          startOnVisible={true} // 🔥 Key: only start when in viewport
          className="leading-relaxed"
          textColors={["rgb(49 46 129 / 0.7)", "rgb(49 46 129)", "rgb(55 65 81 )", "#7c3aed"]} // Optional: color per sentence
          onSentenceComplete={(sentence, index) => {
            console.log("Completed:", sentence, "Index:", index);
          }}
        />
      </div>
    </section>
  );
};

export default About;