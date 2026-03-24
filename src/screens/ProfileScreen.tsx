import { StyleSheet, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { ListRow } from '../components/ListRow';
import { ScreenShell } from '../components/ScreenShell';
import { SectionBlock } from '../components/SectionBlock';
import { BottomActionBar } from '../components/BottomActionBar';
import { productCopy } from '../content/productCopy';
import { spacing } from '../theme';
import type { ProfileContent } from '../types/onboarding';

type ProfileScreenProps = {
  content: ProfileContent;
  onRefineProfile: () => void;
};

export function ProfileScreen({
  content,
  onRefineProfile,
}: ProfileScreenProps) {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        eyebrow="Profile"
        title={content.headline}
        subtitle={content.summary}
      />

      <SectionBlock title="Current profile">
        <View style={styles.stack}>
          {content.profileRows.map((row) => (
            <ListRow key={row.id} title={row.label} body={row.value} />
          ))}
        </View>
      </SectionBlock>

      <SectionBlock title="Preferences">
        <View style={styles.stack}>
          {content.preferences.map((row) => (
            <ListRow key={row.id} title={row.label} body={row.value} />
          ))}
        </View>
      </SectionBlock>

      <View style={styles.spacer} />

      <BottomActionBar
        label={productCopy.profile.primaryAction}
        onPress={onRefineProfile}
      />
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
  spacer: {
    flex: 1,
    minHeight: spacing.xl,
  },
});
