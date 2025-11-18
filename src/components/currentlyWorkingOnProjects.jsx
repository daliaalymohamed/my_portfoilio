// src/components/CurrentlyWorking.jsx
import { useState, useEffect } from 'react';
import farmersMarket from '../assets/farmersMarket.png'
import { Icon } from '@iconify/react';

const CurrentlyWorking = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., image load, data fetch)
    // You can extend this later to check actual image load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="currently-working" className="py-20 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">🚀 Currently Working On</h2>
          <p className="text-lg text-gray-600 mb-12">Loading what's new...</p>

          <div className="flex flex-col items-center justify-center py-12">
            <Icon
              icon="svg-spinners:bars-scale-fade"
              className="text-indigo-600 w-14 h-14 mx-auto"
            />
            <p className="mt-4 text-gray-600 font-medium">Just a moment...</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="currently-working" className="py-20 px-4 bg-indigo-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          🚀 Currently Working On
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Here's what I'm building right now — from side projects to open-source contributions.
        </p>

        <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden md:flex md:items-start md:gap-6">
                {/* Image */}
                <div className="md:w-1/3 mb-4 md:mb-0 rounded-lg overflow-hidden">
                    <img
                        loading="lazy"
                        src={farmersMarket}
                        alt="Farmer's Market E-Commerce Dashboard Preview"
                        className="w-full h-48 md:h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                </div>
                {/* Content */}
                <div className="md:flex-1">
                    <div className="flex items-start gap-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Farmer's Market "E-Commerce"</h3>
                            <p className="text-gray-600 mt-2">
                                Farmers Market is a Next.js e-commerce application built using modern web technologies. It provides a platform for users to browse and purchase products, with an admin dashboard for managing the application.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Next.js</span>
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Mongo</span>
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Redux</span>
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">JWT</span>
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">MeiliSearch</span>
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Redis</span>
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Docker</span>
 
                            </div>
                            <div className="flex gap-4 mt-6">
                                {/* <a
                                  href={""}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-sm font-medium text-indigo-900/70 hover:text-indigo-900/70 hover:underline flex items-center gap-1"
                                >
                                Live Demo →
                                </a> */}
                                <a
                                  href={"https://github.com/daliaalymohamed/farmersmarket"}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline flex items-center gap-1"
                                >
                                Code →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorking;