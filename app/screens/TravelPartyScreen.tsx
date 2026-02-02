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

const TravelPartyScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={20} color={colors.text} />
        </TouchableOpacity>

        <View style={styles.indicators}>
          <View style={styles.indicatorInactive} />
          <View style={styles.indicatorActive} />
          <View style={styles.indicatorInactive} />
        </View>

        <TouchableOpacity>
          <MaterialIcons name="close" size={22} color={colors.textMuted} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Travel Party</Text>
        <Text style={styles.subtitle}>
          Who will be joining you on this luxury journey?
        </Text>
      </View>

      {/* Guest Cards */}
      <View style={styles.card}>
        <GuestRow label="Adults" subLabel="Over 12 years old" value={2} />
        <GuestRow label="Children" subLabel="Over 2 years old" value={0} />
        <GuestRow label="Infants" subLabel="Under 2 years old" value={0} />
      </View>

      {/* Cabin Class */}
      <View style={styles.card}>
        <Text style={styles.cabinLabel}>CABIN CLASS</Text>

        <View style={styles.segment}>
          <View style={styles.segmentItem}>
            <Text style={styles.segmentText}>Business</Text>
          </View>

          <View style={[styles.segmentItem, styles.segmentActive]}>
            <Text style={styles.segmentTextActive}>First Class</Text>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View
        style={[
          styles.footer,
          { paddingBottom: insets.bottom + spacing.lg },
        ]}
      >
        <TouchableOpacity style={styles.continueButton} activeOpacity={0.9}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/* ---------- Sub Components ---------- */

const GuestRow = ({
  label,
  subLabel,
  value,
}: {
  label: string;
  subLabel: string;
  value: number;
}) => (
  <View style={styles.guestRow}>
    <View>
      <Text style={styles.guestLabel}>{label}</Text>
      <Text style={styles.guestSubLabel}>{subLabel}</Text>
    </View>

    <View style={styles.counter}>
      <TouchableOpacity style={styles.counterButton}>
        <MaterialIcons name="remove" size={18} color={colors.textMuted} />
      </TouchableOpacity>

      <Text style={styles.counterValue}>{value}</Text>

      <TouchableOpacity style={styles.counterButton}>
        <MaterialIcons name="add" size={18} color={colors.textMuted} />
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  indicators: {
    flexDirection: 'row',
    gap: spacing.xs,
  },

  indicatorActive: {
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

  /* Cards */
  card: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.soft,
  },

  /* Guest Row */
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },

  guestLabel: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },

  guestSubLabel: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  counterButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: `${colors.textMuted}20`,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counterValue: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
    minWidth: 20,
    textAlign: 'center',
  },

  /* Cabin */
  cabinLabel: {
    ...typography.caption,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },

  segment: {
    flexDirection: 'row',
    backgroundColor: `${colors.textMuted}15`,
    borderRadius: borderRadius.xl,
    padding: 4,
  },

  segmentItem: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderRadius: borderRadius.xl,
  },

  segmentActive: {
    backgroundColor: colors.primary,
  },

  segmentText: {
    ...typography.bodySmall,
    color: colors.textMuted,
    fontWeight: '600',
  },

  segmentTextActive: {
    ...typography.bodySmall,
    color: colors.cardBackground,
    fontWeight: '600',
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
    height: 56,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueText: {
    ...typography.body,
    color: colors.cardBackground,
    fontWeight: '600',
  },
});

export default TravelPartyScreen;
