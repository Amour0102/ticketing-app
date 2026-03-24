import { StyleSheet, Text, View } from 'react-native';

import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenShell } from '../components/ScreenShell';
import { colors, spacing, typography } from '../theme';

type AppHomeScreenProps = {
  onReportIssue: () => void;
};

export function AppHomeScreen({ onReportIssue }: AppHomeScreenProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.headerRow}>
        <View style={styles.profileImage}>
          <Text style={styles.profileInitial}>A</Text>
        </View>
        <View style={styles.headerCopy}>
          <Text style={styles.headerLabel}>Profile</Text>
          <Text style={styles.headerName}>Amour</Text>
        </View>
      </View>

      <View style={styles.dateBlock}>
        <Text style={styles.homeTitle}>Hi, Amour</Text>
        <Text style={styles.homeDate}>{formattedDate}</Text>
      </View>

      <View style={styles.statsGrid}>
        <Card style={styles.smallCard}>
          <Text style={styles.sectionLabel}>Open tickets</Text>
          <Text style={styles.sectionValue}>0</Text>
        </Card>

        <Card tone="muted" style={styles.smallCard}>
          <Text style={styles.sectionLabel}>Urgent</Text>
          <Text style={styles.sectionValue}>0</Text>
        </Card>
      </View>

      <Card tone="accent" style={styles.emptyCard}>
        <View style={styles.emptyBadge}>
          <Text style={styles.emptyBadgeText}>No tickets logged</Text>
        </View>
        <View style={styles.emptyCopy}>
          <Text style={styles.emptyTitle}>No activity yet</Text>
          <Text style={styles.emptyBody}>
            When issues are reported, they'll appear here.
          </Text>
        </View>
        <PrimaryButton label="Log ticket/issue" onPress={onReportIssue} />
      </Card>

      <Card style={styles.footerCard}>
        <Text style={styles.footerHint}>Nothing to review yet</Text>
      </Card>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    paddingTop: 16,
    paddingBottom: 164,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.surfaceStrong,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 20,
  },
  headerCopy: {
    gap: 2,
  },
  headerLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
  },
  headerName: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 22,
    lineHeight: 26,
  },
  dateBlock: {
    gap: 6,
  },
  homeTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 34,
    lineHeight: 38,
  },
  homeDate: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 19,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 14,
  },
  smallCard: {
    flex: 1,
    gap: spacing.sm,
    minHeight: 116,
    justifyContent: 'space-between',
  },
  sectionLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
    letterSpacing: 0.3,
  },
  sectionValue: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 36,
    lineHeight: 38,
  },
  emptyCard: {
    gap: spacing.lg,
    minHeight: 250,
    justifyContent: 'space-between',
    paddingTop: 22,
    paddingBottom: 22,
  },
  emptyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  emptyBadgeText: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 11,
  },
  emptyCopy: {
    gap: spacing.xs,
  },
  emptyTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 32,
  },
  emptyBody: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 21,
  },
  footerCard: {
    paddingVertical: spacing.sm,
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  footerHint: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
});
