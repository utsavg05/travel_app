import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows, typography } from '../constants/theme';
import { DESTINATIONS, Destination, DestinationCategory } from '../data/destinations';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/AppNavigator';
import { useBookingStore } from '../store/bookingStore';

type CategoryFilter = 'all' | 'mountain' | 'beach' | 'desert';

const ExploreScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const setPropertyId = useBookingStore((s) => s.setPropertyId);

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = useMemo(() => {
    let result = DESTINATIONS;

    if (selectedCategory !== 'all') {
      result = result.filter((dest) =>
        dest.categories.includes(
          selectedCategory as DestinationCategory
        )
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.location.toLowerCase().includes(q)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Mountains', value: 'mountain' },
    { label: 'Beach', value: 'beach' },
    { label: 'Desert', value: 'desert' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Find your next escape</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing.xl }}
      >
        <View style={styles.searchContainer}>
          <MaterialIcons
            name="search"
            size={20}
            color={colors.textMuted}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search destinations..."
            placeholderTextColor={colors.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.value}
              style={[
                styles.categoryPill,
                selectedCategory === cat.value &&
                  styles.categoryPillActive,
              ]}
              onPress={() =>
                setSelectedCategory(cat.value as CategoryFilter)
              }
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat.value &&
                    styles.categoryTextActive,
                ]}
              >
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <FlatList
          data={filteredDestinations}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.gridRow}
          contentContainerStyle={styles.gridContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.85}
              onPress={() => {
                setPropertyId(item.id);
                navigation.navigate('PropertyDetails');
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.destinationName}>
                  {item.name}
                </Text>
                <Text style={styles.location}>
                  {item.location}
                </Text>

                <View style={styles.cardFooter}>
                  <View style={styles.ratingContainer}>
                    <MaterialIcons
                      name="star"
                      size={14}
                      color={colors.accent}
                    />
                    <Text style={styles.ratingText}>
                      {item.rating}
                    </Text>
                  </View>
                  <Text style={styles.price}>
                    ${item.startingPrice}
                    <Text style={styles.priceUnit}>/night</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  headerSection: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  title: { ...typography.h2, color: colors.text },
  subtitle: { ...typography.bodySmall, color: colors.textMuted },

  searchContainer: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.xl,
    ...shadows.soft,
  },
  searchInput: {
    flex: 1,
    marginLeft: spacing.md,
    ...typography.body,
    color: colors.text,
  },

  categoriesContainer: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    gap: spacing.md,
  },
  categoryPill: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    ...typography.bodySmall,
    color: colors.textMuted,
  },
  categoryTextActive: { color: colors.cardBackground },

  gridContainer: { paddingHorizontal: spacing.lg },
  gridRow: { justifyContent: 'space-between', marginBottom: spacing.lg },

  card: {
    flex: 1,
    marginHorizontal: spacing.sm,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.soft,
  },
  cardImage: { width: '100%', height: 160 },
  cardContent: { padding: spacing.md },

  destinationName: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
  location: {
    ...typography.caption,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: { flexDirection: 'row', gap: spacing.xs },
  ratingText: { ...typography.caption, color: colors.text },
  price: {
    ...typography.bodySmall,
    color: colors.primary,
    fontWeight: '600',
  },
  priceUnit: { color: colors.textMuted },
});

export default ExploreScreen;
