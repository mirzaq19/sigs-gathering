'use client';

import { useEffect, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Gift, HatGlasses, MapPin, Mountain, Ship, TreePine, Users, Waves } from 'lucide-react';
import { motion } from 'motion/react';

const destinations = [
  { name: 'Pantai Wedi Ireng', eyebrow: '01 / Pesisir', text: 'Teluk tersembunyi dengan pasir terang dan air biru untuk membuka perjalanan.', image: '/images/hero-bg.png', icon: Waves },
  { name: 'Pantai Mustika', eyebrow: '02 / Pesisir', text: 'Ruang untuk menikmati angin laut, sarapan, dan momen pertama bersama tim.', image: '/images/hero-bg.png', icon: Waves },
  { name: 'Spot T', eyebrow: '03 / Horizon', text: 'Lanskap alam yang mengajak kita berhenti sejenak dari ritme kantor.', image: '/images/hero-bg.png', icon: Camera },
  { name: 'De Djawatan', eyebrow: '04 / Forest', text: 'Kanopi trembesi yang teduh, tempat cerita gathering berubah menjadi kenangan.', image: '/images/hero-bg.png', icon: TreePine },
];

const highlights = [
  { icon: Mountain, title: 'Spot T', text: 'Eksplorasi alam Banyuwangi dengan lanskap yang berbeda dari rutinitas.' },
  { icon: Camera, title: 'De Djawatan', text: 'Berjalan di bawah kanopi trembesi dan membuat foto perjalanan bersama.' },
  { icon: Ship, title: 'Coastal Escape', text: 'Nikmati udara pesisir dan momen santai bersama satu rombongan.' },
  { icon: Users, title: 'Fun Games', text: 'Permainan kolaboratif untuk menguji strategi dan kekompakan tim.' },
  { icon: HatGlasses, title: 'Best Costume', text: 'Tampilkan karakter terbaikmu di malam gala dinner.' },
  { icon: Gift, title: 'Doorprize', text: 'Siapkan keberuntungan untuk hadiah-hadiah menarik dari panitia.' },
];

export default function EventDetailsPage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % destinations.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  const destination = destinations[active];

  return (
    <div className="min-h-screen bg-background">
      <section className="surface-dark relative overflow-hidden px-6 py-24 lg:px-12" aria-roledescription="carousel" aria-label="Destinasi Banyuwangi">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center justify-between"><p className="section-kicker text-secondary">The itinerary journal</p><span className="font-mono text-xs text-primary-foreground/60">{String(active + 1).padStart(2, '0')} / 04</span></div>
          <div className="mt-20 grid min-h-[420px] items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="carousel-fade" key={destination.name}><p className="section-kicker text-secondary">{destination.eyebrow}</p><h1 className="display-serif mt-5 max-w-4xl text-6xl leading-none text-primary-foreground sm:text-8xl">{destination.name}</h1><p className="mt-8 max-w-xl text-base leading-7 text-primary-foreground/75">{destination.text}</p></div>
            <div className="flex gap-3"><button type="button" aria-label="Destinasi sebelumnya" onClick={() => setActive((active - 1 + destinations.length) % destinations.length)} className="grid size-12 place-items-center rounded-full border border-primary-foreground/30 hover:bg-secondary hover:text-primary"><ChevronLeft className="size-5" /></button><button type="button" aria-label="Destinasi berikutnya" onClick={() => setActive((active + 1) % destinations.length)} className="grid size-12 place-items-center rounded-full border border-primary-foreground/30 hover:bg-secondary hover:text-primary"><ChevronRight className="size-5" /></button></div>
          </div>
          <div className="mt-10 flex gap-2" role="tablist" aria-label="Pilih destinasi">{destinations.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={active === index} aria-label={item.name} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${active === index ? 'w-14 bg-secondary' : 'w-6 bg-primary-foreground/30'}`} />)}</div>
        </div>
      </section>
      <section className="surface-paper px-6 py-20 lg:px-12"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow-line section-kicker">What awaits</p><h2 className="display-serif mt-5 text-5xl text-primary">Catatan perjalanan</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Destinasi, aktivitas, dan momen yang akan membuat perjalanan 3 hari 2 malam ini terasa lengkap.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{highlights.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-border bg-background p-6"><item.icon className="size-7 text-accent" /><h3 className="display-serif mt-12 text-3xl text-primary">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></motion.article>)}</div><div className="mt-16 grid gap-4 md:grid-cols-[1.2fr_0.8fr]"><div className="surface-sand rounded-2xl p-8"><MapPin className="size-6 text-accent" /><h3 className="display-serif mt-8 text-4xl text-primary">Banyuwangi, Jawa Timur.</h3><p className="mt-4 max-w-md text-sm leading-6 text-secondary-foreground">Satu perjalanan untuk menikmati pesisir, hutan, permainan, dan cerita yang kita bawa pulang bersama.</p></div><div className="surface-dark rounded-2xl p-8"><p className="section-kicker text-secondary">One Journey</p><h3 className="display-serif mt-5 text-4xl text-primary-foreground">Datang sebagai kolega, pulang sebagai tim.</h3></div></div></div></section>
    </div>
  );
}
