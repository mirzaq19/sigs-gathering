'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Users, Camera, Mountain, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  day: string;
}

export default function SchedulePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const schedule: ScheduleItem[] = [
    // Friday
    {
      day: 'Friday',
      time: '15:00',
      title: 'Keberangkatan',
      description:
        'Berkumpul di Terminal Pusat Kota. Snack ringan dan welcome drink disediakan.',
      location: 'Terminal Pusat Kota',
      icon: Users,
    },
    {
      day: 'Friday',
      time: '18:00',
      title: 'Tiba & Check-in',
      description:
        'Tiba di Mountain View Resort, check-in kamar, dan beristirahat.',
      location: 'Mountain View Resort',
      icon: MapPin,
    },
    {
      day: 'Friday',
      time: '19:30',
      title: 'Welcome Dinner',
      description:
        'Makan malam pembuka bersama seluruh peserta dengan menu khas daerah.',
      location: 'Restoran Resort',
      icon: Utensils,
    },
    {
      day: 'Friday',
      time: '21:00',
      title: 'Ice Breaking & Games',
      description:
        'Sesi perkenalan, games seru, dan aktivitas team building ringan.',
      location: 'Aula Resort',
      icon: Users,
    },

    // Saturday
    {
      day: 'Saturday',
      time: '07:00',
      title: 'Morning Exercise',
      description: 'Senam pagi bersama dan olahraga ringan untuk memulai hari.',
      location: 'Lapangan Resort',
      icon: Mountain,
    },
    {
      day: 'Saturday',
      time: '08:00',
      title: 'Sarapan',
      description:
        'Sarapan bergizi untuk mengisi energi sebelum aktivitas seharian.',
      location: 'Restoran Resort',
      icon: Utensils,
    },
    {
      day: 'Saturday',
      time: '09:30',
      title: 'Team Building Activities',
      description:
        'Berbagai aktivitas team building: outbound, problem solving, dan kerjasama tim.',
      location: 'Area Outbound',
      icon: Mountain,
    },
    {
      day: 'Saturday',
      time: '12:30',
      title: 'Makan Siang & Istirahat',
      description: 'Makan siang dengan pemandangan indah dan waktu istirahat.',
      location: 'Gazebo Resort',
      icon: Utensils,
    },
    {
      day: 'Saturday',
      time: '14:00',
      title: 'Workshop & Seminar',
      description:
        'Workshop pengembangan diri dan seminar motivasi dari pembicara tamu.',
      location: 'Ruang Seminar',
      icon: Camera,
    },
    {
      day: 'Saturday',
      time: '19:00',
      title: 'Gala Dinner',
      description:
        'Makan malam gala dengan hiburan musik dan penghargaan karyawan terbaik.',
      location: 'Ballroom Resort',
      icon: Utensils,
    },

    // Sunday
    {
      day: 'Sunday',
      time: '08:00',
      title: 'Sarapan',
      description: 'Sarapan terakhir bersama sebelum persiapan kepulangan.',
      location: 'Restoran Resort',
      icon: Utensils,
    },
    {
      day: 'Sunday',
      time: '10:00',
      title: 'Sharing Session',
      description:
        'Berbagi pengalaman, foto-foto, dan tukar kontak dengan rekan kerja.',
      location: 'Lounge Resort',
      icon: Camera,
    },
    {
      day: 'Sunday',
      time: '12:00',
      title: 'Check-out',
      description: 'Berkemas dan persiapan untuk perjalanan pulang.',
      location: 'Lobby Resort',
      icon: MapPin,
    },
    {
      day: 'Sunday',
      time: '13:00',
      title: 'Makan Siang Perpisahan',
      description: 'Makan siang terakhir bersama sebelum kembali ke kota.',
      location: 'Restoran Resort',
      icon: Utensils,
    },
    {
      day: 'Sunday',
      time: '15:00',
      title: 'Keberangkatan Pulang',
      description:
        'Naik bus untuk perjalanan pulang dengan membawa kenangan indah.',
      location: 'Mountain View Resort',
      icon: Users,
    },
  ];

  const groupedSchedule = schedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, ScheduleItem[]>);

  return (
    <div className="min-h-screen pt-16">
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
              Event Schedule
            </h1>
            <p className="md:text-2xl opacity-90 max-w-3xl mx-auto">
              Jadwal lengkap acara Employee Gathering selama tiga hari
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedSchedule).map(([day, items], dayIndex) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
                {day}, {15 + dayIndex} Maret
              </h2>

              <div className="space-y-6">
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.day}-${item.time}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: dayIndex * 0.2 + index * 0.1,
                    }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <item.icon className="w-6 h-6 text-[#6A00FF]" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-2">
                              <span className="text-lg font-bold text-[#6A00FF]">
                                {item.time}
                              </span>
                              <h3 className="text-xl font-semibold text-gray-900">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-center md:text-start text-gray-600 mb-2">
                              {item.description}
                            </p>
                            <div className="flex justify-center md:justify-start items-center text-sm text-gray-500">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
