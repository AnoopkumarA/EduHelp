
import { Brain, GamepadIcon, Book, FileText, MessageSquare, Pen, Target } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      title: "Interactive Math Quizzes",
      description: "Fun and engaging math problems adapted to each child's level",
      Icon: Brain,
      color: "bg-pink-500",
      url: "https://math-page-jzak.vercel.app/" 
    },
    {
      title: "Memory Games",
      description: "Exciting games to boost memory and cognitive skills",
      Icon: GamepadIcon,
      color: "bg-purple-500",
      url: "https://memory-eosin-beta.vercel.app/"
    },
    {
      title: "Drawings",
      description: "AI-powered tool to improve speech and communication",
      Icon: Pen,
      color: "bg-blue-500",
      url: "https://draw-area-yathukrishnan-tus-projects.vercel.app/"
    },
    {
      title: "Story Teller",
      description: "Personalized stories that adapt to your child's interests",
      Icon: Book,
      color: "bg-green-500",
      url: "https://story-two-omega.vercel.app/"
    },
    {
      title: "Braille Converter",
      description: "Convert text to braille for enhanced accessibility",
      Icon: FileText,
      color: "bg-orange-500",
      url: "https://braille-hazel.vercel.app/"
    },
    {
      title: "QA Generator",
      description: "Create custom quizzes and practice tests",
      Icon: MessageSquare,
      color: "bg-red-500",
      url: "https://qa-47oe.vercel.app/"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-900">Our Amazing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}