import { TextStyle, ViewStyle } from 'react-native';

// Design Tokens - Luxury Travel Booking App
export const colors = {
  primary: '#1C1C1C' as const, // Charcoal
  accent: '#D6B98C' as const, // Soft Sand
  background: '#FAF9F7' as const, // Off-white
  cardBackground: '#FFFFFF' as const, // Pure white
  text: '#1C1C1C' as const, // Charcoal
  textMuted: '#7A7A7A' as const, // Muted gray
  border: '#E8E8E8' as const, // Light border
  shadow: 'rgba(0, 0, 0, 0.08)' as const, // Soft shadow
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
} as const;

export const shadows: Record<string, ViewStyle> = {
  soft: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
};

export const typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
};
