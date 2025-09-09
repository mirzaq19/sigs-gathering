'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { randomInRange, todayNotMoreThan } from '@/lib/utils';
import { GENERAL_INFO } from '@/data/general.const';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  eventDate: Date;
}

const CountdownTimer = ({ eventDate = new Date() }: CountdownTimerProps) => {
  eventDate.setHours(5, 45, 0, 0); // 5:45 AM

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const fireworks = (durationInSecond: number) => {
    const duration = durationInSecond * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 80 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }

      if (distance < 1000 && todayNotMoreThan(GENERAL_INFO.endDate)) {
        fireworks(10);
        setHasCelebrated(true);
      }

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setHasCelebrated(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border transition-all border-white/20">
      <h2 className="text-lg md:text-2xl font-bold text-white mb-6 text-center">
        Hitung Mundur Acara
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="bg-white/20 rounded-lg p-4 mb-2">
              <motion.span
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-4xl font-bold text-white block"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.span>
            </div>
            <span className="text-white/80 text-sm font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={
          hasCelebrated
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 20, scale: 0.9 }
        }
        transition={{ duration: 1 }}
        className={`mt-4 md:text-xl text-white/90 font-semibold transition-all ${
          hasCelebrated ? 'h-fit' : 'h-0'
        }`}
      >
        Wah udah waktunya gathering nih! Let&apos;s have fun together! 🎉
      </motion.p>
    </div>
  );
};

export default CountdownTimer;
