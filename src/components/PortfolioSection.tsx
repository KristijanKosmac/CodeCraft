'use client';

import { ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-Commerce Platform Modernization',
    description:
      'Transformed a legacy monolith into a modern microservices architecture, increasing performance by 300% and enabling 10x scalability.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    impact: '300% Performance Increase',
    image: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description:
      'Built real-time analytics dashboard with ML insights, processing millions of data points daily with sub-second query times.',
    technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
    impact: '50ms Avg Query Time',
    image: 'bg-gradient-to-br from-purple-400 to-purple-600',
  },
  {
    title: 'Enterprise Automation Suite',
    description:
      'Implemented workflow automation reducing manual processes by 80%, saving 500+ hours per year for a Fortune 500 company.',
    technologies: ['Node.js', 'RabbitMQ', 'React', 'AWS'],
    impact: '80% Process Reduction',
    image: 'bg-gradient-to-br from-green-400 to-emerald-600',
  },
  {
    title: 'Mobile App from Concept to Launch',
    description:
      'Developed full-stack mobile and web application with real-time features, launched to 100k+ users in 6 months.',
    technologies: ['React Native', 'Node.js', 'Firebase', 'TypeScript'],
    impact: '100k+ Active Users',
    image: 'bg-gradient-to-br from-orange-400 to-red-600',
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped companies transform their technology and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background image placeholder */}
              <div className={`absolute inset-0 ${study.image}`}></div>

              {/* Overlay content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-900/70 min-h-[400px]">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {study.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div>
                      <p className="text-gray-300 text-sm">Key Result</p>
                      <p className="text-xl font-bold text-white">
                        {study.impact}
                      </p>
                    </div>
                    <ExternalLink className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
