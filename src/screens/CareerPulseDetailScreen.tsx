import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { BottomActionBar } from '../components/BottomActionBar';
import { Card } from '../components/Card';
import { ScreenShell } from '../components/ScreenShell';
import { SectionBlock } from '../components/SectionBlock';
import { SecondaryTextButton } from '../components/SecondaryTextButton';
import { Tag } from '../components/Tag';
import { productCopy } from '../content/productCopy';
import { colors, spacing, typography, typeScale } from '../theme';
import type { CareerPulseDetail } from '../types/onboarding';

type CareerPulseDetailScreenProps = {
  content: CareerPulseDetail;
  onBack: () => void;
};

export function CareerPulseDetailScreen({
  content,
  onBack,
}: CareerPulseDetailScreenProps) {
  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.topBlock}>
        <SecondaryTextButton label={productCopy.detail.back} onPress={onBack} />
        <AppHeader
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.summary}
        />
      </View>

      <SectionBlock title="What is changing">
        <View style={styles.copyStack}>
          {content.sectorShift.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
      </SectionBlock>

      <SectionBlock title="What it means for your role">
        <View style={styles.copyStack}>
          {content.roleMeaning.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
      </SectionBlock>

      <Card tone="muted" style={styles.calloutCard}>
        <Tag label="What this means for you" />
        <View style={styles.bulletList}>
          {content.whatThisMeans.map((item) => (
            <View key={item} style={styles.bulletRow}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card style={styles.nextStepCard}>
        <Text style={styles.nextStepEyebrow}>Next step</Text>
        <Text style={styles.nextStepTitle}>{content.nextStep.title}</Text>
        <Text style={styles.paragraph}>{content.nextStep.body}</Text>
      </Card>

      <BottomActionBar label={content.nextStep.actionLabel} onPress={onBack} />
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xxl,
    paddingBottom: 120,
  },
  topBlock: {
    gap: spacing.sm,
  },
  copyStack: {
    gap: spacing.md,
  },
  paragraph: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: typeScale.body.fontSize,
    lineHeight: typeScale.body.lineHeight,
  },
  calloutCard: {
    gap: spacing.md,
  },
  bulletList: {
    gap: spacing.md,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  bullet: {
    width: 8,
    height: 8,
    marginTop: 8,
    borderRadius: 999,
    backgroundColor: colors.accent,
  },
  bulletText: {
    flex: 1,
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  nextStepCard: {
    gap: spacing.xs,
  },
  nextStepEyebrow: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  nextStepTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.cardTitle.fontSize,
    lineHeight: typeScale.cardTitle.lineHeight,
  },
});
