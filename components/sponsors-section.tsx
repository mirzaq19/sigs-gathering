'use client';

import { motion, stagger, useInView, Variants } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sponsors = [
    {
      name: 'PT. Kromtekindo Utama',
      logo: '/sponsors/kromtekindo.png',
      tier: 'platinum',
    },
    {
      name: 'PT. Unitama Analitika Perkasa',
      logo: '/sponsors/unitama.jpeg',
      tier: 'gold',
    },
    {
      name: 'PT. Prolabios Mitra Analitika',
      logo: '/sponsors/prolabios.png',
      tier: 'silver',
    },
    {
      name: 'PT. Equiva Ligand Indonesia',
      logo: '/sponsors/equiva.jpg',
      tier: 'silver',
    },
    {
      name: 'PT. Laborindo Sarana',
      logo: '/sponsors/laborindo.png',
      tier: 'silver',
    },
    {
      name: 'PT. Ditek Jaya',
      logo: '/sponsors/ditek.png',
      tier: 'silver',
    },
    {
      name: 'PT. Radin Nugrah Daksatama',
      logo: '/sponsors/radin.png',
      tier: 'bronze',
    },
    {
      name: 'PT. Elo Karsa Utama',
      logo: '/sponsors/elokarsa.png',
      tier: 'bronze',
    },
    {
      name: 'PT. Agarindo Biological Company',
      logo: '/sponsors/agarindo.png',
      tier: 'bronze',
    },
    {
      name: 'PT. Global Satria Aji',
      logo: '/sponsors/gsa.jpeg',
      tier: 'bronze',
    },
    {
      name: 'PT. New Praktika Alkesindo',
      logo: '/sponsors/npa.png',
      tier: 'bronze',
    },
    {
      name: 'PT. Berca Niaga Medika',
      logo: '/sponsors/bnm.png',
      tier: 'bronze',
    },
    {
      name: 'PT. Multi Eka Chemicalindo',
      logo: '/sponsors/mec.png',
      tier: 'bronze',
    },
    {
      name: 'PT. Dipa Puspa Labsains',
      logo: '/sponsors/dipa.png',
      tier: 'bronze',
    },

    {
      name: 'PT. Sartonet Filtrasi Indonesia',
      logo: '/sponsors/sartonet.png',
      tier: 'bronze',
    },
    {
      name: 'CV. Biotek Mandiri',
      logo: '/sponsors/biotek.png',
      tier: 'bronze',
    },
    {
      name: 'PT. Gading Murni',
      logo: '/sponsors/gading-murni.png',
      tier: 'bronze',
    },
  ];

  const platinumSponsors = sponsors.filter(s => s.tier === 'platinum');
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');
  const bronzeSponsors = sponsors.filter(s => s.tier === 'bronze');

  const sponsorsContainerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: stagger(0.3),
      },
    },
  };

  const sponsorVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

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
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Platinum Sponsors
            </h3>
            <div className="flex justify-center">
              {platinumSponsors.map(sponsor => (
                <motion.div
                  key={sponsor.name}
                  variants={sponsorVariants}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={120}
                        unoptimized
                        className="h-14 md:h-22 w-auto mx-auto transition-all duration-300"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{sponsor.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <motion.div
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
              Gold Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-6">
              {goldSponsors.map(sponsor => (
                <motion.div
                  key={sponsor.name}
                  variants={sponsorVariants}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={80}
                        unoptimized
                        className="h-14 md:h-20 w-auto mx-auto transition-all duration-300"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{sponsor.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <motion.div
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-lg font-bold text-center mb-6 text-gray-800">
              Silver Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-4">
              {silverSponsors.map(sponsor => (
                <motion.div
                  key={sponsor.name}
                  variants={sponsorVariants}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={100}
                        height={60}
                        unoptimized
                        className="h-7 md:h-12 w-auto mx-auto transition-all duration-300"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{sponsor.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bronze Sponsors */}
        {bronzeSponsors.length > 0 && (
          <motion.div
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-lg font-bold text-center mb-6 text-gray-800">
              Bronze Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-4">
              {bronzeSponsors.map(sponsor => (
                <motion.div
                  key={sponsor.name}
                  variants={sponsorVariants}
                  className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={60}
                        unoptimized
                        className="h-6 md:h-10 w-auto mx-auto transition-all duration-300"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{sponsor.name}</p>
                    </TooltipContent>
                  </Tooltip>
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
