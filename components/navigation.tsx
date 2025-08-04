'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Bungee } from 'next/font/google';

const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
});

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/event-details', label: 'Event Details' },
  { href: '/transportation', label: 'Transportation' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/guidelines', label: 'Guidelines' },
  { href: '/attendees', label: 'Attendees' },
];

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className={`text-lg md:text-2xl font-bold text-[#6A00FF] ${bungee.className}`}
          >
            Gathering 2025
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  `text-gray-700 hover:text-[#6A00FF] transition-colors duration-200 font-medium`,
                  {
                    'text-[#6A00FF]': pathname === item.href,
                  }
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-purple-100"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    `block px-3 py-2 text-gray-700 hover:text-[#6A00FF] hover:bg-purple-50 rounded-md transition-colors duration-200`,
                    {
                      'text-[#6A00FF] bg-purple-50': pathname === item.href,
                    }
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
