import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type CabinClass = 'business' | 'first';

export interface BookingDates {
  checkIn: string | null;
  checkOut: string | null;
}

export interface Guests {
  adults: number;
  children: number;
  infants: number;
}

export interface GuestRowProps {
  label: string;
  subLabel: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}


interface BookingState {
  propertyId: string | null;
  dates: BookingDates;
  guests: Guests;
  cabinClass: CabinClass;

  setPropertyId: (id: string) => void;
  setDates: (dates: BookingDates) => void;
  setGuests: (guests: Guests) => void;
  setCabinClass: (cabin: CabinClass) => void;
  resetBooking: () => void;
}

const initialState = {
  propertyId: null,
  dates: {
    checkIn: null,
    checkOut: null,
  },
  guests: {
    adults: 2,
    children: 0,
    infants: 0,
  },
  cabinClass: 'business' as CabinClass,
};

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      ...initialState,

      setPropertyId: (id) =>
        set({
          propertyId: id,
        }),

      setDates: (dates) =>
        set({
          dates,
        }),

      setGuests: (guests) =>
        set({
          guests,
        }),

      setCabinClass: (cabinClass) =>
        set({
          cabinClass,
        }),

      resetBooking: () =>
        set({
          ...initialState,
        }),
    }),
    {
            name: 'booking-store',
            storage: {
                getItem: async (name) => {
                    const value = await AsyncStorage.getItem(name);
                    return value ? JSON.parse(value) : null;
                },
                setItem: async (name, value) => {
                    await AsyncStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: async (name) => {
                    await AsyncStorage.removeItem(name);
                },
            },
        }
  )
);
