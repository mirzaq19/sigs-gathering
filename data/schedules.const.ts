import { Users, Camera, Utensils, Bus, Hotel, Waves } from 'lucide-react';
export interface Schedule {
  time: string;
  title: string;
  description: string;
  location: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  day: string;
}
export const SCHEDULES: Schedule[] = [
  {
    day: 'Jumat, 18 September 2026',
    time: '22.00 - 22.15',
    title: 'Persiapan Berangkat',
    description: 'Registrasi & Persiapan keberangkatan di AMG Tower',
    location: 'Surabaya',
    icon: Users,
  },
  {
    day: 'Jumat, 18 September 2026',
    time: '22.15 - 04.30',
    title: 'Perjalanan menuju Banyuwangi',
    description: 'Perjalanan Surabaya → Banyuwangi',
    location: 'Transportasi',
    icon: Bus,
  },
  {
    day: 'Jumat, 18 September 2026',
    time: '04.30 - 05.00',
    title: 'Ishoma & bersih diri',
    description: 'Istirahat, sholat, dan bersih diri',
    location: 'Rest area',
    icon: Hotel,
  },
  {
    day: 'Jumat, 18 September 2026',
    time: '05.00 - 05.30',
    title: 'Sarapan',
    description: 'Menikmati sarapan sebelum memulai kegiatan',
    location: 'Rest area',
    icon: Utensils,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '05.30 - 08.30',
    title: 'Perjalanan ke Destinasi Wisata',
    description:
      'Perjalanan dan eksplorasi Pantai Mustika, Pantai Wedi Ireng, dan Spot T',
    location: 'Banyuwangi Selatan',
    icon: Waves,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '08.30 - 09.00',
    title: 'Bersih diri',
    description: 'Bersih diri & persiapan menuju destinasi selanjutnya.',
    location: 'Fasilitas destinasi',
    icon: Hotel,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '09.00 - 11.00',
    title: 'Perjalanan ke De Djawatan',
    description: 'Perjalanan menuju Wisata De Djawatan',
    location: 'Transportasi',
    icon: Bus,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '11.00 - 12.00',
    title: 'Eksplor De Djawatan Forest',
    description: 'Eksplorasi & dokumentasi bersama di De Djawatan',
    location: 'De Djawatan',
    icon: Camera,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '12.00 - 13.00',
    title: 'Ishoma',
    description: 'Istirahat, sholat, dan makan siang di Resto Kampung Bethek',
    location: 'Resto Kampung Bethek',
    icon: Utensils,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '13.00 - 15.00',
    title: 'Menuju éL Hotel (Check In)',
    description:
      'Perjalanan menuju éL Hotel untuk check in dan istirahat sejenak',
    location: 'Transportasi',
    icon: Bus,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '15.00 - 18.00',
    title: 'Free time',
    description: 'Siapkan kostum Gala Dinner terbaikmu!',
    location: 'Hotel',
    icon: Users,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '18.00 - 21.30',
    title: 'Gala Dinner',
    description: 'Let the Night Begin!',
    location: 'éL Hotel Ballroom',
    icon: Utensils,
  },
  {
    day: 'Sabtu, 19 September 2026',
    time: '21.30 - 07.00',
    title: 'Istirahat',
    description: 'Istirahat dan mengisi energi kembali',
    location: 'Hotel',
    icon: Hotel,
  },
  {
    day: 'Minggu, 20 September 2026',
    time: '07.00 - 09.00',
    title: 'Checkout, Breakfast, & Foto Bersama',
    description: 'Sarapan pagi, persiapan check out, dan sesi foto bersama',
    location: 'Hotel',
    icon: Utensils,
  },
  {
    day: 'Minggu, 20 September 2026',
    time: '09.00 - 09.30',
    title: 'Perjalanan ke pusat oleh-oleh',
    description: 'Perjalanan menuju tempat oleh-oleh',
    location: 'Hotel',
    icon: Hotel,
  },
  {
    day: 'Minggu, 20 September 2026',
    time: '09.30 - 10.00',
    title: 'Belanja Oleh-Oleh',
    description: 'Kesempatan belanja oleh-oleh',
    location: 'Pusat oleh-oleh',
    icon: Users,
  },
  {
    day: 'Minggu, 20 September 2026',
    time: '10.00 - 13.00',
    title: 'Perjalanan ke Surabaya',
    description: 'Perjalanan kembali ke Surabaya',
    location: 'Transportasi',
    icon: Bus,
  },
  {
    day: 'Minggu, 20 September 2026',
    time: '13.00 - 14.00',
    title: 'Ishoma',
    description:
      'Istirahat, sholat, & makan siang di Warung Kencur Probolinggo',
    location: 'Warung Kencur Probolinggo',
    icon: Utensils,
  },
  {
    day: 'Minggu, 20 September 2026',
    time: '14.00 - 17.00',
    title: 'Perjalanan pulang ke AMG Tower',
    description: 'Melanjutkan perjalanan kembali ke Surabaya',
    location: 'Transportasi',
    icon: Bus,
  },
];
