import  telemedTicketing  from "../assets/telemedTicketing.png";
import  myPortfoilio  from "../assets/myPortfoilio.png";
import  ta2heel  from "../assets/ta2heel.png";
import  kenanaOnline  from "../assets/kenanaOnline.png";
import  odoo  from "../assets/odoo.png";

export  const projects = [
    {
      title: "Telemid Ticketing System",
      desc: "Application for managing issues, patient's sessions, cancelation reasons and hospitals",
      tech: ["React.js", "Redux", "Node.js", "MongoDB", "Express.js", "JWT", "Material-UI", "Docker"],
      live: "",
      code: "",
      image: telemedTicketing,
      role: "Supervisor" 
    },
    {
      title: "Portfolio Website",
      desc: "My own portfolio built with Vite and React.",
      tech: ["React", "Vite", "Tailwind CSS", "GSAP", "Framer Motion", "ReactBits"],
      live: "https://daliaalyportfolio.netlify.app/",
      code: "https://github.com/daliaalymohamed/my_portfoilio",
      image: myPortfoilio,
      role: "Developer" 
    },
    {
      title: "Ta2heel",
      desc: "Application for supporting persons with disabilities in accessing better opportunities for career development",
      tech: ["React.js", "React Native", "Node.js", "MongoDB", "JWT", "websockets", "Bootstrap"],
      live: "https://npd-egypt.net/",
      code: "",
      image: ta2heel,
      role: "Developer" 
    },
    {
      title: "Kenana Online PWA Portal",
      desc: "Kenana Online provides website and portal creation services aimed at encouraging government and civil institutions, as well as individual experts, specialists, and practitioners, to publish specialized Arabic knowledge on the internet",
      tech: ["React.js", "React Native", "Node.js", "MongoDB", "JWT", "websockets", "Bootstrap"],
      live: "https://kenanaonline.com/",
      code: "",
      image: kenanaOnline,
      role: "Developer" 
    },
    {
      title: "GTA Portal – Giza Tourism Administration Odoo 8",
      desc: "A customized portal system built on Odoo 8 for the Giza Tourism Administration (GTA), enabling streamlined management of tourism services",
      tech: ["Open Object Framework", "PostgreSQL"],
      live: "",
      code: "",
      image: odoo,
      role: "Developer" 
    },
    {
      title: "Payment System – “PSU” Odoo 8",
      desc: "An internal financial management system built on Odoo 8 for streamlined handling of payments and expenses within the department. The PSU (Payment Services Unit) application centralizes payment requests, approvals, and expense tracking, improving transparency, accountability, and efficiency in financial operations. Designed to support internal workflows, it reduces manual processes and ensures accurate, auditable record-keeping for all departmental transactions",
      tech: ["Open Object Framework", "PostgreSQL"],
      live: "",
      code: "",
      image: odoo,
      role: "Developer" 
    },
]