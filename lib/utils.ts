import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const countDays = (date: Date | string): number => {
  if (typeof date === 'string') date = new Date(date);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }
  const today = new Date();

  // check if the date is in the past, ignore the time just compare the date part
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  if (date < today) return 0;

  // check the date is today
  if (date.getTime() === today.getTime()) return 0;

  const diffTime = Math.abs(today.getTime() - date.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const randomInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const todayNotMoreThan = (date: Date | string): boolean => {
  if (typeof date === 'string') date = new Date(date);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }
  const today = new Date();

  // check if the date is in the past, ignore the time just compare the date part
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return today <= date;
};
