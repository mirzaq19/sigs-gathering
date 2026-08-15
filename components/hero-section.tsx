'use client';

import Link from 'next/link';
import { ArrowDown, CalendarDays, MapPin } from 'lucide-react';
import CountdownTimer from './countdown-timer';

export default function HeroSection() {
  return (
    <section className="surface-dark paper-grain relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-[url('/images/hero.webp')] bg-cover bg-center opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/30 via-primary/75 to-primary"
        aria-hidden="true"
      />
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between gap-8 px-6 pb-8 pt-8 lg:px-12 lg:pb-12 lg:pt-12">
        <div className="flex items-start justify-between gap-6">
          <p className="section-kicker text-secondary">SIG Surabaya / 2026</p>
          <p className="hidden max-w-44 text-right text-sm leading-5 text-primary-foreground/70 sm:block">
            Satu perjalanan. Satu alam. Satu tim.
          </p>
        </div>
        <div className="max-w-5xl">
          <p className="eyebrow-line section-kicker mb-6 text-secondary">
            Banyuwangi, Jawa Timur
          </p>
          <h1 className="display-serif max-w-4xl text-6xl leading-[0.9] text-primary-foreground sm:text-8xl lg:text-[9.5rem">
            Employee Gathering
            <br />
            <span className="text-secondary">2026.</span>
          </h1>
          <div className="mt-4 w-fit bg-pastel px-2 py-1 lg:p-3 text-sm lg:text-2xl font-serif font-medium lg:font-semibold tracking-wide leading-7 text-primary">
            One Journey, One Nature, One Team.
          </div>
          <p className="mt-2 max-w-xl text-base leading-7 text-primary-foreground/75">
            Mari berangkat bersama, menikmati pesisir dan hutan Banyuwangi, lalu
            pulang membawa cerita baru.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-primary-foreground/85">
            <span className="badge-outline">
              <CalendarDays className="mr-2 inline size-3" />
              18 - 20 September 2026
            </span>
            <span className="badge-outline">
              <MapPin className="mr-2 inline size-3" />
              Banyuwangi
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col items-center gap-5">
            <p className="text-sm text-primary-foreground/60">
              Menuju hari keberangkatan
            </p>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md">
              <CountdownTimer
                eventDate={new Date('2026-09-18T07:00:00+07:00')}
              />
            </div>
            <p className='text-center text-sm'>
              Banyuwangi is calling! Yuk, sejenak melepas penat dan nikmati serunya petualangan bersama.
            </p>
            <Link
              href="#journey"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-secondary"
            >
              Ready for a new adventure?{' '}
              <span className="grid size-10 place-items-center rounded-full border border-secondary/50 transition group-hover:bg-secondary group-hover:text-primary">
                <ArrowDown className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
