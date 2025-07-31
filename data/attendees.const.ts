export interface Attendee {
  id: string;
  name: string;
  company: string;
  division: string;
  joinDate: string;
  isOrganizer?: boolean;
}

export const ATTENDEES: Attendee[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Tech Corp Indonesia',
    division: 'Human Resources',
    joinDate: 'Jan 2024',
    isOrganizer: true,
  },
  {
    id: '2',
    name: 'Budi Santoso',
    company: 'Digital Solutions',
    division: 'Engineering',
    joinDate: 'Feb 2024',
  },
  {
    id: '3',
    name: 'Siti Nurhaliza',
    company: 'Innovation Hub',
    division: 'Marketing',
    joinDate: 'Jan 2024',
  },
  {
    id: '4',
    name: 'Ahmad Rahman',
    company: 'Future Systems',
    division: 'Sales',
    joinDate: 'Feb 2024',
  },
  {
    id: '5',
    name: 'Lisa Wijaya',
    company: 'Smart Tech',
    division: 'Product Management',
    joinDate: 'Jan 2024',
  },
  {
    id: '6',
    name: 'Rudi Hermawan',
    company: 'Global Networks',
    division: 'Operations',
    joinDate: 'Feb 2024',
  },
  {
    id: '7',
    name: 'Maya Sari',
    company: 'Tech Corp Indonesia',
    division: 'Finance',
    joinDate: 'Jan 2024',
  },
  {
    id: '8',
    name: 'Andi Pratama',
    company: 'Digital Solutions',
    division: 'IT Support',
    joinDate: 'Feb 2024',
  },
  {
    id: '9',
    name: 'Dewi Lestari',
    company: 'Innovation Hub',
    division: 'Design',
    joinDate: 'Jan 2024',
  },
  {
    id: '10',
    name: 'Hendra Gunawan',
    company: 'Future Systems',
    division: 'Business Development',
    joinDate: 'Feb 2024',
  },
  {
    id: '11',
    name: 'Rina Kusuma',
    company: 'Smart Tech',
    division: 'Quality Assurance',
    joinDate: 'Jan 2024',
  },
  {
    id: '12',
    name: 'Fajar Nugroho',
    company: 'Global Networks',
    division: 'Customer Service',
    joinDate: 'Feb 2024',
  },
];
