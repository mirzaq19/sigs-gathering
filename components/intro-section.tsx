'use client';

import { motion } from 'motion/react';
import { Compass, Leaf, Pin, UsersRound } from 'lucide-react';

const values = [
  {
    icon: Compass,
    label: 'One Journey',
    title: 'Berangkat bersama',
    text: 'Dari AMG Tower menuju pengalaman baru yang kita jalani sebagai satu rombongan.',
  },
  {
    icon: Leaf,
    label: 'One Nature',
    title: 'Menyatu dengan alam',
    text: 'Menjelajah Spot T, De Djawatan, dan lanskap Banyuwangi dengan cara yang lebih bermakna.',
  },
  {
    icon: UsersRound,
    label: 'One Team',
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
              Tiga cara untuk menikmati perjalanan ini.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">
              Employee Gathering 2026 bukan sekadar pindah tempat. Ini tentang
              memberi ruang untuk bertemu, bernapas, dan bergerak sebagai satu
              tim.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 sm:min-h-72"
              >
                <div className="flex gap-4 items-center">
                  <value.icon className="size-7 text-accent" />
                  <p className="section-kicker leading-normal">{value.label}</p>
                </div>
                <div>
                  <h3 className="display-serif text-2xl text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          <div className="surface-dark rounded-2xl p-7 md:col-span-2">
            <p className="section-kicker text-secondary">Field notes</p>
            <h3 className="display-serif mt-4 max-w-xl text-4xl text-primary-foreground">
              Alam yang luas, cerita yang lebih panjang.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-6 text-primary-foreground/70">
              Siapkan energi untuk fun games, gala dinner, doorprize, dan
              momen-momen spontan di sepanjang perjalanan.
            </p>
          </div>
          <div className="bg-pastel/90 rounded-2xl p-7">
            <p className="section-kicker !text-teal">Highlight</p>
            <p className="display-serif mt-5 text-5xl text-teal">18 - 20</p>
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
