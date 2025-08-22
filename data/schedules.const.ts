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
    description: 'Registrasi & Persiapan keberangkatan di AMG Tower.',
    location: 'Lobby AMG Tower',
    icon: Users,
  },
  {
    day: 'Sabtu',
    time: '05:30 - 10.00',
    title: 'Perjalanan menuju Tawangmangu',
    description: 'Perjalanan Surabaya → Tawangmangu',
    location: 'Bus',
    icon: Bus,
  },
  {
    day: 'Sabtu',
    time: '10:00 - 12.00',
    title: 'Offroad Jeep (start RM Soewatu)',
    description:
      'Petualangan offroad jeep di sekitar Tawangmangu dengan pemandangan alam yang indah.',
    location: 'Tawangmangu',
    icon: Mountain,
  },
  {
    day: 'Sabtu',
    time: '12:00 - 13:30',
    title: 'Makan Siang & Istirahat (ISHOMA)',
    description: 'Makan siang dengan pemandangan indah dan waktu istirahat.',
    location: 'Restoran Tawangmangu',
    icon: Utensils,
  },
  {
    day: 'Sabtu',
    time: '13:30 - 14:00',
    title: 'Menuju Hotel Jawadwipa (Check-in)',
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
      'Makan malam bersama dengan berbagai hidangan dan hiburan menarik.',
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
    title: 'Sarapan Pagi (Breakfast)',
    description: 'Sarapan pagi bersama di restoran hotel.',
    location: 'Hotel Jawadwipa',
    icon: Utensils,
  },
  {
    day: 'Minggu',
    time: '08:45 - 09:30',
    title: 'Check-out Hotel & Perjalanan ke Rumah Atsiri',
    description: 'Check-out dari hotel dan perjalanan menuju Rumah Atsiri.',
    location: 'Bus',
    icon: Bus,
  },
  {
    day: 'Minggu',
    time: '09:30 - 11:00',
    title: 'Eksplorasi Rumah Atsiri',
    description:
      'Kegiatan edukasi di Rumah Atsiri dengan berbagai aktivitas menarik.',
    location: 'Rumah Atsiri',
    icon: Camera,
  },
  {
    day: 'Minggu',
    time: '11:00 - 13:00',
    title: 'ISHOMA + Belanja oleh-oleh (RM Godong Gedang)',
    description: 'Istirahat, makan siang, dan kesempatan belanja oleh-oleh.',
    location: 'RM Godong Gedang',
    icon: Utensils,
  },
  {
    day: 'Minggu',
    time: '13:00 - 13:10',
    title: 'Penutupan oleh Panitia & Direksi',
    description: 'Penutupan acara dan ucapan terima kasih kepada peserta.',
    location: 'RM Godong Gedang',
    icon: Utensils,
  },
  {
    day: 'Minggu',
    time: '12:30 - 18:00',
    title: 'Perjalanan Pulang ke AMG Tower',
    description: 'Perjalanan kembali ke Surabaya dengan bus.',
    location: 'Bus',
    icon: Bus,
  },
];
