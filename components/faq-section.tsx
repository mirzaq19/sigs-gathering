'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className }: FAQSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [faqsAccordion, setFaqsAccordion] = useState<string[]>(() =>
    Array.from({ length: 4 }, (_, i) => `item-${i}`)
  );

  const faqs = [
    {
      question:
        'Kenapa nama saya tidak terdaftar dalam peserta outing sigsurabaya?',
      answer:
        'Silahkan menghubungi panitia acara jika nama anda belum terdaftar',
    },
    {
      question: 'Berangkat jam berapa ya & wajib pakai baju apa ya ?',
      answer:
        'Berangkat pukul 05.15 memakai kaos seragam gathering dan memakai sepatu',
    },
    {
      question: 'Apa saja aktivitas yang akan dilakukan selama acara?',
      answer:
        'Selama acara, peserta akan mengikuti berbagai aktivitas seperti offroad jeep, games seru, dan juga gala dinner loh.',
    },
    {
      question: 'Baju movie character digunakan kapan ya ? ',
      answer:
        'Baju movie character digunakan pada malam hari pertama saat Gala Dinner, jadi pastikan kamu sudah mempersiapkan kostum yang keren ya!',
    },
    {
      question: 'Kalo ada pertanyaan lain, siapa yang bisa dihubungi?',
      answer: 'Silahkan menghubungi panitia acara atau ketua acara (?)',
    },
  ];

  return (
    <section ref={ref} className={cn('bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-[#6A00FF]">FAQ</span>
            Section
          </h2>

          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Berikut adalah beberapa pertanyaan yang sering diajukan mengenai
            acara Employee Gathering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Accordion
            type="multiple"
            className="w-full space-y-4"
            value={faqsAccordion}
            onValueChange={setFaqsAccordion}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem
                  className="rounded-md overflow-hidden shadow-md"
                  key={index}
                  value={`item-${index}`}
                >
                  <AccordionTrigger className="cursor-pointer md:text-lg font-semibold text-gray-900 bg-white px-4 py-3 transition-colors hover:bg-gray-50">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-800 p-4 bg-violet-50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
