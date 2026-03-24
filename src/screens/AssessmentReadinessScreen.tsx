import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { BottomActionBar } from '../components/BottomActionBar';
import { Card } from '../components/Card';
import { ReadinessMeter } from '../components/ReadinessMeter';
import { ScreenShell } from '../components/ScreenShell';
import { SectionBlock } from '../components/SectionBlock';
import { SecondaryTextButton } from '../components/SecondaryTextButton';
import { Tag } from '../components/Tag';
import { productCopy } from '../content/productCopy';
import { colors, spacing, typography, typeScale } from '../theme';
import type { AssessmentReadinessContent } from '../types/onboarding';

type AssessmentReadinessScreenProps = {
  content: AssessmentReadinessContent;
  onBack: () => void;
};

export function AssessmentReadinessScreen({
  content,
  onBack,
}: AssessmentReadinessScreenProps) {
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

      <Card tone="accent" style={styles.reassuranceCard}>
        <Tag label="Keep in mind" />
        <Text style={styles.reassuranceText}>{content.reassurance}</Text>
      </Card>

      <SectionBlock
        title="Readiness across six areas"
        body="This is a practical read on what is already covered and what needs the next small step."
      >
        <View style={styles.meterList}>
          {content.areas.map((area) => (
            <ReadinessMeter key={area.id} label={area.label} value={area.value} />
          ))}
        </View>
      </SectionBlock>

      <SectionBlock title="Where you already have ground">
        <View style={styles.areaList}>
          {content.areas.map((area) => (
            <Card key={area.id} style={styles.areaCard}>
              <View style={styles.areaHeader}>
                <View style={styles.areaHeadingCopy}>
                  <Text style={styles.areaTitle}>{area.label}</Text>
                  <Text style={styles.areaStatus}>
                    {area.status === 'steady' ? 'Already covered' : 'Growing area'}
                  </Text>
                </View>
                <Tag label={`${area.value}%`} />
              </View>

              <View style={styles.copyBlock}>
                <Text style={styles.label}>What is already covered</Text>
                <Text style={styles.paragraph}>{area.covered}</Text>
              </View>

              <View style={styles.copyBlock}>
                <Text style={styles.label}>What remains</Text>
                <Text style={styles.paragraph}>{area.remains}</Text>
              </View>

              <View style={styles.copyBlock}>
                <Text style={styles.label}>Why this matters in your role</Text>
                <Text style={styles.paragraph}>{area.explanation}</Text>
              </View>

              <Card tone="muted" style={styles.nextStepCard}>
                <Text style={styles.label}>Small next step</Text>
                <Text style={styles.paragraph}>{area.nextStep}</Text>
              </Card>
            </Card>
          ))}
        </View>
      </SectionBlock>

      <BottomActionBar label={productCopy.detail.returnHome} onPress={onBack} />
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
  reassuranceCard: {
    gap: spacing.md,
  },
  reassuranceText: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: typeScale.body.fontSize,
    lineHeight: typeScale.body.lineHeight,
  },
  meterList: {
    gap: spacing.md,
  },
  areaList: {
    gap: spacing.md,
  },
  areaCard: {
    gap: spacing.lg,
  },
  areaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  areaHeadingCopy: {
    flex: 1,
    gap: spacing.xs,
  },
  areaTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.cardTitle.fontSize,
    lineHeight: typeScale.cardTitle.lineHeight,
  },
  areaStatus: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 14,
  },
  copyBlock: {
    gap: spacing.xs,
  },
  label: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 14,
  },
  paragraph: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  nextStepCard: {
    gap: spacing.xs,
    padding: spacing.md,
  },
});
