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

const BookingConfirmedScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={20} color={colors.text} />
        </TouchableOpacity>

        <View style={styles.indicators}>
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>

        <TouchableOpacity>
          <MaterialIcons name="close" size={22} color={colors.textMuted} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.successCircle}>
          <MaterialIcons name="check" size={32} color={colors.primary} />
        </View>

        <Text style={styles.title}>Booking Confirmed!</Text>
        <Text style={styles.subtitle}>
          Pack your bags, Vanessa! Your luxury escape to The Alpina Gstaad is all set.
        </Text>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>SUMMARY</Text>

          <View style={styles.summaryRow}>
            <View style={styles.propertyIcon}>
              <MaterialIcons name="apartment" size={20} color={colors.accent} />
            </View>

            <View style={styles.summaryContent}>
              <Text style={styles.propertyName}>The Alpina Gstaad</Text>
              <Text style={styles.summaryText}>
                2025-12-12 – 2025-12-18
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.confirmationText}>
            A confirmation email has been sent to{'\n'}
            <Text style={styles.email}>vanessa@alpina.travel</Text>
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
        <TouchableOpacity style={styles.backButton} activeOpacity={0.9}>
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
