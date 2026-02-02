import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows, typography } from '../constants/theme';
import { useBookingStore } from '../store/bookingStore';
import { useNavigation } from '@react-navigation/native';
import { PROPERTIES } from '../data/Properties';
import { RootStackParamList } from '../Navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const BookingConfirmedScreen: React.FC = () => {
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const insets = useSafeAreaInsets();

  const { propertyId, dates, guests, cabinClass, resetBooking } =
    useBookingStore();

  const property = PROPERTIES.find((p) => p.id === propertyId);

  if (!property) return null;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View />
        <View style={styles.indicators}>
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        <View />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.successCircle}>
          <MaterialIcons name="check" size={32} color={colors.primary} />
        </View>

        <Text style={styles.title}>Booking Confirmed!</Text>

        <Text style={styles.subtitle}>
          Pack your bags! Your luxury escape to {property.name} is all set.
        </Text>

        {/* Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>SUMMARY</Text>

          <Text style={styles.propertyName}>{property.name}</Text>

          <Text style={styles.summaryText}>
            {dates.checkIn} – {dates.checkOut}
          </Text>

          <Text style={styles.summaryText}>
            {guests.adults} Adults
            {guests.children > 0 && `, ${guests.children} Children`}
            {guests.infants > 0 && `, ${guests.infants} Infants`}
          </Text>

          <Text style={styles.summaryText}>
            Cabin: {cabinClass === 'first' ? 'First Class' : 'Business'}
          </Text>
        </View>
      </View>

      {/* CTA */}
      <View
        style={[
          styles.footer,
          { paddingBottom: insets.bottom + spacing.lg },
        ]}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            resetBooking();
            navigation.popToTop();
          }}
        >
          <Text style={styles.backButtonText}>Back to Trips</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  /* Header */
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  indicators: {
    flexDirection: 'row',
    gap: spacing.xs,
  },

  indicator: {
    width: 16,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },

  /* Content */
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginTop: spacing.xl,
  },

  successCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: `${colors.accent}35`,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.sm,
  },

  subtitle: {
    ...typography.bodySmall,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.xl,
  },

  /* Summary Card */
  summaryCard: {
    width: '100%',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.soft,
  },

  summaryLabel: {
    ...typography.caption,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },

  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  propertyIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: `${colors.accent}20`,
    justifyContent: 'center',
    alignItems: 'center',
  },

  summaryContent: {
    flex: 1,
  },

  propertyName: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  summaryText: {
    ...typography.bodySmall,
    color: colors.textMuted,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },

  confirmationText: {
    ...typography.bodySmall,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },

  email: {
    color: colors.text,
    fontWeight: '600',
  },

  /* Footer */
  footer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    backgroundColor: colors.background,
  },

  backButton: {
    height: 56,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButtonText: {
    ...typography.body,
    color: colors.cardBackground,
    fontWeight: '600',
  },
});

export default BookingConfirmedScreen;
