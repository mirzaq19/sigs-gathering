'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Gift, MapPin, Sparkles } from 'lucide-react';

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: MapPin,
      title: 'Lokasi Menawan',
      description:
        'Nikmati pemandangan alam yang indah dan suasana yang menyegarkan di lokasi acara.',
    },
    {
      icon: Gift,
      title: 'Doorprize Menarik',
      description:
        'Dapatkan kesempatan untuk memenangkan doorprize menarik yang telah disiapkan khusus untuk teman-teman peserta.',
    },
    {
      icon: Sparkles,
      title: 'Fun Activities',
      description:
        'Berbagai aktivitas menarik dan games seru yang akan membuat acara ini tak terlupakan.',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for{' '}
            <span className="text-[#6A00FF]">Employee Gathering?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Bergabunglah dalam acara Employee Gathering yang luar biasa ini.
            Saatnya membangun tim yang lebih solid, bersenang-senang bersama,
            dan menciptakan kenangan indah dengan seluruh rekan kerja.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#6A00FF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
