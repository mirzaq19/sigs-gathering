export interface BusSeat {
  id: number;
  attendeeName: string;
}

export interface Rooms {
  roomNumber: string;
  type: 'Janaka' | 'Shinta' | 'Srikandi' | 'Pandawa' | 'Werkudara';
  attendees: string[];
}

export const BUS_SEATS: BusSeat[] = [
  { id: 1, attendeeName: 'Pak Zainil' },
  { id: 2, attendeeName: 'Pak Aryo' },
  { id: 3, attendeeName: 'Elzam' },
  { id: 4, attendeeName: 'Bayu' },
  { id: 5, attendeeName: 'Fajar' },
  { id: 6, attendeeName: 'Elzam' },
  { id: 7, attendeeName: 'Bella' },
  { id: 8, attendeeName: 'Ardi' },
  { id: 9, attendeeName: 'Fiqri' },
  { id: 10, attendeeName: 'Yudha' },
  { id: 11, attendeeName: 'Joti' },
  { id: 12, attendeeName: 'Tyara' },
  { id: 13, attendeeName: 'Bari' },
  { id: 14, attendeeName: 'Brily' },
  { id: 15, attendeeName: 'Yoga' },
  { id: 16, attendeeName: 'Regina' },
  { id: 17, attendeeName: 'Puji' },
  { id: 18, attendeeName: 'Ifa' },
  { id: 19, attendeeName: 'Cintya' },
  { id: 20, attendeeName: 'Dinda' },
  { id: 21, attendeeName: 'Titan' },
  { id: 22, attendeeName: 'Alivia' },
  { id: 23, attendeeName: 'Putri' },
  { id: 24, attendeeName: 'Astri' },
  { id: 25, attendeeName: 'Najla' },
  { id: 26, attendeeName: 'Dias' },
  { id: 27, attendeeName: 'Dika' },
  { id: 28, attendeeName: 'Irvan' },
  { id: 29, attendeeName: 'Puja' },
  { id: 30, attendeeName: 'Anissa' },
  { id: 31, attendeeName: 'Lina' },
  { id: 32, attendeeName: 'Friska' },
  { id: 33, attendeeName: 'Tiara' },
  { id: 34, attendeeName: 'Shofi' },
  { id: 35, attendeeName: 'Anti' },
  { id: 36, attendeeName: 'Icha' },
  { id: 37, attendeeName: 'Sanah' },
  { id: 38, attendeeName: 'Dicky' },
  { id: 39, attendeeName: 'Naufal' },
  { id: 40, attendeeName: 'Badri' },
  { id: 41, attendeeName: 'Bais' },
  { id: 42, attendeeName: 'Rizda' },
  { id: 43, attendeeName: 'Iqbal' },
  { id: 44, attendeeName: 'Edy' },
  { id: 45, attendeeName: 'Dany' },
  { id: 46, attendeeName: 'Alif' },
  { id: 47, attendeeName: 'Mirzaq' },
  { id: 48, attendeeName: 'Wahyu' },
  { id: 49, attendeeName: 'Maudy' },
  { id: 50, attendeeName: 'Happy' },
  { id: 51, attendeeName: 'Ali' },
  { id: 52, attendeeName: 'Elzam' },
  { id: 53, attendeeName: 'Elzam' },
  { id: 54, attendeeName: 'Danu' },
  { id: 55, attendeeName: 'Rian' },
  { id: 56, attendeeName: 'Eko' },
  { id: 57, attendeeName: 'Bahar' },
  { id: 58, attendeeName: 'Refo' },
  { id: 59, attendeeName: 'Ferry' },
  { id: 60, attendeeName: 'Kosong' },
];

export const ROOMS: Rooms[] = [
  {
    roomNumber: 'Werkudara 1',
    type: 'Werkudara',
    attendees: ['Regina', 'Anissa', 'Puji', 'Puja'],
  },
  {
    roomNumber: 'Werkudara 2',
    type: 'Werkudara',
    attendees: ['Alivia', 'Titan', 'Dias', 'Dika'],
  },
  {
    roomNumber: 'Werkudara 3',
    type: 'Werkudara',
    attendees: ['Bais', 'Anti', 'Tiara', 'Shofi'],
  },
  {
    roomNumber: 'Werkudara 4',
    type: 'Werkudara',
    attendees: ['Ifa', 'Dinda', 'Astri', 'Najla'],
  },
  {
    roomNumber: 'Werkudara 5',
    type: 'Werkudara',
    attendees: ['Icha', 'Lina', 'Sanah', 'Joti'],
  },
  {
    roomNumber: 'Werkudara 6',
    type: 'Werkudara',
    attendees: ['Putri', 'Cintya', 'Rizda', 'Tyara'],
  },
  {
    roomNumber: 'Werkudara 7',
    type: 'Werkudara',
    attendees: ['Dicky', 'Badri', 'Naufal', 'Bahar'],
  },
  {
    roomNumber: 'Werkudara 8',
    type: 'Werkudara',
    attendees: ['Dany', 'Wahyu', 'Edy', 'Mirzaq'],
  },
  {
    roomNumber: 'Pandawa 1',
    type: 'Pandawa',
    attendees: ['Yoga', 'Bari'],
  },
  {
    roomNumber: 'Pandawa 2',
    type: 'Pandawa',
    attendees: ['Yudha', 'Fiqri', 'Ardi'],
  },
  {
    roomNumber: 'Pandawa 3',
    type: 'Pandawa',
    attendees: ['Alif', 'Fajar', 'Bayu'],
  },
  {
    roomNumber: 'Pandawa 4',
    type: 'Pandawa',
    attendees: ['Irvan', 'Iqbal', 'Happy'],
  },
  {
    roomNumber: 'Srikandi 1',
    type: 'Srikandi',
    attendees: ['Brilly', 'Arifin', 'Ferry'],
  },
  {
    roomNumber: 'Srikandi 2',
    type: 'Srikandi',
    attendees: ['Rian', 'Danu', 'Refo'],
  },
  {
    roomNumber: 'Srikandi 3',
    type: 'Srikandi',
    attendees: ['Ali', 'Maudy', 'Eko'],
  },
];
