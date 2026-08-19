'use client';

import { motion } from 'motion/react';
import { Compass, Leaf, Pin, UsersRound } from 'lucide-react';

const values = [
  {
    icon: Compass,
    label: 'One Journey',
    image: '/images/journey.webp',
    title: 'Berangkat bersama',
    text: 'Dari AMG Tower menuju pengalaman baru yang kita jalani sebagai satu rombongan.',
  },
  {
    icon: Leaf,
    label: 'One Nature',
    image: '/images/nature.webp',
    title: 'Menyatu dengan alam',
    text: 'Menjelajah Spot T, De Djawatan, dan lanskap Banyuwangi dengan cara yang lebih bermakna.',
  },
  {
    icon: UsersRound,
    label: 'One Team',
    image: '/images/team.webp',
    title: 'Pulang sebagai tim',
    text: 'Aktivitas, tawa, dan tantangan kecil yang membuat koneksi kita semakin kuat.',
  },
];

export default function IntroSection() {
  return (
    <section
      id="journey"
      className="surface-paper px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-18">
          <div>
            <p className="eyebrow-line section-kicker">The idea behind it</p>
            <h2 className="display-serif mt-6 max-w-xl text-5xl leading-none text-primary sm:text-6xl">
              Ready for Employee Gathering{' '}
              <span className="text-accent">2026</span>?
            </h2>
            {/* <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">
              Yuk ikutan di acara Employee Gathering 2026! Saatnya membangun tim
              yang lebih solid, bersenang-senang bersama, dan menciptakan
              kenangan indah dengan seluruh rekan kerja.
            </p> */}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 sm:min-h-96"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${value.image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Content */}
                <div className="relative flex flex-col justify-between h-full p-6 gap-6 sm:gap-0">
                  {/* Icon and Label */}
                  <div className="flex gap-3 items-center">
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                      <value.icon className="size-5 text-secondary" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                      {value.label}
                    </p>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="display-serif text-2xl sm:text-3xl text-white mb-3 leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-6 text-white/80">
                      {value.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          <div className="surface-dark rounded-2xl p-7 md:col-span-2">
            <p className="section-kicker text-secondary">Field notes</p>
            <h3 className="display-serif mt-4 max-w-xl text-4xl text-primary-foreground">
              Alam yang luas, cerita yang lebih berkesan.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-6 text-primary-foreground/70">
              Siapkan energi untuk fun games, gala dinner, doorprize, dan
              momen-momen spontan di sepanjang perjalanan.
            </p>
          </div>
          <div className="bg-pastel/90 rounded-2xl p-7">
            <p className="section-kicker !text-teal">Highlight</p>
            <p className="display-serif mt-5 text-5xl text-teal">19 - 20</p>
            <p className="mt-2 text-sm text-secondary-foreground">
              <span className="font-medium text-2xl">September 2026</span>
            </p>
            <p className="mt-4 flex items-center">
              <Pin className="inline-block size-5 mr-2" />
              Banyuwangi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
