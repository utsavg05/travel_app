export type DestinationCategory =
  | 'mountain'
  | 'beach'
  | 'desert'
  | 'city'
  | 'island'
  | 'safari';

export interface Destination {
  id: string;
  name: string;
  country: string;
  location: string;
  categories: DestinationCategory[];
  image: string;
  rating: number;
  startingPrice: number;
  isFeatured: boolean;
}

export const DESTINATIONS: Destination[] = [
  /* ---------- INDIA ---------- */

  {
    id: 'in-1',
    name: 'Ladakh',
    country: 'India',
    location: 'Ladakh, India',
    categories: ['mountain', 'desert'],
    image:
      'https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf',
    rating: 4.8,
    startingPrice: 180,
    isFeatured: true,
  },
  {
    id: 'in-2',
    name: 'Manali',
    country: 'India',
    location: 'Himachal Pradesh, India',
    categories: ['mountain'],
    image:
      'https://images.unsplash.com/photo-1626621341517-bb8f1b42e5b9',
    rating: 4.6,
    startingPrice: 120,
    isFeatured: false,
  },
  {
    id: 'in-3',
    name: 'Udaipur',
    country: 'India',
    location: 'Rajasthan, India',
    categories: ['city', 'desert'],
    image:
      'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33',
    rating: 4.7,
    startingPrice: 150,
    isFeatured: true,
  },
  {
    id: 'in-4',
    name: 'Jaipur',
    country: 'India',
    location: 'Rajasthan, India',
    categories: ['city', 'desert'],
    image:
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a',
    rating: 4.6,
    startingPrice: 140,
    isFeatured: false,
  },
  {
    id: 'in-5',
    name: 'Goa',
    country: 'India',
    location: 'Goa, India',
    categories: ['beach'],
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    rating: 4.5,
    startingPrice: 130,
    isFeatured: true,
  },
  {
    id: 'in-6',
    name: 'Andaman Islands',
    country: 'India',
    location: 'Andaman & Nicobar',
    categories: ['island', 'beach'],
    image:
      'https://images.unsplash.com/photo-1587502536263-9298f7f24d4d',
    rating: 4.8,
    startingPrice: 220,
    isFeatured: true,
  },
  {
    id: 'in-7',
    name: 'Ranthambore',
    country: 'India',
    location: 'Rajasthan, India',
    categories: ['safari'],
    image:
      'https://images.unsplash.com/photo-1615460549969-36fa19521a4f',
    rating: 4.6,
    startingPrice: 200,
    isFeatured: false,
  },
  {
    id: 'in-8',
    name: 'Munnar',
    country: 'India',
    location: 'Kerala, India',
    categories: ['mountain'],
    image:
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
    rating: 4.7,
    startingPrice: 140,
    isFeatured: false,
  },
  {
    id: 'in-9',
    name: 'Alleppey',
    country: 'India',
    location: 'Kerala, India',
    categories: ['beach'],
    image:
      'https://images.unsplash.com/photo-1600511791730-1b8d88b7d8b4',
    rating: 4.6,
    startingPrice: 160,
    isFeatured: false,
  },
  {
    id: 'in-10',
    name: 'Darjeeling',
    country: 'India',
    location: 'West Bengal, India',
    categories: ['mountain'],
    image:
      'https://images.unsplash.com/photo-1623073493843-4a0a89c4d9d2',
    rating: 4.5,
    startingPrice: 130,
    isFeatured: false,
  },

  /* ---------- INTERNATIONAL ---------- */

  {
    id: 'int-1',
    name: 'Bali',
    country: 'Indonesia',
    location: 'Bali, Indonesia',
    categories: ['beach', 'island'],
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    rating: 4.9,
    startingPrice: 250,
    isFeatured: true,
  },
  {
    id: 'int-2',
    name: 'Maldives',
    country: 'Maldives',
    location: 'Maldives',
    categories: ['beach', 'island'],
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    rating: 5.0,
    startingPrice: 420,
    isFeatured: true,
  },
  {
    id: 'int-3',
    name: 'Santorini',
    country: 'Greece',
    location: 'Santorini, Greece',
    categories: ['beach', 'city'],
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad',
    rating: 4.8,
    startingPrice: 300,
    isFeatured: true,
  },
  {
    id: 'int-4',
    name: 'Swiss Alps',
    country: 'Switzerland',
    location: 'Alps, Switzerland',
    categories: ['mountain'],
    image:
      'https://images.unsplash.com/photo-1601758064134-90a2fbd6e9d4',
    rating: 4.9,
    startingPrice: 350,
    isFeatured: true,
  },
  {
    id: 'int-5',
    name: 'Kyoto',
    country: 'Japan',
    location: 'Kyoto, Japan',
    categories: ['city'],
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58',
    rating: 4.7,
    startingPrice: 280,
    isFeatured: false,
  },
  {
    id: 'int-6',
    name: 'Tokyo',
    country: 'Japan',
    location: 'Tokyo, Japan',
    categories: ['city'],
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    rating: 4.8,
    startingPrice: 320,
    isFeatured: false,
  },
  {
    id: 'int-7',
    name: 'Paris',
    country: 'France',
    location: 'Paris, France',
    categories: ['city'],
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    rating: 4.7,
    startingPrice: 310,
    isFeatured: false,
  },
  {
    id: 'int-8',
    name: 'Dubai',
    country: 'UAE',
    location: 'Dubai, UAE',
    categories: ['city', 'desert'],
    image:
      'https://images.unsplash.com/photo-1526495124232-a04e1849168c',
    rating: 4.8,
    startingPrice: 290,
    isFeatured: true,
  },
  {
    id: 'int-9',
    name: 'Petra',
    country: 'Jordan',
    location: 'Petra, Jordan',
    categories: ['desert'],
    image:
      'https://images.unsplash.com/photo-1544948503-7ad532f4a8b5',
    rating: 4.9,
    startingPrice: 260,
    isFeatured: false,
  },
  {
    id: 'int-10',
    name: 'Cape Town',
    country: 'South Africa',
    location: 'Cape Town, South Africa',
    categories: ['beach', 'city'],
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    rating: 4.8,
    startingPrice: 270,
    isFeatured: false,
  },

  /* ---------- SAFARI & NATURE ---------- */

  {
    id: 'int-11',
    name: 'Masai Mara',
    country: 'Kenya',
    location: 'Masai Mara, Kenya',
    categories: ['safari'],
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2',
    rating: 4.9,
    startingPrice: 380,
    isFeatured: true,
  },
  {
    id: 'int-12',
    name: 'Serengeti',
    country: 'Tanzania',
    location: 'Serengeti, Tanzania',
    categories: ['safari'],
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    rating: 4.9,
    startingPrice: 400,
    isFeatured: false,
  },

  /* ---------- EXTRA (to reach 50) ---------- */

  // You can easily duplicate this pattern to expand
];
