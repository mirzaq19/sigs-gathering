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
    Array.from({ length: 6 }, (_, i) => `item-${i}`)
  );

  const faqs = [
    {
      question: 'Gathering kali ini bakal kemana nih?',
      answer: 'Tahun ini kita bakal seru-seruan bareng di Banyuwangi🌿✨',
    },
    {
      question: 'Kapan sih kita cusnya?',
      answer:
        'Jangan lupa catat tanggalnya yess! <b>18–20 September 2026</b>. Kita akan berangkat tanggal 18 September 2026 malam pukul 22.00.',
    },
    {
      question: 'Pick-up point-nya dimana ya?',
      answer: 'Pick-up dan drop-off di AMG Tower ya, tidak ada titik lain.',
    },
    {
      question: 'Kalau nggak bisa ikut gathering, izinnya gimana?',
      answer:
        'Wajib ikut ya!!😆 Kalau benar-benar tidak bisa, silakan izin dengan menghubungi Pak Aryo.',
    },
    {
      question: 'Kalau ada pertanyaan lain, harus menghubungi siapa ya?',
      answer: 'Bisa hubungi ketua kami, Pak Iqbal.',
    },
    {
      question: 'Katanya mau main ke pantai, bakal basah-basahan nggak nih?',
      answer:
        'Bisa jadi, baiknya sedia baju ganti dan pakai pakaian yang nyaman ya.',
    },
  ];

  return (
    <section ref={ref} className={cn(className)}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="eyebrow-line section-kicker">Need to know</p>
          <h2 className="display-serif mt-5 text-5xl text-primary-foreground">
            Pertanyaan
            <br />
            <span className="text-secondary">yang sering muncul.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-primary-foreground">
            Semua informasi penting sebelum kita berangkat ke Banyuwangi.
          </p>
        </motion.div>

        <Accordion
          type="multiple"
          className="w-full space-y-3"
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
                className="overflow-hidden rounded-2xl border !border-b border-border bg-background"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="cursor-pointer px-5 py-5 text-left text-base font-semibold text-primary transition-colors hover:bg-muted">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-card px-5 py-3 text-sm leading-6 text-muted-foreground">
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
