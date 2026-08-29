'use client';

import { motion, stagger, useInView, Variants } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sponsors: {
    name: string;
    logo: string;
    tier: string;
    scale?: 'sm' | 'md' | 'lg' | 'xl';
    cardWidth?: 'sm' | 'md' | 'lg' | 'xl';
  }[] = [
    {
      name: 'PT. Maja Bintang Indonesia',
      logo: '/sponsors/maja-bintang.png',
      tier: 'bronze',
      scale: 'xl',
      cardWidth: 'xl',
    },
    {
      name: 'PT. Unitama Analitika Perkasa',
      logo: '/sponsors/unitama.jpeg',
      tier: 'gold',
      cardWidth: 'xl',
      scale: 'lg',
    },
    {
      name: 'PT. Global Satria Aji',
      logo: '/sponsors/gsa.png',
      tier: 'bronze',
      cardWidth: 'md',
      scale: 'sm',
    },
    {
      name: 'PT. New Praktika Alkesindo',
      logo: '/sponsors/npa.png',
      tier: 'bronze',
      scale: 'lg',
    },
    {
      name: 'PT. Laborindo Sarana',
      logo: '/sponsors/laborindo.png',
      tier: 'silver',
      cardWidth: 'xl',
      scale: 'xl',
    },
    {
      name: 'PT. Arasains',
      logo: '/sponsors/arasains.png',
      tier: 'bronze',
      cardWidth: 'lg',
      scale: 'lg',
    },
    {
      name: 'PT. Radin Nugrah Daksatama',
      logo: '/sponsors/radin.png',
      tier: 'bronze',
      scale: 'lg',
    },
    {
      name: 'PT. Agarindo Biological Company',
      logo: '/sponsors/agarindo.png',
      tier: 'bronze',
    },
    {
      name: 'CV. Cahaya Semesta',
      logo: '/sponsors/cahaya.jpeg',
      tier: 'bronze',
    },
    {
      name: 'PT. Kromtekindo Utama',
      logo: '/sponsors/kromtekindo.png',
      tier: 'platinum',
    },

    {
      name: 'PT. Prolabios Mitra Analitika',
      logo: '/sponsors/prolabios.png',
      tier: 'silver',
      scale: 'sm',
    },

    {
      name: 'PT. Elo Karsa Utama',
      logo: '/sponsors/elokarsa.png',
      tier: 'bronze',
    },
    {
      name: 'PT. Dipa Puspa Labsains',
      logo: '/sponsors/dipa.png',
      tier: 'bronze',
      scale: 'sm',
    },
    {
      name: 'PT. Sartonet Filtrasi Indonesia',
      logo: '/sponsors/sartonet.png',
      tier: 'bronze',
      scale: 'sm',
    },
    {
      name: 'PT. Murni Jaya Kianabadi',
      logo: '/sponsors/mjk.jpeg',
      tier: 'bronze',
      scale: 'sm',
    },
    {
      name: 'CV. Kemuning Lestari',
      logo: '/sponsors/kemuning.jpg',
      tier: 'bronze',
      scale: 'sm',
    },

    {
      name: 'PT. Samator Gas Industri',
      logo: '/sponsors/samator.png',
      tier: 'bronze',
      scale: 'sm',
    },
    {
      name: 'PT. Karunia Jasindo',
      logo: '/sponsors/karunia.png',
      tier: 'bronze',
    },
    {
      name: 'CV. Biotek Mandiri',
      logo: '/sponsors/biotek.png',
      tier: 'bronze',
      scale: 'sm',
    },
  ];

  const scaleClass: Record<string, string> = {
    sm: 'max-h-8 max-w-[70%] scale-120 group-hover:scale-105',
    md: 'max-h-full max-w-full group-hover:scale-110',
    lg: 'max-h-full max-w-full scale-120 group-hover:scale-130',
    xl: 'max-h-full max-w-full scale-160 group-hover:scale-170',
  };

  const cardWidthClass: Record<string, string> = {
    sm: 'w-28',
    md: 'w-36',
    lg: 'w-48',
    xl: 'w-60',
  };

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
    <section className="surface-sand px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow-line section-kicker">Supported by</p>
        <h2 className="display-serif mt-4 mb-12 text-5xl text-primary">
          Partners who
          <br />
          make it possible.
        </h2>

        {/* Coming soon */}
        {/* <div className="mt-8 rounded-lg border-4 border-dashed !border-primary/70 bg-background p-12 text-center">
          <p className="display-serif font-semibold text-xl lg:text-4xl text-primary/60">
            Coming soon
          </p>
        </div> */}

        {/* All Sponsors */}
        {sponsors.length > 0 && (
          <motion.div
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-6">
              {sponsors.map(sponsor => (
                <Tooltip key={sponsor.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      variants={sponsorVariants}
                      className={`group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-secondary-foreground/15 bg-background/70 p-4 ${cardWidthClass[sponsor.cardWidth ?? 'md']}`}
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={128}
                        height={128}
                        className={`object-contain transition-transform duration-300 ${scaleClass[sponsor.scale ?? 'md']}`}
                        unoptimized
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{sponsor.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        )}

        {/* Platinum sponsor */}
        {/* {platinumSponsors.length > 0 && (
          <motion.div
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="display-serif text-4xl font-bold text-center mb-8 text-primary">
              Platinum Sponsors
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {platinumSponsors.map(sponsor => (
                <Tooltip key={sponsor.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      variants={sponsorVariants}
                      className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-secondary-foreground/15 bg-background/70 p-4"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={128}
                        height={128}
                        className="max-h-12 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{sponsor.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        )} */}

        {/* Gold sponsor */}
        {/* {goldSponsors.length > 0 && (
          <motion.div
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="display-serif text-4xl font-bold text-center mb-8 text-primary">
              Gold Sponsors
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {goldSponsors.map(sponsor => (
                <Tooltip key={sponsor.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      variants={sponsorVariants}
                      className="group relative flex h-30 items-center justify-center overflow-hidden rounded-xl border border-secondary-foreground/15 bg-background/70 p-4"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={128}
                        height={128}
                        className="max-h-14 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{sponsor.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        )} */}

        {/* Silver sponsor */}
        {/* {silverSponsors.length > 0 && (
          <motion.div
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="display-serif text-4xl font-bold text-center mb-8 text-primary">
              Silver Sponsors
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {silverSponsors.map(sponsor => (
                <Tooltip key={sponsor.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      key={sponsor.name}
                      variants={sponsorVariants}
                      className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-secondary-foreground/15 bg-background/70 p-4"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={128}
                        height={128}
                        className="max-h-12 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{sponsor.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        )} */}

        {/* Bronze sponsor */}
        {/* {bronzeSponsors.length > 0 && (
          <motion.div
            variants={sponsorsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="display-serif text-4xl font-bold text-center mb-8 text-primary">
              Bronze Sponsors
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {bronzeSponsors.map(sponsor => (
                <Tooltip key={sponsor.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      variants={sponsorVariants}
                      className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-secondary-foreground/15 bg-background/70 p-4"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={128}
                        height={128}
                        className="max-h-12 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{sponsor.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        )} */}
      </div>
    </section>
  );
}
