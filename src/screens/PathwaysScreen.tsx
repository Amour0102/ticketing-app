import { StyleSheet, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { InsightCard } from '../components/InsightCard';
import { ListRow } from '../components/ListRow';
import { ScreenShell } from '../components/ScreenShell';
import { SectionBlock } from '../components/SectionBlock';
import { productCopy } from '../content/productCopy';
import { spacing } from '../theme';
import type { CareerPulseDetail, PathwaysContent, StrengthMapContent } from '../types/onboarding';

type PathwaysScreenProps = {
  content: PathwaysContent;
  careerPulse: CareerPulseDetail;
  strengthMap: StrengthMapContent;
  onOpenCareerPulse: () => void;
  onOpenStrengthMap: () => void;
};

export function PathwaysScreen({
  content,
  careerPulse,
  strengthMap,
  onOpenCareerPulse,
  onOpenStrengthMap,
}: PathwaysScreenProps) {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        eyebrow="Pathways"
        title={content.headline}
        subtitle={content.summary}
      />

      <InsightCard
        eyebrow="Career Pulse"
        title={careerPulse.title}
        body={careerPulse.summary}
        actionLabel={productCopy.pathways.primaryAction}
        onPress={onOpenCareerPulse}
        tone="accent"
      />

      <InsightCard
        eyebrow="Strength Map"
        title={strengthMap.assets[0]?.name ?? 'Strength Map'}
        body={strengthMap.summary}
        actionLabel="Open strength map"
        onPress={onOpenStrengthMap}
      />

      <SectionBlock
        title="Adjacent directions"
        body="These are practical directions where your current experience already carries weight."
      >
        <View style={styles.list}>
          {content.pathways.map((pathway) => (
            <ListRow
              key={pathway.id}
              title={pathway.title}
              body={pathway.description}
              meta={`${pathway.direction} • ${pathway.relevance}`}
            />
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
  list: {
    gap: spacing.sm,
  },
});
