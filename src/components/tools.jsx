// src/components/tools.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  const containerRef = useRef();
  const cardRefs = useRef([]);

  const categories = [
    {
      title: 'AI Tools & Platforms',
      icon: 'mdi:robot-outline',
      tools: [
        { name: 'OpenAI API', note: 'GPT, TTS', icon: 'simple-icons:openai', color: '#000000' },
        { name: 'OpenRouter', note: 'multi-model AI routing', icon: 'simple-icons:openrouter', color: '#6566F1' },
        { name: 'Hugging Face', note: 'models & inference APIs', icon: 'simple-icons:huggingface', color: '#FF9D00' },
        { name: 'Axios / Fetch', note: 'HTTP client for API integration', icon: 'simple-icons:axios', color: '#5A29E4' },
      ],
    },
    {
      title: 'System Design & Documentation Tools',
      icon: 'mdi:sitemap-outline',
      tools: [
        { name: 'Claude AI', note: 'claude.ai web, Claude Code CLI, VS Code extension', icon: 'simple-icons:claude', color: '#D97757' },
        { name: 'MCP (Model Context Protocol)', note: 'connector integration for AI workflows', icon: 'simple-icons:modelcontextprotocol', color: '#000000' },
        { name: 'ERD & sequence diagram authoring', note: 'Mermaid, drawio-app', icon: 'simple-icons:mermaid', color: '#FF3670' },
        { name: 'Google Stitch', note: 'UI/screen design prototyping', icon: 'mdi:palette-swatch-outline', color: '#4285F4' },
      ],
    },
    {
      title: 'Testing, DevOps & Integrations',
      icon: 'mdi:cog-sync-outline',
      tools: [
        { name: 'Vitest', icon: 'logos:vitest' },
        { name: 'Testing Library', icon: 'logos:testing-library' },
        { name: 'ESLint', icon: 'logos:eslint' },
        { name: 'Docker / docker-compose', icon: 'logos:docker-icon' },
        { name: 'Vercel', icon: 'simple-icons:vercel', color: '#000000' },
        { name: 'PM2', icon: 'simple-icons:pm2', color: '#2B037A' },
        { name: 'Nginx', icon: 'simple-icons:nginx', color: '#009639' },
        { name: 'Keycloak', note: 'SSO / OpenID Connect identity provider', icon: 'simple-icons:keycloak', color: '#4D4D4D' },
        { name: 'AWS S3', note: 'cloud file storage, presigned URLs', icon: 'logos:aws-s3' },
        { name: 'SendGrid', icon: 'logos:sendgrid-icon' },
        { name: 'pino', note: 'structured logging', icon: 'mdi:math-log', color: '#4B5563' },
        { name: 'node-cron', icon: 'mdi:clock-outline', color: '#4B5563' },
      ],
    },
  ];

  useEffect(() => {
    const cards = cardRefs.current.filter(el => el);

    // Reset animation state
    gsap.set(cards, { y: 60, opacity: 0 });

    const animation = gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section ref={containerRef} id="tools" className="py-20 bg-white scroll-mt-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Tools</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((category, index) => (
          <div
            ref={el => (cardRefs.current[index] = el)}
            key={category.title}
            className="bg-indigo-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Icon icon={category.icon} className="text-3xl text-indigo-600 shrink-0" />
              <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl shadow-sm"
                >
                  <Icon
                    icon={tool.icon}
                    className="text-2xl shrink-0 mt-0.5"
                    style={{ color: tool.color }}
                  />
                  <div>
                    <span className="block text-base font-medium text-gray-800">{tool.name}</span>
                    {tool.note && (
                      <span className="block text-sm text-gray-500">{tool.note}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
