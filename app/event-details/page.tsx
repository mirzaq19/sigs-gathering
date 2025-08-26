'use client';

import { motion, stagger, useInView, Variants } from 'motion/react';
import { useRef } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Gift,
  Bus,
  Camera,
  HatGlasses,
  Gamepad2,
  MicVocal,
  LoaderPinwheel,
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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(0.1),
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: 'easeOut' },
    },
  };

  const places = [
    {
      name: 'Offroad Jeep Kemuning',
      image: '/places/jeep.jpg',
    },
    {
      name: 'RM Soewatu (Resto & Cafe)',
      image: '/places/soewatu.jpg',
    },
    {
      name: 'Hotel Jawa Dwipa Heritage Resort & Convention',
      image: '/places/jawadwipa.jpg',
    },
    {
      name: 'Rumah Atsiri Indonesia',
      image: '/places/atsiri.jpg',
    },
    {
      name: 'RM Godong Gedang',
      image: '/places/godong_gedang.jpg',
    },
  ];

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

  const events = [
    {
      icon: Gift,
      title: 'Doorprize',
      value: 'Berbagai hadiah menarik untuk peserta',
    },
    {
      icon: Bus,
      title: 'Offroad Jeep',
      value: 'Petualangan seru menjelajahi alam Tawangmangu',
    },
    {
      icon: Camera,
      title: 'Explore Taman Atsiri',
      value: 'Menikmati keindahan alam',
    },
    {
      icon: HatGlasses,
      title: 'Best Costume of Gala Dinner',
      value: 'Menampilkan kostum terbaik',
    },
    {
      icon: Gamepad2,
      title: 'Team Games',
      value: 'Bersaing dalam permainan seru',
    },
    {
      icon: LoaderPinwheel,
      title: 'Parade Costume',
      value: 'Show off kostum movie karakter mu',
    },
    {
      icon: MicVocal,
      title: 'Sing & Togetherness',
      value: 'Bernyanyi dan menikmati kebersamaan',
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
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Event Details
            </h1>
            <p className="md:text-2xl opacity-90 max-w-3xl mx-auto">
              Semua informasi yang perlu kamu ketahui tentang acara Employee
              Gathering 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Information */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Event Details
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Nikmati pengalaman tak terlupakan di Employee Gathering 2025 dengan
            berbagai kegiatan menarik ini.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {events.map(({ icon: Icon, title, value }, index) => (
              <Card className="text-center gap-3" key={title}>
                <CardHeader>
                  <Icon className="size-10 text-[#6A00FF] mx-auto mb-2" />
                  <CardTitle>
                    {index + 1}. {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Lokasi Acara
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {places.map(place => (
                <Card key={place.name} className="p-0 gap-2">
                  <Image
                    src={place.image}
                    alt={place.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover rounded-t-lg"
                    priority
                  />
                  <CardContent className="mb-2">
                    <h3 className="text-lg font-semibold mb-2">{place.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Hotel Information */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Hotel & Akomodasi
            </h2>

            <div className="bg-purple-100 rounded-xl p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                Fasilitas Resort
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    <p className="text-sm md:text-base font-medium">
                      {amenity.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

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
                        <CardTitle className="text-lg md:text-xl">
                          {room.type}
                        </CardTitle>
                        <p className="text-sm md:text-base text-gray-600">
                          {room.description}
                        </p>
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
                                className="text-gray-600 flex items-center text-sm md:text-base"
                              >
                                <span className="shrink-0 size-2 bg-[#6A00FF] rounded-full mr-2"></span>
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
          </motion.div> */}
        </div>
      </section>
    </div>
  );
}
