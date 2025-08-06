import { Users, Camera, Mountain, Utensils, Bus, Hotel } from 'lucide-react';

export interface Schedule {
  time: string;
  title: string;
  description: string;
  location: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  day: string;
}

export const SCHEDULES: Schedule[] = [
  // Sabtu
  {
    day: 'Sabtu',
    time: '05:15 - 05:30',
    title: 'Persiapan Berangkat',
    description: 'Persiapan dan registrasi peserta sebelum keberangkatan.',
    location: 'Lobby AMG Tower',
    icon: Users,
  },
  {
    day: 'Sabtu',
    time: '05:30 - 10.00',
    title: 'Perjalanan menuju Tawangmangu',
    description: 'Perjalanan menuju Tawangmangu dengan bus.',
    location: 'Bus',
    icon: Bus,
  },
  {
    day: 'Sabtu',
    time: '10:00 - 12.00',
    title: 'Offroad Jeep',
    description:
      'Petualangan offroad jeep di sekitar Tawangmangu dengan pemandangan alam yang indah.',
    location: 'Tawangmangu',
    icon: Mountain,
  },
  {
    day: 'Sabtu',
    time: '12:00 - 13:30',
    title: 'Makan Siang & Istirahat',
    description: 'Makan siang dengan pemandangan indah dan waktu istirahat.',
    location: 'Restoran Tawangmangu',
    icon: Utensils,
  },
  {
    day: 'Sabtu',
    time: '13:30 - 14:00',
    title: 'Menuju Hotel Jawadwipa',
    description:
      'Perjalanan menuju Hotel Jawadwipa untuk check-in dan istirahat sejenak.',
    location: 'Bus',
    icon: Bus,
  },
  {
    day: 'Sabtu',
    time: '14:30 - 18:00',
    title: 'Free Time',
    description:
      'Waktu bebas untuk menikmati fasilitas hotel, berenang, atau bersantai.',
    location: 'Hotel Jawadwipa',
    icon: Hotel,
  },
  {
    day: 'Sabtu',
    time: '18:00 - 22:00',
    title: 'Gala Dinner',
    description:
      'Makan malam gala dengan hiburan musik dan penghargaan karyawan terbaik.',
    location: 'Hotel Jawadwipa',
    icon: Utensils,
  },
  {
    day: 'Sabtu',
    time: '22:00 - 07:00',
    title: 'Istirahat',
    description:
      'Istirahat di hotel untuk mempersiapkan kegiatan hari berikutnya.',
    location: 'Hotel Jawadwipa',
    icon: Hotel,
  },

  // Minggu
  {
    day: 'Minggu',
    time: '07:00 - 08:00',
    title: 'Sarapan Pagi',
    description: 'Sarapan pagi bersama di restoran hotel.',
    location: 'Hotel Jawadwipa',
    icon: Utensils,
  },
  {
    day: 'Minggu',
    time: '08:45 - 08:50',
    title: 'Persiapan Check-out Hotel',
    description: 'Persiapan check-out hotel dan pengecekan barang bawaan.',
    location: 'Hotel Jawadwipa',
    icon: Hotel,
  },
  {
    day: 'Minggu',
    time: '08:50 - 09:30',
    title: 'Perjalanan ke Rumah Atsiri',
    description: 'Perjalanan menuju Rumah Atsiri untuk kegiatan edukasi.',
    location: 'Bus',
    icon: Bus,
  },
  {
    day: 'Minggu',
    time: '09:30 - 10:30',
    title: 'Eksplorasi Rumah Atsiri',
    description:
      'Kegiatan edukasi di Rumah Atsiri dengan berbagai aktivitas menarik.',
    location: 'Rumah Atsiri',
    icon: Camera,
  },
  {
    day: 'Minggu',
    time: '10:40 - 11:00',
    title: 'Perjalanan ke Restoran',
    description: 'Perjalanan menuju restoran untuk makan siang.',
    location: 'Bus',
    icon: Bus,
  },
  {
    day: 'Minggu',
    time: '11:00 - 12:30',
    title: 'Ishoma & Oleh-oleh',
    description:
      'Makan siang dan kesempatan untuk membeli oleh-oleh khas Tawangmangu.',
    location: 'Restoran Tawangmangu',
    icon: Utensils,
  },
  {
    day: 'Minggu',
    time: '12:30 - 18:00',
    title: 'Perjalanan Kembali ke Surabaya',
    description: 'Perjalanan kembali ke Surabaya dengan bus.',
    location: 'Bus',
    icon: Bus,
  },
];
