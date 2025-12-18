'use client';

import {
  Lightbulb,
  Zap,
  Wrench,
  Rocket,
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description:
      'Expert guidance on technology strategy, architecture decisions, and best practices to align your technical vision with business goals.',
    features: ['Tech Stack Selection', 'Architecture Planning', 'Roadmap Development'],
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description:
      'Streamline your workflows with intelligent automation solutions that reduce manual work, cut costs, and increase efficiency.',
    features: ['Workflow Automation', 'Data Pipeline Integration', 'System Optimization'],
  },
  {
    icon: Wrench,
    title: 'Legacy Modernization',
    description:
      'Revitalize existing projects with modern technologies, improved architecture, and enhanced performance without disrupting operations.',
    features: ['Code Refactoring', 'Performance Optimization', 'Technology Upgrade'],
  },
  {
    icon: Rocket,
    title: 'From Zero to Live',
    description:
      'Complete end-to-end development from initial concept through deployment. We build production-ready applications from the ground up.',
    features: ['Full Development Cycle', 'DevOps & Deployment', 'Post-Launch Support'],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs, whether you're just starting or looking to enhance your existing platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
