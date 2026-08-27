'use client';

import FAQSection from '@/components/faq-section';
import { motion } from 'motion/react';
import { CheckCircle2, Gem, MapPin, ShieldAlert, Wine } from 'lucide-react';

const travelGuidelines = [
  'Datang tepat waktu',
  'Tetap bersama rombongan',
  'Gunakan pakaian yang nyaman',
  'Jaga kebersihan area wisata',
  'Ikuti arahan panitia',
  'Jaga barang pribadi',
  'Nikmati perjalanan',
];

const itemsToBring = [
  'Pakaian ganti untuk 3 hari 2 malam',
  'Kaos gathering untuk dipakai di hari Minggu',
  'Costume Gala Dinner',
  'Sepatu dan sandal yang nyaman',
  'Obat-obatan pribadi (e.g.: antimo, fresh care, obat alergi) dan sunscreen',
  'Topi / penutup kepala',
  'Plastik / kresek kecil untuk melindungi HP dan peralatan elektronik saat naik perahu',
  'Uang receh untuk ke toilet umum',
  'Sandal jepit untuk bermain di pantai',
  'Membawa Feminax (bagi yang sedang haid)',
];

const itemsNotToBring = [
  {
    title: 'Benda berbahaya',
    description: 'Pisau, senjata tajam, dan benda berbahaya lainnya.',
    icon: ShieldAlert,
  },
  {
    title: 'Zat terlarang',
    description: 'Narkoba, minuman keras, dan zat terlarang lainnya.',
    icon: Wine,
  },
  {
    title: 'Barang berharga',
    description: 'Cash berlebih, emas, dan barang bernilai tinggi lainnya.',
    icon: Gem,
  },
];

const dressCodes = [
  {
    day: 'Hari Pertama',
    date: '18 September 2026',
    items: ['Malam: baju bebas & sopan'],
  },
  {
    day: 'Hari Kedua',
    date: '19 September 2026',
    items: [
      'Pagi–siang: baju bebas rapi sopan',
      'Malam: costume gala dinner sesuai konsep divisi masing-masing',
    ],
  },
  {
    day: 'Day Three',
    date: '20 September 2026',
    items: ['Kaos gathering, bawahan bebas'],
  },
];

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="surface-dark paper-grain px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-secondary">The field guide</p>
          <h1 className="display-serif mt-5 max-w-4xl text-6xl leading-none text-primary-foreground sm:text-8xl">
            Travel
            <br />
            <span className="text-secondary">guidelines.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-primary-foreground/70">
            Persiapkan dirimu untuk pengalaman yang seru dan berkesan! Simak
            panduan lengkap Employee Gathering agar setiap momen dapat dinikmati
            dengan nyaman dan lancar.
          </p>
        </div>
      </section>

      <section className="surface-paper px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-2xl">
            <p className="eyebrow-line section-kicker">Travel guidelines</p>
            <h2 className="display-serif mt-5 text-5xl text-primary">
              Yang Perlu
              <br />
              <span className="text-teal">Diperhatikan.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground">
              Berikut adalah beberapa hal yang perlu diperhatikan agar
              perjalanan kita nyaman dan lancar
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {travelGuidelines.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" />
                <span className="text-sm leading-6">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow-line section-kicker">Pack smart</p>
            <h2 className="display-serif mt-5 text-5xl text-primary">
              Yang perlu
              <br />
              <span className="text-teal">dibawa.</span>
            </h2>
            <div className="mt-10 grid gap-3">
              {itemsToBring.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" />
                  <span className="text-sm leading-6">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow-line section-kicker">Travel light</p>
            <h2 className="display-serif mt-5 text-5xl text-primary">
              Tinggalkan
              <br />
              <span className="text-accent">yang berisiko.</span>
            </h2>
            <div className="mt-10 grid gap-4">
              {itemsNotToBring.map(item => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-accent/20 bg-card p-6"
                >
                  <item.icon className="size-7 text-accent" />
                  <h3 className="mt-8 text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection className="surface-dark px-6 py-20 lg:px-12" />

      <section className="surface-paper px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-line section-kicker">Dresscode</p>
              <h2 className="display-serif mt-5 text-5xl text-primary">
                Tampil nyaman,
                <br />
                <span className="text-teal">tetap seru.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary/70">
              <MapPin className="size-4 text-secondary" />
              Banyuwangi · 18 - 20 September 2026
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {dressCodes.map((dressCode, index) => (
              <motion.article
                key={dressCode.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl bg-gradient-to-br from-secondary/30 to-teal/20 p-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-teal">
                  {dressCode.date}
                </p>
                <h3 className="display-serif mt-4 text-3xl text-primary">
                  {dressCode.day}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-primary">
                  {dressCode.items.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
