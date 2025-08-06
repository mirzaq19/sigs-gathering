'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Schedule, SCHEDULES } from '@/data/schedules.const';
import { MapPin } from 'lucide-react';
import { GENERAL_INFO } from '@/data/general.const';

export default function SchedulePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const groupedSchedule = SCHEDULES.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, Schedule[]>);

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
              <h2 className="text-xl md:text-3xl font-bold text-center mb-12 text-gray-900">
                {day},{' '}
                {new Date(
                  new Date(GENERAL_INFO.startDate).setDate(
                    new Date(GENERAL_INFO.startDate).getDate() + dayIndex
                  )
                ).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
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
                      <CardContent>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <item.icon className="w-6 h-6 text-[#6A00FF]" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-2">
                              <span className="md:text-lg font-bold text-[#6A00FF]">
                                {item.time}
                              </span>
                              <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center">
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
