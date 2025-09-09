'use client';

import { motion } from 'motion/react';
import {
  AlertTriangle,
  Banknote,
  CalendarDays,
  CheckCircle,
  PawPrint,
  PillBottle,
  PocketKnife,
  SwatchBook,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Image from 'next/image';
import FAQSection from '@/components/faq-section';

export default function GuidelinesPage() {
  const rules = [
    'Membawa pakaian ganti untuk 2 hari 1 malam',
    'Kaos Gathering (yang diberikan oleh panitia)',
    'Membawa Movie Character Costume & Accesoris',
    'Membawa Jaket',
    'Membawa obat-obatan pribadi, seperti minyak kayu putih, obat alergi, freshcare, dll.',
    'Membawa baju renang (Bila ingin berenang)',
    'Sandal dan Sepatu',
    'Membawa plastik / kresek kecil untuk melindungi barang berharga seperti HP, earphone, powerbank saat offroad jeep',
  ];

  const dontsItems = [
    {
      item: '🚫Benda berbahaya',
      description: 'Pisau, senjata tajam, benda mudah meledak, dll.',
      icon: PocketKnife,
    },
    {
      item: '🚫Zat terlarang',
      description: 'Narkoba, obat tanpa izin, dll.',
      icon: PillBottle,
    },
    {
      item: '🚫Barang bernilai tinggi',
      description:
        'Emas, uang tunai berlebih (tidak diperlukan? Tinggal di rumah aja).',
      icon: Banknote,
    },
    {
      item: '🚫Binatang peliharaan',
      description: 'Mohon ditinggal di rumah yaa.',
      icon: PawPrint,
    },
    {
      item: '🚫Barang pribadi berpotensi menimbulkan masalah',
      description: ' Alat pancing, alat masak pribadi dll.',
      icon: SwatchBook,
    },
  ];

  const dressCodes = [
    {
      title: 'Hari Pertama',
      items: [
        'Pagi : Kaos Gathering dan bawahan gelap (jilbab dan manset gelap untuk perempuan)',
        'Siang : Baju ganti bebas rapi sopan (setelah offroad)',
        'Malam : Movie Character Costume',
        'Diperbolehkan memakai celana pendek 3/4 asalkan sopan',
      ],
    },
    {
      title: 'Hari Kedua',
      items: ['Baju bebas rapi sopan'],
    },
  ];

  const costumeImages = [
    '/costum/1.png',
    '/costum/3.png',
    '/costum/6.png',
    '/costum/2.png',
    '/costum/4.png',
    '/costum/5.jpg',
    '/costum/7.png',
    '/costum/8.png',
    '/costum/9.png',
    '/costum/10.png',
    '/costum/11.png',
    '/costum/12.png',
    '/costum/13.png',
    '/costum/14.png',
    '/costum/15.png',
    '/costum/16.png',
  ];

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
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Guidelines</h1>
            <p className="md:text-2xl opacity-90 max-w-3xl mx-auto">
              Panduan lengkap untuk Employee Gathering yang akan datang.
              Pastikan Anda membaca dan mengikuti semua petunjuk untuk
              memastikan acara berjalan dengan lancar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to bring */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Perlengkapan yang Perlu Dibawa
            </h2>

            <Alert className="mb-8 border-purple-200 bg-purple-50">
              <AlertTriangle className="h-4 w-4 text-[#6A00FF]" />
              <AlertDescription className="text-purple-800">
                Mohon baca dan ikuti semua panduan untuk memastikan acara
                berjalan dengan lancar untuk semua peserta.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {rules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rule}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What don't to Bring */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              ❗Perlengkapan yang tidak Boleh Dibawa❗
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dontsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
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
        </div>
      </section>

      <FAQSection className="py-16 bg-white" />

      {/* Dress Code */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Panduan Dress Code
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {dressCodes.map((dressCode, index) => (
                <motion.div
                  key={dressCode.title}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex gap-2 justify-center text-xl text-center text-[#6A00FF]">
                        <CalendarDays /> {dressCode.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {dressCode.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center text-gray-700"
                          >
                            <span className="shrink-0 w-2 h-2 bg-[#6A00FF] rounded-full mr-3"></span>
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

      {/* Costume Reference */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Referensi Dress Code
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {costumeImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Image
                    src={image}
                    width={250}
                    height={200}
                    alt={image}
                    className="h-auto w-auto rounded-lg shadow-md"
                    priority
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
