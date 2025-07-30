// src/components/DownloadCV.jsx
import { Icon } from '@iconify/react';

const DownloadCV = () => {
  return (
    <section 
      id="download-cv" 
      className="py-20 px-4 text-center relative"
      style={{
        backgroundImage: "url('/hero_background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Optional: parallax effect
      }}
    >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-black/70 pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 bg-white">
        
            {/* Icon */}
            <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center">
                <Icon icon="mdi:download" className="text-indigo-900/70 text-2xl" />
            </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Download My CV</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Want to see my full professional background, skills, and achievements? 
            Download my CV in PDF or DOCX formats for a detailed overview.
            </p>

            {/* Download Button */}
            <a
            href="/dalia_aly_CV.pdf"
            download="dalia_aly_CV.pdf"
            className="inline-flex items-center gap-3 bg-indigo-900/70 hover:bg-indigo-900 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
            <Icon icon="mdi:file-download" className="text-xl" />
            Download CV (PDF)
            </a>

            {/* Optional: Secondary Link */}
            <div className="mt-6">
            <a
                href="/dalia_aly_CV.docx"
                download="dalia_aly_CV.docx"
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline"
            >
                Download as DOCX
            </a>
            </div>
        </div>
    </section>
  );
};

export default DownloadCV;