'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sponsors = [
    {
      name: 'Tech Corp',
      logo: 'https://placehold.co/300x200/EEE/FFFFFF',
      tier: 'platinum',
    },
    {
      name: 'Digital Solutions',
      logo: 'https://placehold.co/300x200/EEE/FFFFFF',
      tier: 'gold',
    },
    {
      name: 'Innovation Hub',
      logo: 'https://placehold.co/300x200/EEE/FFFFFF',
      tier: 'gold',
    },
    {
      name: 'Future Systems',
      logo: 'https://placehold.co/300x200/EEE/FFFFFF',
      tier: 'silver',
    },
    {
      name: 'Smart Tech',
      logo: 'https://placehold.co/300x200/EEE/FFFFFF',
      tier: 'silver',
    },
    {
      name: 'Global Networks',
      logo: 'https://placehold.co/300x200/EEE/FFFFFF',
      tier: 'silver',
    },
  ];

  const platinumSponsors = sponsors.filter(s => s.tier === 'platinum');
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#6A00FF]">Sponsors</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Terima kasih kepada para sponsor yang telah mendukung acara Employee
            Gathering ini
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Platinum Sponsors
            </h3>
            <div className="flex justify-center">
              {platinumSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={150}
                    height={100}
                    unoptimized
                    className="h-20 w-auto mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
              Gold Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-6">
              {goldSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={80}
                    unoptimized
                    className="h-16 w-auto mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-bold text-center mb-6 text-gray-800">
              Silver Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-4">
              {silverSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={100}
                    height={60}
                    unoptimized
                    className="h-12 w-auto mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;
