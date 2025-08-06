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
  { id: 1, attendeeName: 'Pak Aryo' },
  { id: 2, attendeeName: 'Pak Zainil' },
  { id: 3, attendeeName: 'Bayu' },
  { id: 4, attendeeName: 'Sony AGS' },
  { id: 5, attendeeName: 'Ali' },
  { id: 6, attendeeName: 'Bari' },
  { id: 7, attendeeName: 'Alif' },
  { id: 8, attendeeName: 'Yudha' },
  { id: 9, attendeeName: 'Fiqri' },
  { id: 10, attendeeName: 'Ardi' },
  { id: 11, attendeeName: 'Mirzaq' },
  { id: 12, attendeeName: 'Iqbal' },
  { id: 13, attendeeName: 'Bella' },
  { id: 14, attendeeName: 'Joti' },
  { id: 15, attendeeName: 'Tyara' },
  { id: 16, attendeeName: 'Regina' },
  { id: 17, attendeeName: 'Puji' },
  { id: 18, attendeeName: 'Ifa' },
  { id: 19, attendeeName: 'Cintya' },
  { id: 20, attendeeName: 'Dinda' },
  { id: 21, attendeeName: 'Titan' },
  { id: 22, attendeeName: 'Novi AAS' },
  { id: 23, attendeeName: 'Putri' },
  { id: 24, attendeeName: 'Astri' },
  { id: 25, attendeeName: 'Najla' },
  { id: 26, attendeeName: 'Dias' },
  { id: 27, attendeeName: 'Dika' },
  { id: 28, attendeeName: 'Alivia' },
  { id: 29, attendeeName: 'Puja' },
  { id: 30, attendeeName: 'Anissa' },
  { id: 31, attendeeName: 'Lina' },
  { id: 32, attendeeName: 'Friska' },
  { id: 33, attendeeName: 'Tiara' },
  { id: 34, attendeeName: 'Shofi' },
  { id: 35, attendeeName: 'Anti' },
  { id: 36, attendeeName: 'Icha' },
  { id: 37, attendeeName: 'Sanah' },
  { id: 38, attendeeName: 'Edy' },
  { id: 39, attendeeName: 'Dany' },
  { id: 40, attendeeName: 'Badri' },
  { id: 41, attendeeName: 'Bais' },
  { id: 42, attendeeName: 'Rizda' },
  { id: 43, attendeeName: 'Dicky' },
  { id: 44, attendeeName: 'Naufal' },
  { id: 45, attendeeName: 'Irvan' },
  { id: 46, attendeeName: 'Yoga' },
  { id: 47, attendeeName: 'Brilly' },
  { id: 48, attendeeName: 'Wahyu' },
  { id: 49, attendeeName: 'Maudy' },
  { id: 50, attendeeName: 'Happy' },
  { id: 51, attendeeName: 'Fajar' },
  { id: 52, attendeeName: 'Kosong' },
  { id: 53, attendeeName: 'Yusuf AAS' },
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
    roomNumber: 'Janaka 1',
    type: 'Janaka',
    attendees: ['RB Ernesto Arya'],
  },
  {
    roomNumber: 'Shinta 1',
    type: 'Shinta',
    attendees: ['Rian', 'Maudy'],
  },
  {
    roomNumber: 'Pandawa 1',
    type: 'Pandawa',
    attendees: ['Yoga', 'Brilly'],
  },
  {
    roomNumber: 'Pandawa 2',
    type: 'Pandawa',
    attendees: ['Pak Zainil', 'Bari'],
  },
  {
    roomNumber: 'Pandawa 3',
    type: 'Pandawa',
    attendees: ['Sonny AGS', 'Bahar', 'Yusuf AAS'],
  },
  {
    roomNumber: 'Pandawa 4',
    type: 'Pandawa',
    attendees: ['Eko', 'Refo'],
  },
  {
    roomNumber: 'Pandawa 5',
    type: 'Pandawa',
    attendees: ['Ferry', 'Ali'],
  },
  {
    roomNumber: 'Srikandi 1',
    type: 'Srikandi',
    attendees: ['Tyara', 'Rizda', "Ba'is"],
  },
  {
    roomNumber: 'Srikandi 2',
    type: 'Srikandi',
    attendees: ['Yudha', 'Fiqri', 'Ardi'],
  },
  {
    roomNumber: 'Srikandi 3',
    type: 'Srikandi',
    attendees: ['Irvan', 'Iqbal', 'Happy'],
  },
  {
    roomNumber: 'Srikandi 4',
    type: 'Srikandi',
    attendees: ['Danny', 'Wahyu', 'Edy'],
  },
  {
    roomNumber: 'Werkudara 1',
    type: 'Werkudara',
    attendees: ['Ifa', 'Dinda', 'Najla', 'Cintya'],
  },
  {
    roomNumber: 'Werkudara 2',
    type: 'Werkudara',
    attendees: ['Icha', 'Shofi', 'Sanah', 'Anti'],
  },
  {
    roomNumber: 'Werkudara 3',
    type: 'Werkudara',
    attendees: ['Bella', 'Friska', 'Tiara', 'Lina'],
  },
  {
    roomNumber: 'Werkudara 4',
    type: 'Werkudara',
    attendees: ['Regina', 'Anissa', 'Puji', 'Puja'],
  },
  {
    roomNumber: 'Werkudara 5',
    type: 'Werkudara',
    attendees: ['Alivia', 'Titan', 'Astri', 'Putri'],
  },
  {
    roomNumber: 'Werkudara 6',
    type: 'Werkudara',
    attendees: ['Dias', 'Dika', 'Joti', 'Novi AAS'],
  },
  {
    roomNumber: 'Werkudara 7',
    type: 'Werkudara',
    attendees: ['Dicky', 'Badri', 'Naufal', 'Mirzaq'],
  },
  {
    roomNumber: 'Werkudara 8',
    type: 'Werkudara',
    attendees: ['Danu', 'Fajar', 'Alif', 'Bayu'],
  },
];
