import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows, typography } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useBookingStore } from '../store/bookingStore';
import { RootStackParamList } from '../Navigation/AppNavigator';
import { PROPERTIES } from '../data/Properties';
import { DESTINATIONS } from '../data/destinations';


const PropertyDetailsScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const propertyId = useBookingStore((s) => s.propertyId);
  // const property = PROPERTIES.find((p) => p.id === propertyId);
  const property = DESTINATIONS.find((p) => p.id === propertyId);


  // if (!property) return null;
  if (!property) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'red' }}>Property not found</Text>
    </View>
  );
}



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
      >
        {/* Hero Image */}
        <Image source={{ uri: property?.image }} style={styles.heroImage} />

        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{property?.name}</Text>

            <View style={styles.rating}>
              <MaterialIcons name="star" size={16} color={colors.accent} />
              <Text style={styles.ratingText}>{property?.rating}</Text>
            </View>
          </View>

          <Text style={styles.location}>{property?.location}</Text>
          {/* Info Cards */}
          <View style={styles.infoRow}>
            <InfoCard icon="schedule" label="Duration" value={property?.duration} />
            <InfoCard icon="people" label="Capacity" value={property?.maxGuests} />
            <InfoCard icon="calendar-today" label="Best time" value={property?.season} />
          </View>

          {/* Best Time Banner */}
          <View style={styles.bestTimeCard}>
            <View style={styles.bestTimeIcon}>
              <MaterialIcons name="calendar-month" size={20} color={colors.primary} />
            </View>
            <View>
              <Text style={styles.bestTimeLabel}>Best time to visit</Text>
              <Text style={styles.bestTimeValue}>{property.bestTime}</Text>
            </View>
          </View>

          {/* Experience */}
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.description}>{property.description}</Text>

          {/* Amenities */}
          <View style={styles.amenities}>
            <Amenity icon="pool" label="Pool" />
            <Amenity icon="spa" label="Spa" />
            <Amenity icon="wifi" label="Free Wifi" />
            <Amenity icon="fitness-center" label="Gym" />
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View
        style={[
          styles.footer,
          { paddingBottom: insets.bottom + spacing.md },
        ]}
      >
        <View>
          <Text style={styles.priceLabel}>Pricing from</Text>
          <Text style={styles.price}>${property.pricePerNight}
            <Text style={styles.priceUnit}> / night</Text>
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('DateSelection')}
          style={styles.bookButton} activeOpacity={0.9}>
          <Text style={styles.bookButtonText}>Book Your Stay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/* ---------- Sub Components ---------- */

const InfoCard = ({ icon, label, value }: any) => (
  <View style={styles.infoCard}>
    <MaterialIcons name={icon} size={20} color={colors.textMuted} />
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const Amenity = ({ icon, label }: any) => (
  <View style={styles.amenity}>
    <MaterialIcons name={icon} size={18} color={colors.accent} />
    <Text style={styles.amenityText}>{label}</Text>
  </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  heroImage: {
    width: '100%',
    height: 320,
  },

  content: {
    padding: spacing.lg,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },

  title: {
    ...typography.h2,
    color: colors.text,
    flex: 1,
    marginRight: spacing.md,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },

  ratingText: {
    ...typography.bodySmall,
    fontWeight: '600',
    color: colors.text,
  },

  location: {
    ...typography.bodySmall,
    color: colors.textMuted,
    marginBottom: spacing.xl,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },

  infoCard: {
    width: '31%',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    alignItems: 'center',
    ...shadows.soft,
  },

  infoLabel: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },

  infoValue: {
    ...typography.bodySmall,
    fontWeight: '600',
    marginTop: spacing.xs,
    color: colors.text,
  },

  bestTimeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: `${colors.accent}20`,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },

  bestTimeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bestTimeLabel: {
    ...typography.caption,
    color: colors.textMuted,
  },

  bestTimeValue: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },

  sectionTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
    color: colors.text,
  },

  description: {
    ...typography.body,
    color: colors.textMuted,
    lineHeight: 28,
    marginBottom: spacing.xl,
  },

  amenities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },

  amenity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  amenityText: {
    ...typography.bodySmall,
    color: colors.text,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.cardBackground,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceLabel: {
    ...typography.caption,
    color: colors.textMuted,
  },

  price: {
    ...typography.h3,
    color: colors.text,
    fontWeight: '700',
  },

  priceUnit: {
    ...typography.bodySmall,
    color: colors.textMuted,
  },

  bookButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.lg,
  },

  bookButtonText: {
    ...typography.body,
    color: colors.cardBackground,
    fontWeight: '600',
  },
});

export default PropertyDetailsScreen;
