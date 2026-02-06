import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import {
  colors,
  spacing,
  borderRadius,
  shadows,
  typography,
} from '../constants/theme';
import { useProfileStore } from '../store/profileStore';
import { useBookingStore } from '../store/bookingStore';

/* ---------- Main Component ---------- */

const ProfileScreen: React.FC = () => {
  const profile = useProfileStore();
  const { trips, resetBooking, resetTrips } = useBookingStore();

  const initials = useMemo(() => {
    const parts = profile.name.split(' ');
    return parts
      .map((p) => p[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }, [profile.name]);

  const cabinLabel =
    profile.preferredCabin === 'business' ? 'Business' : 'First Class';

  const totalTrips = trips.length;
  const upcomingTrips = trips.length; // simple assumption for now

  const handleResetApp = () => {
    Alert.alert(
      'Reset App Data',
      'This will remove all trips and profile data. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            resetBooking();
            resetTrips();
            profile.resetProfile();
          },
        },
      ]
    );
  };

  // render this screen after a 2 second delay to simulate loading profile data
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color={colors.accent} />
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing.xl }}
      >
        {/* Profile Header */}
        <View style={styles.headerSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.initials}>{initials}</Text>
          </View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
          <Text style={styles.phone}>{profile.phone}</Text>
        </View>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          <StatItem label="Total Trips" value={String(totalTrips)} />
          <View style={styles.statsDivider} />
          <StatItem label="Upcoming" value={String(upcomingTrips)} />
          <View style={styles.statsDivider} />
          <StatItem label="Cabin" value={cabinLabel} />
        </View>

        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.card}>
            <PreferenceRow
              label="Default Cabin"
              value={cabinLabel}
              hasChevron
            />
          </View>
        </View>

        {/* Account */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.card}>
            <ActionRow icon="edit" label="Edit Profile" />
            <Divider />
            <ActionRow icon="settings" label="App Settings" />
            <Divider />
            <ActionRow icon="info" label="About" />
          </View>
        </View>

        {/* Reset */}
        <View style={styles.section}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.resetRow}
              activeOpacity={0.7}
              onPress={handleResetApp}
            >
              <Text style={styles.resetLabel}>Reset App Data</Text>
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={colors.textMuted}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/* ---------- Sub Components ---------- */

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const PreferenceRow = ({
  label,
  value,
  hasChevron,
}: {
  label: string;
  value: string;
  hasChevron?: boolean;
}) => (
  <TouchableOpacity style={styles.row} activeOpacity={0.7}>
    <View style={styles.rowContent}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
    {hasChevron && (
      <MaterialIcons
        name="chevron-right"
        size={24}
        color={colors.textMuted}
      />
    )}
  </TouchableOpacity>
);

const ActionRow = ({ icon, label }: { icon: string; label: string }) => (
  <TouchableOpacity style={styles.row} activeOpacity={0.7}>
    <View style={styles.rowContent}>
      <MaterialIcons
        name={icon as any}
        size={20}
        color={colors.textMuted}
      />
      <Text style={styles.rowLabel}>{label}</Text>
    </View>
    <MaterialIcons
      name="chevron-right"
      size={24}
      color={colors.textMuted}
    />
  </TouchableOpacity>
);

const Divider = () => <View style={styles.divider} />;

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  headerSection: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
    alignItems: 'center',
  },

  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    ...shadows.medium,
  },

  initials: {
    ...typography.h2,
    color: colors.cardBackground,
    fontWeight: '700',
  },

  name: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  email: {
    ...typography.body,
    color: colors.textMuted,
  },

  phone: {
    ...typography.bodySmall,
    color: colors.textMuted,
  },

  statsCard: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    paddingHorizontal: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    ...shadows.soft,
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
  },

  statValue: {
    ...typography.h3,
    fontWeight: '700',
    color: colors.text,
  },

  statLabel: {
    ...typography.caption,
    color: colors.textMuted,
  },

  statsDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },

  section: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    ...typography.bodySmall,
    color: colors.textMuted,
    fontWeight: '600',
    marginBottom: spacing.md,
    textTransform: 'uppercase',
  },

  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.soft,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },

  rowLabel: {
    ...typography.body,
    color: colors.text,
  },

  rowValue: {
    ...typography.bodySmall,
    color: colors.textMuted,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.lg,
  },

  resetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  resetLabel: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default ProfileScreen;