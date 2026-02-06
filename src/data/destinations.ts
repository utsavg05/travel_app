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
  image: string;
  rating: number;
  startingPrice: number;
  pricePerNight: number;

  categories: DestinationCategory[];

  // 👇 DETAILS SCREEN FIELDS
  duration: string;        // e.g. "5–7 Days"
  maxGuests: number;       // e.g. 4
  season: string;          // e.g. "Winter"
  bestTime: string;        // e.g. "Dec – Feb"
  description: string;
  amenities: string[];
  isFeatured: boolean;
}


export const DESTINATIONS: Destination[] = [
  /* ================= INDIA ================= */

  {
    id: 'in-1',
    name: 'Ladakh',
    country: 'India',
    location: 'Ladakh, India',
    categories: ['mountain', 'desert'],
    image: 'https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf',
    rating: 4.8,
    startingPrice: 180,
    pricePerNight: 220,
    duration: '5–7 Days',
    maxGuests: 4,
    season: 'Summer',
    bestTime: 'May – September',
    description:
      'A dramatic high-altitude desert with monasteries, turquoise lakes, and Himalayan views.',
    amenities: ['Guided Tours', 'Mountain Views', 'Cultural Experiences'],
    isFeatured: true,
  },

  {
    id: 'in-2',
    name: 'Manali',
    country: 'India',
    location: 'Himachal Pradesh, India',
    categories: ['mountain'],
    image: 'https://images.unsplash.com/photo-1626621341517-bb8f1b42e5b9',
    rating: 4.6,
    startingPrice: 120,
    pricePerNight: 160,
    duration: '4–6 Days',
    maxGuests: 4,
    season: 'Winter',
    bestTime: 'December – February',
    description:
      'A popular hill station offering snow activities, scenic valleys, and adventure sports.',
    amenities: ['Snow Activities', 'Mountain View', 'Adventure Sports'],
    isFeatured: false,
  },

  {
    id: 'in-3',
    name: 'Udaipur',
    country: 'India',
    location: 'Rajasthan, India',
    categories: ['city', 'desert'],
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33',
    rating: 4.7,
    startingPrice: 150,
    pricePerNight: 190,
    duration: '3–5 Days',
    maxGuests: 2,
    season: 'Winter',
    bestTime: 'October – March',
    description:
      'The City of Lakes, known for royal palaces, heritage hotels, and romantic sunsets.',
    amenities: ['City Tours', 'Heritage Hotels', 'Boat Rides'],
    isFeatured: true,
  },

  {
    id: 'in-4',
    name: 'Jaipur',
    country: 'India',
    location: 'Rajasthan, India',
    categories: ['city', 'desert'],
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a',
    rating: 4.6,
    startingPrice: 140,
    pricePerNight: 180,
    duration: '3–4 Days',
    maxGuests: 2,
    season: 'Winter',
    bestTime: 'October – March',
    description:
      'The Pink City famous for forts, palaces, colorful markets, and rich history.',
    amenities: ['Heritage Tours', 'Local Markets', 'Luxury Hotels'],
    isFeatured: false,
  },

  {
    id: 'in-5',
    name: 'Goa',
    country: 'India',
    location: 'Goa, India',
    categories: ['beach'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    rating: 4.5,
    startingPrice: 130,
    pricePerNight: 180,
    duration: '4–6 Days',
    maxGuests: 4,
    season: 'Winter',
    bestTime: 'November – February',
    description:
      'India’s most loved beach destination with nightlife, beaches, and Portuguese charm.',
    amenities: ['Beach Access', 'Nightlife', 'Water Sports'],
    isFeatured: true,
  },

  {
    id: 'in-6',
    name: 'Andaman Islands',
    country: 'India',
    location: 'Andaman & Nicobar',
    categories: ['beach', 'island'],
    image: 'https://images.unsplash.com/photo-1587502536263-9298f7f24d4d',
    rating: 4.8,
    startingPrice: 220,
    pricePerNight: 260,
    duration: '5–7 Days',
    maxGuests: 4,
    season: 'Winter',
    bestTime: 'November – April',
    description:
      'Pristine islands with crystal-clear waters, coral reefs, and peaceful beaches.',
    amenities: ['Scuba Diving', 'Snorkeling', 'Private Beaches'],
    isFeatured: true,
  },

  {
    id: 'in-7',
    name: 'Ranthambore',
    country: 'India',
    location: 'Rajasthan, India',
    categories: ['safari'],
    image: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f',
    rating: 4.6,
    startingPrice: 200,
    pricePerNight: 240,
    duration: '3–4 Days',
    maxGuests: 2,
    season: 'Winter',
    bestTime: 'October – April',
    description:
      'A renowned wildlife sanctuary famous for tiger sightings and jungle safaris.',
    amenities: ['Jeep Safaris', 'Nature Walks', 'Luxury Lodges'],
    isFeatured: false,
  },

  {
    id: 'in-8',
    name: 'Munnar',
    country: 'India',
    location: 'Kerala, India',
    categories: ['mountain'],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
    rating: 4.7,
    startingPrice: 140,
    pricePerNight: 180,
    duration: '4–6 Days',
    maxGuests: 4,
    season: 'Monsoon',
    bestTime: 'September – March',
    description:
      'A serene hill station known for tea plantations, misty hills, and cool climate.',
    amenities: ['Tea Gardens', 'Nature Trails', 'Scenic Views'],
    isFeatured: false,
  },

  {
    id: 'in-9',
    name: 'Alleppey',
    country: 'India',
    location: 'Kerala, India',
    categories: ['beach'],
    image: 'https://images.unsplash.com/photo-1600511791730-1b8d88b7d8b4',
    rating: 4.6,
    startingPrice: 160,
    pricePerNight: 200,
    duration: '3–5 Days',
    maxGuests: 4,
    season: 'Winter',
    bestTime: 'October – February',
    description:
      'Famous for tranquil backwaters, houseboats, and palm-lined canals.',
    amenities: ['Houseboat Stay', 'Backwaters', 'Ayurvedic Spa'],
    isFeatured: false,
  },

  {
    id: 'in-10',
    name: 'Darjeeling',
    country: 'India',
    location: 'West Bengal, India',
    categories: ['mountain'],
    image: 'https://images.unsplash.com/photo-1623073493843-4a0a89c4d9d2',
    rating: 4.5,
    startingPrice: 130,
    pricePerNight: 170,
    duration: '4–6 Days',
    maxGuests: 3,
    season: 'Summer',
    bestTime: 'March – June',
    description:
      'A charming hill town famous for tea gardens and Himalayan sunrise views.',
    amenities: ['Tea Estates', 'Mountain Views', 'Toy Train Ride'],
    isFeatured: false,
  },

  /* ================= INTERNATIONAL ================= */

  {
    id: 'int-1',
    name: 'Bali',
    country: 'Indonesia',
    location: 'Bali, Indonesia',
    categories: ['beach', 'island'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    rating: 4.9,
    startingPrice: 250,
    pricePerNight: 300,
    duration: '5–7 Days',
    maxGuests: 4,
    season: 'Dry Season',
    bestTime: 'April – October',
    description:
      'A tropical paradise known for beaches, temples, and luxury resorts.',
    amenities: ['Beach Villas', 'Spa Retreats', 'Cultural Tours'],
    isFeatured: true,
  },

  {
    id: 'int-2',
    name: 'Maldives',
    country: 'Maldives',
    location: 'Maldives',
    categories: ['beach', 'island'],
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    rating: 5.0,
    startingPrice: 420,
    pricePerNight: 520,
    duration: '4–6 Days',
    maxGuests: 2,
    season: 'Dry Season',
    bestTime: 'November – April',
    description:
      'Luxury overwater villas surrounded by turquoise lagoons and coral reefs.',
    amenities: ['Overwater Villas', 'Private Beaches', 'Snorkeling'],
    isFeatured: true,
  },

  {
    id: 'int-3',
    name: 'Santorini',
    country: 'Greece',
    location: 'Santorini, Greece',
    categories: ['beach', 'city'],
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad',
    rating: 4.8,
    startingPrice: 300,
    pricePerNight: 360,
    duration: '4–6 Days',
    maxGuests: 2,
    season: 'Summer',
    bestTime: 'May – September',
    description:
      'Iconic whitewashed buildings overlooking the Aegean Sea.',
    amenities: ['Sea View', 'Luxury Suites', 'Sunset Cruises'],
    isFeatured: true,
  },

  {
    id: 'int-4',
    name: 'Swiss Alps',
    country: 'Switzerland',
    location: 'Alps, Switzerland',
    categories: ['mountain'],
    image: 'https://images.unsplash.com/photo-1601758064134-90a2fbd6e9d4',
    rating: 4.9,
    startingPrice: 350,
    pricePerNight: 420,
    duration: '5–7 Days',
    maxGuests: 4,
    season: 'Winter',
    bestTime: 'December – February',
    description:
      'Snowy alpine landscapes with world-class skiing and luxury chalets.',
    amenities: ['Ski Resorts', 'Luxury Spa', 'Mountain Views'],
    isFeatured: true,
  },

  {
    id: 'int-5',
    name: 'Paris',
    country: 'France',
    location: 'Paris, France',
    categories: ['city'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    rating: 4.7,
    startingPrice: 310,
    pricePerNight: 360,
    duration: '3–5 Days',
    maxGuests: 2,
    season: 'Spring',
    bestTime: 'April – June',
    description:
      'The city of love, art, fashion, and iconic landmarks.',
    amenities: ['City Tours', 'Fine Dining', 'Luxury Hotels'],
    isFeatured: false,
  },
];

