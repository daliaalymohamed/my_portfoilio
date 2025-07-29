// src/components/projects.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "Telemid Ticketing System",
      desc: "",
      tech: ["React.js", "Redux", "Node.js", "MongoDB", "Express.js", "JWT", "Material-UI", "Docker"],
      live: "",
      code: "",
      image: "/src/assets/telemedTicketing.png" 
    },
    {
      title: "Portfolio Website",
      desc: "My own portfolio built with Vite and React.",
      tech: ["React", "Vite", "Tailwind CSS", "GSAP", "Framer Motion", "ReactBits"],
      live: "",
      code: "https://github.com/daliaalymohamed/my_portfoilio",
      image: "/src/assets/myPortfoilio.png"
    },
    {
      title: "Ta2heel",
      desc: "",
      tech: ["React.js", "React Native", "Node.js", "MongoDB", "JWT", "websockets", "Bootstrap"],
      live: "https://npd-egypt.net/",
      code: "",
      image: "/src/assets/ta2heel.png"
    },
    {
      title: "Kenana Online PWA Portal",
      desc: "",
      tech: ["React.js", "React Native", "Node.js", "MongoDB", "JWT", "websockets", "Bootstrap"],
      live: "https://kenanaonline.com/",
      code: "",
      image: "/src/assets/kenanaOnline.png"
    },
    {
      title: "GTA Portal – Giza Tourism Administration Odoo 8",
      desc: "",
      tech: ["Open Object Framework", "PostgreSQL"],
      live: "",
      code: "",
      image: "/src/assets/odoo.png"
    },
    {
      title: "Payment System – “PSU” Odoo 8",
      desc: "",
      tech: ["Open Object Framework", "PostgreSQL"],
      live: "",
      code: "",
      image: "/src/assets/odoo.png"
    }
  ];

  useEffect(() => {
    const projects = projectRefs.current.filter(el => el);

    gsap.set(projects, { y: 50, opacity: 0 });

    const animation = gsap.to(projects, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-20 px-4 max-w-7xl mx-auto scroll-mt-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
        Featured Projects
      </h2>
      <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
        Explore some of the apps I've built with modern tools and a focus on clean code and user experience.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <div
            ref={el => (projectRefs.current[i] = el)}
            key={i}
            className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            {/* Project Image with Hover Zoom */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Optional: Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                {proj.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {proj.desc}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-900/70 rounded-full border border-indigo-100 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-6">
                { proj.live !== "" ? 
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-indigo-900/70 hover:text-indigo-900/70 hover:underline flex items-center gap-1"
                  >
                    Live Demo →
                  </a>
                  : null
                }
                { proj.code !== "" ? 
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline flex items-center gap-1"
                >
                  Code →
                </a>
                : null
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;