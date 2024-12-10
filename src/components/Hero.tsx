import React from 'react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-500 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-16 h-16 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Learning Made Fun and Accessible</h1>
        <p className="text-xl md:text-2xl mb-8">Empowering every child with personalized AI-powered learning tools</p>
        <button className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transform hover:scale-105 transition-all" onClick={() => {
          const featuresSection = document.getElementById('features');
          if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          Start Learning Now
        </button>
      </div>
    </section>
  );
}