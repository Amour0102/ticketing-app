import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { Card } from '../components/Card';
import { InsightCard } from '../components/InsightCard';
import { ReadinessMeter } from '../components/ReadinessMeter';
import { ScreenShell } from '../components/ScreenShell';
import { SectionBlock } from '../components/SectionBlock';
import { productCopy } from '../content/productCopy';
import { colors, spacing, typography } from '../theme';
import type { ProgressContent } from '../types/onboarding';

type ProgressScreenProps = {
  content: ProgressContent;
  onOpenAssessmentReadiness: () => void;
};

export function ProgressScreen({
  content,
  onOpenAssessmentReadiness,
}: ProgressScreenProps) {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        eyebrow="Progress"
        title={content.headline}
        subtitle={content.summary}
      />

      <InsightCard
        eyebrow="Readiness"
        title="Small progress matters"
        body="This view tracks what is already in motion and what deserves the next small step."
        actionLabel={productCopy.progress.primaryAction}
        onPress={onOpenAssessmentReadiness}
        tone="accent"
      />

      <SectionBlock title="Current milestones">
        <View style={styles.stack}>
          {content.milestones.map((milestone) => (
            <Card key={milestone.id} tone={milestone.status === 'current' ? 'muted' : 'default'}>
              <Text style={styles.rowTitle}>{milestone.title}</Text>
              <Text style={styles.rowBody}>{milestone.note}</Text>
              <Text style={styles.rowMeta}>
                {milestone.status === 'done'
                  ? 'Completed'
                  : milestone.status === 'current'
                    ? 'In motion'
                    : 'Up next'}
              </Text>
            </Card>
          ))}
        </View>
      </SectionBlock>

      <SectionBlock title="Readiness preview">
        <View style={styles.stack}>
          {content.readinessPreview.map((item) => (
            <ReadinessMeter key={item.label} label={item.label} value={item.value} />
          ))}
        </View>
      </SectionBlock>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xl,
    paddingBottom: 164,
  },
  stack: {
    gap: spacing.sm,
  },
  rowTitle: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 16,
    marginBottom: spacing.xs,
  },
  rowBody: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  rowMeta: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 13,
  },
});
