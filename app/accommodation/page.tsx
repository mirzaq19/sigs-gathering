'use client';

import { useMemo, useState } from 'react';
import {
  BedDouble,
  Bus,
  DoorOpen,
  Hotel,
  MonitorPlay,
  Users,
  UserRound,
} from 'lucide-react';
import {
  BUS_SEATS_1,
  BUS_SEATS_2,
  BusSeat,
  ROOMS,
} from '@/data/accommodations.const';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const busSeats = [BUS_SEATS_1, BUS_SEATS_2];

function BusLayout({
  assignments,
  label,
}: {
  assignments: BusSeat[];
  label: string;
}) {
  // back seat is the last 6 assignments
  const backSeats = assignments.filter(seat => seat.id >= 27 && seat.id <= 31);
  // second back seats is the last 3 assignments
  const secondBackSeats = assignments.filter(
    seat => seat.id >= 25 && seat.id <= 26
  );
  const middleSeats = assignments.filter(seat => seat.id >= 1 && seat.id <= 24);

  return (
    <Card className="overflow-hidden border-primary/15 shadow-lg p-0">
      <CardHeader className="border-b border-border bg-primary/5 py-4">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-3 text-primary">
            <Bus className="size-5 text-teal" />
            {label}
          </CardTitle>
          <span className="rounded-full bg-teal/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-teal">
            31 seats
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 rounded-[2rem] border-2 border-primary/15 bg-background p-4 sm:p-6">
          <div className="flex items-center justify-center gap-2 text-xs text-teal">
            <MonitorPlay className="size-4" />
            TV / layar informasi
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-xs text-muted-foreground">
              <DoorOpen className="size-4 text-teal" />
              Pintu depan
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-xs text-muted-foreground">
              <UserRound className="size-4 text-teal" />
              Driver
            </div>
          </div>

          {/* Seats */}
          <div className="space-y-3">
            {Array.from({ length: 6 }, (_, rowIndex) => {
              const rowNumber = rowIndex + 1;
              const rowSeats = middleSeats.filter(
                (_, index) => Math.floor(index / 4) === rowIndex
              );

              return (
                <div key={rowNumber} className="flex justify-between space-x-2">
                  <div className="flex space-x-1">
                    {rowSeats
                      .filter((_, index) => index <= 1)
                      .map(seat => (
                        <div
                          className={`w-18 md:w-20 lg:w-25 h-16 rounded-xl border p-2 text-center ${seat.attendeeName.toLocaleLowerCase() !== 'kosong' ? 'seat-available border-teal/20' : 'seat-selected border-teal/20'}`}
                          key={seat.id}
                        >
                          <span className="block font-mono text-xs opacity-70">
                            {seat.id}
                          </span>
                          <span className="block truncate text-xs font-semibold">
                            {seat.attendeeName}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="flex space-x-1">
                    {rowSeats
                      .filter((_, index) => index >= 2)
                      .map(seat => (
                        <div
                          className={`w-18 md:w-20 lg:w-25 h-16 rounded-xl border p-2 text-center ${seat.attendeeName.toLocaleLowerCase() !== 'kosong' ? 'seat-available border-teal/20' : 'seat-selected border-teal/20'}`}
                          key={seat.id}
                        >
                          <span className="block font-mono text-xs opacity-70">
                            {seat.id}
                          </span>
                          <span className="block truncate text-xs font-semibold">
                            {seat.attendeeName}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-xs text-muted-foreground">
              <DoorOpen className="size-4 text-teal" />
              Pintu belakang
            </div>
            <div className="flex space-x-1">
              {secondBackSeats.map(seat => (
                <div
                  className={`w-18 md:w-20 lg:w-25 h-16 rounded-xl border p-2 text-center ${seat.attendeeName.toLocaleLowerCase() !== 'kosong' ? 'seat-available border-teal/20' : 'seat-selected border-teal/20'}`}
                  key={seat.id}
                >
                  <span className="block font-mono text-xs opacity-70">
                    {seat.id}
                  </span>
                  <span className="block truncate text-xs font-semibold">
                    {seat.attendeeName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Back Seats */}
          <div className="flex space-x-1">
            {backSeats.map(seat => (
              <div
                className={`w-full h-16 rounded-xl border p-2 text-center ${seat.attendeeName.toLocaleLowerCase() !== 'kosong' ? 'seat-available border-teal/20' : 'seat-selected border-teal/20'}`}
                key={seat.id}
              >
                <span className="block font-mono text-xs opacity-70">
                  {seat.id}
                </span>
                <span className="block truncate text-xs font-semibold">
                  {seat.attendeeName}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
            <span>
              <i className="mr-2 inline-block size-3 rounded bg-pastel align-[-1px]" />
              Area kiri
            </span>
            <span>
              <i className="mr-2 inline-block size-3 rounded bg-teal align-[-1px]" />
              Area kanan
            </span>
            <span>
              <i className="mr-2 inline-block size-3 rounded bg-muted align-[-1px]" />
              Kosong
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AccommodationPage() {
  const [query, setQuery] = useState('');
  const filteredRooms = useMemo(
    () =>
      ROOMS.filter(room =>
        `${room.roomNumber} ${room.attendees.join(' ')}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="surface-dark paper-grain px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-secondary">
            SIG Surabaya · Banyuwangi 2026
          </p>
          <h1 className="display-serif mt-5 text-6xl text-primary-foreground sm:text-8xl">
            Stay &<br />
            <span className="text-secondary">move.</span>
          </h1>
          <p className="mt-8 max-w-xl text-primary-foreground/70">
            Dua bus, satu perjalanan, dan kamar untuk beristirahat setelah
            menjelajah Banyuwangi bersama.
          </p>
        </div>
      </section>
      <section className="surface-paper px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="section-kicker text-teal">Perjalanan bersama</p>
            <h2 className="display-serif mt-3 text-4xl text-primary sm:text-5xl">
              Naik bersama,
              <br />
              <span className="text-teal">tiba sebagai satu tim.</span>
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Dua layout bus berikut mengikuti pola 2 kursi di sisi kiri dan 2
              kursi di sisi kanan, seperti referensi gathering tahun lalu.
            </p>
          </div>
          <div className="grid gap-8 xl:grid-cols-2">
            {busSeats.map((busSeat, index) => (
              <BusLayout
                key={index}
                assignments={busSeat}
                label={`Bus ${index + 1}`}
              />
            ))}
            {/* <BusLayout2 assignments={BUS_SEATS} /> */}
          </div>
        </div>
      </section>
      <section className="bg-muted/40 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-teal">Tempat beristirahat</p>
              <h2 className="display-serif mt-3 text-4xl text-primary sm:text-5xl">
                Pembagian kamar hotel.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                Cari nama Anda untuk menemukan kamar dan teman sekamar di
                Banyuwangi.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-teal/20 bg-background px-4 py-3">
              <BedDouble className="size-4 text-teal" />
              <input
                aria-label="Cari nama atau kamar"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:w-52"
                placeholder="Cari nama atau kamar"
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredRooms.map(room => (
              <Card className="border-primary/10 gap-2" key={room.roomNumber}>
                <CardHeader className="flex-row items-center justify-between gap-4 pb-3">
                  <CardTitle className="flex items-center gap-2 text-base text-primary">
                    <Hotel className="size-4 text-teal" />
                    {room.roomNumber}
                  </CardTitle>
                  <span className="w-fit rounded-full bg-teal/15 px-2.5 py-1 text-xs font-semibold text-teal">
                    {room.type}
                  </span>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {room.attendees.map(attendee => (
                    <div
                      className="flex items-center gap-3 rounded-xl bg-background px-3 py-2 text-sm"
                      key={attendee}
                    >
                      <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                        {attendee.charAt(0)}
                      </span>
                      {attendee}
                    </div>
                  ))}
                  <div className="mt-2 flex items-center gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
                    <Users className="size-4 text-teal" />
                    {room.attendees.length} orang
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredRooms.length === 0 && (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Nama atau kamar tidak ditemukan.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
