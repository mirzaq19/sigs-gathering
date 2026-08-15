'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/event-details', label: 'Destination' },
  // { href: '/schedule', label: 'Itinerary' },
  // { href: '/accommodation', label: 'Stay' },
  // { href: '/guidelines', label: 'Panduan' },
  // { href: '/attendees', label: 'Peserta' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-primary"
        >
          <span className="font-serif uppercase tracking-wide">Gathering</span>{' '}
          SIGS<span className="text-accent">/</span>2026
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm text-muted-foreground hover:text-primary',
                pathname === item.href && 'font-semibold text-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/attendees"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Cek kepesertaan
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setIsOpen(open => !open)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-primary',
                    pathname === item.href &&
                      'bg-muted font-semibold text-primary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/attendees"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Cek kepesertaan
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
