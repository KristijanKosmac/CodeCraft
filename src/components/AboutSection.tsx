'use client';

import { CheckCircle2 } from 'lucide-react';

const values = [
  {
    title: 'Technical Excellence',
    description: 'We prioritize clean, maintainable code and cutting-edge solutions that stand the test of time.',
  },
  {
    title: 'Partnership Mindset',
    description: 'Your success is our success. We act as an extension of your team, invested in long-term growth.',
  },
  {
    title: 'Innovation First',
    description: 'We stay ahead of industry trends and leverage emerging technologies to give you competitive advantage.',
  },
  {
    title: 'Transparent Communication',
    description: 'Clear, regular updates and honest conversations ensure alignment at every step of the journey.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About CodeCraft
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We're a team of passionate developers and architects with a shared mission: to transform ambitious ideas into powerful digital solutions that drive real business impact.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since our founding, we've worked with startups, scale-ups, and enterprises across diverse industries. Whether you need strategic guidance, technical expertise, or hands-on development, we bring the same level of dedication and excellence to every project.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium">5+ years of industry experience</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium">20+ successful projects delivered</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium">99% client satisfaction rate</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-blue-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
