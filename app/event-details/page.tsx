'use client';

import { motion } from 'motion/react';
import { Camera, Gift, HatGlasses, MapPin, Mountain, Ship, Users } from 'lucide-react';

const highlights = [
  { icon: Mountain, title: 'Spot T', text: 'Eksplorasi alam Banyuwangi dengan lanskap yang berbeda dari rutinitas.' },
  { icon: Camera, title: 'De Djawatan', text: 'Berjalan di bawah kanopi trembesi dan membuat foto perjalanan bersama.' },
  { icon: Ship, title: 'Coastal Escape', text: 'Nikmati udara pesisir. Detail destinasi dan transportasi akan menyusul.' },
  { icon: Users, title: 'Fun Games', text: 'Permainan kolaboratif untuk menguji strategi dan kekompakan tim.' },
  { icon: HatGlasses, title: 'Best Costume', text: 'Tampilkan karakter terbaikmu di malam gala dinner.' },
  { icon: Gift, title: 'Doorprize', text: 'Siapkan keberuntungan untuk hadiah-hadiah menarik dari panitia.' },
];

export default function EventDetailsPage() {
  return <div className="min-h-screen bg-background"><section className="surface-dark paper-grain px-6 py-24 lg:px-12"><div className="mx-auto max-w-7xl"><p className="section-kicker text-secondary">The itinerary journal</p><h1 className="display-serif mt-5 max-w-4xl text-6xl leading-none text-primary-foreground sm:text-8xl">Banyuwangi,<br /><span className="text-secondary">here we come.</span></h1><p className="mt-8 max-w-xl text-base leading-7 text-primary-foreground/70">Semua yang perlu kamu tahu tentang perjalanan 3 hari 2 malam SIG Surabaya Employee Gathering 2026.</p></div></section><section className="surface-paper px-6 py-20 lg:px-12"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow-line section-kicker">What awaits</p><h2 className="display-serif mt-5 text-5xl text-primary">Catatan perjalanan</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Destinasi final, waktu operasional, dan detail venue akan diperbarui setelah konfirmasi panitia.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{highlights.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-border bg-background p-6"><item.icon className="size-7 text-accent" /><h3 className="display-serif mt-12 text-3xl text-primary">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></motion.article>)}</div><div className="mt-16 grid gap-4 md:grid-cols-[1.2fr_0.8fr]"><div className="surface-sand rounded-2xl p-8"><MapPin className="size-6 text-accent" /><h3 className="display-serif mt-8 text-4xl text-primary">Venue utama<br />menyusul.</h3><p className="mt-4 max-w-md text-sm leading-6 text-secondary-foreground">Kami sedang mengunci detail akomodasi, venue aktivitas, dan transportasi lokal Banyuwangi.</p></div><div className="surface-dark rounded-2xl p-8"><p className="section-kicker text-secondary">Keep in mind</p><p className="display-serif mt-8 text-3xl text-primary-foreground">Bawa rasa ingin tahu. Pulang bawa cerita.</p></div></div></div></section></div>;
}
