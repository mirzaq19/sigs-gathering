'use client';

import { motion, stagger, Variants } from 'motion/react';
import { Users, Building, Calendar, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ATTENDEES } from '@/data/attendees.const';
import { GENERAL_INFO } from '@/data/general.const';
import { countDays } from '@/lib/utils';

export default function AttendeesPage() {
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

  const attendeesContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(0.2),
      },
    },
  };

  const attendeeVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

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
      <section className="py-20 px-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
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

        <motion.div
          variants={attendeesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ATTENDEES.map(attendee => (
            <motion.div key={attendee.id} variants={attendeeVariants}>
              <div className="p-2 border rounded-lg bg-white shadow-md relative overflow-hidden group">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={`/avatars/${attendee.id}.jpg`}
                      alt={attendee.name}
                    />
                    <AvatarFallback className="text-[#6A00FF] bg-[#F3E8FF]">
                      {attendee.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="w-full">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {attendee.name}
                    </h3>
                  </div>

                  <div className="absolute -right-[40px] top-0 bottom-0 bg-[#6A00FF] text-white flex items-center justify-center group-focus:right-0 group-active:right-0 group-hover:right-0 transition-all duration-300 ease-in-out">
                    <div className="flex items-center space-x-2 mx-2">
                      <Building className="size-6" />
                      <span className="text-sm font-semibold opacity-0 group-focus:opacity-100 group-active:opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                        {attendee.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
