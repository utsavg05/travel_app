export interface PropertyDetails {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  pricePerNight: number;
  duration: string;
  guests: string;
  season: string;
  bestTime: string;
  description: string;
}

export const PROPERTIES: PropertyDetails[] = [
  {
    id: 'alpina-gstaad',
    name: 'The Alpina Gstaad',
    location: 'Swiss Alps, Switzerland',
    image: 'https://picsum.photos/600/400?random=1',
    rating: 4.9,
    pricePerNight: 1250,
    duration: '3 Days',
    guests: '2 Guests',
    season: 'Dec–Mar',
    bestTime: 'December to March',
    description:
      'A discreet luxury hotel offering breathtaking views of the Bernese Alps and a Michelin-starred culinary experience.',
  },
  {
    id: 'aman-tokyo',
    name: 'Aman Tokyo',
    location: 'Tokyo, Japan',
    image: 'https://picsum.photos/600/400?random=2',
    rating: 4.8,
    pricePerNight: 980,
    duration: '4 Days',
    guests: '2 Guests',
    season: 'Mar–May',
    bestTime: 'March to May',
    description:
      'A serene urban sanctuary blending Japanese minimalism with Aman’s signature luxury.',
  },
];
