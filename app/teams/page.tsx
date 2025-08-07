'use client';

import { motion } from 'motion/react';
import { Users, Bus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JEEP_TEAMS, GAME_TEAMS } from '@/data/teams.const';
import { PERMISSIONS } from '@/data/permission.const';

export default function TeamsPage() {
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
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Teams</h1>
            <p className="md:text-2xl opacity-90 max-w-3xl mx-auto">
              Semua informasi yang perlu Anda ketahui tentang pembagian kelompok
              jeep dan kelompok game
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jeep Assignment */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Pembagian Kelompok Jeep
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Setiap peserta akan dibagi ke dalam kelompok untuk offroad di area
              Tawangmangu menggunakan Jeep. Berikut adalah pembagian kelompok
              jeep:
            </p>
          </motion.div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ${
              !PERMISSIONS.jeep
                ? 'relative max-h-64 overflow-hidden rounded'
                : ''
            }`}
          >
            {JEEP_TEAMS.map((jeep, index) => (
              <motion.div
                key={jeep.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 py-4 gap-2">
                  <CardHeader className="px-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="md:text-lg flex items-center">
                        <Bus className="size-5 shrink-0 text-[#6A00FF] mr-2" />
                        {jeep.id}
                      </CardTitle>

                      <span className="text-sm flex items-center">
                        <Users className="size-4 mr-1" />
                        {jeep.members.length} orang
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full px-4">
                    <div className="space-y-3">
                      {jeep.members.map(member => (
                        <div
                          key={member}
                          className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                        >
                          <div className="size-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-[#6A00FF]">
                              {member[0].toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm md:text-base font-medium text-gray-900">
                              {member}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {!PERMISSIONS.jeep && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-full h-full bg-gray-400/60 backdrop-blur-md absolute inset-0"></div>
                <span className="relative text-center text-3xl font-bold text-white drop-shadow-lg text-outlni text-shadow-2xs">
                  Coming Soon
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Game Assignment */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Pembagian Kelompok Game
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Selain offroad, peserta juga akan dibagi ke dalam kelompok untuk
              mengikuti berbagai permainan seru. Berikut adalah pembagian
              kelompok game:
            </p>
          </motion.div>

          {/* Game groups will be displayed here */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ${
              !PERMISSIONS.games
                ? 'relative max-h-64 overflow-hidden rounded'
                : ''
            }`}
          >
            {GAME_TEAMS.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 py-4 gap-2">
                  <CardHeader className="px-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="md:text-lg flex items-center">
                        <Users className="size-5 shrink-0 text-[#6A00FF] mr-2" />
                        {team.id}
                      </CardTitle>

                      <span className="text-sm flex items-center">
                        {team.members.length} orang
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full px-4">
                    <div className="space-y-3">
                      {team.members.map(member => (
                        <div
                          key={member}
                          className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                        >
                          <div className="size-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-[#6A00FF]">
                              {member[0].toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm md:text-base font-medium text-gray-900">
                              {member}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {!PERMISSIONS.games && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-full h-full bg-gray-400/60 backdrop-blur-md absolute inset-0"></div>
                <span className="relative text-center text-3xl font-bold text-white drop-shadow-lg text-outlni text-shadow-2xs">
                  Coming Soon
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
