'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Bus, User, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Seat {
  id: string;
  row: number;
  number: string;
  isOccupied: boolean;
  isSelected: boolean;
}

export default function TransportationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Generate bus seats (12 rows, 4 seats per row)
  const [seats, setSeats] = useState<Seat[]>(() => {
    const seatArray: Seat[] = [];
    for (let row = 1; row <= 12; row++) {
      const seatLetters = ['A', 'B', 'C', 'D'];
      seatLetters.forEach(letter => {
        seatArray.push({
          id: `${row}${letter}`,
          row,
          number: `${row}${letter}`,
          isOccupied: false, // initially all seats are not occupied
          isSelected: false,
        });
      });
    }
    return seatArray;
  });

  useEffect(() => {
    setSeats(prevSeats =>
      prevSeats.map(seat => ({
        ...seat,
        isOccupied: Math.random() < 0.3, // 30% chance of being occupied
      }))
    );
  }, []);

  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const handleSeatClick = (seatId: string) => {
    if (seats.find(seat => seat.id === seatId)?.isOccupied) return;

    setSeats(prevSeats =>
      prevSeats.map(seat => ({
        ...seat,
        isSelected: seat.id === seatId,
      }))
    );
    setSelectedSeat(seatId);
  };

  const confirmSelection = () => {
    if (selectedSeat) {
      alert(`Kursi ${selectedSeat} telah dipesan untuk Anda!`);
    }
  };

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
            <h1 className="text-2xl md:text-6xl font-bold mb-6">
              Transportation
            </h1>
            <p className="md:text-2xl opacity-90 max-w-3xl mx-auto">
              Pilih kursi favorit Anda untuk perjalanan menuju lokasi Employee
              Gathering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transportation Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Bus className="w-8 h-8 text-[#6A00FF] mx-auto mb-2" />
                <CardTitle>Departure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Jumat, 15 Maret</p>
                <p className="text-gray-600">15:00 WIB</p>
                <p className="text-sm text-gray-500">Terminal Pusat Kota</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Bus className="w-8 h-8 text-[#6A00FF] mx-auto mb-2" />
                <CardTitle>Journey Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">3 Jam</p>
                <p className="text-sm text-gray-500">
                  Dengan pemberhentian scenic
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Bus className="w-8 h-8 text-[#6A00FF] mx-auto mb-2" />
                <CardTitle>Return</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Minggu, 17 Maret</p>
                <p className="text-gray-600">19:00 WIB</p>
                <p className="text-sm text-gray-500">Dari resort</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seat Selection */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Pilih Kursi Anda</h2>
            <div className="flex justify-center space-x-8 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded mr-2"></div>
                <span className="text-sm">Tersedia</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#6A00FF] rounded mr-2"></div>
                <span className="text-sm">Dipilih</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
                <span className="text-sm">Terisi</span>
              </div>
            </div>
          </motion.div>

          {/* Bus Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {/* Driver area */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-8 bg-gray-300 rounded-t-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Seats */}
            <div className="space-y-4">
              {Array.from({ length: 12 }, (_, rowIndex) => {
                const rowNumber = rowIndex + 1;
                const rowSeats = seats.filter(seat => seat.row === rowNumber);

                return (
                  <motion.div
                    key={rowNumber}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: rowIndex * 0.05 }}
                    className="flex justify-center space-x-2"
                  >
                    <div className="flex space-x-1">
                      {rowSeats.slice(0, 2).map(seat => (
                        <button
                          key={seat.id}
                          onClick={() => handleSeatClick(seat.id)}
                          disabled={seat.isOccupied}
                          className={`w-8 h-8 rounded text-xs font-medium transition-all duration-200 ${
                            seat.isOccupied
                              ? 'bg-gray-400 cursor-not-allowed text-white'
                              : seat.isSelected
                              ? 'bg-[#6A00FF] text-white scale-110'
                              : 'bg-green-500 hover:bg-green-600 text-white hover:scale-105'
                          }`}
                        >
                          {seat.number}
                        </button>
                      ))}
                    </div>
                    <div className="w-8"></div> {/* Aisle */}
                    <div className="flex space-x-1">
                      {rowSeats.slice(2, 4).map(seat => (
                        <button
                          key={seat.id}
                          onClick={() => handleSeatClick(seat.id)}
                          disabled={seat.isOccupied}
                          className={`w-8 h-8 rounded text-xs font-medium transition-all duration-200 ${
                            seat.isOccupied
                              ? 'bg-gray-400 cursor-not-allowed text-white'
                              : seat.isSelected
                              ? 'bg-[#6A00FF] text-white scale-110'
                              : 'bg-green-500 hover:bg-green-600 text-white hover:scale-105'
                          }`}
                        >
                          {seat.number}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Confirmation */}
            {selectedSeat && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <p className="text-lg mb-4">
                  Kursi Terpilih:{' '}
                  <span className="font-bold text-[#6A00FF]">
                    {selectedSeat}
                  </span>
                </p>
                <Button
                  onClick={confirmSelection}
                  className="bg-[#6A00FF] hover:bg-[#5A00E6]"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Konfirmasi Pilihan
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
