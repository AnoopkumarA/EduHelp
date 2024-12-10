import React from 'react';
import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8" />
              <span className="text-xl font-bold">EduHelp</span>
            </div>
            <p className="text-indigo-200">Empowering every child with the tools they need to succeed.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-indigo-200">
              <li>Math Quizzes</li>
              <li>Memory Games</li>
              <li>Pronunciation Helper</li>
              <li>Story Teller</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Tools</h4>
            <ul className="space-y-2 text-indigo-200">
              <li>Braille Converter</li>
              <li>QA Generator</li>
              <li>Progress Tracking</li>
              <li>Parent Dashboard</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-indigo-200">
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-200">
          <p>&copy; 2024 EduHelp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}