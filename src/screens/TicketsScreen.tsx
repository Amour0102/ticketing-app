import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { Card } from '../components/Card';
import { ScreenShell } from '../components/ScreenShell';
import { colors, spacing, typography } from '../theme';

export function TicketsScreen() {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        eyebrow="Work queue"
        title="Tickets"
        subtitle="This is the tickets tab placeholder for the authenticated app."
        compact
      />

      <Card style={styles.mainCard}>
        <Text style={styles.title}>Tickets</Text>
        <Text style={styles.body}>
          Open, assigned, and resolved ticket lists will be added here next.
        </Text>
      </Card>

      <View style={styles.stack}>
        <Card tone="muted" style={styles.rowCard}>
          <Text style={styles.rowLabel}>Current tab</Text>
          <Text style={styles.rowValue}>Tickets</Text>
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
  mainCard: {
    gap: spacing.sm,
  },
  title: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 28,
  },
  body: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 22,
  },
  stack: {
    gap: spacing.md,
  },
  rowCard: {
    gap: spacing.xs,
  },
  rowLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  rowValue: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 20,
  },
});
