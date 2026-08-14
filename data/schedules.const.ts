import { Users, Camera, Mountain, Utensils, Bus, Hotel, Waves } from 'lucide-react';

export interface Schedule { time: string; title: string; description: string; location: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; day: string; }

export const SCHEDULES: Schedule[] = [
  { day: 'Jumat', time: '05:00 – 06:00', title: 'Titik Kumpul & Registrasi', description: 'Persiapan keberangkatan bersama dari AMG Tower.', location: 'AMG Tower, Surabaya', icon: Users },
  { day: 'Jumat', time: '06:00 – 14:00', title: 'Perjalanan menuju Banyuwangi', description: 'Perjalanan darat dan makan siang. Detail teknis menyusul.', location: 'Transportasi', icon: Bus },
  { day: 'Jumat', time: 'Sore', title: 'Check-in & Free Time', description: 'Istirahat, eksplorasi ringan, dan persiapan malam kebersamaan.', location: 'Hotel / Banyuwangi', icon: Hotel },
  { day: 'Jumat', time: 'Malam', title: 'Gala Dinner & Best Costume', description: 'Makan malam, parade kostum karakter, dan hiburan bersama.', location: 'Venue acara — menyusul', icon: Utensils },
  { day: 'Sabtu', time: 'Pagi', title: 'Explore Spot T', description: 'Menikmati lanskap alam Banyuwangi dan aktivitas kelompok.', location: 'Spot T — detail menyusul', icon: Mountain },
  { day: 'Sabtu', time: 'Siang', title: 'Fun Games', description: 'Tantangan ringan untuk menguatkan kerja sama dan kekompakan.', location: 'Venue aktivitas — menyusul', icon: Users },
  { day: 'Sabtu', time: 'Sore', title: 'Coastal Escape', description: 'Waktu menikmati suasana pesisir. Bawa sunscreen dan topi.', location: 'Pantai Banyuwangi — menyusul', icon: Waves },
  { day: 'Minggu', time: 'Pagi', title: 'De Djawatan', description: 'Berjalan di antara pepohonan trembesi dan mengabadikan cerita perjalanan.', location: 'De Djawatan', icon: Camera },
  { day: 'Minggu', time: 'Siang', title: 'Penutupan & Perjalanan Pulang', description: 'Penutupan oleh panitia dan perjalanan kembali ke Surabaya.', location: 'AMG Tower — estimasi menyusul', icon: Bus },
];
