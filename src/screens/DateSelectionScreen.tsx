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
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/AppNavigator';

const DateSelectionScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { dates, setDates } = useBookingStore();

  const [startDate, setStartDate] = React.useState<number | null>(null);
  const [endDate, setEndDate] = React.useState<number | null>(null);

  const handleDatePress = (day: number) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day >= startDate) {
      setEndDate(day);
    }
  };

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const isSelected = (day: number) => {
    if (!startDate) return false;
    if (startDate && !endDate) return day === startDate;
    return day >= startDate && day <= endDate!;
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={20} color={colors.text} />
        </TouchableOpacity>

        <View style={styles.headerIndicators}>
          <View style={styles.indicator} />
          <View style={styles.indicatorInactive} />
          <View style={styles.indicatorInactive} />
        </View>

        <TouchableOpacity>
          <MaterialIcons name="close" size={22} color={colors.textMuted} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Select your dates</Text>
        <Text style={styles.subtitle}>
          When would you like to escape to The Alpina Gstaad?
        </Text>
      </View>

      {/* Main Card */}
      <View style={styles.card}>
        {/* Date Summary */}
        <View style={styles.dateSummary}>
          <DatePill label="Check-in" value="2025-12-12" />
          <View style={styles.arrow}>
            <MaterialIcons name="arrow-forward" size={18} color={colors.textMuted} />
          </View>
          <DatePill label="Check-out" value="2025-12-18" />
        </View>

        {/* Week Days */}
        <View style={styles.weekRow}>
          {weekDays.map((day) => (
            <Text key={day} style={styles.weekDay}>
              {day}
            </Text>
          ))}
        </View>

        {/* Calendar */}
        <View style={styles.calendarGrid}>
          {calendarDays.map((day) => (
            <View
              key={day}
              style={[
                styles.dayCell,
                isSelected(day) && styles.daySelected,
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  isSelected(day) && styles.dayTextSelected,
                ]}
              >
                {day}
              </Text>
            </View>
          ))}
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
          onPress={() => {
            if (!startDate || !endDate) return;

            setDates({
              checkIn: `2025-12-${String(startDate).padStart(2, '0')}`,
              checkOut: `2025-12-${String(endDate).padStart(2, '0')}`,
            });

            navigation.navigate('TravelParty');
          }}

          style={styles.continueButton} activeOpacity={0.9}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/* ---------- Sub Components ---------- */

const DatePill = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.datePill}>
    <MaterialIcons name="calendar-today" size={18} color={colors.accent} />
    <View>
      <Text style={styles.dateLabel}>{label}</Text>
      <Text style={styles.dateValue}>{value}</Text>
    </View>
  </View>
);

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
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerIndicators: {
    flexDirection: 'row',
    gap: spacing.xs,
  },

  indicator: {
    width: 16,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },

  indicatorInactive: {
    width: 16,
    height: 4,
    borderRadius: 4,
    backgroundColor: `${colors.textMuted}40`,
  },

  /* Title */
  titleSection: {
    paddingHorizontal: spacing.xl,
    marginTop: spacing.lg,
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
    lineHeight: 22,
  },

  /* Card */
  card: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.soft,
  },

  /* Date Summary */
  dateSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },

  datePill: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },

  dateLabel: {
    ...typography.caption,
    color: colors.textMuted,
  },

  dateValue: {
    ...typography.bodySmall,
    fontWeight: '600',
    color: colors.text,
  },

  arrow: {
    paddingHorizontal: spacing.sm,
  },

  /* Calendar */
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },

  weekDay: {
    width: '14%',
    textAlign: 'center',
    ...typography.caption,
    color: colors.textMuted,
  },

  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: spacing.md,
  },

  dayCell: {
    width: '14%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  daySelected: {
    backgroundColor: colors.accent,
  },

  dayText: {
    ...typography.bodySmall,
    color: colors.text,
  },

  dayTextSelected: {
    color: colors.cardBackground,
    fontWeight: '700',
  },

  /* Footer */
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    backgroundColor: colors.background,
  },

  continueButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueText: {
    ...typography.body,
    color: colors.cardBackground,
    fontWeight: '600',
  },
});

export default DateSelectionScreen;
