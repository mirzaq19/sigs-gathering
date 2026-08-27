'use client';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { SCHEDULES } from '@/data/schedules.const';
import { GENERAL_INFO } from '@/data/general.const';
export default function SchedulePage() {
  const grouped = SCHEDULES.reduce<Record<string, typeof SCHEDULES>>(
    (acc, item) => {
      (acc[item.day] ??= []).push(item);
      return acc;
    },
    {}
  );
  return (
    <div className="min-h-screen bg-background">
      <section className="surface-dark px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-secondary">The field notes</p>
          <h1 className="display-serif mt-5 text-6xl text-primary-foreground sm:text-8xl">
            Itinerary
            <br />
            <span className="text-secondary">Banyuwangi.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-primary-foreground/70">
            Jadwal lengkap SIG Surabaya Employee Gathering 2026, dari
            keberangkatan hingga kembali ke Surabaya.
          </p>
        </div>
      </section>
      <section className="surface-paper px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {Object.entries(grouped).map(([day, items], dayIndex) => (
            <div key={day} className="mb-16">
              <div className="mb-7 flex items-baseline justify-between border-b border-border pb-4">
                <h2 className="display-serif text-3xl text-primary sm:text-4xl">
                  {day}
                </h2>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Day {dayIndex + 1}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {items.map((item, index) => (
                  <motion.article
                    key={`${day}-${item.title}`}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="grid gap-3 rounded-xl border border-border bg-background p-5 md:grid-cols-[6rem_1fr_auto] md:items-center"
                  >
                    <div className="font-mono text-xs font-semibold text-accent">
                      {item.time}
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                      <div className="flex items-center rounded-full bg-accent p-4 md:p-3">
                        <item.icon className="size-5 md:size-4 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {item.location}
                    </span>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-xs text-muted-foreground">
            {GENERAL_INFO.gatheringName} · 18–20 September 2026
          </p>
        </div>
      </section>
    </div>
  );
}
