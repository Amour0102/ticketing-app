import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { Card } from '../components/Card';
import { ScreenShell } from '../components/ScreenShell';
import { colors, spacing, typography } from '../theme';

export function ReportsScreen() {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        title="Reports"
        subtitle="View analytics and ticket data"
        compact
      />

      <Card style={styles.heroCard}>
        <View style={styles.heroTopRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Overview</Text>
          </View>
          <Text style={styles.heroMeta}>This week</Text>
        </View>
        <Text style={styles.heroTitle}>No reporting data yet</Text>
        <Text style={styles.heroBody}>
          Ticket analytics will appear here once issues are submitted.
        </Text>
      </Card>

      <View style={styles.grid}>
        <Card style={styles.smallCard}>
          <Text style={styles.smallLabel}>Total tickets</Text>
          <Text style={styles.smallValue}>0</Text>
        </Card>

        <Card tone="muted" style={styles.smallCard}>
          <Text style={styles.smallLabel}>Resolved</Text>
          <Text style={styles.smallValue}>0</Text>
        </Card>
      </View>

      <View style={styles.grid}>
        <Card style={styles.smallCard}>
          <Text style={styles.smallLabel}>Open</Text>
          <Text style={styles.smallValue}>0</Text>
        </Card>

        <Card tone="muted" style={styles.smallCard}>
          <Text style={styles.smallLabel}>Urgent</Text>
          <Text style={styles.smallValue}>0</Text>
        </Card>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    paddingTop: 18,
    paddingBottom: 164,
  },
  heroCard: {
    gap: spacing.sm,
    minHeight: 164,
    justifyContent: 'space-between',
  },
  heroTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: colors.accentSoft,
  },
  badgeText: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 11,
  },
  heroMeta: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
  },
  heroTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 32,
  },
  heroBody: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 22,
  },
  grid: {
    flexDirection: 'row',
    gap: 14,
  },
  smallCard: {
    flex: 1,
    gap: spacing.sm,
    minHeight: 112,
    justifyContent: 'space-between',
  },
  smallLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
  },
  smallValue: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 34,
    lineHeight: 36,
  },
});
