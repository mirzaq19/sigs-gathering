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
    company: 'SIGS',
    division: 'Human Resources',
    joinDate: 'Jan 2024',
    isOrganizer: true,
  },
  {
    id: '2',
    name: 'Budi Santoso',
    company: 'SIGS',
    division: 'Engineering',
    joinDate: 'Feb 2024',
  },
  {
    id: '3',
    name: 'Siti Nurhaliza',
    company: 'SIGS',
    division: 'Marketing',
    joinDate: 'Jan 2024',
  },
  {
    id: '4',
    name: 'Ahmad Rahman',
    company: 'AGS',
    division: 'Sales',
    joinDate: 'Feb 2024',
  },
  {
    id: '5',
    name: 'Lisa Wijaya',
    company: 'AAS',
    division: 'Product Management',
    joinDate: 'Jan 2024',
  },
  {
    id: '6',
    name: 'Rudi Hermawan',
    company: 'SIGS',
    division: 'Operations',
    joinDate: 'Feb 2024',
  },
  {
    id: '7',
    name: 'Maya Sari',
    company: 'SIGS',
    division: 'Finance',
    joinDate: 'Jan 2024',
  },
  {
    id: '8',
    name: 'Andi Pratama',
    company: 'SIGS',
    division: 'IT Support',
    joinDate: 'Feb 2024',
  },
  {
    id: '9',
    name: 'Dewi Lestari',
    company: 'SIGS',
    division: 'Design',
    joinDate: 'Jan 2024',
  },
  {
    id: '10',
    name: 'Hendra Gunawan',
    company: 'AGS',
    division: 'Business Development',
    joinDate: 'Feb 2024',
  },
  {
    id: '11',
    name: 'Rina Kusuma',
    company: 'AAS',
    division: 'Quality Assurance',
    joinDate: 'Jan 2024',
  },
  {
    id: '12',
    name: 'Fajar Nugroho',
    company: 'SIGS',
    division: 'Customer Service',
    joinDate: 'Feb 2024',
  },
  {
    id: '13',
    name: 'M. Auliya Mirzaq Romdloni',
    company: 'SIGS',
    division: 'Customer Service',
    joinDate: 'Feb 2024',
  },
];
