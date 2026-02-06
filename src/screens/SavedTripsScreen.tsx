import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors, shadows, spacing, typography } from '../constants/theme'
import { MaterialIcons } from '@expo/vector-icons'

const SavedTripsScreen = () => {
  return (
    <View style={styles.emptyStateContainer}>
    <View style={styles.emptyIconWrapper}>
      <MaterialIcons name="favorite-border" size={56} color={colors.textMuted} />
    </View>
    <Text style={styles.emptyStateTitle}>No Saved trips yet</Text>
    <Text style={styles.emptyStateSubtitle}>
      Your saved trips will appear here. Start exploring and save your favorite destinations!
    </Text>
  </View>
  )
}

export default SavedTripsScreen

const styles = StyleSheet.create({
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
})