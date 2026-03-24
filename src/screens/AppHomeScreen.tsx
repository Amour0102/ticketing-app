import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { Card } from '../components/Card';
import { ScreenShell } from '../components/ScreenShell';
import { colors, spacing, typography } from '../theme';

export function AppHomeScreen() {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        eyebrow="Dashboard"
        title="Home"
        subtitle="This is the home tab placeholder for the authenticated app."
        compact
      />

      <Card tone="accent" style={styles.heroCard}>
        <Text style={styles.heroTitle}>Home</Text>
        <Text style={styles.heroBody}>
          The main field dashboard will live here in the next step.
        </Text>
      </Card>

      <View style={styles.grid}>
        <Card style={styles.smallCard}>
          <Text style={styles.sectionLabel}>Quick view</Text>
          <Text style={styles.sectionValue}>Home</Text>
        </Card>

        <Card tone="muted" style={styles.smallCard}>
          <Text style={styles.sectionLabel}>Status</Text>
          <Text style={styles.sectionValue}>Placeholder</Text>
        </Card>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xl,
    paddingBottom: 164,
  },
  heroCard: {
    gap: spacing.sm,
  },
  heroTitle: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 28,
  },
  heroBody: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 22,
  },
  grid: {
    gap: spacing.md,
  },
  smallCard: {
    gap: spacing.xs,
  },
  sectionLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  sectionValue: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 20,
  },
});
