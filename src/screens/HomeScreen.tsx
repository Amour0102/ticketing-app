import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { Card } from '../components/Card';
import { ReadinessMeter } from '../components/ReadinessMeter';
import { ScreenShell } from '../components/ScreenShell';
import { Tag } from '../components/Tag';
import { productCopy } from '../content/productCopy';
import { colors, spacing, typography, typeScale } from '../theme';
import type { HomeContent, OnboardingData } from '../types/onboarding';

type HomeScreenProps = {
  profile: OnboardingData;
  content: HomeContent;
  onOpenCareerPulse: () => void;
  onOpenStrengthMap: () => void;
  onOpenAssessmentReadiness: () => void;
  onRefineProfile: () => void;
};

export function HomeScreen({
  profile,
  content,
  onOpenCareerPulse,
  onOpenStrengthMap,
  onOpenAssessmentReadiness,
  onRefineProfile,
}: HomeScreenProps) {
  const roleLabel = profile.currentRole.trim() || 'Senior Procurement Officer';
  const readinessValue = Math.min(content.assessmentTeaser.coveredCount * 16, 100);

  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.topSection}>
        <AppHeader
          eyebrow={productCopy.home.greeting}
          title="Your next move, read with more clarity."
          subtitle={content.heroSummary}
          actionLabel={productCopy.home.refineAction}
          onActionPress={onRefineProfile}
          compact
        />

        <Card tone="muted" style={styles.profileStrip}>
          <View style={styles.profileMeta}>
            <Text style={styles.profileLabel}>Current role</Text>
            <Text style={styles.profileValue}>{roleLabel}</Text>
          </View>
          <View style={styles.profileDivider} />
          <View style={styles.profileMeta}>
            <Text style={styles.profileLabel}>Current concern</Text>
            <Text style={styles.profileValue}>Staying steady and visible</Text>
          </View>
        </Card>

        <Pressable
          accessibilityRole="button"
          onPress={onOpenCareerPulse}
          style={({ pressed }) => [pressed && styles.pressed]}
        >
          <Card tone="accent" style={styles.heroCard}>
            <View style={styles.heroTopRow}>
              <Tag label={content.heroEyebrow} />
              <Text style={styles.heroCue}>Open briefing</Text>
            </View>

            <View style={styles.heroCopy}>
              <Text style={styles.heroTitle}>{content.pulse.label}</Text>
              <Text style={styles.heroBody}>{content.pulse.summary}</Text>
            </View>

            <View style={styles.heroCallout}>
              <Text style={styles.heroCalloutLabel}>Why this deserves attention</Text>
              <Text style={styles.heroCalloutText}>{content.pulse.focus}</Text>
            </View>
          </Card>
        </Pressable>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionEyebrow}>Continue</Text>
        <Text style={styles.sectionTitle}>Two calm places to keep going</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={onOpenStrengthMap}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <Card style={styles.strengthCard}>
          <View style={styles.cardTopRow}>
            <View style={styles.cardHeading}>
              <Text style={styles.cardEyebrow}>Strength Map</Text>
              <Text style={styles.primaryCardTitle}>
                {content.strengthMapTeaser.title}
              </Text>
            </View>
            <Text style={styles.cardCue}>View map</Text>
          </View>

          <Text style={styles.cardBody}>{content.strengthMapTeaser.summary}</Text>

          <View style={styles.assetBand}>
            {content.strengthMapTeaser.assets.slice(0, 3).map((asset) => (
              <View key={asset} style={styles.assetPill}>
                <Text style={styles.assetText}>{asset}</Text>
              </View>
            ))}
          </View>

          <View style={styles.cardFooterRow}>
            <Text style={styles.footerLabel}>Adjacent path</Text>
            <Text style={styles.footerValue}>
              {content.strengthMapTeaser.adjacentHint}
            </Text>
          </View>
        </Card>
      </Pressable>

      <View style={styles.lowerGrid}>
        <Pressable
          accessibilityRole="button"
          onPress={onOpenAssessmentReadiness}
          style={({ pressed }) => [styles.gridItem, pressed && styles.pressed]}
        >
          <Card style={styles.compactCard}>
            <View style={styles.cardHeading}>
              <Text style={styles.cardEyebrow}>Assessment</Text>
              <Text style={styles.compactTitle}>
                {content.assessmentTeaser.title}
              </Text>
            </View>

            <Text style={styles.compactBody}>
              {content.assessmentTeaser.summary}
            </Text>

            <View style={styles.meterWrap}>
              <ReadinessMeter label="Current coverage" value={readinessValue} />
            </View>

            <Text style={styles.subtleMeta}>
              Next focus: {content.assessmentTeaser.nextFocus}
            </Text>
          </Card>
        </Pressable>

        <Card tone="muted" style={styles.compactCard}>
          <View style={styles.cardHeading}>
            <Text style={styles.cardEyebrow}>{content.weeklyFocus.title}</Text>
            <Text style={styles.compactTitle}>A small move for this week</Text>
          </View>

          <Text style={styles.compactBody}>{content.weeklyFocus.body}</Text>
        </Card>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xl,
    paddingBottom: 168,
  },
  topSection: {
    gap: spacing.lg,
  },
  profileStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  profileMeta: {
    flex: 1,
    gap: spacing.xxs,
  },
  profileDivider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.divider,
  },
  profileLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 11,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  profileValue: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 15,
    lineHeight: 21,
  },
  heroCard: {
    gap: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
  },
  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.md,
  },
  heroCue: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 13,
  },
  heroCopy: {
    gap: spacing.sm,
  },
  heroTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.title.fontSize,
    lineHeight: typeScale.title.lineHeight,
  },
  heroBody: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  heroCallout: {
    gap: spacing.xs,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  heroCalloutLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 11,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  heroCalloutText: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  sectionHeader: {
    gap: spacing.xs,
    paddingTop: spacing.xs,
  },
  sectionEyebrow: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 11,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 20,
    lineHeight: 26,
  },
  strengthCard: {
    gap: spacing.md,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  cardHeading: {
    flex: 1,
    gap: spacing.xs,
  },
  cardEyebrow: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 11,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  primaryCardTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.cardTitle.fontSize,
    lineHeight: typeScale.cardTitle.lineHeight,
  },
  cardCue: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 13,
  },
  cardBody: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  assetBand: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  assetPill: {
    borderRadius: 999,
    backgroundColor: colors.backgroundSoft,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
  },
  assetText: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 12,
  },
  cardFooterRow: {
    gap: spacing.xxs,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  footerLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 11,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  footerValue: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  lowerGrid: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: spacing.md,
  },
  gridItem: {
    flex: 1,
  },
  compactCard: {
    flex: 1,
    gap: spacing.md,
    minHeight: 252,
  },
  compactTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 18,
    lineHeight: 23,
  },
  compactBody: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  meterWrap: {
    gap: spacing.sm,
  },
  subtleMeta: {
    marginTop: 'auto',
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 13,
  },
  pressed: {
    opacity: 0.95,
  },
});
