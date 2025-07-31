'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Building, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ATTENDEES } from '@/data/attendees.const';
import { GENERAL_INFO } from '@/data/general.const';
import { countDays } from '@/lib/utils';

export default function AttendeesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: 'Total Peserta', value: ATTENDEES.length, icon: Users },
    {
      label: 'Perusahaan',
      value: new Set(ATTENDEES.map(a => a.company)).size,
      icon: Building,
    },
    {
      label: 'Hari Menuju Acara',
      value:
        countDays(GENERAL_INFO.startDate) === 0
          ? 'Hari Ini'
          : `${countDays(GENERAL_INFO.startDate)}`,
      icon: Calendar,
    },
    { label: 'Tingkat Antusiasme', value: '100%', icon: Star },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Attendees</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Bertemu dengan rekan-rekan kerja yang akan bergabung dalam
              Employee Gathering ini
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#6A00FF]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attendees Grid */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Daftar Peserta Employee Gathering
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berikut adalah daftar peserta yang akan hadir dalam acara Employee
              Gathering. Mari berkenalan dan membangun networking yang baik!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ATTENDEES.map((attendee, index) => (
              <motion.div
                key={attendee.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                  {attendee.isOrganizer && (
                    <div className="absolute top-4 right-4 bg-[#6A00FF] text-white px-2 py-1 rounded-full text-xs font-medium">
                      Organizer
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="/placeholder.svg"
                          alt={attendee.name}
                        />
                        <AvatarFallback className="bg-purple-100 text-purple-600 text-lg font-semibold">
                          {attendee.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {attendee.name}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mb-1">
                          <Building className="w-4 h-4 mr-1" />
                          {attendee.company}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {attendee.division}
                        </div>
                        <div className="text-gray-500 text-xs mt-1">
                          Bergabung {attendee.joinDate}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
