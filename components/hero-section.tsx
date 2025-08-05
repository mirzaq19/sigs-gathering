'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './countdown-timer';
import { GENERAL_INFO } from '@/data/general.const';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex justify-center items-center overflow-hidden py-12">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Geometric shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-10 -left-20 md:left-20 w-48 h-48 bg-[#6A00FF] geometric-shape"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-60 md:top-10 left-40 md:left-10 w-64 h-64"
      >
        <Image
          src="/flower.svg"
          alt="Flower"
          width={128}
          height={128}
          className="w-full h-full object-contain"
          priority
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mb-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Employee <span className="text-purple-200">Gathering 2025</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto"
        >
          Bergabunglah dengan kami dalam acara Employee Gathering yang penuh
          kegembiraan, membangun tim yang solid, dan menciptakan kenangan indah
          bersama rekan kerja.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <CountdownTimer eventDate={new Date(GENERAL_INFO.startDate)} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
