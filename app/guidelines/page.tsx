'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  Shirt,
  Backpack,
  Camera,
  Sun,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function GuidelinesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const rules = [
    'Hormati sesama peserta dan panitia acara',
    'Ikuti semua instruksi keselamatan dari pemandu',
    'Tetap bersama grup yang telah ditentukan selama aktivitas',
    'Dilarang mengonsumsi alkohol selama aktivitas outbound',
    'Dilarang merokok di area resort',
    'Jam tenang mulai pukul 22:00 - 07:00',
    'Laporkan segera jika ada cedera atau masalah kesehatan',
    'Jaga barang pribadi dan hormati milik orang lain',
  ];

  const essentialItems = [
    {
      icon: Backpack,
      item: 'Sepatu olahraga yang nyaman',
      description: 'Sepatu yang cocok untuk aktivitas outbound',
    },
    {
      icon: Shirt,
      item: 'Pakaian sesuai cuaca',
      description: 'Pakaian berlapis untuk berbagai kondisi',
    },
    {
      icon: Sun,
      item: 'Perlindungan dari sinar matahari',
      description: 'Topi, kacamata hitam, dan sunscreen',
    },
    {
      icon: Camera,
      item: 'Kamera atau handphone',
      description: 'Untuk mengabadikan momen berharga',
    },
    {
      icon: Backpack,
      item: 'Botol minum pribadi',
      description: 'Tetap terhidrasi selama aktivitas',
    },
    {
      icon: CheckCircle,
      item: 'Obat-obatan pribadi',
      description: 'Obat yang diperlukan secara rutin',
    },
  ];

  const dressCode = {
    casual: {
      title: 'Casual Outdoor',
      occasions: ['Outbound', 'Team Building', 'Aktivitas Siang'],
      items: [
        'Kaos dan celana olahraga',
        'Sepatu olahraga',
        'Jaket ringan',
        'Topi',
      ],
    },
    dinner: {
      title: 'Smart Casual',
      occasions: ['Welcome Dinner', 'Gala Dinner', 'Makan Siang'],
      items: [
        'Kemeja atau blouse',
        'Celana panjang rapi',
        'Sepatu pantofel',
        'Jaket atau blazer',
      ],
    },
    evening: {
      title: 'Santai',
      occasions: ['Ice Breaking', 'Sharing Session', 'Waktu Bebas'],
      items: [
        'Pakaian santai',
        'Jaket hangat',
        'Sepatu nyaman',
        'Aksesoris sesuai selera',
      ],
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Guidelines</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Panduan lengkap untuk Employee Gathering yang aman dan
              menyenangkan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Rules */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Peraturan Acara & Keselamatan
            </h2>

            <Alert className="mb-8 border-purple-200 bg-purple-50">
              <AlertTriangle className="h-4 w-4 text-[#6A00FF]" />
              <AlertDescription className="text-purple-800">
                Mohon baca dan ikuti semua panduan untuk memastikan acara
                berjalan aman dan menyenangkan bagi semua peserta.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rule}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What to Bring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Barang yang Perlu Dibawa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {essentialItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <item.icon className="w-8 h-8 text-[#6A00FF] mx-auto mb-2" />
                      <CardTitle className="text-lg">{item.item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Panduan Dress Code
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Object.entries(dressCode).map(([key, code], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-center text-[#6A00FF]">
                        {code.title}
                      </CardTitle>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">
                          Perfect for:
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {code.occasions.map(occasion => (
                            <span
                              key={occasion}
                              className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                            >
                              {occasion}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {code.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center text-gray-700"
                          >
                            <span className="w-2 h-2 bg-[#6A00FF] rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
