// src/components/skills.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef();
  const skillRefs = useRef([]);

  const techs = [
    { name: 'Next.js', icon: 'devicon:nextjs-wordmark', color: '#000000' },
    { name: 'React.js', icon: 'devicon:react-wordmark', color: '#61DAFB' },
    { name: 'Redux', icon: 'simple-icons:redux', color: '#764ABC' },
    { name: 'Node.js', icon: 'devicon:nodejs-wordmark', color: '#68A063' },
    { name: 'Express.js', icon: 'simple-icons:express', color: '#000000' },
    { name: 'MongoDB', icon: 'devicon:mongodb-wordmark', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'devicon:postgresql-wordmark', color: '#336791' },
    { name: 'MySQL', icon: 'devicon:mysql-wordmark', color: '#F29111' },
    { name: 'Odoo', icon: 'simple-icons:odoo', color: '#000000'},
    { name: 'Git', icon: 'devicon:git-wordmark', color: '#F1502F' },
    { name: 'GitHub', icon: 'devicon:github-wordmark', color: '#181717' },
    { name: 'RESTful API', icon: 'carbon:api', color: '#0052CC' },
    { name: 'GraphQL', icon: 'logos:graphql', color: '#E10098' },
    { name: 'JWT', icon: 'mdi:shield-lock', color: '#4B5563' },
    { name: 'Passport.js', icon: 'simple-icons:passport', color: '#0099FF' },
    { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#38B2AC' },
    { name: 'Material-UI', icon: 'logos:material-ui', color: '#0081CB' },
    { name: 'Bootstrap', icon: 'devicon:bootstrap-wordmark', color: '#7952B3' },
    { name: 'Docker', icon: 'devicon:docker-wordmark', color: '#2496ED' },
    { name: 'OpenObject Framework', icon: 'bx:bxs-component', color: '#6B7280' },
  ];

  useEffect(() => {
    const skills = skillRefs.current.filter(el => el);

    // Reset animation state
    gsap.set(skills, { x: 100, opacity: 0 });

    const animation = gsap.to(skills, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'back.out(1.1)',
      stagger: 0.12,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',   // Trigger when top of section hits 80% of viewport
        end: 'bottom 20%',  // End when bottom hits 20%
        toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        invalidateOnRefresh: true, // Recalculate on resize
        refreshPriority: 1,
        // Optional: markers: true, // Debug
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section ref={containerRef} id="skills" className="py-20 bg-indigo-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        {techs.map((tech, index) => (
          <div
            ref={el => (skillRefs.current[index] = el)}
            key={tech.name}
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 text-base font-medium text-gray-800 min-w-max"
          >
            <Icon
              icon={tech.icon}
              className="text-3xl"
              style={{ color: tech.color }}
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;