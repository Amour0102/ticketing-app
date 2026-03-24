import { StyleSheet, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { InsightCard } from '../components/InsightCard';
import { ListRow } from '../components/ListRow';
import { ScreenShell } from '../components/ScreenShell';
import { SectionBlock } from '../components/SectionBlock';
import { spacing } from '../theme';
import type { CircleContent } from '../types/onboarding';

type CircleScreenProps = {
  content: CircleContent;
};

export function CircleScreen({ content }: CircleScreenProps) {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        eyebrow="Circle"
        title={content.headline}
        subtitle={content.summary}
      />

      <InsightCard
        eyebrow="Quiet prompt"
        title={content.quietPrompt.title}
        body={content.quietPrompt.body}
        tone="muted"
      />

      <SectionBlock
        title="Trusted circles"
        body="Small, credible professional rooms rather than loud public networking."
      >
        <View style={styles.list}>
          {content.groups.map((group) => (
            <ListRow
              key={group.id}
              title={group.title}
              body={group.description}
              meta={group.rhythm}
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
