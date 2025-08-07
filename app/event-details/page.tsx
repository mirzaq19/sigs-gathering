'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Utensils,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function EventDetailsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const eventInfo = {
    date: '13-14 September 2025',
    time: 'Sabtu 05:05 - Minggu 18:00',
    location: 'Tawangmangu, Jawa Tengah',
  };

  const hotelAmenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Free Parking' },
    { icon: Coffee, name: 'Coffee Bar' },
    { icon: Utensils, name: 'Restaurant' },
  ];

  const roomTypes = [
    {
      type: 'Janaka Deluxe Room',
      description:
        'Kamar nyaman dengan pemandangan gunung dan fasilitas lengkap',
      amenities: [
        'View Gunung Lawu',
        'Single Bed',
        'Kamar Mandi Pribadi',
        'LCD TV',
        'Free WiFi',
      ],
      images: ['/rooms/janaka-1.jpeg', '/rooms/janaka-2.jpeg'],
    },
    {
      type: 'Moderate Shinta Room',
      description: 'Kamar dengan fasilitas standar, cocok untuk istirahat',
      amenities: [
        'Pemandangan Panorama Gunung Lawu',
        'Double Bed',
        'Kamar mandi pribadi dengan shower',
        'LCD TV',
        'Free WiFi',
      ],
      images: ['/rooms/shinta-1.jpeg', '/rooms/shinta-2.jpeg'],
    },
    {
      type: 'Pandawa Superior Family Room',
      description: 'Kamar luas untuk keluarga dengan fasilitas lengkap',
      amenities: [
        'Pemandangan Gunung Lawu',
        'Twin Bed',
        'Kamar mandi pribadi dengan shower',
        'LCD TV',
        'Free WiFi',
      ],
      images: ['/rooms/pandawa-1.png', '/rooms/pandawa-2.png'],
    },
    {
      type: 'Srikandi Superior Family Room',
      description: 'Kamar luas untuk keluarga dengan fasilitas lengkap',
      amenities: [
        'Pemandangan Gunung Lawu',
        'Double + single bed',
        'Space Mazzanine',
        'Kamar mandi pribadi dengan shower',
        'LCD TV',
        'Free WiFi',
      ],
      images: ['/rooms/srikandi-1.png', '/rooms/srikandi-2.png'],
    },
    {
      type: 'Superior Familiy Plus Werkudara Room',
      description: 'Kamar luas untuk keluarga dengan fasilitas lengkap',
      amenities: [
        'Pemandangan Gunung Lawu',
        '2 Double bed',
        'Kamar mandi pribadi dengan shower',
        'Space Mazzanine',
        'LCD TV',
        'Free WiFi',
      ],
      images: ['/rooms/werkudara-1.webp', '/rooms/werkudara-2.webp'],
    },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Event Details
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Semua informasi yang perlu Anda ketahui tentang Employee Gathering
              kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Information */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-8 h-8 text-[#6A00FF] mx-auto mb-2" />
                <CardTitle>Tanggal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{eventInfo.date}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-8 h-8 text-[#6A00FF] mx-auto mb-2" />
                <CardTitle>Jam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{eventInfo.time}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-8 h-8 text-[#6A00FF] mx-auto mb-2" />
                <CardTitle>Lokasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{eventInfo.location}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Hotel Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Hotel & Akomodasi
            </h2>

            {/* Hotel Amenities */}
            <div className="bg-purple-100 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Fasilitas Resort
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {hotelAmenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <amenity.icon className="w-8 h-8 text-[#6A00FF]" />
                    </div>
                    <p className="font-medium">{amenity.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Room Types */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {roomTypes.map((room, index) => (
                <motion.div
                  key={room.type}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index === 0 ? -30 : 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Card className="h-full p-0 pb-6 overflow-hidden">
                    <CardHeader className="p-0">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {room.images.map((image, index) => (
                            <CarouselItem key={index}>
                              <Image
                                src={image}
                                alt={`${room.type} image ${index + 1}`}
                                width={500}
                                height={300}
                                className="w-full h-36 md:h-60 object-cover"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselNext
                          variant="outline"
                          className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 size-6"
                        >
                          <span className="sr-only">Next</span>
                        </CarouselNext>
                        <CarouselPrevious
                          variant="outline"
                          className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 size-6"
                        >
                          <span className="sr-only">Previous</span>
                        </CarouselPrevious>
                      </Carousel>
                      <div className="px-6 pt-2">
                        <CardTitle className="text-xl">{room.type}</CardTitle>
                        <p className="text-gray-600">{room.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Fasilitas:</h4>
                          <ul className="space-y-1">
                            {room.amenities.map(amenity => (
                              <li
                                key={amenity}
                                className="text-gray-600 flex items-center"
                              >
                                <span className="w-2 h-2 bg-[#6A00FF] rounded-full mr-2"></span>
                                {amenity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
