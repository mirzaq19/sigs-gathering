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
import parse from 'html-react-parser';

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className }: FAQSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [faqsAccordion, setFaqsAccordion] = useState<string[]>(() =>
    Array.from({ length: 10 }, (_, i) => `item-${i}`)
  );

  const faqs = [
    {
      question: 'Katanya mau Gathering, beneran nih?',
      answer:
        'Bener banget! Bukan hoaks, bukan mimpi. Udah disiapin yang gokil!',
    },
    {
      question: 'Gatheringnya kemana tuh, Jalan-jalan doang apa gimana?',
      answer: 'Jalan-jalan jelas dong. Asyikkk deh yg jelassss',
    },
    {
      question: 'Gathering ini ada tema nya ga sih? Ada kostum/dresscode nya?',
      answer:
        'Ada dong. Tema nya nanti di info lagi.🙈 Klo Dresscode nya Movie Character yaa 🎬🕸🤡',
    },
    {
      question: 'Asyikkk, kapan kita capcusnya? Dimana tempatnya?',
      answer: '13-14 September 2025, tempatnya di Tawangmangu 🏞️',
    },
    {
      question: 'Pick Up Point nya dimana ya?',
      answer: 'Pickup Point dan Drop Off hanya di AMG Tower yaa.. 🛵',
    },
    {
      question: 'Kalau gabisa ikut Gathering izin gimana ?',
      answer:
        'Upss, masa gabisa sih🧐🤨 Klo beneran gabisa ikut, bisa izin hubungi ke Pak Aryo yaa',
    },
    {
      question: 'Dresscode movie character digunakan kapan ya ? ',
      answer:
        'Dresscode movie character digunakan pada malam hari pertama saat Gala Dinner, jadi pastikan kamu sudah mempersiapkan kostum yang keren ya!',
    },
    {
      question: 'Kalo ada pertanyaan lain, siapa yang bisa dihubungi?',
      answer:
        'Kalo ada yang mau ditanyain, bisa hubungi pak ketua ya, <b>Kakak Bayu (085879663547)</b> 😄',
    },
    {
      question: 'Katanya mau Offroad, basah dikit apa basah banget?',
      answer: 'Basah dikit, tapi tetep bawa baju ganti yaa',
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
            <span className="text-[#6A00FF]">FAQ</span> Section
          </h2>

          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Berikut adalah beberapa pertanyaan yang sering diajukan mengenai
            acara Employee Gathering.
          </p>
        </motion.div>

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
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccordionItem
                className="rounded-md overflow-hidden shadow-md"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="cursor-pointer text-lg font-semibold text-gray-900 bg-white px-4 py-3 transition-colors hover:bg-gray-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-800 p-4 bg-violet-50">
                  {parse(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
