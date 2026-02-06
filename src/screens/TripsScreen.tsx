import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows, typography } from '../constants/theme';
import { useBookingStore } from '../store/bookingStore';
import { PROPERTIES } from '../data/Properties';
import { SafeAreaView } from 'react-native-safe-area-context';

const TripsScreen: React.FC = () => {
  const trips = useBookingStore((s) => s.trips);
  const hasTrips = trips.length > 0;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [])

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size={'large'}  color={colors.accent} />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>My Trips</Text>
        <Text style={styles.subtitle}>Your upcoming and past journeys</Text>
      </View>

      {hasTrips ? (
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TripCard trip={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyState />
      )}
    </View>
  );
};

/* ---------- Trip Card ---------- */

const TripCard = ({ trip }: any) => {
  const property = PROPERTIES.find((p) => p.id === trip.propertyId);
  if (!property) return null;

  const guestSummary = [
    `${trip.guests.adults} Adult${trip.guests.adults > 1 ? 's' : ''}`,
    trip.guests.children > 0 && `${trip.guests.children} Child${trip.guests.children > 1 ? 'ren' : ''}`,
    trip.guests.infants > 0 && `${trip.guests.infants} Infant${trip.guests.infants > 1 ? 's' : ''}`,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.cardHeader}>
        <Text style={styles.propertyName}>{property.name}</Text>
        <View style={styles.cabinBadge}>
          <Text style={styles.cabinBadgeText}>
            {trip.cabinClass === 'first' ? 'First Class' : 'Business'}
          </Text>
        </View>
      </View>

      <View style={styles.locationRow}>
        <MaterialIcons name="location-on" size={16} color={colors.textMuted} />
        <Text style={styles.location}>{property.location}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.infoRow}>
        <MaterialIcons name="calendar-today" size={16} color={colors.textMuted} />
        <Text style={styles.infoLabel}>
          {trip.checkIn} – {trip.checkOut}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="people" size={16} color={colors.textMuted} />
        <Text style={styles.infoLabel}>{guestSummary}</Text>
      </View>
    </TouchableOpacity>
  );
};

/* ---------- Empty State ---------- */

const EmptyState = () => (
  <View style={styles.emptyStateContainer}>
    <View style={styles.emptyIconWrapper}>
      <MaterialIcons name="luggage" size={56} color={colors.textMuted} />
    </View>
    <Text style={styles.emptyStateTitle}>No trips yet</Text>
    <Text style={styles.emptyStateSubtitle}>
      Your booked journeys will appear here
    </Text>
  </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  headerContainer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },

  title: { ...typography.h2, color: colors.text },
  subtitle: { ...typography.bodySmall, color: colors.textMuted },

  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.soft,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },

  propertyName: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },

  cabinBadge: {
    backgroundColor: `${colors.accent}20`,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },

  cabinBadgeText: {
    ...typography.caption,
    color: colors.accent,
    fontWeight: '600',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },

  location: {
    ...typography.caption,
    color: colors.textMuted,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },

  infoLabel: {
    ...typography.caption,
    color: colors.textMuted,
  },

  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },

  emptyIconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.cardBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    ...shadows.soft,
  },

  emptyStateTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.sm,
  },

  emptyStateSubtitle: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
  },
});

export default TripsScreen;
