'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, Search, Star, Users, X } from 'lucide-react';
import { ATTENDEES, Attendee } from '@/data/attendees.const';
import { GENERAL_INFO } from '@/data/general.const';
import { countDays } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function AttendeesPage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Attendee | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const filtered = useMemo(
    () =>
      search.trim()
        ? ATTENDEES.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
          ).slice(0, 8)
        : [],
    [search]
  );
  const stats = [
    { label: 'Total peserta', value: ATTENDEES.length, icon: Users },
    {
      label: 'Hari menuju acara',
      value: countDays(GENERAL_INFO.startDate),
      icon: CalendarDays,
    },
    { label: 'Semangat tim', value: '100%', icon: Star },
  ];
  return (
    <div className="min-h-screen bg-background">
      <section className="surface-dark px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-secondary">The guest list</p>
          <h1 className="display-serif mt-5 text-6xl text-primary-foreground sm:text-8xl">
            Find your
            <br />
            <span className="text-secondary">name.</span>
          </h1>
          <p className="mt-8 max-w-xl text-primary-foreground/70">
            Cek kepesertaan untuk menemukan namamu dan konfirmasi bahwa kamu
            siap berangkat bersama kami.
          </p>
        </div>
      </section>
      <section className="surface-paper px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <stat.icon className="size-5 text-accent" />
                <p className="mt-6 text-3xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-20 max-w-3xl">
            <p className="eyebrow-line section-kicker">Cek kepesertaan</p>
            <h2 className="display-serif mt-5 text-5xl text-primary">
              Namamu ada di daftar?
            </h2>
            <div className="relative mt-8">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                aria-label="Cari nama peserta"
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Ketik nama lengkap..."
                className="h-14 rounded-xl bg-background pl-12 text-base"
              />
              {search && (
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Hapus pencarian"
                  className="absolute right-2 top-2"
                  onClick={() => setSearch('')}
                >
                  <X />
                </Button>
              )}
            </div>
            {search && (
              <div className="mt-2 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                {filtered.length ? (
                  filtered.map(attendee => (
                    <button
                      key={attendee.id}
                      type="button"
                      onClick={() => {
                        setSelected(attendee);
                        setDialogOpen(true);
                      }}
                      className="flex w-full items-center gap-3 border-b border-border px-4 py-4 text-left last:border-0 hover:bg-muted"
                    >
                      <span className="grid size-9 place-items-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
                        {attendee.name[0]}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-primary">
                          {attendee.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {attendee.company}
                        </span>
                      </span>
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-5 text-sm text-muted-foreground">
                    Nama belum ditemukan. Coba ejaan lain.
                  </p>
                )}
              </div>
            )}
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              Data peserta digunakan untuk kebutuhan internal acara SIG Surabaya
              Employee Gathering 2026.
            </p>
          </div>
        </div>
      </section>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          showCloseButton={false}
          className="overflow-hidden rounded-2xl bg-card p-0 sm:max-w-md gap-0"
        >
          {selected && (
            <>
              <div className="surface-dark relative p-7 text-primary-foreground">
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-3 top-3 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    aria-label="Tutup"
                  >
                    <X />
                  </Button>
                </DialogClose>
                <DialogHeader>
                  <p className="section-kicker text-secondary">
                    Guest ticket / 026
                  </p>
                  <DialogTitle className="display-serif font-normal mt-8 text-left text-4xl">
                    You&apos;re on the list.
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Detail kepesertaan untuk {selected.name}.
                  </DialogDescription>
                </DialogHeader>
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Participant
                </p>
                <p className="mt-2 text-2xl font-semibold text-primary">
                  {selected.name}
                </p>
                <div className="mt-7 grid grid-cols-2 gap-4 border-t border-dashed border-border pt-5 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Company</p>
                    <p className="mt-1 font-medium">{selected.company}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Destination</p>
                    <p className="mt-1 font-medium">Banyuwangi</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Date</p>
                    <p className="mt-1 font-medium">18–20 Sep 2026</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="mt-1 font-medium text-accent">Confirmed</p>
                  </div>
                </div>
                <DialogClose asChild>
                  <Button className="mt-7 w-full">Siap berangkat</Button>
                </DialogClose>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
