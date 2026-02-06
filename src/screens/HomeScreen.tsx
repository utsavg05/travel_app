import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { borderRadius, colors, shadows, spacing, typography } from '../constants/theme';
import { RootStackParamList } from '../Navigation/AppNavigator';
import { useBookingStore } from '../store/bookingStore';

type Category = 'All' | 'Mountains' | 'Beach' | 'Desert';

interface StayCard {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
}

const HomeScreen: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const setPropertyId = useBookingStore((s) => s.setPropertyId);


  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Mountains', 'Beach', 'Desert'];

  const featuredStays: StayCard[] = [
    {
      id: 'alpina-gstaad',
      name: 'The Alpina Gstaad',
      location: 'Swiss Alps, Switzerland',
      rating: 4.9,
      price: 1250,
      image: 'https://picsum.photos/400/300?random=1',
    },
    {
      id: 'aman-tokyo',
      name: 'Aman Tokyo',
      location: 'Tokyo, Japan',
      rating: 4.8,
      price: 980,
      image: 'https://picsum.photos/400/300?random=2',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingSmall}>Hello, Utsav 👋</Text>
            <Text style={styles.greeting}>Where to next?</Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <MaterialIcons name="notifications-none" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={20} color={colors.textMuted} />
          <TextInput
            placeholder="Search destinations, hotels..."
            placeholderTextColor={colors.textMuted}
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Stays Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Stays</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        {/* Featured Stays Horizontal Scroll */}
        <ScrollView
          // horizontal
          // showsHorizontalScrollIndicator={false}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.staysScroll}
        >
          {featuredStays.map((stay) => (
            <TouchableOpacity
              onPress={() => {
                setPropertyId(stay.id);
                navigation.navigate('PropertyDetails');
              }}
              key={stay.id} style={styles.stayCard}>
              <Image source={{ uri: stay.image }} style={styles.stayImage} />

              <View style={styles.stayContent}>
                <Text style={styles.stayLocation}>{stay.location}</Text>
                <Text style={styles.stayName}>{stay.name}</Text>

                <View style={styles.stayFooter}>
                  <View style={styles.rating}>
                    <MaterialIcons name="star" size={14} color={colors.accent} />
                    <Text style={styles.ratingText}>{stay.rating}</Text>
                  </View>

                  <Text style={styles.price}>
                    ${stay.price}
                    <Text style={styles.priceUnit}> / night</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation (UI only) */}
      {/* <View style={styles.bottomNav}>
        <MaterialIcons name="home" size={26} color={colors.primary} />
        <TouchableOpacity onPress={() => navigation.navigate('Trips' as never)}>
        <MaterialIcons name="luggage" size={24} color={colors.textMuted} />
        </TouchableOpacity>
        <MaterialIcons name="favorite-border" size={24} color={colors.textMuted} />
        <MaterialIcons name="person-outline" size={24} color={colors.textMuted} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  /* Header */
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingSmall: {
    ...typography.caption,
    color: colors.textMuted,
  },
  greeting: {
    ...typography.h2,
    color: colors.text,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.soft,
  },

  /* Search */
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.xl,
    ...shadows.soft,
  },
  searchInput: {
    marginLeft: spacing.md,
    ...typography.body,
    color: colors.text,
    flex: 1,
  },

  /* Categories */
  categories: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  categoryChip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    ...typography.bodySmall,
    color: colors.textMuted,
  },
  categoryTextActive: {
    color: colors.cardBackground,
  },

  /* Section Header */
  sectionHeader: {
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
  },
  viewAll: {
    ...typography.bodySmall,
    color: colors.textMuted,
  },

  /* Stays */
  staysScroll: {
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },
  stayCard: {
    width: '100%',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.soft,
  },
  stayImage: {
    width: '100%',
    height: 180,
  },
  stayContent: {
    padding: spacing.md,
  },
  stayLocation: {
    ...typography.caption,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  stayName: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  stayFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  ratingText: {
    ...typography.caption,
    color: colors.text,
  },
  price: {
    ...typography.bodySmall,
    color: colors.primary,
    fontWeight: '600',
  },
  priceUnit: {
    color: colors.textMuted,
  },

  /* Bottom Nav */
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 62,
    backgroundColor: colors.cardBackground,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});

export default HomeScreen;
