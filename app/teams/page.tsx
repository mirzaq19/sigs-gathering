'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Clock3,
  Music2,
  Palette,
  Send,
  Sparkles,
  UsersRound,
} from 'lucide-react';

const costumeRules = [
  'Setiap divisi bebas menentukan konsep pakaian yang merepresentasikan “dimensi” atau karakter masing-masing sekreatif mungkin.',
  'Setiap perwakilan divisi wajib menyetorkan tema kostum kepada panitia terlebih dahulu untuk menghindari duplikasi.',
  'Pendaftaran tema menggunakan prinsip first come, first served. Divisi yang mendaftar lebih lambat perlu mengganti konsep jika terdapat pengajuan serupa.',
  'Kostum yang dipakai harus sopan.',
];

const dresscodeExamples = [
  { src: '/dresscodes/1.png', label: 'Contoh 01' },
  { src: '/dresscodes/2.png', label: 'Contoh 02' },
  { src: '/dresscodes/3.png', label: 'Contoh 03' },
  { src: '/dresscodes/4.png', label: 'Contoh 04' },
  { src: '/dresscodes/5.png', label: 'Contoh 05' },
  { src: '/dresscodes/6.png', label: 'Contoh 06' },
  { src: '/dresscodes/7.png', label: 'Contoh 07' },
];

const performanceRules = [
  {
    title: 'Durasi',
    text: 'Durasi kurang lebih 5 menit.',
    icon: Clock3,
  },
  {
    title: 'Bentuk aksi',
    text: 'Bentuk aksi panggung bebas, kreatif dan interaktif. Dapat berupa bernyanyi, menari, yel-yel kreatif, drama singkat, dan lain-lain.',
    icon: Sparkles,
  },
  {
    title: 'Musik & properti',
    text: 'File musik atau lagu pengiring dan properti dipersiapkan secara mandiri oleh masing-masing divisi.',
    icon: Music2,
  },
];

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="surface-dark paper-grain px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-secondary">The division playbook</p>
          <h1 className="display-serif mt-5 max-w-5xl text-6xl leading-none text-primary-foreground sm:text-8xl">
            One team,
            <br />
            <span className="text-secondary">in every universe.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-primary-foreground/70">
            Siap bikin Gala Dinner tahun ini makin pecah? Tunjukkan kekompakan
            divisimu lewat kostum, aksi panggung, dan cerita yang hanya bisa
            kalian bawa.
          </p>
        </div>
      </section>

      <section className="surface-paper px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="eyebrow-line section-kicker justify-center">
            Gala dinner theme
          </p>
          <h2 className="display-serif mt-5 text-5xl text-primary sm:text-6xl">
            Multiverse of <span className="text-teal">Togetherness.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Setiap divisi merepresentasikan “universe”-nya masing-masing dengan
            kostum yang sepenuhnya berbeda dan tanpa tema utama yang mengikat.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-line section-kicker">Costume briefing</p>
              <h2 className="display-serif mt-5 text-5xl text-primary">
                Bangun universe
                <br />
                <span className="text-accent">versi divisi kamu.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {costumeRules.map((rule, index) => (
              <motion.div
                key={rule}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" />
                <span className="text-sm leading-6">{rule}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-accent/20 bg-secondary/30 p-4 text-sm text-secondary-foreground">
            <Send className="size-5 shrink-0 text-accent" />
            <div>
              Setorkan tema kostum ke panitia melalui WhatsApp Della{' '}
              <a
                href="https://wa.me/6287712962255"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                (087712962255)
              </a>{' '}
              paling lambat{' '}
              <strong className="text-primary">4 September 2026</strong>.
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-5 flex items-center gap-3">
              <Palette className="size-5 text-accent" />
              <h3 className="font-semibold text-primary">Contoh dress code</h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {dresscodeExamples.map((example, index) => (
                <motion.figure
                  key={example.src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-background">
                    <Image
                      src={example.src}
                      alt={`Contoh dress code ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 14vw, (min-width: 640px) 30vw, 45vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {example.label}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-dark px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="section-kicker text-secondary">Performance</p>
            <h2 className="display-serif mt-5 text-5xl text-primary-foreground">
              Bawa universe-mu
              <br />
              <span className="text-secondary">ke atas panggung.</span>
            </h2>
            <p className="mt-5 leading-7 text-primary-foreground/70">
              Setiap divisi wajib menampilkan aksi panggung yang membuat
              perbedaan karakter kalian terasa hidup dan menyenangkan.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {performanceRules.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl bg-primary-foreground/10 p-6"
              >
                <item.icon className="size-7 text-secondary" />
                <h3 className="display-serif mt-6 text-3xl text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/70">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary-foreground/15 p-5 text-sm leading-6 text-primary-foreground/75">
            <Music2 className="mt-0.5 size-5 shrink-0 text-secondary" />
            <div>
              Setorkan file musik atau lagu pengiring dan properti kepada
              panitia melalui{' '}
              <a
                href="https://wa.me/6287712962255"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <b>WhatsApp Della (087712962255)</b>
              </a>{' '}
              paling lambat <strong>11 September 2026</strong>.
            </div>
          </div>
        </div>
      </section>

      <section className="surface-paper px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow-line section-kicker">Tell the story</p>
            <h2 className="display-serif mt-5 text-5xl text-primary">
              Jelaskan makna
              <br />
              <span className="text-teal">di balik kostummu.</span>
            </h2>
          </div>
          <div className="rounded-2xl border border-border bg-background p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <UsersRound className="size-6 text-accent" />
              <h3 className="text-lg font-semibold text-primary">
                Sesi penjelasan kostum
              </h3>
            </div>
            <div className="mt-4 space-y-5 text-sm leading-6 text-muted-foreground">
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Wajib ada satu perwakilan dari setiap divisi untuk
                  mempresentasikan kostum yang dipakai.
                </li>
                <li>
                  Jelaskan kaitan kostum dengan karakter divisi dan bagaimana
                  filosofi{' '}
                  <strong className="text-primary">
                    Multiverse of Togetherness
                  </strong>{' '}
                  tercermin dari perbedaan dunia kalian yang disatukan dalam
                  acara.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
