import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  url: string;
}

export function FeatureCard({ title, description, Icon, color, url }: FeatureCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className={`${color} p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all`}>
        <div className="flex items-center justify-center mb-4">
          <Icon className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </a>
  );
}