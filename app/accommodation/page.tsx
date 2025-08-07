'use client';

import { motion } from 'framer-motion';
import {
  Bus,
  User,
  Hotel,
  Users,
  MapPin,
  DoorOpen,
  TvMinimalPlay,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BUS_SEATS, BusSeat, ROOMS } from '@/data/accommodations.const';
import { PERMISSIONS } from '@/data/permission.const';

export default function AccommodationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Accommodation
            </h1>
            <p className="md:text-2xl opacity-90 max-w-3xl mx-auto">
              Informasi lengkap tentang pengaturan tempat duduk bus dan
              pembagian kamar hotel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bus Seating Arrangements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">
              Pengaturan Tempat Duduk Bus
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Berikut adalah pengaturan tempat duduk untuk kedua bus yang akan
              membawa peserta ke lokasi acara. Silakan cek nama Anda pada denah
              di bawah ini.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BusLayout assignments={BUS_SEATS} />
          </motion.div>
        </div>
      </section>

      {/* Hotel Room Assignments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Pembagian Kamar Hotel</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Pengaturan kamar hotel untuk seluruh peserta Employee Gathering.
              Silakan cek nama Anda pada daftar di bawah ini.
            </p>
          </motion.div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ${
              !PERMISSIONS.hotel
                ? 'relative max-h-64 overflow-hidden rounded'
                : ''
            }`}
          >
            {ROOMS.map((room, index) => (
              <motion.div
                key={room.roomNumber}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300  overflow-hidden py-4 gap-2">
                  <CardHeader className="px-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="md:text-lg flex items-center">
                        <Hotel className="size-5 shrink-0 text-[#6A00FF] mr-2" />
                        {room.roomNumber}
                      </CardTitle>
                      <Badge variant="default">{room.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full px-4">
                    <div className="space-y-3">
                      {room.attendees.map(attendee => (
                        <div
                          key={attendee}
                          className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                        >
                          <div className="size-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-[#6A00FF]">
                              {attendee[0].toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm md:text-base font-medium text-gray-900">
                              {attendee}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {room.attendees.length} orang
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          Lantai 1
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {!PERMISSIONS.hotel && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-full h-full bg-gray-400/60 backdrop-blur-md absolute inset-0"></div>
                <span className="relative text-center text-3xl font-bold text-white drop-shadow-lg text-outlni text-shadow-2xs">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#6A00FF]">
                      {BUS_SEATS.length}
                    </div>
                    <div className="text-sm text-gray-600">Total Peserta</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#6A00FF]">1</div>
                    <div className="text-sm text-gray-600">Bus Tersedia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#6A00FF]">
                      {ROOMS.length}
                    </div>
                    <div className="text-sm text-gray-600">Kamar Hotel</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#6A00FF]">2</div>
                    <div className="text-sm text-gray-600">Hari Menginap</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const BusLayout = ({ assignments }: { assignments: BusSeat[] }) => {
  // last assignment is the front seat
  const frontSeat = assignments.filter(seat => seat.id === 60)[0];
  // back seat is the last 6 assignments
  const backSeats = assignments.filter(seat => seat.id >= 54 && seat.id <= 59);
  // second back seats is the last 3 assignments
  const secondBackSeats = assignments.filter(
    seat => seat.id >= 51 && seat.id <= 53
  );
  const middleSeats = assignments.filter(seat => seat.id >= 1 && seat.id <= 50);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <Bus className="w-6 h-6 text-[#6A00FF] mr-2" />
        <span className="font-bold">Layout Bus</span>
      </div>

      <div
        className={`${
          !PERMISSIONS.bus
            ? 'relative overflow-hidden rounded-lg max-h-96'
            : 'overflow-x-auto relative'
        }`}
      >
        <div className="min-w-md max-w-lg mx-auto mb-1 ">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white text-xs flex justify-center items-center gap-1 text-gray-600 py-2 px-3 border border-gray-200 rounded">
              <TvMinimalPlay className="size-4 text-gray-600" /> TV
            </div>
          </div>

          {/* Driver area */}
          <div className="flex justify-between mb-4">
            {/* Pintu Depan */}
            <div className="text-nowrap text-xs flex items-center gap-2 bg-gray-300 rounded-r p-2">
              <DoorOpen className="size-6 text-gray-600" /> Pintu Depan
            </div>

            {/* Front Seat */}
            <div
              className={`flex flex-col items-center justify-center rounded overflow-hidden ${
                frontSeat.attendeeName.toLocaleLowerCase() !== 'kosong'
                  ? 'bg-[#6A00FF] text-white'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              <span className="text-xs truncate w-full text-center py-2 px-4">
                {frontSeat.id} {frontSeat.attendeeName}
              </span>
            </div>
            <div className="bg-gray-300 text-xs rounded flex items-center justify-center gap-2 px-3">
              <User className="size-4 text-gray-600" />
              Driver
            </div>
          </div>

          {/* Seats */}
          <div className="space-y-3">
            {Array.from({ length: 10 }, (_, rowIndex) => {
              const rowNumber = rowIndex + 1;
              const rowSeats = middleSeats.filter(
                (_, index) => Math.floor(index / 5) === rowIndex
              );

              return (
                <div key={rowNumber} className="flex justify-between space-x-2">
                  <div className="flex space-x-1">
                    {rowSeats
                      .filter((_, index) => index <= 1)
                      .map(seat => (
                        <div
                          key={seat.id}
                          className={`w-20 h-12 rounded text-xs font-medium flex flex-col items-center justify-center ${
                            seat.attendeeName.toLocaleLowerCase() !== 'kosong'
                              ? 'bg-[#6A00FF] text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          <span className="text-xs">{seat.id}</span>
                          <span className="text-xs truncate w-full text-center px-1">
                            {seat.attendeeName}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="flex space-x-1">
                    {rowSeats
                      .filter((_, index) => index > 1 && index <= 4)
                      .map(seat => (
                        <div
                          key={seat.id}
                          className={`w-20 h-12 rounded text-xs font-medium flex flex-col items-center justify-center ${
                            seat.attendeeName.toLocaleLowerCase() !== 'kosong'
                              ? 'bg-[#6A00FF] text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          <span className="text-xs">{seat.id}</span>
                          <span className="text-xs truncate w-full text-center px-1">
                            {seat.attendeeName}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pintu belakang & Second Back Seats */}
          <div className="flex justify-between items-center mt-3 mb-4">
            <div className="flex justify-between items-center">
              {/* Pintu Depan */}
              <div className="text-nowrap text-xs flex gap-2 items-center bg-gray-300 rounded-r p-2">
                <DoorOpen className="size-6 text-gray-600" /> Pintu Belakang
              </div>
            </div>

            <div className="flex space-x-1">
              {secondBackSeats.map(seat => (
                <div
                  key={seat.id}
                  className={`w-20 h-12 rounded text-xs font-medium flex flex-col items-center justify-center ${
                    seat.attendeeName.toLocaleLowerCase() !== 'kosong'
                      ? 'bg-[#6A00FF] text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <span className="text-xs">{seat.id}</span>
                  <span className="text-xs truncate w-full text-center px-1">
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
                key={seat.id}
                className={`w-full h-12 rounded text-xs font-medium flex flex-col items-center justify-center ${
                  seat.attendeeName.toLocaleLowerCase() !== 'kosong'
                    ? 'bg-[#6A00FF] text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                <span className="text-xs">{seat.id}</span>
                <span className="text-xs truncate w-full text-center px-1">
                  {seat.attendeeName}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Backdrop blue coming soon */}
        {!PERMISSIONS.bus && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-full h-full bg-gray-400/60 backdrop-blur-md absolute inset-0"></div>
            <span className="relative text-3xl font-bold text-white drop-shadow-lg">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      {/* Legend */}
      <div className="flex justify-center space-x-4 mt-6 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#6A00FF] rounded mr-2"></div>
          <span>Terisi</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
          <span>Kosong</span>
        </div>
      </div>
    </div>
  );
};
