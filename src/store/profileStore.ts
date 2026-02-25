import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type CabinClass = 'business' | 'first';

interface ProfileState {
    name: string;
    email: string;
    phone: string;
    avatar: string | null;
    preferredCabin: CabinClass;

    setProfile: (data: Partial<ProfileState>) => void;
    resetProfile: () => void;
}

// here Omit is used to exclude the setProfile and resetProfile functions from the profile state.
const initialState: Omit<
    ProfileState,
    'setProfile' | 'resetProfile'
> = {
    name: 'Utsav Gupta',
    email: 'utsav@example.com',
    phone: '+91 98765 43210',
    avatar: 'https://avatars.githubusercontent.com/u/194606051?v=4',
    preferredCabin: 'business',
};

export const useProfileStore = create<ProfileState>()(
    persist(
        (set) => ({
            ...initialState,

            setProfile: (data) =>
                set((state) => ({
                    ...state,
                    ...data,
                })),

            resetProfile: () =>
                set({
                    ...initialState,
                }),
        }),
        {
            name: 'profile-store',
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
